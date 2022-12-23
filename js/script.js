// Get the element by id
let elements = document.querySelectorAll('.block-color')

function dragstart_handler(ev) {
    
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/html", ev.target.outerHTML);
    ev.dataTransfer.dropEffect = "copyMove";

    console.log('dragggging')
}

window.addEventListener("DOMContentLoaded", () => {

    // Add the ondragstart event listener
    elements.forEach(element => { element.addEventListener("dragstart", dragstart_handler); });

});
  
