const gameboard = (() => {
    var board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    var container = document.getElementById("gameboard-container");

    var createBoard = () =>{
        const boardTableElement = document.createElement("table");

        for (let i = 0; i < 3; i++) {
            const row = document.createElement("tr");
            

            for (let j = 0; j < 3; j++) {
                const cell = document.createElement("td");
                cell.classList.add('square');
                //apply dataset numbers to each column and row 
                //example - first cell - 0 - row 0 column index = 0
                cell.dataset.row = i;
                cell.dataset.col = j;
                const index = (i * 3 + j);
                cell.setAttribute('id', index);
                row.appendChild(cell);
                // console.log(cell);
            }
            boardTableElement.appendChild(row);
        }
        container.appendChild(boardTableElement);
    }

    var getBoard = () => {
        return createBoard();
    }

    var getCellonBoard = (currentPlayer) =>{
        
          
        
        container.addEventListener('click', function(e){
            const row = parseInt(e.target.dataset.row);
            const col = parseInt(e.target.dataset.col);
            //formula to create indexs 0-8
            const index = (row * 3 + col);
            board.splice(index, 1, currentPlayer.mark);
            currentPlayer.setMarker(currentPlayer.mark, index);
            console.log(index);
            console.log(board);
            
            
        })
    }
   
    return {getBoard , getCellonBoard}
})();


const player = (name, mark) =>{
    const setMarker = (mark, index) => {
        //get element 
        var squareToMark = document.getElementById(index);
        console.log(squareToMark);
        squareToMark.innerHTML = mark;
        
    }

   

return {name: name, mark: mark, setMarker:setMarker}
}

 


const displayController = (function() {
    var player1 = player('Player 1', 'X');
    var player2 = player('Player 2', 'O');

    var currentPlayer = player1;

    gameboard.getBoard();
    currentPlayer = (currentPlayer === player1) ? player2 : player1;
    console.log(gameboard.getCellonBoard(currentPlayer));

    
    
})();

