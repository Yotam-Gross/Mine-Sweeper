


const MINE = '*'

var gBoard 
var gSecondsTimer = 0
var gminutesCounter = 0
var goodClickCounter = 0
var gTimerInterval


var gLevel = {
    size: null,
    minez: null,
}

var gGame = {
    isOn: false,
    showCount: 0,
    markedCount: 0,
    secsPassed: 0,
}

function initGame(boardSize){

    clearGame()

    goodClickCounter = 0
    gSecondsTimer = 0
    gminutesCounter = 0

    var elCounter = document.querySelector('.seconds-counter')
    elCounter.innerText = gminutesCounter + ':' + gSecondsTimer

    gLevel.size = boardSize

    gBoard = createBoard(gLevel.size)
    setMinesNegsCount(gBoard)
    renderBoard(gBoard)
}

function clearGame(){

    goodClickCounter = 0
    gSecondsTimer = 0
    gminutesCounter = 0

    var elCounter = document.querySelector('.seconds-counter')
    elCounter.innerText = gminutesCounter + ':' + gSecondsTimer

}

function createCell(i, j){
    
    return {
        isShown: false,
        isMarked: false,
        isMine: false,
        minesNegsCount: 0,
        i: i,
        j: j,
    }

}


function createBoard(boardSize){

    const board = []
    for (var i = 0; i < 4; i++) {
        board[i] = []
        for (var j = 0; j < boardSize; j++) {
            board[i][j] = createCell(i, j)
        }
    }
    board[1][2].isMine = true
    board[2][3].isMine = true

    console.table(board)
    return board
}

function WhichButton(event){

    var mouseButtonClicked = event.WhichButton
    return mouseButtonClicked
}

function renderBoard(board){

    var strHTML = ''

    for(var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for(var j = 0; j < board.length; j++){
            const cell = board[i][j]

            const className = 'cell cell-' + i + '-' + j
            strHTML += `<td class="${className}" oncontextmenu =
                        "onRightClick(this,event,${i},${j})"
                         onclick = "onLeftClick(this,event,${i},${j})">
                         ${''}</td>`
           
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'
    
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
                   
}

function setMinesNegsCount(board){

    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[i].length; j++){

            board[i][j].minesNegsCount = checkMinesNegsCount(board, i, j)
        }
    }

    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[i].length; j++){

            if (board[i][j].isMine) {
                board[i][j].minesNegsCount = '*'
            }
        }
    } 
    
}

function checkMinesNegsCount(board, rowIdx, colIdx){

    var minesAroundCount = 0

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= board[0].length) continue
            if (i === rowIdx && j === colIdx) continue

            var currCell = board[i][j]
            if (currCell.isMine) minesAroundCount++
        }
    }
    
    return minesAroundCount

}

function onRightClick(elCell, event, i, j){

    event.preventDefault()
    console.log('right');
}

function onLeftClick(elCell, event, i, j){

    goodClickCounter++

    if(goodClickCounter === 1) timeCount()

    const cell = gBoard[i][j]

    cell.isShown = true

    if(cell.isMine) gameOver()

    elCell.innerText = cell.minesNegsCount
}

function gameOver(){

    console.log('game over');
    clearInterval(gTimerInterval)
}


function cellMarked(elCell){


}

function expandShown(board, elCell,i, j){


}

function timeCount(){
       
    gTimerInterval = setInterval(incrementSeconds, 1000)
    
}

function incrementSeconds() {
    
    var elCounter = document.querySelector('.seconds-counter')
    gSecondsTimer += 1;

    if(gSecondsTimer === 60){
        gminutesCounter++
        gSecondsTimer = 0
    }

    
    elCounter.innerText = gminutesCounter + ':' + gSecondsTimer
}

function restart(){

}