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
            row.appendChild(cell);
        
    }
    gameboardTableElement.appendChild(row);

}
    container.appendChild(gameboardTableElement);
}

    

    return {createGameboard};
 
    
})();

//factories 
var Player = (name, mark) => {
    const player = {'player_name': name,
                    'mark': mark};

    return {name, mark, player};

}


var GameLogic = (function() {

    //code 
    //Control flow to add game logic
    //winning game logic

})();








Gameboard.createGameboard();