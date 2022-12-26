
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
    0: [[143, 201, 200], [], [], [], [243, 229, 118]],
    1: [[], [], [], [], []],
    2: [[], [], [], [], []],
    3: [[], [], [], [], []],
    4: [[23, 54, 211], [], [], [], [230, 97, 125]]
}



let blocks = document.querySelectorAll('.block-color');


blocks.forEach((block, index) => {

    // pointOne to pointTwo
    if (index < 5 ) {

        percent = index / 4
    
        let varR = colorValues[0][0][0] + percent * (colorValues[0][4][0] - colorValues[0][0][0]);
        let varG = colorValues[0][0][1] + percent * (colorValues[0][4][1] - colorValues[0][0][1]);
        let varB = colorValues[0][0][2] + percent * (colorValues[0][4][2] - colorValues[0][0][2]);

        const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`
    
        colorValues[0][index][0] = varR
        colorValues[0][index][1] = varG
        colorValues[0][index][2] = varB

        // console.log('index of ', index, colorValues[0][index])

        //console.log(generateColor)
        block.style.backgroundColor = generateColor
    }

    // // pointThree to pointFour
    if (index > 20 && index < 25 ) {

        index -= 20

        percent = index / 4


        let varR = colorValues[4][0][0] + percent * (colorValues[4][4][0] - colorValues[4][0][0]);
        let varG = colorValues[4][0][1] + percent * (colorValues[4][4][1] - colorValues[4][0][1]);
        let varB = colorValues[4][0][1] + percent * (colorValues[4][4][2] - colorValues[4][0][2]);

        // if (index > 21) {

            colorValues[4][index][0] = varR
            colorValues[4][index][1] = varG
            colorValues[4][index][2] = varB
        // }


        console.log('index ', index, colorValues[4][1])
        // console.log(varR, varG, varB)
    
        const generateColor =  `rgb( ${varR}, ${varG}, ${varB})`

        //console.log(generateColor)
        block.style.backgroundColor = generateColor

    }

})

const col1 = document.querySelectorAll('.col-1')
    
// pointOne to pointThree
col1.forEach((block, index) => {

    // console.log('block: ', block,  'index: ', index)

    percent = index / 4

    let varR = colorValues[0][0][0] + percent * (colorValues[4][0][0] - colorValues[0][0][0]);
    let varG = colorValues[0][0][1] + percent * (colorValues[4][0][1] - colorValues[0][0][1]);
    let varB = colorValues[0][0][2] + percent * (colorValues[4][0][2] - colorValues[0][0][2]);

    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`

    // colorValues[0][0][index] = varR
    // colorValues[0][0][index] = varG
    // colorValues[0][0][index] = varB

    // console.log('index of ', index, colorValues[index][4])

    //console.log(generateColor)
    block.style.backgroundColor = generateColor
})

// console.log(colorValues[2])

// pointTwo to PointFour
const col5 = document.querySelectorAll('.col-5')

col5.forEach((block, index) => {

    percent = index / 4

    let varR = colorValues[0][4][0] + percent * (colorValues[4][4][0] - colorValues[0][4][0]);
    let varG = colorValues[0][4][1] + percent * (colorValues[4][4][1] - colorValues[0][4][1]);
    let varB = colorValues[0][4][2] + percent * (colorValues[4][4][2] - colorValues[0][4][2]);

    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`

    // colorValues[4][4][index] = varR
    // colorValues[4][4][index] = varG
    // colorValues[4][4][index] = varB

    // console.log('index of ', index, colorValues[4][4][index])

    //console.log(generateColor)
    block.style.backgroundColor = generateColor

})

const col2 = document.querySelectorAll('.col-2')




col2.forEach((block, index) => {

    percent = index / 4

    let varR = colorValues[0][1][0] + percent * (colorValues[4][1][0] - colorValues[0][1][0]);
    let varG = colorValues[0][1][1] + percent * (colorValues[4][1][1] - colorValues[0][1][1]);
    let varB = colorValues[0][1][2] + percent * (colorValues[4][1][2] - colorValues[0][1][2]);


    varB = (varB + colorValues[0][0][2]) / 2


    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`

    // colorValues[index][4][0] = varR
    // colorValues[index][4][1] = varG
    // colorValues[index][4][2] = varB

    // console.log(generateColor)

    // console.log('index of ', index, colorValues[0][index])

    //console.log(generateColor)
    block.style.backgroundColor = generateColor

})

console.log('colorValues: ', colorValues)

const col3 = document.querySelectorAll('.col-3')

col3.forEach((block, index) => {

    percent = index / 4

    let varR = colorValues[0][2][0] + percent * (colorValues[4][2][0] - colorValues[0][1][0]);
    let varG = colorValues[0][2][1] + percent * (colorValues[4][2][1] - colorValues[0][1][1]);
    let varB = colorValues[0][2][2] + percent * (colorValues[4][2][2] - colorValues[0][1][2]);


    varR = (varR + colorValues[0][0][0]) / 2
    varB = (varB + colorValues[0][1][2]) / 2
    
    

    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`

    // colorValues[index][4][0] = varR
    // colorValues[index][4][1] = varG
    // colorValues[index][4][2] = varB

    // console.log(generateColor)

    // console.log('index of ', index, colorValues[0][index])

    //console.log(generateColor)
    block.style.backgroundColor = generateColor

})

const col4 = document.querySelectorAll('.col-4')

col4.forEach((block, index) => {

    percent = index / 4

    let varR = colorValues[0][3][0] + percent * (colorValues[4][3][0] - colorValues[0][1][0]);
    let varG = colorValues[0][3][1] + percent * (colorValues[4][3][1] - colorValues[0][1][1]);
    let varB = colorValues[0][3][2] + percent * (colorValues[4][3][2] - colorValues[0][1][2]);

    varR = (varR + colorValues[0][2][0]) / 2
    varB = (varB + colorValues[0][2][2]) / 2
 

    
    
    

    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`

    // colorValues[index][4][0] = varR
    // colorValues[index][4][1] = varG
    // colorValues[index][4][2] = varB

    // console.log(generateColor)

    // console.log('index of ', index, colorValues[0][index])

    //console.log(generateColor)
    block.style.backgroundColor = generateColor

})
