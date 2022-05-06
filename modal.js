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
// let gameLevels = () => {
//     levelsAdded = 0
//   newLevels = levelsAdded++
// level.innerHTML = 'Level ' + newLevels
// }

// //Start the game using the start button
// let level = document.querySelector('.level')
// let gameStartButton = document.querySelector('#start')
// let start = () => {
// let score = document.querySelector('.scoreboard')
// let initialScore = 0
// score.innerHTML = 'Score: ' + initialScore
// let zeroLevel = 0
// level.innerHTML = 'Level ' + zeroLevel
// gameStartButton.style.display = 'none';
// }
// gameStartButton.addEventListener('click', start)
// gameLevels()




// //Reset
// let resetButton = document.querySelector('#reset')
// let reset = () => {
//     levelsAdded -=1
//     score -=1
// level.innerHTML = 'Level ' + levelsAdded
// }
// resetButton.addEventListener('click', reset)

// //Restart
// let restartButton = document.querySelector('#restart')
// let restart = () => {
//     start()
// } 
// restartButton.addEventListener('click', restart)

// //Each sequence must be random
// let indigo = document.querySelector('#indigo')
// let orange = document.querySelector('#orange')
// let yellow = document.querySelector('#yellow')
// let pink = document.querySelector('#pink')


// const squares = ['indigo', 'orange', 'yellow', 'pink'];
    
// let randomSquares = () => {   
//     const random = Math.floor(Math.random() * squares.length)
//     return random;   
// }

// //Each random sequence will flash a random pattern
// let coloredSquares = document.querySelectorAll(".square");
// const squaresArray = Object.values(coloredSquares)
// let numFlash = 0
// const flashSquare = (squaresArray, numFlash) => {
//     let chosenSquare = squaresArray[randomSquares()]
//     chosenSquare.className = 'active'
//   setTimeout(() => {
//       let randomIndex = randomSquares()
//       chosenSquare.classList.remove('active')
//      if (numFlash < 5) {
//          //numFlash += 1
//      flashSquare(squaresArray, numFlash);
//       }
//      }, 250);
// }

// //flashSquare(squaresArray, numFlash);

// //Audio
// indigo.addEventListener('click', () => {
//     let audio1 = new Audio('sounds/indigo.wav')
//     audio1.play()
// })

// orange.addEventListener('click', () => {
//     let audio2 = new Audio('sounds/orange.wav')
//     audio2.play()
// })

// yellow.addEventListener('click', () => {
//     let audio6 = new Audio('sounds/yellow.wav')
//     audio6.play()
// })

// pink.addEventListener('click', () => {
//     let audio9 = new Audio('sounds/pink.wav')
//     audio9.play()
// })

// //Score
// let score = () => {
//     squares.addEventListener('click', () => {
//         if ('click' === flashSquare) {
//             score += 1
//         } else if ('click' !== flashSquare) {
//             alert('Wrong square has been clicked. Reset the level.')
//             let audio10 = new Audio('sounds/error.wav')
//             audio10.play()
//         }
//     })
   
// }

// //Winner function
// let winner = () => {
//     if ((round === 10) && (score === 90)) {
//         display('Congratulations! You beat the game!')
//     }
// }

// //getScore.innerHTML = `${parseInt(getScore.innerHTML) + 10}`;

// h1 {
//     text-align: center;
//     font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
// }


// body {
//     background-image: url('background.png');
//     background-color: black;
//     text-align: center;
// }

// .button {
//     display: block;
//     text-align: center;
//     margin: auto;
//     padding: 10px;
// }

// #start {
//     text-align: center;
//     width: 20vw;
//     height: 5vh;
//     font-size: 20px;
//     background-color: azure;
//     font-style: bold;
    
// }

// .player-name{
// text-align: center;
// border: 1px solid black;
// }


// .game-board {
//     display: grid;
//     grid-template-rows: repeat(2, 120px);
//     grid-template-columns: repeat(2, 120px);
//     justify-content: center;
// }

// .square {
//     border: 2px solid black;
//     cursor: pointer;
// }

// .square:hover {
//     box-shadow: inset 0px 0px 5px 5px aqua;
// }


// #indigo {
//     background-color: indigo;
// }

// #orange {
//     background-color: orange;
// }

// #yellow {
//     background-color: yellow;
// }

// #pink {
//     background-color: hotpink;
// }

// .active {
//     background-color: white !important;
// }

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <script src="app.js" defer></script>
//     <link rel="stylesheet" href="style.css">
//     <title>Mushu Says...</title>
//     <link rel="icon" sizes="228x228" href="favicon.jpg">
// </head>
// <body>
//     <h1>Mushu Says...</h1>

//     <button id="start">Start</button>
//     <div id="nameModal" class="modal">
//         <div class="modalText-content">
//             <span class="close">
//             </span>
//         </div>
//     </div>
// <div>
//     <h4 class="player-name">Player</h4>
//     <h4 class="level">Level</h4>

//     </div>

//     <div class="game-board">
//         <div class="square" id="indigo"></div>
//         <div class="square" id="orange"></div>
//         <div class="square" id="yellow"></div>
//         <div class="square" id="pink"></div>
//     </div>    
    
//     <div class="button">
//         <button id="restart">Restart</button>
//     </div>

// </body>
// </html>
