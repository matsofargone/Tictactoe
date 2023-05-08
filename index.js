//Module 

var Gameboard = (function() {
    var gameBoard = {'gameboard':[" ", " ", " ", " ", " "," "," ", " ", " "]};
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
            row.appendChild(cell);
        
    }
    gameboardTableElement.appendChild(row);

}
    container.appendChild(gameboardTableElement);
}

    var setMarkerOnGameboard = () => {
        container.addEventListener('click', function(e){
            //convert indexs to integers 
            const row = parseInt(e.target.dataset.row);
            const col = parseInt(e.target.dataset.col);
            //formula to create indexs 0-8
            const index = (row * 3 + col);
            //value set to players mark
            const value = Player.mark;
            //inserting the value into gameboard 
            gameBoard.gameboard.splice(index, 1, value);
            console.log(gameBoard.gameboard);
            console.log(index);

            //TODO: Handle changing square class to players mark
        })
    }

    //TODO: Create resetBoard function to clear the board after game is finished may be created in GameLogic 

    

    return {createGameboard, setMarkerOnGameboard};
 
    
})();

//factories 
var Player = () => {
    const player = {'player_name': 'Player 1',
                    'mark': 'x'};
    

    return {player};

}


var GameLogic = (function() {
    //TODO: Create logic for game 
    //winning case
    //code 
    //Control flow to add game logic
    //winning game logic
    Player.name = 'Player 1';
    Player.mark = 'x';
    Gameboard.createGameboard();
    Gameboard.setMarkerOnGameboard();

})();







