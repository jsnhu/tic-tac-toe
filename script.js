// testing
const a = Cell();
console.log(a.getValue() == null);
a.setValue("x");
console.log(a.getValue() == "x");
a.setValue("o");
console.log(a.getValue() == "x");

const g = Gameboard();
console.log(g.getBoard());
g.makeMove(0,0,"x");
console.log(g.getBoard()[0][0].getValue() == "x");

// functions

function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    const makeMove = (row, column, player) => {
        board[row][column].setValue(player);
    };


    return {
        getBoard,
        makeMove,
    };
}

function Cell() {
    let value = null;

    const getValue = () => value;

    const setValue = (player) => {
        if (value == null) {
            value = player;
        } else {
            console.log('Already modified cell.')
        }
    }

    return {
        getValue,
        setValue,
    };
}