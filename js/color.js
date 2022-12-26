let blocks = document.querySelectorAll('.block-color');

// let varR = 0;
// let varB = Math.floor(Math.random() * 255)
// let varG = 255;

// blocks.forEach(block => {

//     console.log(varB)
    
//     varB += 10

//     const generateColor =  `rgb( ${varR}, ${varB}, ${varG})`

//     block.style.backgroundColor = generateColor

// }












let pointOne = document.querySelector("#block-1")
let pointTwo = document.querySelector("#block-4")
let pointThree = document.querySelector("#block-12")
let pointFour = document.querySelector("#block-16")


var sample=document.querySelector("#sample")
var range=document.querySelector("#range")

// pointOne
// rgb(143, 201, 200)
var color1_red=143
var color1_green=201
var color1_blue=200

// pointTwo
// rgb(230, 121, 97)
var color2_red=243
var color2_green=229
var color2_blue=118

// pointThree
var color3_red = 23
var color3_green = 54
var color3_blue = 211

// pointFour
var color4_red = 230
var color4_green = 121
var color4_blue = 97



document.querySelector("#range").addEventListener("input",(event)=>{
 let percent= range.value/100.0
 
 let resultRed = color1_red + percent * (color2_red - color1_red);
 let resultGreen = color1_green + percent * (color2_green - color1_green);
 let resultBlue = color1_blue + percent * (color2_blue - color1_blue);
 
 sample.style.backgroundColor=`rgb(${resultRed},${resultGreen},${resultBlue})`
})

const genColors = () => {
    let percentage = [0, 0.25, 0.5, 0.75, 1]

    for (let i = 0; i < percentage.length; i++) {

        console.log('percentage', percentage[i])

        // let varR = color1_red + percent * (color3_red - color1_red);
        // let varG = color1_green + percent * (color3_green - color1_green);
        // let varB = color1_blue + percent * (color3_blue - color1_blue);


        // const generateColor =  `rgb( ${varR}, ${varG}, ${varB})`

        // return generateColor
    }
}

blocksRowOne = document.querySelectorAll('.block-color');

// console.log(blocksRowOne)

blocks.forEach((block, index) => {

    let indexNew = 0;

    // pointOne to pointTwo
    if (index < 5 ) {

        percent = index / 4

        // console.log(percent)
    
        let varR = color1_red + percent * (color2_red - color1_red);
        let varG = color1_green + percent * (color2_green - color1_green);
        let varB = color1_blue + percent * (color2_blue - color1_blue);

        const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`
    

        //console.log(generateColor)
        block.style.backgroundColor = generateColor

    }

    // // pointThree to pointFour
    if (index > 14 && index < 20 ) {

        percent = (index - 15) / 4
    
        let varR = color3_red + percent * (color4_red - color3_red);
        let varG = color3_green + percent * (color4_green - color3_green);
        let varB = color3_blue + percent * (color4_blue - color3_blue);
    
    
        const generateColor =  `rgb( ${varR}, ${varG}, ${varB})`

        //console.log(generateColor)
        block.style.backgroundColor = generateColor

    }



})

const col1 = document.querySelectorAll('.col-1')
    
// pointOne to pointThree
col1.forEach((item, index) => {

    percent = index / 4

    let varR = color1_red + percent * (color3_red - color1_red);
    let varG = color1_green + percent * (color3_green - color1_green);
    let varB = color1_blue + percent * (color3_blue - color1_blue);

    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`


    //console.log(generateColor)
    item.style.backgroundColor = generateColor


})


//pointTwo to PointFour
const col5 = document.querySelectorAll('.col-5')

col5.forEach((item, index) => {

    percent = index / 4

    let varR = color2_red + percent * (color4_red - color2_red);
    let varG = color2_green + percent * (color4_green - color2_green);
    let varB = color2_blue + percent * (color4_blue - color2_blue);

    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`


    //console.log(generateColor)
    item.style.backgroundColor = generateColor

})

const col2 = document.querySelectorAll('.col-2')

col2.forEach((item, index) => {

    // let firstColor = item[0].style.backgroundColor

    // console.log(firstColor)

    if (index === 0) {
        let firstColor = item.style.backgroundColor

        console.log(firstColor)
    }


})