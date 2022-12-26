
// var sample = document.querySelector("#sample")
// var range = document.querySelector("#range")

// // // rgb(255,0,0)
// // var color1_red=255
// // var color1_green=0
// // var color1_blue=0

// // // rgb(0,0,255)
// // var color2_red=0
// // var color2_green=0
// // var color2_blue=255


// document.querySelector("#range").addEventListener("input",(event)=>{
//  let percent = range.value/100.0
 
//  let resultRed = color1_red + percent * (color2_red - color1_red);
//  let resultGreen = color1_green + percent * (color2_green - color1_green);
//  let resultBlue = color1_blue + percent * (color2_blue - color1_blue);
 
//  sample.style.backgroundColor=`rgb(${resultRed},${resultGreen},${resultBlue})`
// })

// INITIAL VALUES

// let colorValues = [
//     [1,2,3], [4,5,6], [7,8,9]
// ]

let colorValues = {
    row1: [[143, 201, 200], [], [], [], [243, 229, 118]],
    row2: [[], [], [], [], []],
    row3: [[], [], [], [], []],
    row4: [[], [], [], [], []],
    row5: [[23, 54, 211], [], [], [], [240, 73, 36]]
}



let blocks = document.querySelectorAll('.block-color');


blocks.forEach((block, index) => {

    let indexNew = 0;

    // pointOne to pointTwo
    if (index < 5 ) {

        percent = index / 4

        // console.log(percent)
    
        let varR = colorValues['row1'][0][0] + percent * (colorValues['row1'][4][0] - colorValues['row1'][0][0]);
        let varG = colorValues['row1'][0][1] + percent * (colorValues['row1'][4][1] - colorValues['row1'][0][1]);
        let varB = colorValues['row1'][0][2] + percent * (colorValues['row1'][4][2] - colorValues['row1'][0][2]);

        const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`
    

        //console.log(generateColor)
        block.style.backgroundColor = generateColor
    }

    // // pointThree to pointFour
    if (index > 14 && index < 20 ) {

        percent = (index - 15) / 4
    
        let varR = colorValues['row5'][0][0] + percent * (colorValues['row5'][4][0] - colorValues['row5'][0][0]);
        let varG = colorValues['row5'][0][1] + percent * (colorValues['row5'][4][1] - colorValues['row5'][0][1]);
        let varB = colorValues['row5'][0][1] + percent * (colorValues['row5'][4][2] - colorValues['row5'][0][2]);

    
        const generateColor =  `rgb( ${varR}, ${varG}, ${varB})`

        //console.log(generateColor)
        block.style.backgroundColor = generateColor

    }

})

const col1 = document.querySelectorAll('.col-1')
    
// pointOne to pointThree
col1.forEach((block, index) => {

    percent = index / 4

    let varR = colorValues['row1'][0][0] + percent * (colorValues['row5'][0][0] - colorValues['row1'][0][0]);
    let varG = colorValues['row1'][0][1] + percent * (colorValues['row5'][0][1] - colorValues['row1'][0][1]);
    let varB = colorValues['row1'][0][2] + percent * (colorValues['row5'][0][2] - colorValues['row1'][0][2]);

    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`


    //console.log(generateColor)
    block.style.backgroundColor = generateColor


})


//pointTwo to PointFour
const col5 = document.querySelectorAll('.col-5')

col5.forEach((block, index) => {

    percent = index / 4

    let varR = colorValues['row1'][4][0] + percent * (colorValues['row5'][4][0] - colorValues['row1'][4][0]);
    let varG = colorValues['row1'][4][1] + percent * (colorValues['row5'][4][1] - colorValues['row1'][4][1]);
    let varB = colorValues['row1'][4][2] + percent * (colorValues['row5'][4][2] - colorValues['row1'][4][2]);

    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`

    //console.log(generateColor)
    block.style.backgroundColor = generateColor

})

const col2 = document.querySelectorAll('.col-2')

