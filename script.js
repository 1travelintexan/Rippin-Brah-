//canvas
let canvas = document.querySelector('canvas')
canvas.style.backgroundColor = "blue"
canvas.style.border = '4px solid grey'
canvas.style.marginTop = '-300px'

// Music
let audio = new Audio('./audio/Pokemon- TV Theme Song (Full) MUBlogger.mp3')
let sound = new Audio('./audio/soundEffect.wav')
let gameOverSong = new Audio('./audio/mixkit-sad-game-over-trombone-471.wav')
//  Paintbrush
let ctx = canvas.getContext('2d')
let title = document.querySelector('#title')

//  Buttons
let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')

// Game Over
let gameOver = document.querySelector('#gameOver')

// Background
let bg = new Image()
bg.src = './images/background.jpeg'

// Pikacu
let pika = new Image()
pika.src = './images/pikachu.png'

// Big rock
let rock = new Image()
rock.src = './images/rock.png'

// Ball
let ball = new Image()
ball.src = './images/pngkit_pokeball-icon-png_2017019.png'

//bird 
let bird = new Image()
bird.src = './images/PixelArt.png'

// Pika falling amount
let pikaFall = 2, pikaX = 70, pikaY = 200;


// let rockX = 500
// let ballX = 750
let isGameOver= false;
let intervalId = 0
let speed = 6
let score = 0

//increase speed with higher score
if(score == 5 || score==10 ||score==15){
    speed ++
}


//Foreground
function drawSand(){
    ctx.beginPath()
    ctx.fillStyle = '#f2be7e'
    ctx.fillRect(0, canvas.height-150, canvas.width, 150)
    ctx.closePath()
}

// Draw Wave
function drawWave(){
ctx.beginPath()
ctx.fillStyle = 'blue'
ctx.fillRect(0,200, canvas.width, 300)
ctx.closePath()

//white lines for wave
ctx.beginPath()
ctx.strokeStyle = 'white'
ctx.moveTo (500, 400)
ctx.lineTo (300, 300)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = 'white'
ctx.moveTo (700, 400)
ctx.lineTo (500, 300)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = 'white'
ctx.moveTo (800, 500)
ctx.lineTo (600, 400)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = 'white'
ctx.moveTo (400, 500)
ctx.lineTo (200, 400)
ctx.stroke()
ctx.closePath()

// big block of white
ctx.beginPath()
ctx.fillStyle = '#c3e2fa'
ctx.fillRect(0,200, 80, 350)
ctx.closePath()

//small circles
ctx.beginPath()
ctx.fillStyle = '#98cffa'
ctx.arc(250,200,15,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = '#98cffa'
ctx.arc(275,200,10,0,Math.PI*2)
ctx.fill()
ctx.closePath()

//big circles
ctx.beginPath()
ctx.fillStyle = '#87cbff'
ctx.arc(0,200,30,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = '#87cbff'
ctx.arc(50,200,30,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = '#87cbff'
ctx.arc(100,200,30,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = '#87cbff'
ctx.arc(90,230,30,0,Math.PI*2)
ctx.fill()
ctx.closePath()

//medium circles
ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(150,230,15,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(120,220,25,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(185,210,22,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(120,220,25,0,Math.PI*2)
ctx.fill()
ctx.closePath()


ctx.beginPath()
ctx.fillStyle = '#87cbff'
ctx.arc(180,200,20,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = '#87cbff'
ctx.arc(150,200,20,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = '#87cbff'
ctx.arc(220,200,20,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(0,550,20,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(40,550,30,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(80,550,20,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(10,520,10,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(50,520,20,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(80,520,20,0,Math.PI*2)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(20,500,20,0,Math.PI*2)
ctx.fill()
ctx.closePath()

//black lines down
ctx.beginPath()
ctx.strokeStyle = 'black'
ctx.moveTo (50, 300)
ctx.lineTo (50, 450)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = 'black'
ctx.moveTo (75, 250)
ctx.lineTo (75, 400)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = 'black'
ctx.moveTo (20, 220)
ctx.lineTo (20, 400)
ctx.stroke()
ctx.closePath()

}

// Rock starting 
let rockMovement = [
    {x: canvas.width, y: canvas.height - 250},
    // {x: canvas.width + 5000, y: canvas.height - 250}
]

// Bird starting
let birdMovement = [
    {x:canvas.width + 2000, y: 150},
    // {x:canvas.width + 6000, y:230}
]

// Pokeball starting
let ballMovement = [
    {x:canvas.width + 4000, y: 290},
]

// Pikachu pumping on the wave
document.addEventListener('mousedown' , () => {
    pikaFall =  pikaFall * -1.5
})
document.addEventListener('mouseup' , () => {
    pikaFall = 2
})
     
function start() {
    canvas.style.display = 'block'
    startBtn.style.display = 'none'
    restartBtn.style.display = 'none'
    title.style.display = 'none'
    gameOver.style.display = 'none'
    audio.play()
   
    ctx.drawImage(bg, 0, 0, canvas.width, 400)

    //foreground
    drawSand()
    drawWave()

    //rock movement
    for(let i = 0; i < rockMovement.length; i++){
        ctx.drawImage(rock, rockMovement[i].x, rockMovement[i].y, 300, 200) 

        rockMovement[i].x = rockMovement[i].x - speed 
    
        if(rockMovement[i].x <= 0){
            score = score +1
            sound.play()
        }
        if(rockMovement[i].x < - 200){
            rockMovement[i] = {x: 3000, y: canvas.height - 250}
        }
    }

    //bird movement
    for(let i = 0; i < birdMovement.length; i++){
        ctx.drawImage(bird, birdMovement[i].x, birdMovement[i].y, 120, 120) 

        birdMovement[i].x = birdMovement[i].x - speed 

        if(birdMovement[i].x == 0){
            score ++
            sound.play()
        }
        if(birdMovement[i].x < - 200){
            birdMovement[i] = {x: 3000, y: 120}
        }
    }

    //Pokeball movement
    for(let i = 0; i < ballMovement.length; i++){
        ctx.drawImage(ball, ballMovement[i].x, ballMovement[i].y, 90, 90) 

        ballMovement[i].x = ballMovement[i].x - speed * 1.5 
        
        if(ballMovement[i].x == 0){
            score ++
            sound.play()
        }
        if(ballMovement[i].x < - 200){
            ballMovement[i] = {x: 3000, y: 290}
        }
    }
    ctx.drawImage(pika, pikaX, pikaY, 90, 90)
    
    // scoreboard
    ctx.font = '40px Georgia'
    ctx.fillStyle = 'black'
    ctx.fillText(`Score is: ${score}`, canvas.width / 2 - 100, canvas.height - 20)

    // collision with ground, top and objects
    if(pikaY  > canvas.height - 170 || pikaY < 120){
        isGameOver = true
    } else {
        // Pikachu falling
    pikaY = pikaY + pikaFall
    }
    
    //Game Over
    if(isGameOver){
        cancelAnimationFrame(intervalId)
        bummerBrah()  
        audio.pause()
        score = 0
        speed = 5
        gameOverSong.play()
    }
    else {
        intervalId = requestAnimationFrame(start)
    }
}

function bummerBrah(){
    isGameOver = false
    canvas.style.display = 'none'
    startBtn.style.display = 'none'
    restartBtn.style.display = 'block'
    title.style.display = 'none'
    gameOver.style.display = 'block'

    // Reset Pikachu and objects
    pikaX = 70
    pikaY = 200
    rockMovement = [
        {x: canvas.width, y: canvas.height - 250}
    ]
    birdMovement = [
        {x:canvas.width + 2000, y: 120}
    ]
    ballMovement = [
        {x:canvas.width + 3500, y: 290}
    ]
    
// Print score on Game Over
    // ctx.font = '40px Georgia'
    // ctx.fillStyle = 'black'
    // ctx.fillText(`Score: ${score}`, canvas.width / 2 - 100, canvas.height - 20)
}

function splash(){
    canvas.style.display = 'none'
    restartBtn.style.display = 'none'
    title.style.display = 'block'
    startBtn.style.display = 'block'
    gameOver.style.display = 'none'
}

 // start game
window.addEventListener('load', () => {
  splash()
    
    startBtn.addEventListener('click', () => {
        // when you click the start button
        start()
    })

    restartBtn.addEventListener('click', () => {
        // when you click the restart 
        start()
    })
})