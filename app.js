let indigo = document.querySelector('#indigo')
let green = document.querySelector('#green')
let yellow = document.querySelector('#yellow')
let pink = document.querySelector('#pink')
let colors = [green, yellow, pink, indigo]
let gamePlay = []

//Start

//Start
let startButton = document.querySelector('.start-button')
let levels = document.querySelector('.level')
let level = 0
let start = true

let startGame = () => {
    levels.innerHTML = 'Level: ' + level
    startButton.style.display = 'none';
    start = false
    randomSeq()
    
    }
startButton.addEventListener('click', startGame)

const random = Math.floor(Math.random() * colors.length)

let randomSeq = () => {
    document.getElementByID(colors[random]).classList.add('active')
    let beep = new Audio('sounds/red.wav')
    beep.play()
    gamePlay.push(colors[random])
    setTimeout(() => {
        document.getElementByID(colors[random]).classList.remove('active')
    }, 200)
}

let i = 0 
let gameLoop = () => {
    if (document.activeElement.id === gamePlay[i]) {
        if (i === (gamePlay.length - 1)) {
            alert('Correct color chosen!')
            randomSeq()
            i = 0
        } else {
            i++
        }
    } else {
        alert('Wrong color selected')
        location.reload()
    }
}