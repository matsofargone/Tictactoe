const player = (name, mark)=> {
    return {name, mark};
}


const gameboard = (function() {
    //array to check status of game
    const board = [" ", " ", " ", " ", " ", " ", " ", " ", " " ];

    const getBoard = (board) => { return board};
    //creating the game board
    const main = document.getElementById('main');


    const gameContainer = document.createElement('div');
    gameContainer.setAttribute('id', 'gameboard-container');
   

    for (let i = 0; i < 9; i++) {
        let index = i;
        // console.log(index);
        const  cell = document.createElement('div');
        cell.classList.add('square');
        gameContainer.appendChild(cell);
        cell.setAttribute('id', index);
        // console.log(cell);
       
        
        cell.addEventListener('click', function(e){
            var logic = gameLogic;
            var currentPlayer = logic.getCurrentPlayer();
            
            
            
            // console.log(currentPlayer);
            // console.log(currentPlayer);
            
            if (board[index] === "X" || board[index] === "O"){
                console.log('taken');
                return;
            }
            // console.log(index);
            // console.log(cell);
            
            board.splice(index, 1, currentPlayer.mark);
            
           

            cell.innerHTML = currentPlayer.mark;
            logic.setCurrentPlayer();
           console.log(logic.getCurrentPlayer());
            
            // console.log(currentPlayer);
            
            
            
            console.log(board);
            // console.log(getBoard(board));

        
        });
        
        // console.log(index);
    };

    main.appendChild(gameContainer);
    // console.log(board);

    return {board,getBoard}



})();

const gameLogic = (function() {
    
    var player1 = player('Player 1', 'X');
    var player2 = player('Player 2', 'O');
    var updateBoard = gameboard.getBoard;
    var board = updateBoard(gameboard.board);
    var currentPlayer = player1;
    console.log(currentPlayer);
  
    // console.log(board);
    const setCurrentPlayer = () => {
    currentPlayer === player1 ? currentPlayer = player2 : currentPlayer =  player1;
    // console.log('function ran');
    // console.log('current player:' + ' ' + currentPlayer.mark);
    }

    const getCurrentPlayer = () => {
        return currentPlayer;
    }
   
  

    

    return { currentPlayer , board, setCurrentPlayer, getCurrentPlayer }

})();




// const displayController = (function(){
//     //code here will handle display elements
//     // var board = gameboard.getBoard(gameboard.board);
//     // var x = 'X';
//     // var o = 'O';
//     // let index = '';
    
    
//     // for (let i = 0; i < board; i++) {
//     //     const cell = document.getElementById(i);
//     //     if (cell === board[i]){
//     //         cell.innerHTML = board[i];
//     //         console.log(cell);
//     //     }
        
//     // }

    

    

   

    

// })();

