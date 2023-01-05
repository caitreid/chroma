

let pointOne = [143, 201, 200]
let pointTwo = [243, 229, 118]
let pointThree = [23, 54, 211]
let pointFour = [230, 97, 125]

let colorValues = {
    0: [pointOne, [], [], [], pointTwo],
    1: [[], [], [], [], []],
    2: [[], [], [], [], []],
    3: [[], [], [], [], []],
    4: [pointThree, [], [], [], pointFour]
}



let blocks = document.querySelectorAll('.puzzle__piece');


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


        // console.log('index ', index, colorValues[4][1])
        // console.log(varR, varG, varB)
    
        const generateColor =  `rgb( ${varR}, ${varG}, ${varB})`

        //console.log(generateColor)
        block.style.backgroundColor = generateColor

    }

})

// const col1 = document.querySelectorAll('.puzzle--col-1')
const col1 = document.querySelectorAll('[data-column="1"]')
    
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
// const col5 = document.querySelectorAll('.puzzle--col-5')
const col5 = document.querySelectorAll('[data-column="5"]')

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

// const col2 = document.querySelectorAll('.puzzle--col-2')
const col2 = document.querySelectorAll('[data-column="2"]')



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

// console.log('colorValues: ', colorValues)

// const col3 = document.querySelectorAll('.puzzle--col-3')
const col3 = document.querySelectorAll('[data-column="3"]')

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

// const col4 = document.querySelectorAll('.puzzle--col-4')
const col4 = document.querySelectorAll('[data-column="4"]')

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


// make sure you're updating the object to hold all of the values
// not sure when that will come in handy



//------------------

// write a function that tracks every initial position of each div
// it then calculates the final position of that div based on the randomized array
// then it dynamically creates key frames for each div to slowly change from its inital position to the final position