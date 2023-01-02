
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
const droptargets = document.querySelectorAll(".droptarget");


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

    console.log('parent ', dragged.parentElement)
    // event.target.classList.remove("dragover");
    dragged.parentElement.appendChild(event.target)

    newPlace.appendChild(dragged);

  }
  // 

}))


