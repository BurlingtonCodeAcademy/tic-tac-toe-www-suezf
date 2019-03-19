
let start = document.getElementById('start');
let playAgain = document.getElementById('playAgain');
let status = document.getElementById('status');
let cell0 = document.getElementById('cell-0');
let cell1 = document.getElementById('cell-1');
let cell2 = document.getElementById('cell-2');
let cell3 = document.getElementById('cell-3');
let cell4 = document.getElementById('cell-4');
let cell5 = document.getElementById('cell-5');
let cell6 = document.getElementById('cell-6');
let cell7 = document.getElementById('cell-7');
let cell8 = document.getElementById('cell-8');
let row1 = document.getElementById('row-1');
let row2 = document.getElementById('row-2');
let row3 = document.getElementById('row-3');
row1.hidden = true;
row2.hidden = true;
row3.hidden = true;
playAgain.hidden = true;
playAgain.disabled = true;
// let playerX = document.getElementById('playerX');
// let playerO = document.getElementById('playerO');
// let nameX = document.getElementById('nameX');
// let nameO = document.getElementById('nameO');

let curPlayer = 'X';

// functions

// function playerNames() {
//     playerX = firstPlayer;
//     pl.innerHTML = 'What is the name for X player?';
//     return status;
// }


function startGame() {
    start.disabled = true;
    start.hidden = true;
    row1.hidden = false;
    row2.hidden = false;
    row3.hidden = false;
    console.log('this is the start of the game');
    cell0.disabled = false;
    status.innerHTML = "Player " + curPlayer + "'s turn";
    return status;
};

function startAgain() {
    location.reload();
    start.disabled = false;
    start.hidden = false;
    playAgain.disabled = false;
    playAgain.hidden = false;
    return startGame();
}

function currentPlayer() {
    status.innerHTML = "Player " + curPlayer + "'s turn";
    return status;
};

function curPlay0() {
    console.log('This is the current player ' + curPlayer)
    if (curPlayer === 'X') {
        cell0.innerHTML = 'X';
        let html = cell0.innerHTML;
        console.log('This is what is in cell 0 ' + html);
        curPlayer = 'O';
        cell0.removeEventListener('click', curPlay0, true);
        return whoWon('X')
    } else
        cell0.innerHTML = 'O';
    curPlayer = 'X';
    cell0.removeEventListener('click', curPlay0, true);
    return whoWon('O');
};

function curPlay1() {
    console.log('This is the current player ' + curPlayer)
    if (curPlayer === 'X') {
        cell1.innerHTML = 'X';
        curPlayer = 'O';
        cell1.removeEventListener('click', curPlay1, true);
        return whoWon('X')
    } else
        cell1.innerHTML = 'O';
    curPlayer = 'X';
    cell1.removeEventListener('click', curPlay1, true);
    return whoWon('O');
};
function curPlay2() {
    console.log('This is the current player ' + curPlayer)
    if (curPlayer === 'X') {
        cell2.innerHTML = 'X';
        curPlayer = 'O';
        cell2.removeEventListener('click', curPlay2, true);
        return whoWon('X')
    } else
        cell2.innerHTML = 'O';
    curPlayer = 'X';
    cell2.removeEventListener('click', curPlay2, true);
    return whoWon('O');
};
function curPlay3() {
    console.log('This is the current player ' + curPlayer)
    if (curPlayer === 'X') {
        cell3.innerHTML = 'X';
        curPlayer = 'O';
        cell3.removeEventListener('click', curPlay3, true);
        return whoWon('X')
    } else
        cell3.innerHTML = 'O';
    curPlayer = 'X';
    cell3.removeEventListener('click', curPlay3, true);
    return whoWon('O');
};
function curPlay4() {
    console.log('This is the current player ' + curPlayer)
    if (curPlayer === 'X') {
        cell4.innerHTML = 'X';
        curPlayer = 'O';
        cell4.removeEventListener('click', curPlay4, true);
        return whoWon('X')
    } else
        cell4.innerHTML = 'O';
    curPlayer = 'X';
    cell4.removeEventListener('click', curPlay4, true);
    return whoWon('O');
};
function curPlay5() {
    console.log('This is the current player ' + curPlayer)
    if (curPlayer === 'X') {
        cell5.innerHTML = 'X';
        curPlayer = 'O';
        cell5.removeEventListener('click', curPlay5, true);
        return whoWon('X')
    } else
        cell5.innerHTML = 'O';
    curPlayer = 'X'
    cell5.removeEventListener('click', curPlay5, true);
    return whoWon('O');
};
function curPlay6() {
    console.log('This is the current player ' + curPlayer)
    if (curPlayer === 'X') {
        cell6.innerHTML = 'X';
        curPlayer = 'O';
        cell6.removeEventListener('click', curPlay6, true);
        return whoWon('X')
    } else
        cell6.innerHTML = 'O';
    curPlayer = 'X';
    cell6.removeEventListener('click', curPlay6, true);
    return whoWon('O');
};
function curPlay7() {
    console.log('This is the current player ' + curPlayer)
    if (curPlayer === 'X') {
        cell7.innerHTML = 'X';
        curPlayer = 'O';
        cell7.removeEventListener('click', curPlay7, true);
        return whoWon('X')
    } else
        cell7.innerHTML = 'O';
    curPlayer = 'X';
    cell7.removeEventListener('click', curPlay7, true);
    return whoWon('O');
};
function curPlay8() {
    console.log('This is the current player ' + curPlayer)
    if (curPlayer === 'X') {
        cell8.innerHTML = 'X';
        curPlayer = 'O';
        cell8.removeEventListener('click', curPlay8, true);
        return whoWon('X')
    } else
        cell8.innerHTML = 'O';
    curPlayer = 'X';
    cell8.removeEventListener('click', curPlay8, true);
    return whoWon('O');
};

function whoWon(playerWon) {
    if (
        (playerWon === 'X' &&
            ((cell0.innerHTML === 'X' && cell1.innerHTML === 'X' && cell2.innerHTML === 'X') ||
                (cell3.innerHTML === 'X' && cell4.innerHTML === 'X' && cell5.innerHTML === 'X') ||
                (cell6.innerHTML === 'X' && cell7.innerHTML === 'X' && cell8.innerHTML === 'X') ||
                (cell0.innerHTML === 'X' && cell3.innerHTML === 'X' && cell6.innerHTML === 'X') ||
                (cell1.innerHTML === 'X' && cell4.innerHTML === 'X' && cell7.innerHTML === 'X') ||
                (cell2.innerHTML === 'X' && cell5.innerHTML === 'X' && cell8.innerHTML === 'X') ||
                (cell0.innerHTML === 'X' && cell4.innerHTML === 'X' && cell8.innerHTML === 'X') ||
                (cell2.innerHTML === 'X' && cell4.innerHTML === 'X' && cell6.innerHTML === 'X')))
    ) {
        playAgain.disabled = false;
        playAgain.hidden = false;
        status.innerHTML = 'Congratulations! Player X wins!';
        return status;

    } else if (
        (playerWon === 'O' &&
            ((cell0.innerHTML === 'O' && cell1.innerHTML === 'O' && cell2.innerHTML === 'O') ||
                (cell3.innerHTML === 'O' && cell4.innerHTML === 'O' && cell5.innerHTML === 'O') ||
                (cell6.innerHTML === 'O' && cell7.innerHTML === 'O' && cell8.innerHTML === 'O') ||
                (cell0.innerHTML === 'O' && cell3.innerHTML === 'O' && cell6.innerHTML === 'O') ||
                (cell1.innerHTML === 'O' && cell4.innerHTML === 'O' && cell7.innerHTML === 'O') ||
                (cell2.innerHTML === 'O' && cell5.innerHTML === 'O' && cell8.innerHTML === 'O') ||
                (cell0.innerHTML === 'O' && cell4.innerHTML === 'O' && cell8.innerHTML === 'O') ||
                (cell2.innerHTML === 'O' && cell4.innerHTML === 'O' && cell6.innerHTML === 'O')))
    ) {
        playAgain.disabled = false;
        playAgain.hidden = false;
        status.innerHTML = 'Congratulations! Player O wins!';
        return status;
    } else if (cell0.innerHTML != '' && cell1.innerHTML != '' && cell2.innerHTML != '' && cell3.innerHTML != '' && cell4.innerHTML != '' && cell5.innerHTML != '' && cell6.innerHTML != '' && cell7.innerHTML != '' && cell8.innerHTML != '') {
        playAgain.disabled = false;
        playAgain.hidden = false;
        status.innerHTML = 'The game is a draw!';
        return status;
    } else { setTimeout(currentPlayer, 15); }
};

// Event Listeners
start.addEventListener('click', startGame);
playAgain.addEventListener('click', startAgain);
cell0.addEventListener('click', curPlay0, true);
cell1.addEventListener('click', curPlay1, true);
cell2.addEventListener('click', curPlay2, true);
cell3.addEventListener('click', curPlay3, true);
cell4.addEventListener('click', curPlay4, true);
cell5.addEventListener('click', curPlay5, true);
cell6.addEventListener('click', curPlay6, true);
cell7.addEventListener('click', curPlay7, true);
cell8.addEventListener('click', curPlay8, true);


