
let dragged;

/* events fired on the draggable target */
const elements = document.querySelectorAll(".draggable");

// give each element a listener - log that its dragging
// elements.forEach(element => element.addEventListener("drag", (event) => {console.log('dragggging')}))


elements.forEach(element => element.addEventListener("dragstart", (event)=> {
    // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.classList.add("dragging");
}))


elements.forEach(element => element.addEventListener("dragend", (event)=> {
    // reset the transparency
  event.target.classList.remove("dragging");
}))


/* events fired on the drop targets */
const droptargets = document.querySelectorAll(".dropzone");


droptargets.forEach(droptarget => droptarget.addEventListener("dragover", (event)=> {
    // prevent default to allow drop
    event.preventDefault();
}, false))


droptargets.forEach(droptarget => droptarget.addEventListener("dragenter", (event) => {
      // highlight potential drop target when the draggable element enters it


  console.log('event.target', event.target)
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
}))



droptargets.forEach(droptarget => droptarget.addEventListener("dragleave", (event)=> {
      // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
}))




droptargets.forEach(droptarget => droptarget.addEventListener("drop", (event) => {

  // prevent default action (open as link for some elements)
  event.preventDefault();

  // move dragged element to the selected drop target
  if (event.target.classList.contains("dropzone")) {

    event.target.classList.remove("dragover");

    event.target.appendChild(dragged);

  }

}))



// create a variable that holds the place for one of the RGB values
// create a for-loop that increments that value 
// put it in a function
// pass the function to a SetInterval method, running the function once
// every second or something like that

// do this for color in the gradient

// find out which 

// const postcssPresetEnv = require('postcss-preset-env');

// const yourConfig = {
// 	plugins: [
// 		postcssPresetEnv({ stage: 0 })
// 	]
// }