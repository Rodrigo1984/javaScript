let gameActive = true;
let currentPlay = "X";
let gameStart = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
const statusDisplay = document.getElementById('status');

const winningMessage= function(){
  return currentPlay + "'s Wins!";
};
const drawMessage = function(){
  return "Drw!"
};
const currentPlayTurn = function(){
  return"It's" + currentPlay + "'s turn";
};

document.querySelectorAll('.cell').forEach(function(cell){
  cell.addEventListener('click', CellClick);
});
document.querySelector('.restart').addEventListener('click', RestartGame);

function CellClick(clickedCellEvent){
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
  if(gameStart[clickedCellIndex] !== "" || !gameActive){
        return;
  }
  CellPlayed(clickedCell, clickedCellIndex);
  ResultValidation();
}

function CellPlayed(clickedCell, clickedCellIndex){
  gameStart[clickedCellIndex] = currentPlay;
  clickedCell.innerHTML = currentPlay;
}

statusDisplay.innerHTML = currentPlayTurn();

function PlayChange(){
  if (currentPlay === "X"){
    currentPlay = "O";
  }else{
    currentPlay = "X";
  }
  statusDisplay.innerHTML = currentPlayTurn();
}

function ResultValidation(){
  let roundWon = false;
  for(let i=0; i<=7; i++){
    const winningCondition = winningConditions[i];
    let a = gameStart[winningCondition[0]];
    let b = gameStart[winningCondition[1]];
    let c = gameStart[winningCondition[2]];
    if(a=== ''|| b === '' || c === ''){
      continue;
    }
    if(a === b && b === c){
      roundWon = true;
      break;
    }
  }
  if(roundWon){
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }
  let roundDraw = !gameStart.includes("");
  if (roundDraw){
    statusDisplay.innerHTML=drawMessage();
    gameActive = false;
    return;
  }
  PlayChange();
}

function RestartGame(){
  let gameActive = true;
  let currentPlay = "X";
  let gameStart = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayTurn();
  document.querySelectorAll('.cell').forEach(function(cell){
    cell.innerHTML = '';
  })
}