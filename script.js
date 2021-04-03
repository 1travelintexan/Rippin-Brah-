//canvas
let canvas = document.querySelector('canvas')
canvas.style.backgroundColor = "blue"
canvas.style.border = '8px solid grey'

canvas.style.marginTop = '-300px'

//  Paintbrush
let ctx = canvas.getContext('2d')




// How to load images
// let bg = document.createElement('img)
// let bg = new Image()
// bg.src = './images/bg.png


//  Buttons
let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')

// Background
let bg = new Image()
bg.src = './background.jpeg'

//forground
function drawSand(){
    ctx.beginPath()
    ctx.fillStyle = '#f2be7e'
    ctx.fillRect(0, canvas.height-150, canvas.width, 300)
    ctx.closePath()
}

// Wave
function drawWave(){
ctx.beginPath()
ctx.fillStyle = 'blue'
ctx.fillRect(0,200, canvas.width, 300)
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





}

// Pikacu
let pika = new Image()
pika.src = './pikachu.png'

let title = document.querySelector('#title')
let gameOver = document.querySelector('#gameOver')
let isGameOver= false;
let intervalId = 0
let score = 0
     

function start() {
    ctx.drawImage(bg, 0, 0)
    drawWave()
    //foreground
    drawSand()
    ctx.drawImage(pika, 80, 250, 90, 150)
    canvas.style.display = 'block'
    startBtn.style.display = 'none'
    restartBtn.style.display = 'none'
    title.style.display = 'none'
    
    // scoreboard
    ctx.font = '40px Georgia'
    ctx.fillStyle = 'black'
    ctx.fillText(`Score is: ${score}`, canvas.width / 2 - 100, canvas.height - 60)
    //background


}

function restart(){
    isGameOver == false;
    start()
}

function splash(){
    canvas.style.display ='none'
   restartBtn.style.display ='none'
   title.style.display = 'block'
   startBtn.style.display = 'block'
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
        restart()
        
    })
})