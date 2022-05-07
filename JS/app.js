//Game variables
let gameSeq = [];
let level = 1;
let colorArray = ["indigo", "green", "yellow", "pink"];
let playerSeq = [];

//Enter your name to play the game
let enterName = () => {
  let playerName = prompt("Enter your name!");
  if (playerName != null) {
    document.querySelector(".player").innerHTML = "Player: " + playerName;
  }
};
enterName();

//Start
let levels = document.querySelector(".level");
let startButton = document.querySelector(".start-button");
let start = () => {
  level = 1;
  gameSeq = [];
  playerSeq = [];
  levels.innerHTML = "Level: " + level;
  startButton.style.display = "none";
  beginGame(level);
};
startButton.addEventListener("click", start);

//Restart
let restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", start);

//Flash pattern
let flash = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = colorArray[randomNumber];
  let randomSquare = document.querySelector("#" + randomColor);
  randomSquare.style.backgroundColor = "white";
  setTimeout(() => {
    randomSquare.style.backgroundColor = randomColor;
  }, 2500);
  return randomColor;
};

//Begin Game
let beginGame = (level) => {
  levels.innerHTML = "Level: " + level;

  for (let i = 1; i <= level; i++) {
    setTimeout(() => {
      gameSeq.push(flash());
    }, 1000 * i);
  }

  let indigo = document.querySelector("#indigo");
  let green = document.querySelector("#green");
  let yellow = document.querySelector("#yellow");
  let pink = document.querySelector("#pink");

  pink.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    playerSeq.push(e.target.id);
    let color1 = new Audio("sounds/pink.wav");
    color1.play();
  });

  indigo.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    playerSeq.push(e.target.id);
    let color2 = new Audio("sounds/indigo.wav");
    color2.play();
  });

  green.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    playerSeq.push(e.target.id);
    let color3 = new Audio("sounds/green.wav");
    color3.play();
  });
  yellow.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    playerSeq.push(e.target.id);
    let color4 = new Audio("sounds/yellow.wav");
    color4.play();
  });

  let checkAnswerButton = document.querySelector(".check");

  checkAnswerButton.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    checkAnswer(playerSeq, gameSeq);
  });
};

//Compares game and player choices
let checkAnswer = (playerSeq, gameSeq) => {
  if (JSON.stringify(playerSeq) === JSON.stringify(gameSeq)) {
    alert("Correct!");
    level++;
    clearGameSeq();
    clearPlayerSeq();
    beginGame(level);
    winner();
  } else {
    alert("Wrong! Restart the game");
  }
};

//Clear player moves
let clearPlayerSeq = () => {
  playerSeq = [];
};

//Clear game moves
let clearGameSeq = () => {
  gameSeq = [];
};

//Game winner
let winner = () => {
  if (level === 10) {
    alert("Congratulations! You have won the game!");
    clearGameSeq();
    clearPlayerSeq();
    beginGame(level);
  }
};
