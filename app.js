const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

//game variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;
const symbol = {'x':'×' , 'o':'○'}

//function

const checkGameStatus =() =>{
    const one = cellDivs[0].classList[2];
    const two = cellDivs[1].classList[2];
    const three = cellDivs[2].classList[2];
    const four = cellDivs[3].classList[2];
    const five = cellDivs[4].classList[2];
    const six = cellDivs[5].classList[2];
    const seven = cellDivs[6].classList[2];
    const eight = cellDivs[7].classList[2];
    const nine = cellDivs[8].classList[2];

    //check winner
    if (one && (one === two && one === three)){
        gameIsLive = false;
        winner = one;
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');

    }
    else if (one && (one === four && one === seven)){
        gameIsLive = false;
        winner = one;
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    }
    else if (four && four === five && four === six){
        winner = four;
        gameIsLive = false;
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    }
    else if (seven && seven === eight && seven === nine){
        winner = seven;
        gameIsLive = false;
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if (two && two === five && two === eight){
        winner = two;
        gameIsLive = false
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    }
    else if(three && three === six && three === nine){
        winner = three;
        gameIsLive = false;
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if (five && (five === one && five === nine)){
        winner = five;
        gameIsLive  = false
        cellDivs[4].classList.add('won');
        cellDivs[0].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if(five && (five === three && five === seven)){
        winner = five;
        gameIsLive = false;
        cellDivs[4].classList.add('won');
        cellDivs[2].classList.add('won');
        cellDivs[6].classList.add('won');
    }
    else if (one&&two&&three&&four&&five&&six&&seven&&eight&&nine){
        gameIsLive = false;
        statusDiv.innerHTML = "It's a Tie"
    }
    else{
        
        if (xIsNext){
            statusDiv.innerHTML = symbol['x'] + " is next!"
        }
        else{
            statusDiv.innerHTML = `<span>${symbol['o']} is next </span>`;
        }

    }
    
    if (winner ==='x'){
        statusDiv.innerHTML = symbol[winner] + " has won!";
    }
    else if (winner === 'o'){
        statusDiv.innerHTML = `<span>${symbol['o']} has won </span>`;
    }
    
};

//event handlers
const handleReset = (e) =>{
    gameIsLive = true;
    xIsNext = true;
    winner = null;
    statusDiv.innerHTML = symbol['x'] + " is next!";
    for (const cellDiv of cellDivs){
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
};

const handleCellClick = (e) =>{
    // console.log(e.target.classList);
    const clasList = e.target.classList;
    // console.log(clasList.length);
    // const location = clasList[1];
    console.log(xIsNext,clasList.length)
    if (xIsNext && clasList.length == 2 && gameIsLive){
        clasList.add('x');
        xIsNext = !xIsNext;
    }
    else if (!xIsNext && clasList.length == 2 && gameIsLive){
        clasList.add('o');
        xIsNext = !xIsNext;
    }
    checkGameStatus();
};

//event listners

resetDiv.addEventListener('click',handleReset);

for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click',handleCellClick);
}
