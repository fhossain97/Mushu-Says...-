//Start the game
let startButton = document.querySelector('#name')

startButton.addEventListener('click',gameNewRound())

//Playing each round
let playerTurn;
let computerTurn; 

let indigo = document.querySelector('#indigo')
let orange = document.querySelector('#orange')
let greenyellow = document.querySelector('#greenyellow')
let red = document.querySelector('#red')
let yellow = document.querySelector('#yellow')
let blue = document.querySelector('#blue')
let pink = document.querySelector('#pink')
let green = document.querySelector('#green')     
let violet = document.querySelector('#violet')   

let squares = [
    indigo,
    orange,
    greenyellow,
    red,
    yellow,
    blue,
    pink,
    green,
    violet 
]

 gameNewRound = () => {
    startButton.style.display = 'none'
    let squares = document.querySelector('.square')
    let pattern = Math.floor((Math.random(squares)*9))
    computerTurn = pattern
    rounds()
 }

 rounds = () =>  {
    let score = document.querySelector('.scoreboard')
    let player= document.querySelector('.player')
    let roundNumber = 0
    roundNumber++

    //need some sort of function with add event lsitener that if right squares are clicked, then you get a point added on

 }