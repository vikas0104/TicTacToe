const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

//game variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;
let numPlayer = null;
const symbol = {'x':'×' , 'o':'○'}
const wordToNum = {'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9};

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
    on();
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

function isGoodplace(num){

    
    const one_ = cellDivs[0].classList[2];
    const two_ = cellDivs[1].classList[2];
    const three_ = cellDivs[2].classList[2];
    const four_ = cellDivs[3].classList[2];
    const five_ = cellDivs[4].classList[2];
    const six_ = cellDivs[5].classList[2];
    const seven_ = cellDivs[6].classList[2];
    const eight_ = cellDivs[7].classList[2];
    const nine_ = cellDivs[8].classList[2];
    
    if (num === 'one'){
        if ((two_ && two_ === three_ )|| (four_ && four_ === seven_) || (five_ && five_ === nine_)){
            return true;
        }
    }
    else if( num === 'two'){
        if (one_ && (one_ === three_ )||five_ && (five_ === eight_)){
            return true;
        }
    }
    else if (num === 'three'){
        if (one_ && (one_ === two_) || five_ && ( five_ === seven_ )|| six_ && (six_ === nine_)){
            return true;
        }
    }
    else if (num === 'four'){
        if (one_ && (one_ === seven_) ||five_ && (five_ === six_)){
            return true;
        }
    }
    else if (num === 'five'){
        if (two_ && (two_ === eight_) || four_ && (four_ === six_) || one_ &&(one_ === nine_) || seven_ && (seven_ === three_)){
            return true;
        }
    }
    else if (num === 'six'){
        if (three_ &&(three_ === nine_) || four_ &&(four_ === five_)){
            return true;
        }
    }
    else if (num === 'seven'){
        if (one_ && (one_ === four_) || eight_ &&(eight_ === nine_) || five_ &&(five_ === three_)){
            return true;
        }
    }
    else if (num === 'eight'){
        if (seven_ && (seven_ === nine_) ||two_ && (two_ === five_)){
            return true;
        }
    }
    else if (num === 'nine'){
        if ( seven_ &&(seven_ === eight_) || three_ &&(three_ === nine_)){
            return true;
        }
    }
    return false;
}

function isGoodComputer(num){
    const one_ = cellDivs[0].classList[2];
    const two_ = cellDivs[1].classList[2];
    const three_ = cellDivs[2].classList[2];
    const four_ = cellDivs[3].classList[2];
    const five_ = cellDivs[4].classList[2];
    const six_ = cellDivs[5].classList[2];
    const seven_ = cellDivs[6].classList[2];
    const eight_ = cellDivs[7].classList[2];
    const nine_ = cellDivs[8].classList[2];
    
    if (num === 'one'){
        if ((two_ === 'o' && two_ === three_ )|| (four_ === 'o' && four_ === seven_) || (five_ === 'o' && five_ === nine_)){
            return true;
        }
    }
    else if( num === 'two'){
        if (one_ === 'o' && (one_ === three_ )||five_ === 'o' && (five_ === eight_)){
            return true;
        }
    }
    else if (num === 'three'){
        if (one_ === 'o' && (one_ === two_) || five_ === 'o' && ( five_ === seven_ )|| six_ === 'o' && (six_ === nine_)){
            return true;
        }
    }
    else if (num === 'four'){
        if (one_ === 'o' && (one_ === seven_) ||five_ === 'o' && (five_ === six_)){
            return true;
        }
    }
    else if (num === 'five'){
        if (two_ === 'o' && (two_ === eight_) || four_ === 'o' && (four_ === six_) || one_ === 'o' &&(one_ === nine_) || seven_ === 'o' && (seven_ === three_)){
            return true;
        }
    }
    else if (num === 'six'){
        if (three_ === 'o' &&(three_ === nine_) || four_ === 'o' &&(four_ === five_)){
            return true;
        }
    }
    else if (num === 'seven'){
        if (one_ === 'o' && (one_ === four_) || eight_ === 'o' &&(eight_ === nine_) || five_ === 'o' &&(five_ === three_)){
            return true;
        }
    }
    else if (num === 'eight'){
        if (seven_ === 'o' && (seven_ === nine_) ||two_ === 'o' && (two_ === five_)){
            return true;
        }
    }
    else if (num === 'nine'){
        if ( seven_ === 'o' &&(seven_ === eight_) || three_ === 'o' &&(three_ === nine_)){
            return true;
        }
    }
    return false;
}

function computerAI(arr){
    // place = [];
    for (var i=0;i<arr.length;i++){
        if (isGoodComputer(arr[i].classList[1])){
            return i;
        }
    }
    for (var i=0;i<arr.length;i++){
        if (isGoodplace(arr[i].classList[1])){
            return i;
        }
    }
    // let flag = false;
    
    console.log("sending random");
    return Math.floor(Math.random()*arr.length)
}

// computerJi
function computerJi(){
    let arr = [];
    for(const cellDiv of cellDivs){
        // console.log(cellDiv.classList.length)
        if (cellDiv.classList.length == 2){
            arr.push(cellDiv);
        }
    }
    let n = arr.length;
    if (n > 0){
    console.log(arr);
    let choice = computerAI(arr);// Math.floor(Math.random()*n);
    console.log(choice);

    arr[choice].classList.add('o');
    xIsNext = !xIsNext;
    // checkGameStatus();
    }
}

const handleCellClick = (e) =>{
    // console.log(e.target.classList);
    const clasList = e.target.classList;
    // console.log(clasList.length);
    // const location = clasList[1];
    // console.log(xIsNext,clasList.length)
    

    if (xIsNext && clasList.length == 2 && gameIsLive){
        clasList.add('x');
        xIsNext = !xIsNext;
    }
    else if (!xIsNext && clasList.length == 2 && gameIsLive){
        clasList.add('o');
        xIsNext = !xIsNext;
    }
    checkGameStatus();
    if (numPlayer === 'oneP' && !xIsNext && gameIsLive){
        console.log("computer ki vari hai");
        computerJi();
    }
    checkGameStatus();
};

//event listners

resetDiv.addEventListener('click',handleReset);

for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click',handleCellClick);
}

//asdasdnasjdjasdkas
function on() {
    document.getElementById("overlay").style.display = "flex";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

const handlePlayer = (e) =>{
    off();
    numPlayer = e.target.classList[0];
    if (numPlayer === 'oneP'){
        console.log("bade heavy driver ho vai");
        console.log(xIsNext);
    }
}


const oneP = document.querySelector(".oneP");
const twoP = document.querySelector(".twoP");
oneP.addEventListener('click', handlePlayer);
twoP.addEventListener('click',handlePlayer);

