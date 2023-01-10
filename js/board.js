// puzzle + board elements
const targets = document.querySelectorAll(".puzzle__target");
const pieces = document.querySelectorAll('.puzzle__piece');
const winner = document.querySelector('.text__announcement');
const star = document.querySelector('.star__image')

// buttons 
const play = document.querySelector('.button--play')
const reset = document.querySelector('.button--reset')
const audio = document.querySelector('.button--audio')

let attached = false; 


// Make puzzle draggable 
const setupBoard = () => {


  console.log('test')
  winner.innerHTML = "" // remove any old winner announcements

  let dragged;

  if (!attached) {

    attached = true; // only attached eventListeners once

    const dragstart = (event) => {

      // set dragged element to a variable
      dragged = event.target;
  
      // Add this element's id to the drag payload so the drop handler will know which element to add to its tree
      event.dataTransfer.setData("text", event.target.id);
      event.dataTransfer.effectAllowed = "move";
  
      // shadow on puzzle piece
      event.target.classList.add("dragging");
    }

    pieces.forEach((piece) => {

      piece.addEventListener("dragstart", dragstart);
      piece.addEventListener("dragend", (event) => { event.target.classList.remove("dragging") })
    
    })
  
    const dropEvent = (event) => {

      // prevent default action (open as link for some elements)
      event.preventDefault();
  
      let newPlace = event.target.parentElement
  
      // move dragged element to the selected drop target
      if (newPlace.classList.contains("puzzle__target")) {
        
        // find the dragged element's parent and append the square it's hover above
        dragged.parentElement.appendChild(event.target)
  
        // append dragged element to the new drop target
        newPlace.appendChild(dragged);
  
      }
      
      checkGame()

    }
  
    targets.forEach((droptarget) =>{

      droptarget.addEventListener("dragover", (event)=> { event.preventDefault() }, false);
      droptarget.addEventListener("drop", dropEvent)
      
    })

  }

}

// Fisher–Yates shuffle
function shuffle(array) {

  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
  }

  return array;
  
}

const startGame = () => {

  console.log('start game')

  reset.classList.remove('button--hide')
  play.classList.add('button--hide')
  star.classList.add('star--hide')
  
  let newArr = [];

  // set up the edges of the game
  pieces.forEach((piece, index) => {

    // Add Black dots to all outside points
    if (index < 5 || index > 19 && index < 25 || piece.dataset.column == 1 || piece.dataset.column == 5 ) {

      piece.innerHTML = 
      `<svg class="black-dot" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="5" />
      </svg>`

    }

    else {

      piece.draggable = true

      piece.classList.add('draggable')

      newArr.push(piece.dataset.id)
      
    }

    let blackDots = document.querySelectorAll('.black-dot')

    setTimeout(() => {

      blackDots.forEach(dot => { dot.classList.add('visible') }), 0

    })
    
  })

  // inner game
  shuffle(newArr)
 
  const innerPieces = document.querySelectorAll('.draggable')

  innerPieces.forEach(square => { square.remove() } ) // takes them off the board

  let shuffleList = []

  // create a list of dropzones that match the shuffled order of the new Array
  for (i = 0; i < newArr.length; i++ ){

    targets.forEach(target => {

      if (target.dataset.id === newArr[i]) {

        shuffleList.push(target)

      }

    })

  }

  for (let i = 0; i < shuffleList.length; i ++) {

    for (let i = 0; i < innerPieces.length; i++) {

      shuffleList[i].appendChild(innerPieces[i])

    }
  }

  // needs to come at the end
  setupBoard()
}


const checkGame = () => {

  let count = 0;

  // let pieces = document.querySelectorAll('.puzzle__piece')

  pieces.forEach((piece) => {

    // if piece's id matches its parent's id
    if (piece.dataset.id === piece.parentElement.dataset.id) {
      
      count++

      if (count === 25) {

        star.classList.remove('star--hide')
        
        winner.innerHTML = "YOU WON! CONGRATS."

        play.innerHTML = "BEGIN AGAIN"
        
        resetGame()

      }

    }

  })

}


const resetGame = () => {

  pieces.forEach((piece, index) => {
  
    // remove all black dots from outside pieces
    if (index < 5 || index > 19 && index < 25 || piece.dataset.column == 1 || piece.dataset.column == 5 ) {
    
      piece.innerHTML = "" 
    
    }

    piece.classList.remove('draggable') 
    piece.draggable = false
    reset.classList.add('button--hide')
    play.classList.remove('button--hide')
    

    // put elements back in proper order if stopping mid-game to reset

    const innerPieces = document.querySelectorAll('.draggable');

    for (let i = 0; i < innerPieces.length; i++) {
  
      for (let j = 0; j < targets.length; j++) {
  
      
        if (innerPieces[i].dataset.id === targets[j].dataset.id ) {
    
          targets[j].appendChild(innerPieces[i])
    
        }

      }

    }

  })

}

// const initAudio = () => {

//   audio.play()


// }

// audio.addEventListener("click", initAudio)

play.addEventListener("click", () => { setTimeout(startGame, 0) })

reset.addEventListener("click", resetGame)

