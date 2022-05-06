
let gameSeq = []
let level = 1
let colorArray = ["indigo", "green", "yellow", "pink"]
let playerSeq = []


//Enter your name to play the game
let enterName = () => {
    let playerName = prompt('Enter your name!')
    if (playerName != null) {
        document.querySelector('.player').innerHTML = 'Player: ' + playerName
    }
}

//Start
let levels = document.querySelector('.level')
let gameStartButton = document.querySelector('.start-button')
let start = () => {
    level = 1
    gameSeq = []
    playerSeq = []
    levels.innerHTML = 'Level: ' + level
    gameStartButton.style.display = 'none';
    beginGame(level)
    }
    gameStartButton.addEventListener('click', start)

//Restart
let restartButton = document.querySelector('.restart')
restartButton.addEventListener('click', start)

//Flash pattern
let flash = () => {
    let randomNumber = (Math.floor(Math.random() * 4))
    let randomColor = colorArray[randomNumber]
    let randomSquare = document.querySelector('#'+ randomColor)
    randomSquare.style.backgroundColor = 'white'
    setTimeout(() => {
        randomSquare.style.backgroundColor = randomColor   
    }, 1000)
    return randomColor
}



//Begin Game
let beginGame = (level) => {
    levels.innerHTML = 'Level: ' + level
    
    // flash the same number of times as level value
    // for (i = 1; i <= level; i++) {
    //         gameSeq.push(flash())
    // }
    gameSeq.push(flash())
    alert('Click the correct pattern')

    let indigo = document.querySelector('#indigo')
    let green = document.querySelector('#green')
    let yellow = document.querySelector('#yellow')
    let pink = document.querySelector('#pink')

    pink.addEventListener('click', ()=> {
        playerSeq.push()
    })

    indigo.addEventListener('click', ()=> {
        playerSeq.push()
    })

    green.addEventListener('click', ()=> {
        playerSeq.push()
    })
    yellow.addEventListener('click', ()=> {
        playerSeq.push()
    })


    let checkAnswerButton = document.querySelector('.check')
    
    console.log(playerSeq)
    //checkAnswerButton.addEventListener('click', ()=> {
    // checkAnswer(playerSeq, gameSeq)
    // })

    //level++

}


let checkAnswer = (playerSeq, gameSeq) => {
    if (playerSeq === gameSeq) {
        alert('Correct!')            
        } else {
            alert('Wrong! Restart game.')
        }
}






// Player moves
// let clearPlayerMoves = () => {
//     player = []





// Iterate through level until it = 1
// Add to gameSeq flash() results 






// //Audio
// soundsOfSquares = {
//     indigo: new Audio('sounds/indigo.wav'),
//     green: new Audio('sounds/green.wav'),
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

// const squaresArray = Object.values(squares)























// let newLevel = () => {
//     incrementLevel()
// }

// let incrementLevel = () => {
//     level++
//     levels.classList.add('active')

//     setTimeout(() => {
//         levels.classList.remove('active')
//     }, 300)
//     randomSquares()
// }


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
