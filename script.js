let header = document.body.querySelector(".header")
let gameArea = document.body.querySelector(".gameArea")
let leftUI = document.body.querySelector(".leftUI")
let rightUI = document.body.querySelector(".rightUI")

playSimon()

function playSimon(){
  let blueSquare   = document.createElement("span")
  let yellowSquare = document.createElement("span")
  let redSquare    = document.createElement("span")
  let greenSquare  = document.createElement("span")
  let center = document.createElement("span")
  let listen = false

  createSimonBoard()
  activateSimonBoard()
  let gameOver = false
  let simonPattern = []
  let playerPattern = []

  while(gameOver == false){
    
    simonPattern.push(getColor())
    displayPattern(simonPattern)
    listen = true
    acceptPattern(simonPattern.length)
    listen = false
    if (simonPattern == playerPattern)
      isCorrect(true)
    else
      isCorrect(false)

    gameOver = true //temporary check to stop initial infinite loop
  }


function createSimonBoard(){
  console.log("inside CreateSimonBoard function - WIP")
  //creates the css formatting for Simon game
}

function activateSimonBoard(){
  console.log("inside activateSimonBoard function - WIP")
  //creates event listeners for Simon colors
}

function getColor(){
  rand = Math.floor(Math.random()*4)
  console.log(`color value found: ${rand}`)
  if(rand == 0)
    return 'yellow'
  else if (rand == 1)
    return 'red'
  else if (rand == 2)
    return 'blue'
  else
    return 'green'

}

function displayPattern(pattern){
  console.log("inside of displayPattern function - WIP")
  //accepts pattern as an argument and displays it
}

function acceptPattern(patternLength){
  console.log("inside of acceptPattern function - WIP")
  
  //while (playerPattern.length < patternLength){
    //listen for events - append to playerPattern

  //out of loop - showCorrect()
  }

function yellowListen(){
  if (listen == true)
    playerPattern.push('yellow')
}

function isCorrect(result){
  if (result == true){
    //display winner result
    //pause
    playerPattern = []
  }
  else{
    gameOver = true
  }
}


} // end playSimon function ***MOVE OTHER FUNCTIONS INSIDE***

  
