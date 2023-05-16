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
    
    // var playerMoves = [];
    // var cpuMoves = [];

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
            
            // console.log(currentPlayer.name);
          
            
           
            // console.log(currentPlayer);
            // console.log(currentPlayer);
           
            if (board[index] === "X" || board[index] === "O"){
                console.log('taken');
                return;
            }

           
        
            // console.log(index);
            // console.log(cell);
            
            
            board.splice(index, 1, currentPlayer.mark);
            logic.checkWinner();

           
          
           

            cell.innerHTML = currentPlayer.mark;
            
            logic.setCurrentPlayer();
            logic.getCurrentPlayer();
            logic.drawHandler();
           
    
            
            
           
            
            
            // console.log(board);
            // console.log(getBoard(board));

        
        });
        
        // console.log(index);
    };

    main.appendChild(gameContainer);

    const disableBoard = () => {
        gameContainer.style.pointerEvents = 'none';
    }

    return {board,getBoard, disableBoard}



})();

const gameLogic = (function() {
    //* Function variables 
    

    var player1 = player('Player 1', 'X');
    var player2 = player('Player 2', 'O');
    var updateBoard = gameboard.getBoard;
    var board = updateBoard(gameboard.board);
    var currentPlayer = player1;
    var rounds = 9;
    
    
   
   //*Getting and setting the current Player
    const setCurrentPlayer = () => {
    currentPlayer === player1 ? currentPlayer = player2 : currentPlayer =  player1;
    // console.log('function ran');
    // console.log('current player:' + ' ' + currentPlayer.mark);
    displayTurn();
     
    }

    const getCurrentPlayer = () => {
        
        return currentPlayer;
    }

    
    //*Creating div for player turns and calling the function so the player turn is displayed 
    const turnsDiv = document.getElementById("turns");
    var playerMessage = document.createElement('p');
    turnsDiv.appendChild(playerMessage);
    
    const displayTurn = () => {
        return playerMessage.textContent = currentPlayer.name + ' ' + 'turn';  
     }

     const displayWinner = () => {
        
        return playerMessage.textContent = currentPlayer.name + ' ' + 'is the Winner!';
        
     }

     const displayTie = () => {
        
        return playerMessage.textContent = 'Draw!';
        
     }

     
// Display turn on load 

    displayTurn();
    
//* Check winning conditions 
    const winningConditions = [[0,1,2],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[0,4,8],[2,4,6],[6,7,8]];

    const checkWinner = () => {
        //code here
        
        
        winningConditions.forEach((item) =>{
            
            // console.log(item);
        

            if(board[item[0]] === currentPlayer.mark & board[item[1]] === currentPlayer.mark && board[item[2]] === currentPlayer.mark){
            //    console.log(board[item[0]], board[item[1]], board[item[2]]);
               if (item.length === 3){
                // console.log('winner');
                // console.log(item);
                playerMessage = displayWinner();
                gameboard.disableBoard();
                for (let i = 0; i < item.length; i++) {
                    var highlightSquare = document.getElementById(item[i]);
                    if (currentPlayer.mark === 'X') {
                        highlightSquare.style.backgroundColor = 'green';
                    } else {
                        highlightSquare.style.backgroundColor = 'red';
                    }
                    
                }
               } 
                
            } 

           
         });

         

        
         

         
        //After every turn I should check the gameboard array with the winning conditions and if it matches return the winner 
        // also update player message to display winner 
      

    }

    const drawHandler = () => {
        rounds --;
        // console.log(rounds);
        if (rounds === 0){
            displayTie();
            gameboard.disableBoard();
        }
     } 

     
    
    

    

    return { currentPlayer , setCurrentPlayer, getCurrentPlayer, displayTurn, checkWinner, displayWinner, displayTie, drawHandler }

})();








    


    

    

   

    



