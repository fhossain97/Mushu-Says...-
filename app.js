//Enter your name to play the game
let playerName = () => {
    let player = prompt('Enter your name!', 'Name')

    if (player != null) {
        document.querySelector('.player-name').innerHTML = 'Player: ' + player
    }
}
playerName()

//Start button to start the game
//Count each round of the game
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

