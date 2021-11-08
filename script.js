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
  startButton.addEventListener("click", startGame)
  startButton.innerText = "> Start <"
  console.log(startButton)
  center.appendChild(startButton)
  
  console.log("center:", center)
  let listen = false

  createSimonBoard()
  activateSimonBoard()
  let simonPattern = []
  let playerPattern = []
  
  let level = 1

function startGame(){
  console.log("in startGame Function")
  topMessage.innerText = ""
  playerPattern = []

  simonPattern.push(getColor())
  console.log("simonPattern:" , simonPattern)
  displayPattern(simonPattern)


}


function createSimonBoard(){
  console.log("inside CreateSimonBoard function - WIP")
  //creates the css formatting for Simon game
  let redCell = document.createElement("div")
  redCell.className = "redCell"
  redCell.appendChild(redSquare)
  redSquare.className="redSquare"
  playArea.appendChild(redCell)

  let yellowCell = document.createElement("div")
  yellowCell.className = "yellowCell"
  yellowCell.appendChild(yellowSquare)
  playArea.appendChild(yellowCell)
  yellowSquare.className="yellowSquare"

  let blueCell = document.createElement("div")
  blueCell.className = "blueCell"
  blueCell.appendChild(blueSquare)
  playArea.appendChild(blueCell)
  blueSquare.className="blueSquare"

  let greenCell = document.createElement("div")
  greenCell.className = "greenCell"
  greenCell.appendChild(greenSquare)
  playArea.appendChild(greenCell)
  greenSquare.className="greenSquare"

  playArea.appendChild(center)
  console.log("center:", center)
  center.className="centerSquare"
 

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
  blueSquare.addEventListener("mouseover", highlightBlue)
  blueSquare.addEventListener("mouseleave", resetBlue)
  greenSquare.addEventListener("click", clickGreen)
  greenSquare.addEventListener("mouseover", highlightGreen)
  greenSquare.addEventListener("mouseleave", resetGreen)
}

function getColor(){
  rand = 1
  // Math.floor(Math.random()*4)
  // console.log(`color value found: ${rand}`)
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
  console.log("simonPattern Length:", pattern.length)

  resetGreen()
  resetBlue()
  resetRed()
  resetYellow()
  if (pattern.length == 0)
    listen = true
    if (pattern[0]=="red"){
      highlightRed()
      setTimeout(() => displayPattern(pattern.slice(1)), 1000)
    }
    else if(pattern[i]=="green"){
      highlightGreen()
      setTimeout(resetGreen, 1000)
    }
    else if(pattern[i]=="blue"){
      highlightBlue()
      setTimeout(resetBlue, 1000)
    }
    else{
      highlightYellow()
      setTimeout(resetYellow, 1000)
    }
  
  
}

function acceptPattern(patternLength){
  console.log("inside of acceptPattern function - WIP")
  
  while (playerPattern.length < patternLength){
    
    //listen for events - append to playerPattern
    
  //out of loop - showCorrect()
  }
}

function isCorrect(){
  console.log("in isCorrect function")
  for (let i = 0; i< simonPattern.length; i++){
    if (simonPattern[i] != playerPattern[i])
      return false
  }

  return true
}

function gameOver(){
  console.log("in gameOver Function")
  topMessage.innerText = 'Game Over'
}

function clickRed(){
  console.log(`Red Clicked, listen:${listen}`)
  redSquare.style.border = "10px double silver"
  redSquare.style.padding = "10px"

  if (listen == true)
    playerPattern.push('red')

  if (playerPattern.length == simonPattern.length){
    if (isCorrect()){
      topMessage.innerText = `Level ${level} complete!`
      level +=1
      listen = false
      setTimeout(startGame, 3000)
    }
    else{
      gameOver()
    }
  }

}

function clickGreen(){
  console.log("Green Clicked")
  greenSquare.style.border = "10px double silver"
  greenSquare.style.padding = "10px"
  if (listen==true)
    playerPattern.push('green')

    if (playerPattern.length == simonPattern.length){
    if (playerPattern == simonPattern){
      isCorrect(true)
    }
    else
      isCorrect(false)
  }

}

function clickBlue(){
  console.log("Blue Clicked")
  blueSquare.style.border = "10px double silver"
  blueSquare.style.padding = "10px"
  if (listen == true)
    playerPattern.push('blue')

    if (playerPattern.length == simonPattern.length){
    if (playerPattern == simonPattern){
      isCorrect(true)
    }
    else
      isCorrect(false)
  }

}

function clickYellow(){
  console.log("Yellow Clicked")
  yellowSquare.style.border = "10px double silver"
  yellowSquare.style.padding = "10px"
  if (listen == true)
    playerPattern.push('yellow')

    if (playerPattern.length == simonPattern.length){
    if (playerPattern == simonPattern){
      isCorrect(true)
    }
    else
      isCorrect(false)
  }

}

function highlightRed(){
  redSquare.style.background = "red"
}

function highlightYellow(){
  yellowSquare.style.background = "yellow"
}

function highlightGreen(){
  greenSquare.style.background = "greenyellow"
}

function highlightBlue(){
  blueSquare.style.background = "skyblue"
}

function resetRed(){
  redSquare.style.background = "darkred"
  redSquare.style.border = "2px solid black"
  redSquare.style.padding = "18px"
}

function resetYellow(){
  yellowSquare.style.background = "goldenrod"
  yellowSquare.style.border = "2px solid black"
  yellowSquare.style.padding = "18px"
}

function resetBlue(){
  blueSquare.style.background = "darkblue"
  blueSquare.style.border = "2px solid black"
  blueSquare.style.padding = "18px"
}

function resetGreen(){
  greenSquare.style.background = "darkgreen"
  greenSquare.style.border = "2px solid black"
  greenSquare.style.padding = "18px"
}




} // end playSimon function ***MOVE OTHER FUNCTIONS INSIDE***

  
