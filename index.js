//Module 

var Gameboard = (function() {
    var gameboard = [" ", " ", " ", " ", " "," "," ", " ", " "];
    //going to handle getting and resetting the game board 
    const container = document.getElementById("gameboard-container");

    //create a table using  loops and assign each row 
    
    var createGameboard = ()=> {
        const gameboardTableElement = document.createElement("table");

        for (let i = 0; i < 3; i++) {
            const row = document.createElement("tr");

    

        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("td");
            cell.classList.add('square');
           
            //create index for the gameboard - will be used later to check win conditions
            cell.dataset.row = i;
            cell.dataset.col = j;
            const index = (i * 3 + j);
            cell.setAttribute('id', index);
            row.appendChild(cell);
            // console.log(cell);
        
    }
    gameboardTableElement.appendChild(row);

}
    container.appendChild(gameboardTableElement);
}

var changeTurn = ()=> {
    if(currentPlayer === player1){
        return player2;
    } else {
        return player1;
    }
   

}


    var setMarkerOnGameboard = (mark, currentPlayer) => {
        container.addEventListener('click', function(e){
            //convert indexs to integers  
            console.log(currentPlayer);
            const row = parseInt(e.target.dataset.row);
            const col = parseInt(e.target.dataset.col);
            //formula to create indexs 0-8
            const index = (row * 3 + col);

            if (gameboard[index] !== " "){
                console.log('Cell marked already');
                return;
            }
            //value set to players mark
            const value = mark;
            //inserting the value into gameboard 
           
            gameboard.splice(index, 1, value);
            // console.log(gameBoard.gameboard);
            console.log(index);
            document.getElementById(index).innerHTML = mark;
            
          
           currentPlayer = changeTurn();
           console.log(currentPlayer);
           p.innerHTML = currentPlayer.name + ' ' + 'turn';
            
        })
    }

   

    //TODO: Handle changing square class to players mark, possibly update td text value???

    //TODO: Create resetBoard function to clear the board after game is finished may be created in GameLogic 
    var resetGameBoard = (gameboard)=> {
        gameBoard.gameboard = [];
    }

    

    return {createGameboard, setMarkerOnGameboard, resetGameBoard};
 
    
})();

//factories 
const Player = (name, mark) => {
    return {name: name, mark: mark};

}




var GameLogic = (function() {
    //TODO: Create logic for game 
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');
    let currentPlayer = player2;

    // var changeTurn = (currentPlayer)=> {
    //     if(currentPlayer === player1){
    //         return player2;
    //     } else {
    //         return player1;
    //     }
       

    // }
  
  

    var p = document.querySelector('#turns');
    p.innerHTML = currentPlayer.name + ' ' + 'turn';
    
   

    Gameboard.createGameboard();

   Gameboard.setMarkerOnGameboard(currentPlayer.mark, currentPlayer);


    



    
    
   
    

    
    

    
   
  
    
   
      //winning case
    
    //Control flow to add game logic
    //winning game logic

    

})();







