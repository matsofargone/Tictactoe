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
                cell.dataset.row = i;
                cell.dataset.col = j;
                const index = (i * 3 + j);
                cell.setAttribute('id', index);
                
                row.appendChild(cell);
                console.log(cell);
            }
            boardTableElement.appendChild(row);
        }
        container.appendChild(boardTableElement);
    }
   
    return {createBoard}
})();


const player = (name, mark) =>{

return {name: name, mark: mark}
}

const setMarker = (mark) => {
    //code here
} 


const gameLogic = (function() {


    gameboard.createBoard();
})();

