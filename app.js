//Enter your name to play the game
let playerName = () => {
    let player = prompt('Enter your name!', 'Name')
    if (player != null) {
        document.querySelector('.player-name').innerHTML = 'Player: ' + player
    }
}
//(Why does this pop up twice?)

//Each round will signal the sequence to begin
let beginSequence = () => {
    const squareSequence = []
    squareSequence.push()
}

//Count each round of the game and have a reset function within each level
let round = 0;
let gameRounds = () => {
    round =+ 1
let currentRound = document.querySelector('p')
currentRound.innerHTML = 'Round ' + round

beginSequence()

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

//Each sequence must be random
let indigo = document.querySelector('#indigo')
let orange = document.querySelector('#orange')
let greenyellow = document.querySelector('#greenyellow')
let red = document.querySelector('#red')
let yellow = document.querySelector('#yellow')
let blue = document.querySelector('#blue')
let pink = document.querySelector('#pink')
let green = document.querySelector('#green')     
let violet = document.querySelector('#violet') 

let randomSquares = () => {
    const squares = [indigo, orange, greenyellow, red, yellow, blue, pink, green, violet];
    const random = squares[Math.floor(Math.random() * 9)] 
    return random;   
}


//Each random sequence will flash a random pattern 
let allSquares = document.querySelectorAll('.square')

let flash = () => {
    let allSquares = document.querySelectorAll('.square')
    return newPromise((resolve, reject) => {
        allSquares.className = 'color-change'
        setTimeout(() => {
        allSquares.className = allSquares.className.replace('color-change', '')
        }, 250)   
    })

}






//Each pattern must be looped
//As you click each square, you gain one point for each correct click
//As you proceed to each level, there will be an animation pop up in between
//Up to level 10
//Winner function
//Ability to restart the game

