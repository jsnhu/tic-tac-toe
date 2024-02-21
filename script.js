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
console.log(g.printBoard());

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

    const printBoard = () => {
        const stringBoard = [];

        for (let i = 0; i < rows; i++) {
            stringBoard[i] = [];
            for (let j = 0; j < columns; j++) {
                stringBoard[i][j] = board[i][j].getValue();
            }
        }

        console.table(stringBoard);
    }

    const makeMove = (row, column, player) => {
        board[row][column].setValue(player);
    };


    return {
        getBoard,
        printBoard,
        makeMove,
    };
}

function Cell() {
    let value = null;

    const getValue = () => value;

    const setValue = (player) => {
        if (value == null) {
            value = player;
            return true;
        } else {
            return false;
        }
    }

    return {
        getValue,
        setValue,
    };
}