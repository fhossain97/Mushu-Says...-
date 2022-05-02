let indigo = document.querySelector('#indigo')
let orange = document.querySelector('#orange')
let greenyellow = document.querySelector('#greenyellow')
let red = document.querySelector('#red')
let yellow = document.querySelector('#yellow')
let blue = document.querySelector('#blue')
let pink = document.querySelector('#pink')
let green = document.querySelector('#green')     
let violet = document.querySelector('#violet') 

//Enter your name
let playerName = () => {
    let player = document.querySelector('#enteredname')
    let nameEntered = []

    if (player.value !== '') {
        nameEntered.push(player.value)
        return(nameEntered)
    }
}

//Next Pattern
let nextPattern = () => {
    const squareSequence = []
    squareSequence.push(randomSquares())
}

//Flashing Squares
let flashingSquares = (colorChange) => {
    let square = document.querySelector('.square')
        square.style.backgroundColor = 'white'
        setTimeout(() => {
            square.style.backgroundColor = ''
        }, 500)
    }
  
//Loop patterns
 let patternLoop = (nextPattern) => {
     nextPattern.forEach(() => {
         setTimeout(() => {
             flashingSquares(colorChange)
         })
     })
 }

//Random Square Pattern
let randomSquares = () => {
    const squares = [indigo, orange, greenyellow, red, yellow, blue, pink, green, violet];
    const random = squares[Math.floor(Math.random() * squares.length)] 
    return random;   
}

//Game rounds
let round = 0;
let gameRounds = () => {
    round =+ 1
    nextPattern()
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
flashingSquares()

/////ERROR - ONLY THE FIRST SQUARE FLASHES - REST NEED TO FLASH
let score = () => {
    if (squareClicked === pattern) {
        score += 1
    } else if (squareClicked !== pattern) {
        alert('Wrong square has been clicked. Reset the level.')
    }

}



// function displayWinner(winner){ 
//     const winnerText = document.createElement('body');
//     winnerText.innerText = winner;
//     document.body.appendChild(winnerText);
//   }
//   compareChoices();   
  
//   document.querySelectorAll('button').onclick = function player() {
//    console.log(gameChoice. target);
//   }