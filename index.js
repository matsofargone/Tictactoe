function Gameboard (){
    const board = [];
   
    var container = document.getElementById("gameboard-container");
    
    var createBoard = () => {

        const gameBoardTableElement = document.createElement('table');
        for (let i = 0; i < 3; i++) {
            const row = document.createElement("tr");
            
            for (let j = 0; j < 3; j++) {
                const cell = document.createElement("td");
                cell.classList.add('square');
                cell.dataset.row = i;
                cell.dataset.col = j;
                
                row.appendChild(cell);
                
            }

            gameBoardTableElement.appendChild(row);
            
        }

            container.appendChild(gameBoardTableElement);
    }

    var setMarker = (mark) => {
        container.addEventListener('click', function(e){
            col = parseInt(e.target.dataset.col);
            row = parseInt(e.target.dataset.row);
            index = row * 3 + col;
            if (board[index] !== board[" "]){
                console.log('marked');
                return;
            }
            board.splice(index, 1, mark);
            
            
            
            
            
            console.log(board);
        })
    }


    //grab fresh board
    const getGameboard = () => createBoard();

        return {getGameboard, setMarker}
    
}

function displayController() {
    //code here
    //handle DOM elements 
    GameLogic();
    
    
    
}

function Player(name,  mark = 'X') {
   
   
    return {name: name, mark: mark}

    
}

// function Player2(name, mark = 'O'){
//     return {name: name, mark: mark}
// }


function GameLogic(){
    //code here
    //BackEnd Logic Try not to use DOM elements or front end things
    var game = Gameboard();
    game.getGameboard();
   var player1 = Player('Player 1');
   var player2 = Player('Player 2', 'O');
   var players = [player1, player2];
   var currentPlayer = players[0];
    
   
   const switchTurns = () => {
    //code here 
    if (currentPlayer === player1){
        return console.log(players[1]);
    } else {
        return console.log(players[0]);
    }

   }

   
   game.setMarker(currentPlayer.mark, currentPlayer);
   
   

   
   


return {switchTurns:switchTurns}
    
   
}


displayController();



