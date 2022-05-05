let indigo = document.querySelector('#indigo')
let orange = document.querySelector('#orange')
let yellow = document.querySelector('#yellow')
let pink = document.querySelector('#pink')

let gameVariables = {
    currentGame: [],
    level: 0,
    squares: ['indigo', 'orange', 'yellow', 'pink']
}

//Enter your name to play the game
let enterName = () => {
    let playerName = prompt('Enter your name!', 'Name')
    if (playerName != null) {
        document.querySelector('.player-name').innerHTML = 'Player: ' + playerName
    }
}

//Start
let levelHTML = document.querySelector('.level')
let gameStartButton = document.querySelector('#start')
let start = () => {
    levelHTML.innerHTML = 'Level: ' + gameVariables.level
    gameStartButton.style.display = 'none';
    beginGame()
    }
    gameStartButton.addEventListener('click', start)

//Restart
let restartButton = document.querySelector('#restart')
let restart = () => {
    gameVariables.level
    gameVariables.currentGame = []
    enterName()
    incrementLevel()
} 
restartButton.addEventListener('click', restart)


//Begin Game
let beginGame = () => {
    restart()
}

//Each random sequence will flash a random pattern
let coloredSquares = document.querySelectorAll('.square')
const flashSquare = () => {
    let i = 0;
    let computerPlays = setInterval(function() {
        playGame(gameVariables.currentGame[i])
        i++
        if (i >= gameVariables.currentGame.length) {
            clearInterval(computerPlays)
        }
    }, 500)
    clearPlayerMoves()
}


//Audio
soundsOfSquares = {
    indigo: new Audio('sounds/indigo.wav'),
    orange: new Audio('sounds/orange.wav'),
    yellow: new Audio('sounds/yellow.wav'),
    pink: new Audio('sounds/pink.wav')
}

let sound = (color) => {
    switch(color) {
        case indigo:
        soundsOfSquares.indigo.play();
        break;
        case orange:
        soundsOfSquares.orange.play();
        break;
        case yellow:
        soundsOfSquares.yellow.play();
        break;
        case pink:
        soundsOfSquares.pink.play();
        break;
    }
}

let randomSquares = () => {   
    const random = (Math.floor(Math.random() * squares.length))
    gameVariables.currentGame.push(gameVariables.squares[random])
    flashSquare()
}


let squareColors = document.querySelectorAll('.squares')
let playGame = () => {
  
}
console.log(squareColors)