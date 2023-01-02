
const startGame = () => {

    console.log('start game')

    let blocks = document.querySelectorAll('.color');

    blocks.forEach((block, index) => {

        // all outside points
        if (index < 5 || index > 19 && index < 25 || block.classList.contains('col-1' ) || block.classList.contains('col-5')) {
            block.innerHTML = 
                `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="5" />
                </svg>`

            block.classList.remove('draggable')
        }

    })



}


let play = document.querySelector('.button-play')

play.addEventListener("click", startGame);