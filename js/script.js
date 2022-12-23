// // Get the element by id
// let elements = document.querySelectorAll('.block-color')

// function dragstart_handler(ev) {

//     // Add the target element's id to the data transfer object
//     ev.dataTransfer.setData("text/html", ev.target.outerHTML);
//     ev.dataTransfer.dropEffect = "move";

//     console.log('dragggging')
// }

// function drop_handler(ev) {
//     ev.preventDefault();
//     // Get the id of the target and add the moved element to the target's DOM
//     const data = ev.dataTransfer.getData("text/html", ev.target.outerHTML);
//     ev.target.appendChild(document.getElementById(data));
// }


// let dropZone = document.getElementById(17)

// window.addEventListener("DOMContentLoaded", () => {

//     // Add the ondragstart event listener
//     elements.forEach(element => { element.addEventListener("dragstart", dragstart_handler); });

//     dropZone.addEventListener('dragend', drop_handler)
// });
  


// ------------
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

// target.addEventListener("dragenter", (event) => {
//   // highlight potential drop target when the draggable element enters it
//   if (event.target.classList.contains("dropzone")) {
//     event.target.classList.add("dragover");
//   }
// });

droptargets.forEach(droptarget => droptarget.addEventListener("dragleave", (event)=> {
      // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
}))

// target.addEventListener("dragleave", (event) => {
//   // reset background of potential drop target when the draggable element leaves it
//   if (event.target.classList.contains("dropzone")) {
//     event.target.classList.remove("dragover");
//   }
// });


droptargets.forEach(droptarget => droptarget.addEventListener("drop", (event) => {

  // prevent default action (open as link for some elements)
  event.preventDefault();

  // move dragged element to the selected drop target
  if (event.target.classList.contains("dropzone")) {

    event.target.classList.remove("dragover");

    event.target.appendChild(dragged);

  }

}))

// target.addEventListener("drop", (event) => {
//   // prevent default action (open as link for some elements)
//   event.preventDefault();
//   // move dragged element to the selected drop target
//   if (event.target.classList.contains("dropzone")) {
//     event.target.classList.remove("dragover");
//     event.target.appendChild(dragged);
//   }
// });
