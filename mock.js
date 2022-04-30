//Modal code
//The modal
// let startModal = document.querySelector('#nameModal')
// //Modal Button
// let startModalButton = document.querySelector('#name')
// //Element that closes modal
// let span = document.querySelector('.close')
// //Open the modal
// startModalButton.addEventListener('click', () => {
// startModal.style.display = 'block'
// })
// //Close the modal
// span.addEventListener('click', () => {
//     startModal.style.display = 'none'
// })

// //Closes modal if clicked elsewhere
// window.addEventListener('click', (e) => {
// e.preventDefault()
// if (e.target === startModal) {
//     startModal.style.display = 'none'
// }
// })


//Game 

//Game variables

           

let gameStartButton = document.querySelector('name#')

startGame = () => {
gameStartButton.style.display = 'none';
}

gameStartButton.addEventListener('click', startGame)

gameturn = () => {
    switch(pattern) {
    case 1:
        gameMemory.push('indigo')
        break;
    case 2:
        gameMemory.push('orange')
        break;
    case 3:
        gameMemory.push('greenyellow')
        break;
    case 4:
        gameMemory.push('red')
        break;
    case 5:
        gameMemory.push('yellow')
        break;
    case 6:
        gameMemory.push('blue')
        break;
    case 7:
        gameMemory.push('pink')
        break;
    case 8:
        gameMemory.push('green')
        break;
    case 9:
        gameMemory.push('violet')
        break;
    }
}

for (let i = 0; i < gameMemory.length; i++) {
    
}

game = () => {
    this.playerTurn = false;
    this.gameMemory;
    this.roundNumber;
}

newGame = () => {
    game = newGame()
    setTimeout(fadeIntro, 250)
    setTimeout(roundNumber++, 2500)
}

//Start the game
let reset = document.querySelector('#reset')
let restart = document.querySelector('#restart')


let computerTurn = [];
let playerTurn = [];
let gameMemory = []
let roundNumber = 0

gameStart = () => {
    this.playerTurn = false
    this.computerTurn = true
    gameMemory
    roundNumber
}

newGame = () => {
    game = newGame()
    score++
    score.innerHTML = ''
    setTimeout(fadeIntro, 250)
}

squarePattern = () => {
    let pattern = Math.floor((Math.random()*9))
}


  
  function displayWinner(winner){ 
    const winnerText = document.createElement('body');
    winnerText.innerText = winner;
    document.body.appendChild(winnerText);
  }
  compareChoices();   
  
  document.querySelectorAll('button').onclick = function player() {
   console.log(gameChoice. target);
  }