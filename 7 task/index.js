
function togglePlayButtons() {
  const buttonsCont = document.getElementById('buttonsCont');
  buttonsCont.classList.toggle('hidden')
}
debugger

let userscore=0;
let computerScore=0;  

function startGame() {
  const startGameButton = document.getElementById('startGame');
  startGameButton.classList.add('hidden');
  togglePlayButtons()
}

function getWinner(computerDicision, playerDicision) {
  const tie = "ფრეა 👌";
  const playerWon = "შენ მოიგე 🎊";
  const computerWon = "კომპიუტერმა მოიგო 💻";
  
  if (computerDicision == playerDicision) {
    return tie;
  }
  switch(computerDicision) {
    case 0:
        if (playerDicision == 1 || playerDicision == 3) {
          computerScore++;
          return computerWon;
         } 
         userscore++
         return playerWon;
        
    case 1:
        if (playerDicision == 2 || playerDicision == 3){
          computerScore++;
          return computerWon;
        }     
          userscore++
        return playerWon;
     case 2:
      if (playerDicision == 4 || playerDicision == 0) {
        computerScore++;
        return computerWon;
        
         }  
         userscore++
         return playerWon;  
      case 3:
        if (playerDicision == 4 || playerDicision == 2) {
          computerScore++;
          return computerWon;

           }  
           userscore++
           return playerWon; 
      case 4:
        if (playerDicision == 1 || playerDicision == 0) {
          computerScore++;
          return computerWon;
           }  
           userscore++
           return playerWon;
        }

}


function addH2InContainer(innerText) {
  const container = document.getElementById('container')
  const myH2 = document.createElement('h2');
  myH2.innerText = innerText;
  container.appendChild(myH2);
}

function makeChoice(playerChoice) {
  const emojies = ["✊", "✌️", "✋","🤞","🖖"]
  const computerChoice = Math.round(Math.random()*4);
  const result = `კომპიუტერის არჩევანი არის ${emojies[computerChoice]} \n შენი არჩევანი არის ${emojies[playerChoice]}`
  addH2InContainer(result);
  togglePlayButtons();
  const winner = getWinner(computerChoice, playerChoice);
  addH2InContainer(winner);
  const startAgainBtn = document.getElementById('startAgain');
  startAgainBtn.classList.remove('hidden')
}

function removeH2(h2){
  h2.remove()
}

function playAgain() {
  togglePlayButtons();
  const container = document.getElementById('container')
  const h2Elements = container.querySelectorAll('h2');
  h2Elements.forEach(removeH2)
}


function addThInTr(scores) {
     const x = document.getElementById(`scores`)
     let myTh = document.createElement(`th`,Number)
     myTh.innerText= 34
     scores.appendChild(myTh)
}

function calculator(arg){
  if(computerDicision>playerDicision){
  computerScore++
  } else{ 
    userscore++
  }
  return userscore
}


