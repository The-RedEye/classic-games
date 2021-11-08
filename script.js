let header = document.body.querySelector(".header")
let playArea = document.body.querySelector(".playArea")
let leftUI = document.body.querySelector(".leftUI")
let rightUI = document.body.querySelector(".rightUI")
let topMessage = document.body.querySelector(".topMessage")

playSimon()
//Q1 : why is play area below
//Q2 : Center text alignment and <span> not aligned with grid


function playSimon(){
  let blueSquare   = document.createElement("span")
  let yellowSquare = document.createElement("span")
  let redSquare    = document.createElement("span")
  let greenSquare  = document.createElement("span")

  let center      = document.createElement("span")
  let startButton = document.createElement("button")
  // make button hidden
  startButton.innerText = "Start"
  center.appendChild(startButton)
  let listen = false

  createSimonBoard()
  activateSimonBoard()
  let gameOver = false
  let simonPattern = []
  let playerPattern = []

  while(gameOver == false){  //main game loop
    
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
  playArea.appendChild(yellowSquare)
  yellowSquare.className="yellowSquare"
  playArea.appendChild(redSquare)
  redSquare.className="redSquare"
  playArea.appendChild(blueSquare)
  blueSquare.className="blueSquare"
  playArea.appendChild(greenSquare)
  greenSquare.className="greenSquare"
  playArea.appendChild(center)
  center.className="centerSquare"
  center.innerHTML="<h2>S I M O N</h2>"

}

function activateSimonBoard(){
  console.log("inside activateSimonBoard function - WIP")
  //creates event listeners for Simon colors
  redSquare.addEventListener("click", clickRed)
  redSquare.addEventListener("mouseover", highlightRed)
  redSquare.addEventListener("mouseleave", resetRed)
  yellowSquare.addEventListener("click", clickYellow)
  yellowSquare.addEventListener("mouseover", highlightYellow)
  yellowSquare.addEventListener("mouseleave", resetYellow)
  blueSquare.addEventListener("click", clickBlue)
  blueSquare.addEventListener("mouseover", highlighBlue)
  blueSquare.addEventListener("mouseleave", resetBlue)
  greenSquare.addEventListener("click", clickGreen)
  greenSquare.addEventListener("mouseover", highlightGreen)
  greenSquare.addEventListener("mouseleave", resetGreen)
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

function clickRed(){
  console.log("Red Clicked")
  redSquare.style.border = "10px double silver"
  redSquare.style.padding = "10px"

}

function clickGreen(){
  console.log("Green Clicked")
  greenSquare.style.border = "10px double silver"
  greenSquare.style.padding = "10px"

}

function clickBlue(){
  console.log("Blue Clicked")
  blueSquare.style.border = "10px double silver"
  blueSquare.style.padding = "10px"

}

function clickYellow(){
  console.log("Yellow Clicked")
  yellowSquare.style.border = "10px double silver"
  yellowSquare.style.padding = "10px"

}

function highlightRed(){
  console.log("Highlighting Red")
  redSquare.style.background = "red"
}

function highlightYellow(){
  console.log("Highlighting Yellow")
  yellowSquare.style.background = "yellow"
}

function highlightGreen(){
  console.log("Highlighting Green")
  greenSquare.style.background = "greenyellow"
}

function highlighBlue(){
  console.log("Highlighting Blue")
  blueSquare.style.background = "skyblue"
}

function resetRed(){
  console.log("resetting Red")
  redSquare.style.background = "darkred"
  redSquare.style.border = "2px solid black"
  redSquare.style.padding = "18px"
}

function resetYellow(){
  console.log("resetting Yellow")
  yellowSquare.style.background = "goldenrod"
  yellowSquare.style.border = "2px solid black"
  yellowSquare.style.padding = "18px"
}

function resetBlue(){
  console.log("resetting Blue")
  blueSquare.style.background = "darkblue"
  blueSquare.style.border = "2px solid black"
  blueSquare.style.padding = "18px"
}

function resetGreen(){
  console.log("resetting Green")
  greenSquare.style.background = "darkgreen"
  greenSquare.style.border = "2px solid black"
  greenSquare.style.padding = "18px"
}


} // end playSimon function ***MOVE OTHER FUNCTIONS INSIDE***

  
