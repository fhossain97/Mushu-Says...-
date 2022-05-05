// Modal code
// The modal
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

//Count each round of the game 
let gameLevels = () => {
    levelsAdded = 0
  newLevels = levelsAdded++
level.innerHTML = 'Level ' + newLevels
}

//Start the game using the start button
let level = document.querySelector('.level')
let gameStartButton = document.querySelector('#start')
let start = () => {
let score = document.querySelector('.scoreboard')
let initialScore = 0
score.innerHTML = 'Score: ' + initialScore
let zeroLevel = 0
level.innerHTML = 'Level ' + zeroLevel
gameStartButton.style.display = 'none';
}
gameStartButton.addEventListener('click', start)
gameLevels()




//Reset
let resetButton = document.querySelector('#reset')
let reset = () => {
    levelsAdded -=1
    score -=1
level.innerHTML = 'Level ' + levelsAdded
}
resetButton.addEventListener('click', reset)

//Restart
let restartButton = document.querySelector('#restart')
let restart = () => {
    start()
} 
restartButton.addEventListener('click', restart)

//Each sequence must be random
let indigo = document.querySelector('#indigo')
let orange = document.querySelector('#orange')
let yellow = document.querySelector('#yellow')
let pink = document.querySelector('#pink')


const squares = ['indigo', 'orange', 'yellow', 'pink'];
    
let randomSquares = () => {   
    const random = Math.floor(Math.random() * squares.length)
    return random;   
}

//Each random sequence will flash a random pattern
let coloredSquares = document.querySelectorAll(".square");
const squaresArray = Object.values(coloredSquares)
let numFlash = 0
const flashSquare = (squaresArray, numFlash) => {
    let chosenSquare = squaresArray[randomSquares()]
    chosenSquare.className = 'active'
  setTimeout(() => {
      let randomIndex = randomSquares()
      chosenSquare.classList.remove('active')
     if (numFlash < 5) {
         //numFlash += 1
     flashSquare(squaresArray, numFlash);
      }
     }, 250);
}

//flashSquare(squaresArray, numFlash);

//Audio
indigo.addEventListener('click', () => {
    let audio1 = new Audio('sounds/indigo.wav')
    audio1.play()
})

orange.addEventListener('click', () => {
    let audio2 = new Audio('sounds/orange.wav')
    audio2.play()
})

yellow.addEventListener('click', () => {
    let audio6 = new Audio('sounds/yellow.wav')
    audio6.play()
})

pink.addEventListener('click', () => {
    let audio9 = new Audio('sounds/pink.wav')
    audio9.play()
})

//Score
let score = () => {
    squares.addEventListener('click', () => {
        if ('click' === flashSquare) {
            score += 1
        } else if ('click' !== flashSquare) {
            alert('Wrong square has been clicked. Reset the level.')
            let audio10 = new Audio('sounds/error.wav')
            audio10.play()
        }
    })
   
}

//Winner function
let winner = () => {
    if ((round === 10) && (score === 90)) {
        display('Congratulations! You beat the game!')
    }
}

//getScore.innerHTML = `${parseInt(getScore.innerHTML) + 10}`;
