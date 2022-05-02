let indigo = document.querySelector('.color-indigo')
let orange = document.querySelector('.color-orange')
let greenyellow = document.querySelector('.color-reenyellow')
let red = document.querySelector('.color-red')
let yellow = document.querySelector('.color-yellow')
let blue = document.querySelector('.color-blue')
let pink = document.querySelector('.color-pink')
let green = document.querySelector('.color-green')     
let violet = document.querySelector('.color-violet') 


//Enter your name
let playerName = () => {
    let player = document.querySelector('#enteredname')
    let nameEntered = []

    if (player.value !== '') {
        nameEntered.push(player.value)
        return(nameEntered)
    }
}

//Start
let start = () => {
    let gameStartButton = document.querySelector('#start')
startGame = () => {
gameStartButton.style.display = 'none';
gameRounds()
}
gameStartButton.addEventListener('click', startGame)
}
start();

//Rounds
let round = 0;
let gameRounds = () => {
    round =+ 1
    nextPattern()
}

//Next Pattern
let nextPattern = () => {
    const squareSequence = []
    squareSequence.push(randomSquares())
}

//Random Square Pattern
let randomSquares = () => {
    const squares = [indigo, orange, greenyellow, red, yellow, blue, pink, green, violet];
    const random = squares[Math.floor(Math.random() * squares.length)] 
    return random;   
}

//Flashing Squares
let flashingSquares = (colorChange) => {
    let square = document.querySelector('.square')
        square.classList.add('color-change')
        setTimeout(() => {
            square.classList.remove('color-change')
        }, 250)
    }

    flashingSquares()











