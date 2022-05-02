//Enter your name to play the game
let playerName = () => {
    let player = prompt('Enter your name!', 'Name')
    if (player != null) {
        document.querySelector('.player-name').innerHTML = 'Player: ' + player
    }
}
//(Why does this pop up twice?)

//Count each round of the game and have a reset function within each level
let round = 0;
let gameRounds = () => {
    round =+ 1
let currentRound = document.querySelector('p')
currentRound.innerHTML = 'Round ' + round

let resetButton = document.querySelector('#reset')
let reset = () => {
    round -=1
let previousRound = document.querySelector('p')
previousRound.innerHTML = 'Round ' + round
}
resetButton.addEventListener('click', reset)
}

//Start button to start the game
//playerName()
let startGame = () => {
    let gameStartButton = document.querySelector('#start')
startGame = () => {
gameStartButton.style.display = 'none';
}
gameStartButton.addEventListener('click', startGame)
gameRounds()
}
startGame()

//Reset function within each level
//Each round will signal the sequence to begin
//Each sequence must be random
//Each random sequence will flash a random pattern 
//Each random pattern will flash a square pattern
//Each pattern must be looped
//As you click each square, you gain one point for each correct click
//As you proceed to each level, there will be an animation pop up in between
//Up to level 10
//Winner function
//Ability to restart the game

