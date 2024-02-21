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
    return {
        getBoard
    };
}

function Cell() {
    let value = 0;

    const getValue = () => value;

    const setX = () => setValue(1);
    const setO = () => setValue(2);
    
    const setValue = (newValue) => {
        if (value == 0) {
            value = newValue;
        } else {
            console.log('Already modified cell.')
        }
    }

    return {
        getValue,
        setX,
        setO,
    };
}