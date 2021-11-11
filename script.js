let header = document.body.querySelector(".header")
let playArea = document.body.querySelector(".playArea")
let leftUI = document.body.querySelector(".leftUI")
let rightUI = document.body.querySelector(".rightUI")
let topMessage = document.body.querySelector(".topMessage")
let headerTitle = document.body.querySelector(".header-title")
let footer = document.body.querySelector(".footer")
let chessArea = document.body.querySelector("#chessArea")

let lineBreak = document.createElement("br")

let gameChoice = ""
let returnToHub = document.body.querySelector(".returnToHub")

// Global Declarations for choosing the game
let simon = document.createElement("div")
simon.className = "simonGame"
let simonLogo = document.createElement("img")
simonLogo.src = "simonLOGO.jpg"
simonLogo.className = "imgLogo"
simon.appendChild(simonLogo)

let chess = document.createElement("div")
chess.className = "chessGame"
let chessLogo = document.createElement("img")
chessLogo.src = "chessLOGO.jpg"
chessLogo.className = "imgLogo"
chess.appendChild(chessLogo)

let ticTacToe = document.createElement("div")
ticTacToe.className = "ticTacToeGame"
let ticTacToeLogo = document.createElement("img")
ticTacToeLogo.src = "ticTacToeLOGO.png"
ticTacToeLogo.className = "imgLogo"
ticTacToe.appendChild(ticTacToeLogo)

playArea.appendChild(simon)
playArea.appendChild(ticTacToe)
playArea.appendChild(chess)

chooseGame() //clears Hub Board and goes to main gaime function -- last function

function playSimon(){  //Main Simon Main Game
  let blueSquare   = document.createElement("span")
  let yellowSquare = document.createElement("span")
  let redSquare    = document.createElement("span")
  let greenSquare  = document.createElement("span")
  let centerMessage = document.createElement("div")
 
  let redCell = document.createElement("div")
  let yellowCell = document.createElement("div")
  let blueCell = document.createElement("div")
  let greenCell = document.createElement("div")
  
  let currentScoreTitle = document.createElement("div")
  let currentScore = document.createElement("div")
  let highScoreTitle = document.createElement("div")
  let highScore = document.createElement("div")

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
  modifyReturnToHubFromSimon()

  let listen = false
  let simonPattern = []
  let playerPattern = []
  let reset = true
  let level = 1
  let timer = 0
  let time = 10
  let highScoreValue = 0

  function startGame(){
    resetHistory()

    if (reset==true){
      simonPattern = []
      startButton.style.visibility="hidden"
      reset = false
    }
    currentScore.innerText = playerPattern.length
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
    leftUI.style.visibility = "visible"
    rightUI.style.visibility = "visible"

    leftUI.innerText = "Your Pattern:"
    rightUI.innerText = ""

    
    currentScoreTitle.innerText = "Current Score:"
    
    currentScore.innerText = "0"
    console.log(currentScoreTitle)
    rightUI.appendChild(currentScoreTitle)
    rightUI.appendChild(currentScore)

    rightUI.appendChild(lineBreak)

    
    highScoreTitle.innerText = "High Score:"
    
    highScore.innerText = "0"
    rightUI.appendChild(highScoreTitle)
    rightUI.appendChild(highScore)




  }

  function resetHistory(){
    leftUI.innerHTML = ""
    leftUI.innerText = "Your Pattern:"
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
    disableListen()
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
  setTimeout(enableListen, pauseInputTimer)
    
  }

  function disableListen(){
    redSquare.removeEventListener("click", clickRed)
    blueSquare.removeEventListener("click", clickBlue)
    greenSquare.removeEventListener("click", clickGreen)
    yellowSquare.removeEventListener("click", clickYellow)
  }

  function enableListen(){
    redSquare.addEventListener("click", clickRed)
    blueSquare.addEventListener("click", clickBlue)
    greenSquare.addEventListener("click", clickGreen)
    yellowSquare.addEventListener("click", clickYellow)
  }

  function modifyReturnToHubFromSimon(){//Simon
    console.log("in returnToHub(Simon) function")
    returnToHub.style.visibility = "visible"
    returnToHub.addEventListener("click", returnFromSimon)

    function returnFromSimon(){
      center.style.visibility = "hidden"
      redCell.style.visibility = "hidden"
      yellowCell.style.visibility = "hidden"
      blueCell.style.visibility = "hidden"
      greenCell.style.visibility = "hidden"
      startButton.style.visibility = "hidden"
      leftUI.style.visibility = "hidden"
      rightUI.style.visibility = "hidden"
      leftUI.innerHTML = ""
      rightUI.innerHTML = ""
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

  function isCorrect(){//Simon
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

  function gameOver(){//Simon
    console.log("in gameOver Function")
    topMessage.innerText = 'Game Over'
    centerMessage.innerText = '\nWrong Pattern \nGame Over'
    reset = true
    level = 1
    startButton.style.visibility="visible"
    clearTimeout(timer)
    timeDisplay.innerText=""
    currentScore.innerText = playerPattern.length
    
    if(parseInt(currentScore.innerText)> highScoreValue){
      highScoreValue = playerPattern.length
      highScore.innerText = highScoreValue
    }
  }

  function clickRed(){
    
    if (listen == true && playerPattern.length<=simonPattern.length){
      playerPattern.push('red')
      addPatternHistory('Red')
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
      addPatternHistory('Green')
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
      addPatternHistory('Blue')
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
      addPatternHistory('Yellow')
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

  function addPatternHistory(color){
    let newColor = document.createElement("div")
    newColor.innerText = color
    if(color == 'Red')
      newColor.style.color = "red"
    if(color == 'Blue')
      newColor.style.color = "blue"
    if(color == 'Green')
      newColor.style.color = "green"
    if(color == 'Yellow')
      newColor.style.color = "goldenrod"

  leftUI.appendChild(newColor)
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

} // end playSimon function (Main function)

function playTicTacToe(){ //Main TicTacToe Main TTT Game
  console.log("inside playTicTacToe")
  headerTitle.innerText = "Tic-Tac-Toe"
  topMessage.innerText = "First Player (X) to go"
  modifyReturnToHubFromTTT()

  let tttArray = []
  let cellCount = 0
  let TicTacToeArea = document.body.querySelector("#ticTacToeArea")
  
  for (let i = 0; i < 3; i++){
    tttArray.push([])
    for (let j = 0; j< 3; j++){
      tttArray[i].push(cellCount)
      let tempCell = document.createElement("div")
        tempCell.id = cellCount
        tempCell.className = "tttCell"
        tempCell.style.gridColumn = j+1
        tempCell.style.gridRow = i+1
        tempCell.innerText = ''
        tempCell.style.fontSize = "x-large"
      if (i==0 || i==1)
        tempCell.style.borderBottom = "5px solid black"
      if (j==0 || j==1)
        tempCell.style.borderRight = "5px solid black"
      
      playArea.appendChild(tempCell)
      cellCount++
    }
  }
  
  console.log("playArea after creating cells:", playArea)
  let tttCells = null
   tttCells = document.body.querySelectorAll(".tttCell")
  console.log("tttCells after querySelectorAll:" , tttCells)
  let currentPlayer = 'X'
  createTicTacToeBoard()
  startGame()

    function startGame(){
      currentPlayer = 'X'
      //ToDo: main game loop for TTT
    }

    function createTicTacToeBoard(){
      for (let i = 0; i<9; i++)
        tttCells[i].addEventListener("click", () => playerMove(tttCells[i]))

      leftUI.style.visibility = "visible"
      rightUI.style.visibility = "visible"
      //create playAgain Button add listen function

      function playerMove(cell){
        if(cell.innerText == ''){
          cell.innerText = currentPlayer
          if(currentPlayer == 'X'){
            currentPlayer = 'O'
            topMessage.innerText = "Second Player (O) to go"
          }
          else{
            currentPlayer = 'X'
            topMessage.innerText = "First Player (X) to go"
          }
        }

        checkWinner()
      }
    }

    function checkWinner(){
      //ToDo: checks if the current player is a winner
      let winnerFound = false
      console.log("inside checkWinner function")
      if (winnerFound == true)
        showPlayAgain()
    }

    function showPlayAgain(){
      console.log("inside showPlayAgain")
      //change visibility of playAgain Button
    }


    function modifyReturnToHubFromTTT(){//TicTacToe TTT
      //make reset viewable; add click to reset => go to hub
      console.log("in modifyReturnHub(TTT) function")
      returnToHub.style.visibility = "visible"
      returnToHub.addEventListener("click", returnFromTicTacToe)
    
      function returnFromTicTacToe(){ //has bugs
        console.log("playArea before removing cells:", playArea)
        //make resetBTN hidden; return to hub
        returnToHub.style.visibility = "hidden"
        for (let i=0; i<tttCells.length; i++){
          tttCells[i].remove()
        }      
        
        leftUI.style.visibility = "hidden"
        rightUI.style.visibility = "hidden"
        chooseGame()
      }
    }
}// end of playTicTacToe function (Main function)

function playChess(){
  console.log("in playChess function")

  let chessGrid = []
  let currentPiece = null
  let eatenPieces = []

  modifyReturnToHubFromChess()
  createChessBoard() 
  
  let chessSquares = document.body.querySelectorAll(".chessSquare")
  
  resetChessPieces("white") //choose the color on bottom to control


  chessArea.style.visibility = "visible"  
  headerTitle.innerText = "Chess"
  topMessage.innerText = "Chess is under production, \n Please come back later"
  
  
  
  function createChessBoard(){
    for (let i = 0; i<8; i++){
    chessGrid.push([])
      for(let j = 0; j <8; j++){

        let row = j+1
        let col = i+1
       
        const chessPiece = {
          piece: null,
          color: null,
          row: i+1,
          col: j+1
        };
       
        chessGrid[i].push(chessPiece)

        let tempCell = document.createElement("div")
        tempCell.style.gridRow = row
        tempCell.style.gridColumn = col
        tempCell.className = 'chessSquare'
        tempCell.id = `${row}-${col}`
          let pieceImg = document.createElement("img")  //new code
          tempCell.appendChild(pieceImg)                //new code

        if (i%2==0) {
          if (j%2==0)
            tempCell.style.background = "navajowhite"
          else
            tempCell.style.background = "grey"
        }
        else{
          if (j%2==0)
            tempCell.style.background = "grey"
          else
            tempCell.style.background = "navajowhite"
        }
        // console.log("create listner for:", j, i)
        tempCell.addEventListener("click", () =>  clickOnSquare( j, i))
        chessArea.appendChild(tempCell)
      }
    }
  }

  function clickOnSquare(row, col){
    console.log("clickOnSquare:", row, col, "with", currentPiece)
    if (currentPiece == null){
      
      console.log(chessGrid[row][col])
      
      if(chessGrid[row][col].piece!=null){
        currentPiece = {
          piece: chessGrid[row][col].piece,
          color: chessGrid[row][col].color,
          row: chessGrid[row][col].row,
          col: chessGrid[row][col].col
        };
        
        console.log("currentPiece is now:" , currentPiece)
        let updatedTopMessage = `picked up a ${currentPiece.color} ${currentPiece.piece}`
        topMessage.innerText = updatedTopMessage
        chessGrid[row][col].piece = null
        chessGrid[row][col].color = null
        replaceHTMLSquare(row+1, col+1, null)
      }      
      console.log("after clicking on a piece, currentPiece:", currentPiece)
    }
    else{
      if(chessGrid[row][col].piece == null){
        eatenPieces.push([`${chessGrid[row][col].color}`], [`${chessGrid[row][col].piece}`])
        console.log(eatenPieces)
        //create function to update eaten pieces
      }
      chessGrid[row][col].piece = currentPiece.piece
      chessGrid[row][col].piece = currentPiece.color
      console.log(currentPiece)
      replaceHTMLSquare(row+1, col+1, currentPiece)

      currentPiece = null
      //if square clicked on is empty
        //place current piece on clicked square
   
      //else
        //'eat' the piece on location and place currentPiece
    }
    console.log("exiting clickOn function, piece is:", currentPiece)
  }

  function replaceHTMLSquare(row, col, value){
    
    for (let i = 0; i < chessSquares.length; i++){ 
      if (chessSquares[i].id == `${row}-${col}`) {
        
          chessSquares[i].firstChild.remove()  
        if (value!=null){
          console.log(value)
          let chessPieceImg = document.createElement("img")
          console.log(`${value.color}${value.piece}.png`)
          chessPieceImg.src = `${value.color}${value.piece}.png`
          chessSquares[i].appendChild(chessPieceImg)

        }          
      }  
        
    }
    // updateEatenPieces()
  }// end replaceHTMLSquare function

  function updateImg(piece){
    switch (piece){
      case "whitePawn":
        return "whitePawn.png"
    }
  }

  // function getPieceAt(row, col){
  //   let result = ""
  //   console.log("getPieceAt:", row, col)
  //   for(let i = 0; i<chessSquares.length; i++){
  //     console.log("checking chessSquare[i] i/row/col:", i, "/", chessSquares[i].gridRow, "/", chessSquares[i].gridColumn)
  //     if (parseInt(chessSquares[i].gridRow) == row && parseInt(chessSquares[i].gridColumn) == col){
  //       console.log("match found:", chessSquares.id)
  //       result = chessSquares[i].id
  //       chessSquares[i].id = "empty"
        
  //     }
  //   }
  //   console.log("piece is:", result)
  //   return result
  // } // end of getPieceAt(row, col) function (chess)
  

  function resetChessPieces(color){
    console.log("inside reset Chess pieces")

    for (let i = 0; i < chessGrid.length; i++){
      for (let j = 0; j< chessGrid[i].length; j++){
        if (chessGrid[i][j].row == 7){ //reset bottom pawns (white)
          chessGrid[i][j].piece = "Pawn"
          chessGrid[i][j].color = "white"
        }
        else if (chessGrid[i][j].row == 2){//reset top pawns (black)
          chessGrid[i][j].piece = "Pawn"
          chessGrid[i][j].color = "black"
        }

      }
    } // end of chessGrid iterative outer loop to reset object values (color = white)
    for (let i = 0; i < chessSquares.length; i++){ //update html with chessGrid.obj values
      let tempSquare = chessSquares[i]
      let tempSquareCoord = tempSquare.id.split("-")
      console.log(tempSquareCoord, tempSquare )

      if (tempSquareCoord[0] == 7){
        let pieceImg = tempSquare.firstChild
        pieceImg.src = "whitePawn.png"
        pieceImg.className = "chessPieceImg"
      }

      if (tempSquareCoord[0] == 2){
        let pieceImg = tempSquare.firstChild
        pieceImg.src = "blackPawn.png"
        pieceImg.className = "chessPieceImg"
      }


    } //end of chessSquares (node) loop to modify child images with chess piece

          
    // for (let i = 0; i < chessSquares.length; i++){
    //   if (parseInt(chessSquares[i].style.gridRow) == 7){//reset white pawns
    //     let pieceImg = document.createElement("img")
    //     pieceImg.src = "whitePawn.png"
    //     pieceImg.className = "chessPieceImg"
    //     chessSquares[i].appendChild(pieceImg) 
    //   }
    //   if (parseInt(chessSquares[i].style.gridRow) == 2){//reset black pawns
    //     let pieceImg = document.createElement("img")
    //     pieceImg.src = "blackPawn.png"
    //     pieceImg.className = "blackPieceImg"
    //     chessSquares[i].appendChild(pieceImg)
    //   }
      
    // }
    console.log("after reset, chessSquares:", chessSquares)
  } //end of resetChessPieces(color) function

  function modifyReturnToHubFromChess(){//chess
    console.log("inside modifyReturnToHub(Chess) function")
    returnToHub.style.visibility = "visible"
    returnToHub.addEventListener("click", returnFromChess)
    function returnFromChess(){
    
      chessArea.style.visibility = "hidden"
      for (let i = 0; i<chessSquares.length; i++)
        chessSquares[i].remove()
     
      chooseGame()
    }
  }
}

   
simon.addEventListener("click", startSimon)
ticTacToe.addEventListener("click", startTicTacToe)
chess.addEventListener("click" , startChess)


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

  function startChess(){
    clearHub()
    gameChoice = "chess"
    playChess()
  }

  function clearHub(){
    console.log("in clear Hub function")
    simon.style.visibility     = "hidden"
    ticTacToe.style.visibility = "hidden"
    chess.style.visibility     = "hidden"
    //clear all parts of hub
  }


function chooseGame(){
  headerTitle.innerText = "Classic Games"
  topMessage.innerText = "Choose Your Game"

    simon.style.visibility     = "visible"
    ticTacToe.style.visibility = "visible"
    chess.style.visibility     = "visible"
}
