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
  let centerMessage = document.createElement("div")

  let center      = document.createElement("span")
  let startButton = document.createElement("button")
  
  // make button hidden
  startButton.addEventListener("click", startGame)
  startButton.innerText = "> Start <"
  startButton.className = "startButton"
  
  center.appendChild(startButton)
  center.appendChild(centerMessage)
 
  createSimonBoard()
  activateSimonBoard()

  let listen = false
  let simonPattern = []
  let playerPattern = []
  let reset = true
  let level = 1

function startGame(){
  if (reset==true){
    simonPattern = []
    reset = false
  }
  console.log(`lvl${level}`)
  topMessage.innerText = ""
  centerMessage.innerText = `\nLevel ${level} - Showing Pattern`
  playerPattern = []

  simonPattern.push(getColor())
  console.log("simonPattern:" , simonPattern)
  displayPattern(simonPattern)

}

function createSimonBoard(){
  console.log("inside CreateSimonBoard function")
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
  center.className="centerSquare"
  center.style.fontSize = "Large"
 

}

function activateSimonBoard(){
  console.log("inside activateSimonBoard function")
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
  console.log("inside of displayPattern function")
  console.log("simonPattern Length:", pattern.length)
  center.style.background = "slategrey"
  listen = false
  resetAllColors()
  console.log("listening:", listen)
  let pauseInputTimer = ( (pattern.length*1500)-500)

  setTimeout(() => listen = true, pauseInputTimer)
  setTimeout(() => center.style.background = "slateblue", pauseInputTimer)
  setTimeout(() => centerMessage.innerText = `\n Level ${level}, \n Your Turn!`, pauseInputTimer)
  for (i = 0; i < pattern.length; i++){
    console.log("patternLength:", pattern)
    if (pattern[i]=="red"){
      setTimeout(() => highlightRed(), (i*1000) )
      setTimeout(() => resetRed(), (i*1000) + 500)
    }
    else if(pattern[i]=="green"){
      setTimeout(() => highlightGreen(), (i*1000) )
      setTimeout(() => resetGreen(), (i*1000) + 500)
    }
    else if(pattern[i]=="blue"){
      setTimeout(() => highlightBlue(), (i*1000) )
      setTimeout(() => resetBlue(), (i*1000) + 500)
    }
    else {
      setTimeout(() => highlightYellow(), (i*1000) )
      setTimeout(() => resetYellow(), (i*1000) + 500)
    }

  }
  
}

function isCorrect(){
  console.log("in isCorrect function")
  let check = true
  for (let i = 0; i< simonPattern.length; i++){
    if (simonPattern[i] != playerPattern[i])
      check = false
  }

  if (check == false)
    gameOver()
  else{
    topMessage.innerText = `Level ${level} complete!`
    centerMessage.innerText = `\nLevel ${level} complete! \n Starting next level in 3 seconds`
    level +=1
    listen = false
    setTimeout(startGame, 3000)
  }
  
}

function gameOver(){
  console.log("in gameOver Function")
  topMessage.innerText = 'Game Over'
  centerMessage.innerText = '\n\nWrong Pattern \nGame Over'
  reset = true
  level = 1
}

function clickRed(){
  
  if (listen == true && playerPattern.length<=simonPattern.length){
    playerPattern.push('red')
    redSquare.style.background = "red"
    redSquare.style.border = "10px double silver"
    redSquare.style.padding = "10px"
    
  }

  if (listen == false)
   centerMessage.innerText +="\n\n !WAIT FOR YOUR TURN!"

  if (playerPattern.length >= simonPattern.length)
    isCorrect() 

}

function clickGreen(){
  console.log("Green Clicked")
  
  if (listen==true){
    playerPattern.push('green')
    greenSquare.style.background = "greenyellow"
    greenSquare.style.border = "10px double silver"
    greenSquare.style.padding = "10px"
    setTimeout(resetRed, 300)
  }

  if (listen == false)
   centerMessage.innerText +="\n\n !WAIT FOR YOUR TURN!"

  if (playerPattern.length >= simonPattern.length)
    isCorrect() 

}

function clickBlue(){
  console.log("Blue Clicked")

  if (listen == true){
    playerPattern.push('blue')
    blueSquare.style.background = "skyblue"
    blueSquare.style.border = "10px double silver"
    blueSquare.style.padding = "10px"
    setTimeout(resetBlue, 300)
  }

  if (listen == false)
   centerMessage.innerText +="\n\n !WAIT FOR YOUR TURN!"

  if (playerPattern.length >= simonPattern.length)
    isCorrect() 

}

function clickYellow(){
  console.log("Yellow Clicked")
  
  if (listen == true){
    playerPattern.push('yellow')
    yellowSquare.style.background = "yellow"
    yellowSquare.style.border = "10px double silver"
    yellowSquare.style.padding = "10px"
    setTimeout(resetYellow, 300)
  }

  if (listen == false)
   centerMessage.innerText +="\n\n !WAIT FOR YOUR TURN!"

  if (playerPattern.length >= simonPattern.length)
    isCorrect() 

  
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

function resetAllColors(){
  resetGreen()
  resetBlue()
  resetYellow()
  resetRed()
}




} // end playSimon function ***MOVE OTHER FUNCTIONS INSIDE***

  
