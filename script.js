"use strict"

window.onload = function () {
    console.log("window loaded");
    initializeGame();
}

let shape = "cross";
let cells = document.querySelectorAll('.cell');
let cell = "cell";

// get all the div cell, iterate over them and show current i, listen to every click
// if the current shape is cross, ? THEN set shape to circle : OTHERWISE set to cross

function initializeGame() {
    //cells will keep track of the values .cell
    let cells = document.querySelectorAll(".cell");
    //giving it a condition, for every cell, all of the cells, iterate and store in let cell and show current position,iteration
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.addEventListener("click", function (e) {
            console.log(e.target);
            let currentTurn = shape === "cross" ? "circle" : "cross";
            this.classList.add(currentTurn);
            console.log(this);

            shape === "cross"
                ? (shape = "circle")
                : (shape = "cross");

            isWinner();
        });
        console.log(cell);

    }
    console.log();
}
// set up restart game button
// set up event listener handleclickCell to line 17

function restartGame() {
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.classList.remove("cross", "circle");
        console.log(cell.classList);
    }

};

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
console.log(wins);


function isWinner() {
    //looping outside, the main 7 arrays
    for (let i = 0; i < wins.length; i++) {
        // console.log(wins[i]);
        console.log(wins[i]);

        //inside loop
        for (let j = 0; j < wins[i].length; j++) {
            // console.log(wins[i][j]);
            //which index we will look at cells array(divs); current value at index cell;
            let cellIndex = wins[i][j];
            // grab that value from cells array;
            let currentCell = cells[cellIndex];
            // console.log(currentCell);
            //get the second class (cell.circle or cross);
            console.log(currentCell.classList[1]);
            // store it in a variable currentCellShape
            let currentCellShape = currentCell.classList[1];
            // find how a win is a winner, using outerloop and innerloop;

        }
    }

}













// let whichCellIndex = wins[i][j];
// let actualCell = cells[whichCellIndex];
// console.log(actualCell);
// let move = actualCell[];
// console.log(move);




//nested for loop to go throguh subarray list; if won return out of function
// alt + up/down moves a line
// crtl + [ or ] indent or outdent line
// crtl + D is multi-selection of elements of example
//  alt + click multi-select cursor
//ctrl +K and crtl + C add a line comment
//iterate through cells to remove values to restart game instead of using document.location, hardcode to cell class to initial state - which is going to "restart" the game