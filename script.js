//canvas
let canvas = document.querySelector("#canvas");
let canvasDiv = document.querySelector(".canvas-div");
// Music
let audio = new Audio("./audio/Pokemon- TV Theme Song (Full) MUBlogger.mp3");
audio.volume = 0.1;
let sound = new Audio("./audio/soundEffect.wav");
sound.volume = 0.2;
let gameOverSong = new Audio("./audio/mixkit-sad-game-over-trombone-471.wav");
gameOverSong.volume = 0.1;

//  Paintbrush
let ctx = canvas.getContext("2d");
let splash = document.querySelector("#splash");
let h1 = document.querySelector(".title");

//  Buttons
let startBtn = document.querySelector("#start");
let restartBtn = document.querySelector("#restart");
let soundBtn = document.querySelector("#sound");
let muteBtn = document.querySelector("#mute");

// Game Over
let gameOver = document.querySelector("#gameOver");
let gameOverDiv = document.querySelector(".gameOver-div");
// Background
let bg = new Image();
bg.src = "./images/background.jpeg";

// Pikacu
let pika = new Image();
pika.src = "./images/pikachu.png";

// extra characters ----------------------

// Aquaman
let aqua = new Image();
aqua.src = "./images/aqua2.png";

// The Flash
let flash = new Image();
flash.src = "./images/flash2.png";

//Batman
let batman = new Image();
batman.src = "./images/batman2.png";

// Wonder Woman
let WW = new Image();
WW.src = "./images/WW.png";

// shark fin
let shark = new Image();
shark.src = "./images/shark.png";

//----------------------------------------------------------

// Big rock
let rock = new Image();
rock.src = "./images/rock.png";

// Ball
let ball = new Image();
ball.src = "./images/pngkit_pokeball-icon-png_2017019.png";

//bird
let bird = new Image();
bird.src = "./images/PixelArt.png";

// Pika falling amount
let pikaFall = 2,
  pikaX = 70,
  pikaY = 200;

let isGameOver = false;
let intervalId = 0;
let speed = 8;
let score = 0;
let highScore = 0;

//Foreground
function drawSand() {
  ctx.beginPath();
  ctx.fillStyle = "#f2be7e";
  ctx.fillRect(0, canvas.height - 150, canvas.width, 150);
  ctx.closePath();
}

// Draw Wave
function drawWave() {
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 200, canvas.width, 300);
  ctx.closePath();

  //white lines for wave
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(500, 400);
  ctx.lineTo(300, 300);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(700, 400);
  ctx.lineTo(500, 300);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(800, 500);
  ctx.lineTo(600, 400);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(400, 500);
  ctx.lineTo(200, 400);
  ctx.stroke();
  ctx.closePath();

  // big block of white
  ctx.beginPath();
  ctx.fillStyle = "#c3e2fa";
  ctx.fillRect(0, 200, 80, 350);
  ctx.closePath();

  //small circles
  ctx.beginPath();
  ctx.fillStyle = "#98cffa";
  ctx.arc(250, 200, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "#98cffa";
  ctx.arc(275, 200, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  //big circles
  ctx.beginPath();
  ctx.fillStyle = "#87cbff";
  ctx.arc(0, 200, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "#87cbff";
  ctx.arc(50, 200, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "#87cbff";
  ctx.arc(100, 200, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "#87cbff";
  ctx.arc(90, 230, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  //medium circles
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(150, 230, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(120, 220, 25, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(185, 210, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(120, 220, 25, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "#87cbff";
  ctx.arc(180, 200, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "#87cbff";
  ctx.arc(150, 200, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "#87cbff";
  ctx.arc(220, 200, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(0, 550, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(40, 550, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(80, 550, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(10, 520, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(50, 520, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(80, 520, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(20, 500, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  //black lines down
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(50, 300);
  ctx.lineTo(50, 450);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(75, 250);
  ctx.lineTo(75, 400);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(20, 220);
  ctx.lineTo(20, 400);
  ctx.stroke();
  ctx.closePath();
}

// Rock starting
let rockMovement = [{ x: canvas.width, y: canvas.height - 250 }];

// Bird starting
let birdMovement = [{ x: canvas.width + 1800, y: 200 }];

// Pokeball starting
let ballMovement = [{ x: canvas.width + 6000, y: 300 }];

// keys for characters
let isBKey = false,
  isAKey = false;

//start the game
function start() {
  canvasDiv.style.display = "flex";
  canvas.style.display = "block";
  startBtn.style.display = "none";
  restartBtn.style.display = "none";
  splash.style.display = "none";
  gameOverDiv.style.display = "none";
  gameOver.style.display = "none";
  soundBtn.style.display = "none";
  muteBtn.style.display = "block";
  h1.style.display = "block";

  ctx.drawImage(bg, 0, 0, canvas.width, 400);

  //foreground
  drawSand();
  drawWave();

  // Draw Pikachu
  ctx.drawImage(pika, pikaX, pikaY, 125, 125);

  // Rock movement
  for (let i = 0; i < rockMovement.length; i++) {
    ctx.drawImage(rock, rockMovement[i].x, rockMovement[i].y, 300, 300);

    rockMovement[i].x = rockMovement[i].x - speed;

    if (rockMovement[i].x <= 8 && rockMovement[i].x > 0) {
      score++;
    }
    if (rockMovement[i].x < -200) {
      rockMovement[i] = { x: 3000, y: canvas.height - 250 };
    }

    //collision with objects (rock)
    let circle1 = { radius: 45, x: pikaX, y: pikaY };
    let circle2 = {
      radius: 105,
      x: rockMovement[i].x + 100,
      y: canvas.height - 130,
    };

    let dx = circle1.x - circle2.x;
    let dy = circle1.y - circle2.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < circle1.radius + circle2.radius) {
      isGameOver = true;
    }
  }

  // Bird movement
  for (let i = 0; i < birdMovement.length; i++) {
    ctx.drawImage(bird, birdMovement[i].x, birdMovement[i].y, 120, 120);

    birdMovement[i].x = birdMovement[i].x - speed;

    if (birdMovement[i].x <= 8 && birdMovement[i].x > 0) {
      score++;
    }
    if (birdMovement[i].x < -200) {
      birdMovement[i] = { x: 3000, y: 200 };
    }

    //collision with objects (bird)
    let circle1 = { radius: 40, x: pikaX, y: pikaY };
    let circle2 = { radius: 40, x: birdMovement[i].x + 20, y: 200 };

    let dx = circle1.x - circle2.x;
    let dy = circle1.y - circle2.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < circle1.radius + circle2.radius) {
      isGameOver = true;
    }
  }

  // Pokeball movement
  for (let i = 0; i < ballMovement.length; i++) {
    ctx.drawImage(ball, ballMovement[i].x, ballMovement[i].y, 90, 90);

    ballMovement[i].x = ballMovement[i].x - (speed + 2);

    if (ballMovement[i].x <= 8 && ballMovement[i].x > 0) {
      score++;
    }
    if (ballMovement[i].x < -200) {
      ballMovement[i] = { x: 3000, y: 300 };
    }

    //collision with objects (ball)
    let circle1 = { radius: 40, x: pikaX, y: pikaY };
    let circle2 = { radius: 40, x: ballMovement[i].x + 20, y: 300 };

    let dx = circle1.x - circle2.x;
    let dy = circle1.y - circle2.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < circle1.radius + circle2.radius) {
      isGameOver = true;
    }
  }

  // Scoreboard
  ctx.font = "60px Georgia";
  ctx.fillStyle = "black";
  ctx.fillText(
    `Score is: ${score}`,
    canvas.width / 2 - 100,
    canvas.height - 20
  );

  //increase speed with higher score
  if (score >= 15) {
    speed = 16;
  } else if (score >= 10) {
    speed = 14;
  } else if (score >= 6) {
    speed = 12;
  } else if (score >= 3) {
    speed = 10;
  } else {
    speed = 8;
  }

  // collision with ground, top and objects
  if (pikaY > canvas.height - 170 || pikaY < 120) {
    isGameOver = true;
  } else {
    // Pikachu falling
    pikaY = pikaY + pikaFall;
  }

  //Game Over
  if (isGameOver) {
    cancelAnimationFrame(intervalId);
    bummerBrah();
    audio.pause();
    score = 0;
    speed = 7;
    gameOverSong.play();
  } else {
    intervalId = requestAnimationFrame(start);
  }

  // easter egg
  window.onkeydown = function (event) {
    if (event.keyCode == 66) {
      pika = batman;
    } else if (event.keyCode == 65) {
      pika = aqua;
    } else if (event.keyCode == 87) {
      pika = WW;
    } else if (event.keyCode == 70) {
      pika = flash;
    } else if (event.keyCode == 80) {
      pika = pika;
    } else if (event.keyCode == 83) {
      pika = shark;
    }
  };
}

function bummerBrah() {
  isGameOver = false;
  canvas.style.display = "none";
  h1.style.display = "none";
  canvasDiv.style.display = "none";
  startBtn.style.display = "none";
  restartBtn.style.display = "block";
  splash.style.display = "none";
  gameOverDiv.style.display = "flex";
  gameOver.style.display = "block";
  soundBtn.style.display = "none";
  muteBtn.style.display = "none";

  // High Score
  if (highScore < score) {
    let highScore = document.querySelector("#gameOver h3");
    highScore.innerHTML = `High Score: ${score}`;
  }

  // Your score
  let yourScore = document.querySelector("#gameOver h5");
  yourScore.innerHTML = `Your score: ${score}`;

  // Reset Pikachu and objects
  pikaX = 70;
  pikaY = 200;
  rockMovement = [{ x: canvas.width, y: canvas.height - 250 }];
  birdMovement = [{ x: canvas.width + 1800, y: 200 }];
  ballMovement = [{ x: canvas.width + 6000, y: 300 }];
}

function splashScreen() {
  canvas.style.display = "none";
  restartBtn.style.display = "none";
  splash.style.display = "flex";
  startBtn.style.display = "block";
  gameOver.style.display = "none";
  soundBtn.style.display = "block";
  muteBtn.style.display = "none";
  canvasDiv.style.display = "none";
  gameOverDiv.style.display = "none";
  h1.style.display = "block";
}

// start game
window.addEventListener("load", () => {
  splashScreen();

  startBtn.addEventListener("click", () => {
    // when you click the start button
    start();
    audio.play();
  });

  restartBtn.addEventListener("click", () => {
    // when you click the restart
    start();
    audio.play();
  });
  // sound button (on splash screen)
  soundBtn.addEventListener("click", () => {
    // when you click the sound
    if (soundBtn.innerHTML == "Sound") {
      soundBtn.innerHTML = "Mute";
      audio.play();
    } else {
      soundBtn.innerHTML = "Sound";
      audio.pause();
    }
  });
  //mute button during the game
  muteBtn.addEventListener("click", () => {
    if (muteBtn.innerHTML == "Mute") {
      muteBtn.innerHTML = "Sound";
      audio.pause();
    } else {
      muteBtn.innerHTML = "Mute";
      audio.play();
    }
  });

  // Pikachu pumping on the wave
  document.addEventListener("mousedown", () => {
    let currentPosition = pikaX;
    console.log(currentPosition, pikaX);
    pikaFall = pikaFall * -2;
    if (currentPosition - pikaX > 5) {
      pikaFall = 2;
    }
  });
  document.addEventListener("mouseup", () => {
    pikaFall = 2;
  });
});
