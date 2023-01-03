// let blocks = document.querySelectorAll('.color'); // DECLARED IN color.js

/* events fired on the drop targets */
const droptargets = document.querySelectorAll(".droptarget");



const setupBoard = () => {

  let dragged;

  /* events fired on the draggable target */
  const elements = document.querySelectorAll(".draggable");

  // give each element a listener - log that its dragging
  // elements.forEach(element => element.addEventListener("drag", (event) => {console.log('dragggging')}))

  elements.forEach(element => element.addEventListener("dragstart", (event)=> {
      // store a ref. on the dragged elem

    dragged = event.target;

    // Add this element's id to the drag payload so the drop handler will
    // know which element to add to its tree
    event.dataTransfer.setData("text", event.target.id);
    event.dataTransfer.effectAllowed = "move";

    // make it half transparent
    event.target.classList.add("dragging");
  }))


  elements.forEach(element => element.addEventListener("dragend", (event)=> {
      // reset the transparency
    event.target.classList.remove("dragging");
  }))





  droptargets.forEach(droptarget => droptarget.addEventListener("dragover", (event)=> {

    event.preventDefault();

  }, false))


  // droptargets.forEach(droptarget => droptarget.addEventListener("dragenter", (event) => {

  //   // console.log('event.target ', event.target)

  //   if (event.target.parentElement.classList.contains("droptarget")) {

  //     event.target.classList.add("dragover"); // adds pink to BG 
      
  //   }

  // }))


  // droptargets.forEach(droptarget => droptarget.addEventListener("dragleave", (event)=> {

  //   // reset background of potential drop target when the draggable element leaves it
  //   if (event.target.parentElement.classList.contains("droptarget")) {

  //     event.target.classList.remove("dragover");

  //   }

  // }))


  droptargets.forEach(droptarget => droptarget.addEventListener("drop", (event) => {

    // prevent default action (open as link for some elements)
    event.preventDefault();

    let newPlace = event.target.parentElement

    // move dragged element to the selected drop target
    if (newPlace.classList.contains("droptarget")) {

      // console.log('parent ', dragged.parentElement)
      // event.target.classList.remove("dragover");
      dragged.parentElement.appendChild(event.target)

      newPlace.appendChild(dragged);

    }
    
    checkGame()

  }))

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

// Used like so
// var arr = [2, 11, 37, 42];
// shuffle(arr);
// console.log(arr);


const startGame = () => {

  console.log('start game')

  reset.classList.remove('hide')
  play.classList.add('hide')
  

  let newArr = [];

  // set up the edges of the game
  blocks.forEach((block, index) => {

    // all outside points
    if (index < 5 || index > 19 && index < 25 || block.classList.contains('col-1' ) || block.classList.contains('col-5')) {
      
      block.innerHTML = 
          `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="5" />
          </svg>`

      //block.classList.remove('draggable')

    }

    else {

      block.classList.add('draggable')

      newArr.push(block.dataset.id)
      
    }
  })

  // inner game
  shuffle(newArr)
  console.log('shuffle ', newArr)

  const innerSquares = document.querySelectorAll('.draggable')

  innerSquares.forEach(square => { square.remove() } ) // takes them off the board

  let shuffleList = []

  // create a list of dropzones that match the shuffled order of the new Array
  for (i = 0; i < newArr.length; i++ ){

    droptargets.forEach(target => {

      if (target.dataset.id === newArr[i]) {

        shuffleList.push(target)

      }

    })

  }



  for (let i = 0; i < shuffleList.length; i ++) {

    for (let i = 0; i < innerSquares.length; i++) {

      shuffleList[i].appendChild(innerSquares[i])

    }
  }


  console.log('shuffle list ', shuffleList)

  // needs to come at the end, it seems
  setupBoard()
  

}


const checkGame = () => {

  let count = 0;

  // let droptargets = document.querySelectorAll('.droptarget')
  let blocks = document.querySelectorAll('.color')

  blocks.forEach((block, blockIndex) => {

    // if block's id matches its parent's id
    if (block.dataset.id === block.parentElement.dataset.id) {
      
      count++


      if (count === 25) {
        
        alert('you won!!!')

        resetGame()

      }

    }

  })

}

const resetGame = () => {

  console.log('reset game');

  blocks.forEach((block, index) => {
  
    block.innerHTML = ""

    block.classList.remove('draggable')

    reset.classList.add('hide')
    play.classList.remove('hide')
    // put elements back in proper order if stopping mid-game




  })
}

let play = document.querySelector('.button-play')

play.addEventListener("click", startGame);

let reset = document.querySelector('.button-reset')

reset.addEventListener("click", resetGame)

