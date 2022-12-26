
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


/* events fired on the drop targets */
const droptargets = document.querySelectorAll(".dropzone");


droptargets.forEach(droptarget => droptarget.addEventListener("dragover", (event)=> {

    event.preventDefault();
}, false))


droptargets.forEach(droptarget => droptarget.addEventListener("dragenter", (event) => {

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

