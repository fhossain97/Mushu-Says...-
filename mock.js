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

  //  gameNewRound = () => {
//     startButton.style.display = 'none'
//     let squares = document.querySelector('.square')
//     let pattern = Math.floor((Math.random(squares)*9))
//     computerTurn = pattern
//     rounds()
//  }

//  rounds = () =>  {
//     let score = document.querySelector('.scoreboard')
//     let player= document.querySelector('.player')
//     let roundNumber = 0
//     roundNumber++
//  }


//Start the game
let startButton = document.querySelector('#name')
startButton.addEventListener('click',gameNewRound())

//Playing the game
// let playerTurn;
// let computerTurn; 
 

//    gameNewRound = () => {
//     startButton.style.display = 'none'
//     let squares = document.querySelector('.square')
//     let pattern = Math.floor((Math.random(squares)*9))
//     computerTurn = pattern
//     rounds()
//  }

//  rounds = () =>  {
//     let score = document.querySelector('.scoreboard')
//     let player= document.querySelector('.player')
//     let roundNumber = 0
//     roundNumber++
//  }

 

// @keyframes game-board {
//     25%  {background-color: whitesmoke;}
// }

// .modal {
//     display: none;
//     background-color: yellow;
//     align-items: center;
//     margin: auto;
//     position: fixed;
// }

// .modalText-content {
//     background-color: lemonchiffon;
//     margin: 5px;
//     border: 3px solid orangered;
//     width: 50vw;
//     height: 20vh;
//     padding: 15px;
//     justify-content: center;
// }

// .close {
//     color: lightcoral;
//     float: center;
//     font-size: 20px;
//     font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
// }

// .close:hover,
// .close:focus {
//     color: blueviolet;
//     cursor: auto;
// }


  

//  let canClick = false   
// let squareClicked = () => {
//     if(!canClick) return

// }



