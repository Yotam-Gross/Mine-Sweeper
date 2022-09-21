


const MINE = '*'

var gBoard 
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

    gLevel.size = boardSize

    gBoard = createBoard(gLevel.size)
    renderBoard(gBoard)
    console.log(gBoard);
}


function createBoard(boardSize){

    console.log(boardSize);
    const board = []
    for (var i = 0; i < 4; i++) {
        board[i] = []
        for (var j = 0; j < 4; j++) {
            const cell = {
                isShown: false
            }
           
            board[i][j] = cell
        }
    }
    board[4][4].isBooked = true

    console.table(board)
    return board
}

function renderBoard(board){

    var strHTML = ''

    for(var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for(var j = 0; j < board.length; j++){
            const cell = board[i][j]
            
            const className = 'cell cell-' + i + '-' + j
            strHTML += `<td class="${className}">${gBoard[i][j]}</td>`
           
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'
   
    
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
            
        
}

function variblesSetup(){

    
}


function setMinesNegsCount(board){


}



function cellMarked(elCell){


}

function expandShown(board, elCell,i, j){


}

