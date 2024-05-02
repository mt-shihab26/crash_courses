import "./style.css";

let origBoard: any = [];

const humenPlayer = "O";
const aiPlayer = "X";

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const gameOver = (gameWon: any) => {
    for (let index of winningCombinations[gameWon.index]) {
        const index2: any = index;
        (document.getElementById(index2) as HTMLDivElement).style.backgroundColor =
            gameWon.player == humenPlayer ? "blue" : "red";
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener("click", turnClick, false);
    }
    declareWinner(gameWon.player == humenPlayer ? "You win!" : "You lose.");
};

const checkWon = (board: any, player: string) => {
    let plays = board.reduce((a: any, e: any, i: any) => (e === player ? a.concat(i) : a), []);
    let gameWon = null;
    for (let [index, win] of winningCombinations.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = { index: index, player: player };
            break;
        }
    }
    return gameWon;
};

const turn = (id: string, player: string) => {
    origBoard[id] = player;
    (document.getElementById(id) as HTMLDivElement).innerText = player;

    const gameWon = checkWon(origBoard, player);
    if (gameWon) {
        gameOver(gameWon);
    }
};

const emptySquares = () => {
    return origBoard.filter((s: any) => typeof s == "number");
};

const declareWinner = (who: string) => {
    (document.querySelector(".endgame") as HTMLDivElement).style.display = "block";
    (document.querySelector(".endgame .text") as HTMLDivElement).innerText = who;
};

function checkTie() {
    if (emptySquares().length == 0) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "green";
            cells[i].removeEventListener("click", turnClick, false);
        }
        declareWinner("Tie Game!");
        return true;
    }
    return false;
}

// const bestSpot = () => {
//     return emptySquares()[0];
// };

const minimax = (board: any, aiPlayer: string) => {};

const bestSpot = () => {
    return minimax(origBoard, aiPlayer).index;
};

const turnClick = (square: any) => {
    if (typeof origBoard[square.target.id] == "number") {
        turn(square.target.id, humenPlayer);
        if (!checkTie()) {
            turn(bestSpot(), aiPlayer);
        }
    }
};

const cells = document.querySelectorAll<HTMLDivElement>(".cell");

const startGame = () => {
    (document.querySelector(".endgame") as HTMLDivElement).style.display = "none";
    origBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
        cells[i].style.removeProperty("background-color");
        cells[i].addEventListener("click", turnClick, false);
    }
};

(document.querySelector("#replay") as HTMLButtonElement).onclick = startGame;
startGame();
