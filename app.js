//Each square flashes in a random pattern

//Grab squares from HTML
let indigo = document.querySelector('#indigo')
let orange = document.querySelector('#orange')
let greenyellow = document.querySelector('#greenyellow')
let red = document.querySelector('#red')
let yellow = document.querySelector('#yellow')
let blue = document.querySelector('#blue')
let pink = document.querySelector('#pink')
let green = document.querySelector('#green')     
let violet = document.querySelector('#violet')  

//Put squares in an array
// let randomGlowingSquares = () => {
//     const squares = [indigo, orange, greenyellow,red,yellow, blue, pink, green,violet];
//     let random = Math.floor(Math.random() * squares.length)
//     return random  
// }

const squares = [indigo, orange, greenyellow,red,yellow, blue, pink, green,violet];
const randomizedSquares = squares.map((randomGlowingSquares) => {
    let random = Math.floor(Math.random() * squares.length)
    return random 
})


let square = document.querySelectorAll('.square')

//Function for each square to glow 
let flashingSquares = (square) => {
    return new Promise((resolve, reject) => {
        square.style.backgroundColor = 'white'
        setTimeout(() => {
            square.style.backgroundColor = ('');
        resolve()
        }, 500)
    })
}

//Loop of squares sequence
let squaresLoop = async () => {
    for (const square in randomizedSquares) {
    await flashingSquares(square)
    }
}
squaresLoop()

