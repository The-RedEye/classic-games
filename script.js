let header = document.body.querySelector(".header")
let playArea = document.body.querySelector(".playArea")
let leftUI = document.body.querySelector(".leftUI")
let rightUI = document.body.querySelector(".rightUI")
let topMessage = document.body.querySelector(".topMessage")
let headerTitle = document.body.querySelector(".header-title")
let footer = document.body.querySelector(".footer")

let gameChoice = ""
let returnToHub = document.body.querySelector(".returnToHub")

// Global Declarations for choosing the game
let simon = document.createElement("div")
simon.className = "simonGame"
let simonLogo = document.createElement("img")
simonLogo.src = "simonLOGO.jpg"
simonLogo.className = "imgLogo"
simon.appendChild(simonLogo)

let ticTacToe = document.createElement("div")
ticTacToe.className = "ticTacToeGame"
let ticTacToeLogo = document.createElement("img")
ticTacToeLogo.src = "ticTacToeLOGO.png"
ticTacToeLogo.className = "imgLogo"
ticTacToe.appendChild(ticTacToeLogo)

playArea.appendChild(simon)
playArea.appendChild(ticTacToe)


chooseGame() //clears Hub Board and goes to main gaime function -- last function


function playSimon(){  //Main Simon Game
  let blueSquare   = document.createElement("span")
  let yellowSquare = document.createElement("span")
  let redSquare    = document.createElement("span")
  let greenSquare  = document.createElement("span")
  let centerMessage = document.createElement("div")
 
  let redCell = document.createElement("div")
  let yellowCell = document.createElement("div")
  let blueCell = document.createElement("div")
  let greenCell = document.createElement("div")
  

  let center      = document.createElement("span")
  let startButton = document.createElement("button")
  let timeDisplay = document.createElement("div")
 
  headerTitle.innerText = "SIMON"
  topMessage.innerText = "Press >Start< to begin"
  // make button hidden
  startButton.addEventListener("click", startGame)
  startButton.innerText = "> Start <"
  startButton.className = "startButton"
  centerMessage.className = "centerMessage"
  startButton.style.visibility = "visible"
  
  center.appendChild(startButton)
  center.appendChild(centerMessage)
  center.appendChild(timeDisplay)

  // returnToHub.removeEventListener("mouseover", )
 
  createSimonBoard()
  activateSimonBoard()
  modifyReturnToHub()

  let listen = false
  let simonPattern = []
  let playerPattern = []
  let reset = true
  let level = 1
  let timer = 0
  let time = 10

function startGame(){
 

  if (reset==true){
    simonPattern = []
    startButton.style.visibility="hidden"
    reset = false
  }
  console.log(`lvl${level}`)
  topMessage.innerText = ""
  centerMessage.innerText = `Level ${level} \nShowing Pattern`
  playerPattern = []

  simonPattern.push(getColor())
  console.log("simonPattern:" , simonPattern)
  displayPattern(simonPattern)

}

function createSimonBoard(){
  console.log("inside CreateSimonBoard function")

  playArea.appendChild(center)
  center.className="centerSquare"
  center.style.fontSize = "Large"

  redCell.className = "redCell"
  redCell.appendChild(redSquare)
  redSquare.className="redSquare"
  playArea.appendChild(redCell)
  
  yellowCell.className = "yellowCell"
  yellowCell.appendChild(yellowSquare)
  playArea.appendChild(yellowCell)
  yellowSquare.className="yellowSquare"
  
  blueCell.className = "blueCell"
  blueCell.appendChild(blueSquare)
  playArea.appendChild(blueCell)
  blueSquare.className="blueSquare"

  greenCell.className = "greenCell"
  greenCell.appendChild(greenSquare)
  playArea.appendChild(greenCell)
  greenSquare.className="greenSquare"
  
  redCell.style.visiblity = "visible"
  yellowCell.style.visiblity = "visible"
  blueCell.style.visiblity = "visible"
  greenCell.style.visiblity = "visible"

}

function activateSimonBoard(){
  console.log("inside activateSimonBoard function")
  //creates event listeners for Simon colors
  center.style.visibility = "visible"

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
  clearTimeout(timer)
  time = 10
  timeDisplay.innerText="\n10 second(s)"
  resetAllColors()
  console.log("listening:", listen)
  let pauseInputTimer = ( (pattern.length*1500)-500)

  setTimeout(() => listen = true, pauseInputTimer)
  setTimeout(() => center.style.background = "slateblue", pauseInputTimer)
  setTimeout(() => centerMessage.innerText = `Level ${level} \n Your Turn!`, pauseInputTimer)
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
 timer = setTimeout(beginTimer, pauseInputTimer)
  
}

function modifyReturnToHub(){
  console.log(returnToHub)
  returnToHub.style.visibility = "visible"
  returnToHub.addEventListener("click", returnFromSimon)

  function returnFromSimon(){
    center.style.visibility = "hidden"
    redCell.style.visibility = "hidden"
    yellowCell.style.visibility = "hidden"
    blueCell.style.visibility = "hidden"
    greenCell.style.visibility = "hidden"
    startButton.style.visibility = "hidden"
 
    returnToHub.style.visibility = "hidden"
    chooseGame()
  }

}

function beginTimer(){
  
  timer = setInterval(updateTime, 1000)

  function updateTime() {
    if (time>0){
      time -=1
      timeDisplay.innerText= `\n${time} second(s)`
    }
    if (time<=0){
      timeDisplay.innerText=""
      gameOver()
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
    centerMessage.innerText = `Level ${level} complete! \n \nStarting next level in 3 seconds`
    level +=1
    listen = false
    clearTimeout(timer)
    timeDisplay.innerText=""
    setTimeout(startGame, 3000)
  }
  
}

function gameOver(){
  console.log("in gameOver Function")
  topMessage.innerText = 'Game Over'
  centerMessage.innerText = '\nWrong Pattern \nGame Over'
  reset = true
  level = 1
  startButton.style.visibility="visible"
  clearTimeout(timer)
  timeDisplay.innerText=""
}

function clickRed(){
  
  if (listen == true && playerPattern.length<=simonPattern.length){
    playerPattern.push('red')
    redSquare.style.background = "red"
    redSquare.style.border = "10px double silver"
    redSquare.style.padding = "10px"
    setTimeout(resetRed, 300)
    
  }

  if (listen == false)
   centerMessage.innerText +="\n !WAIT FOR YOUR TURN!"

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

function playTicTacToe(){ //Main TicTacToe Main TTT Game
console.log("inside playTicTacToe")
headerTitle.innerText = "Tic-Tac-Toe"
topMessage.innerText = "Under construction\n Come back later"
modifyReturnToHub()


let tttArray = []
let cellCount = 0
for (let i = 0; i < 3; i++){
  tttArray.push([])
  for (let j = 0; j< 3; j++){
    tttArray[i].push(cellCount)
    let tempCell = document.createElement("div")
    tempCell.id = cellCount
    tempCell.className = "tttCell"
    tempCell.style.gridColumn = i+1
    tempCell.style.gridRow = j+1
    if (i==0 || i==1)
      tempCell.style.borderRight = "5px solid black"
    if (j==0 || j==1)
      tempCell.style.borderBottom = "5px solid black"
        
    playArea.appendChild(tempCell)
    console.log("i,j,tempCell:", i, j, tempCell)
    cellCount++
  }
}

let tttCells = document.body.querySelectorAll(".tttCell")
console.log(tttCells)

createTicTacToeBoard()
startGame()

  function startGame(){
    //ToDo: main game loop for TTT
  }

  function createTicTacToeBoard(){
    // ToDo: draw the grid
    // tttCells[0].style.borderRight = "5px solid black"
    // tttCells[0].style.borderRight = "5px solid black"
    // console.log(tttCells[0])

  }

  function checkWinner(){
    //ToDo: checks if the current player is a winner
  }




  function modifyReturnToHub(){
    //make reset viewable; add click to reset => go to hub
    console.log("in modifyReturnHub function")
    returnToHub.style.visibility = "visible"
    returnToHub.addEventListener("click", returnFromTicTacToe)
  
    function returnFromTicTacToe(){

      //ToDo: make all elements in tictactoe invisible

      //make resetBTN hidden; return to hub
      returnToHub.style.visibility = "hidden"
      chooseGame()
    }
  }
}

function chooseGame(){
  
  createHub()

  function createHub(){
    simon.style.visibility     = "visible"
    ticTacToe.style.visibility = "visible"
    
    simon.addEventListener("click", () => startSimon())
    ticTacToe.addEventListener("click", () => startTicTacToe())

  }

  function startSimon(){
    clearHub()
    gameChoice = "simon"
    playSimon()
  }

  function startTicTacToe(){
    clearHub()
    gameChoice = "ticTacToe"
    playTicTacToe()
  }

  function clearHub(){
    simon.style.visibility     = "hidden"
    ticTacToe.style.visibility = "hidden"
    simon.removeEventListener("click", startSimon)
    ticTacToe.removeEventListener("click", startTicTacToe)
    //clear all parts of hub
  }
}