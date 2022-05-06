// //Enter your name to play the game
// let enterName = () => {
//     let playerName = prompt('Enter your name!', 'Name')
//     if (playerName != null) {
//         document.querySelector('.player-name').innerHTML = 'Player: ' + playerName
//     }
// }
// enterName()

//Start button
// let levelHTML = document.querySelector('.level')
// let gameStartButton = document.querySelector('#start')
// let level = 0


// let start = () => {
// levelHTML.innerHTML = 'Level: ' + level
// gameStartButton.style.display = 'none';
// beginGame()
// }
// gameStartButton.addEventListener('click', start)

//Restart
// let restartButton = document.querySelector('#restart')
// let currentGame = []
// let restart = () => {
//     level = 0
//     currentGame = []
//     incrementLevel()
// } 
// restartButton.addEventListener('click', restart)

//Begin Game
// let beginGame = () => {
//     restart()
// }

// //Each random sequence will flash a random pattern
// let coloredSquares = document.querySelectorAll('.square')
// const flashSquare = () => {
//     let i = 0;
//     let computerPlays = setInterval(function() {
//         playGame(currentGame[i])
//         //i++
//         if (i >= currentGame.length) {
//             clearInterval(computerPlays)
//         }
//     }, 500)
//     clearPlayerMoves()
// }

// let indigo = document.querySelector('#indigo')
// let orange = document.querySelector('#orange')
// let yellow = document.querySelector('#yellow')
// let pink = document.querySelector('#pink')

// //Audio
// soundsOfSquares = {
//     indigo: new Audio('sounds/indigo.wav'),
//     orange: new Audio('sounds/orange.wav'),
//     yellow: new Audio('sounds/yellow.wav'),
//     pink: new Audio('sounds/pink.wav')
// }


// let sound = (color) => {
//     switch(color) {
//         case indigo:
//         soundsOfSquares.indigo.play();
//         break;
//         case orange:
//         soundsOfSquares.orange.play();
//         break;
//         case yellow:
//         soundsOfSquares.yellow.play();
//         break;
//         case pink:
//         soundsOfSquares.pink.play();
//         break;
//     }
// }

//Random squares chosen
// const squares = ['indigo', 'orange', 'yellow', 'pink'];
// let randomSquares = () => {   
//     const random = squares[Math.floor(Math.random() * squares.length)]
//     currentGame.push(random)
//     flashSquare()
// }


// const squaresArray = Object.values(coloredSquares)

// let numFlash = 0
// const playGame = (squaresArray, numFlash) => {
//     let chosenSquare = squaresArray[randomSquares()]
//     chosenSquare.className = 'active'
//   setTimeout(() => {
//       chosenSquare.classList.remove('active')
//      if (numFlash < 5) {
//          numFlash += 1
//      playGame(squaresArray, numFlash);
//       }
//      }, 250);
// }

// playGame(squaresArray, numFlash);

//Player moves
let clearPlayerMoves = () => {
    player = []
}
let playerMoves = (color) => {
    let sequence = '#' + color
    player.push(color)
    playerTurn(color)
}

let playerTurn = () => {
    if (player[player.length-1] !== currentGame[player.length-1]) {
    let compare = (player.length === currentGame.length) 
    if (compare) {
        if (level === 10) {
            alert('Congratulations! You have beat Mushu at his own game')
        } else {
            alert('Play the next level!')
            nextLevel()
        }
        }
    }
}
let newLevel = () => {
    incrementLevel()
}

let incrementLevel = () => {
    level++
    levelHTML.classList.add('active')

    setTimeout(() => {
        levelHTML.classList.remove('active')
    }, 300)
    randomSquares()
}
beginGame()

