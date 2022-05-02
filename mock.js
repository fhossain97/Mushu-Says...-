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


    //Pattern looped
    let patternLoop = (nextPattern) => {
        nextPattern.forEach(() => {
            setTimeout(() => {
                flashingSquares(colorChange)
            })
        })
    }

    //Score
let score = () => {
    if (squareClicked === pattern) {
        score += 1
    } else if (squareClicked !== pattern) {
        alert('Wrong square has been clicked. Reset the level.')
    }

}



//Winner
// function displayWinner(winner){ 
//     const winnerText = document.createElement('body');
//     winnerText.innerText = winner;
//     document.body.appendChild(winnerText);
//   }
//   compareChoices();   
  
//   document.querySelectorAll('button').onclick = function player() {
//    console.log(gameChoice. target);
//   }











