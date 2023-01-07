const col1 = document.querySelectorAll('[data-column="1"]')
const col2 = document.querySelectorAll('[data-column="2"]')
const col3 = document.querySelectorAll('[data-column="3"]')
const col4 = document.querySelectorAll('[data-column="4"]')
const col5 = document.querySelectorAll('[data-column="5"]')


let pointOne = [143, 201, 200] // Light Blue
let pointTwo = [243, 229, 118] // Yellow
let pointThree = [23, 54, 211] // Dark Blue
let pointFour = [230, 96, 0] // Red-Orange


let colorValues = {
    0: [pointOne, [], [], [], pointTwo],
    1: [pointThree, [], [], [], pointFour]
}

let varR;
let varG;
let varB;

const colorVars = [varR, varG, varB]

pieces.forEach((piece, index) => {

    // pointOne to pointTwo
    if (index < 5 ) {

        percent = index / 4
    
        let varR = pointOne[0] + percent * (pointTwo[0] - pointOne[0]);
        let varG = pointOne[1] + percent * (pointTwo[1] - pointOne[1]);
        let varB = pointOne[2] + percent * (pointTwo[2] - pointOne[2]);

        const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`

        piece.style.backgroundColor = generateColor
    
        colorValues[0][index][0] = varR
        colorValues[0][index][1] = varG
        colorValues[0][index][2] = varB
    }

    // pointThree to pointFour
    if (index > 20 && index < 25 ) {

        index -= 20 

        percent = index / 4

        let varR = pointThree[0] + percent * (pointFour[0] - pointThree[0]);
        let varG = pointThree[1] + percent * (pointFour[1] - pointThree[1]);
        let varB = pointThree[2] + percent * (pointFour[2] - pointThree[2]);

        colorValues[1][index][0] = varR
        colorValues[1][index][1] = varG
        colorValues[1][index][2] = varB
    
        const generateColor =  `rgb( ${varR}, ${varG}, ${varB})`

        piece.style.backgroundColor = generateColor
    }

})

//console.log('color values ', colorValues)

// pointOne to pointThree
col1.forEach((piece, index) => {

    percent = index / 4

    let varR = pointOne[0] + percent * (pointThree[0] - pointOne[0]);
    let varG = pointOne[1] + percent * (pointThree[1] - pointOne[1]);
    let varB = pointOne[2] + percent * (pointThree[2] - pointOne[2]);

    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`

    piece.style.backgroundColor = generateColor
    
})

col2.forEach((piece, index) => {

    percent = index / 4

    let varR = colorValues[0][1][0] + percent * (colorValues[1][1][0] - colorValues[0][1][0]);
    let varG = colorValues[0][1][1] + percent * (colorValues[1][1][1] - colorValues[0][1][1]);
    let varB = colorValues[0][1][2] + percent * (colorValues[1][1][2] - colorValues[0][1][2]);


    varB = (varB + colorValues[0][0][2]) / 2


    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`

    piece.style.backgroundColor = generateColor

})

col3.forEach((piece, index) => {

    percent = index / 4

    let varR = colorValues[0][2][0] + percent * (colorValues[1][2][0] - colorValues[0][1][0]);
    let varG = colorValues[0][2][1] + percent * (colorValues[1][2][1] - colorValues[0][1][1]);
    let varB = colorValues[0][2][2] + percent * (colorValues[1][2][2] - colorValues[0][1][2]);


    varR = (varR + colorValues[0][0][0]) / 2
    varB = (varB + colorValues[0][1][2]) / 2

    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`

    piece.style.backgroundColor = generateColor

})

col4.forEach((piece, index) => {

    percent = index / 4

    let varR = colorValues[0][3][0] + percent * (colorValues[1][3][0] - colorValues[0][1][0]);
    let varG = colorValues[0][3][1] + percent * (colorValues[1][3][1] - colorValues[0][1][1]);
    let varB = colorValues[0][3][2] + percent * (colorValues[1][3][2] - colorValues[0][1][2]);

    varR = (varR + colorValues[0][2][0]) / 2
    varB = (varB + colorValues[0][2][2]) / 2
 

    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`

    piece.style.backgroundColor = generateColor

})

// pointTwo to PointFour
col5.forEach((piece, index) => {

    percent = index / 4

    let varR = pointTwo[0] + percent * (pointFour[0] - pointTwo[0]);
    let varG = pointTwo[1] + percent * (pointFour[1] - pointTwo[1]);
    let varB = pointTwo[2] + percent * (pointFour[2] - pointTwo[2]);

    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`

    piece.style.backgroundColor = generateColor

})


////console.log('color values ', colorValues)
