<img src="./images/opening.png" style="max-width:500px" /><br><br><br>


# CHROMA 

Table of Contents
* <a href="#Goals">Goals</a>
* <a href="#Technologies">Technologies</a>
* <a href="#Approach">Approach</a>
* <a href="#Commands">Commands</a>
* <a href="#Roadmap">Roadmap</a>

## Goals

Chroma is a pattern-based puzzle game inspired by the iOS app, I Love Hue. My goal was to create an aesthetically pleasing web experience with a javascript-generated 4-pointed gradient, adding a meditative atmosphere to relax and entertain the user. In its current form, it is designed for desktop.

### User Stories

A User will be able to...
- Generate a unique puzzle 
- Initiate the puzzle's scramble with black dot "anchors" indicating which piece are permanently fixed on the board
- Click and drag a piece to be swapped with another square
- Play until the puzzle has been solved
- When the game is over, give the option to restart the game and play again
- Listen to meditative music while playing the game to give an introspective atmosphere

### Technologies

This web application was built with: 

* HTML5
* [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
* SCSS
* Vanilla Javscript


## Approach

In this README I will describe the puzzle's functionality as expressed in HTML, Javascript and SCSS. Specifically I will discuss the creation of the puzzle board, its drag and drop functionality, as well as the the dynamically generated 4-pointed color gradient. 

### HTML + BEM 

The first part of the project I created was the game board. 
I made a point to specifically use BEM Conventions when creating this complicated but essential architecture. It's what has drove the organization of subsequent styling and javascript files. 

To begin, I used CSS Grid to arrange 25 divs inside a single container. The Drag and Drop API is designed such that for every **draggable element** there is a designated **drop target**. So inside every square element, I added another div to serve as the actual puzzle "piece" that was swapped between locations.


<img src="./images/diagram_1.png" /><br><br>

**Diagram 1** This illustrates the basic structure of my HTML. Any yellow `.puzzle__piece` can be dragged and dropped into any blue `puzzle__target` containing div.

Here's the diagram translated to a bit of sample code:

```html
<div class="puzzle puzzle__container">
    <div class="puzzle__target" data-id="1">
        <div class="puzzle__piece" data-column="1" data-id="1" draggable="false"></div>
    </div>
    ...
</div>
``` 
<br>

 

After creating all of the necessary elements, I gave each `puzzle__piece` a `data-id`, starting with 1 and incrementing upwards. 
Giving each piece and target a unique ID is important to distinguish between them.  When we check for the accuracy of the game, we look to see if the interior puzzle piece's ID matches the target after being moved around by the user. 
To make targeting elements easier in `color.js`, I also gave each piece a `data-column`. This will be discussed further in the section on Color.

A final note on the HTML: I began this project with hardcoded HTML elements, but if I were to refactor this project, I would consider dynamically generating each element with javascript's `createElement` method to easily update the number of pieces and orientation as needed, rather than updating the DOM with what already exists. However this is certainly a good starting point before developing something more dynamic in future versions.



## Javascript

### Board.js | setupBoard()

After laying out all of the 25 `puzzle__pieces` and their surrounding `puzzle__target`, the next step I took was to create the most important functionality of the game, drag and drop. Leveraging HTML's drag and drop capability, I targeted pieces on the board and configured event listeners to update the DOM accordingly when pieces were moved.






### Color.js | Dynamically generated color values

 create the 4-pointed color gradient.

I knew that I would want to generate this is javascript rather than hardcoding the SCSS elements for a few reasons. 

My plan was to dynamically generate color values on the board instead of hardcoding them in SCSS. This is because I wanted to leave open the possibility for changing the pattern with each subsequent game round, creating new challenges and color combinations. 

First thing I did was define each of the four points

```javascript
let pointOne = [143, 201, 200] // Light Blue
let pointTwo = [243, 229, 118] // Yellow
let pointThree = [23, 54, 211] // Dark Blue
let pointFour = [230, 97, 125] // Red-Orange
```

These are the RGB values of each corner I wanted to create on the board. I've commented in the color each one corresponds to for reference.

Next I decided to create an object that stored the values of each generated color:

```javascript
let colorValues = {
   0: [pointOne, [], [], [], pointTwo],
   1: [[], [], [], [], []],
   2: [[], [], [], [], []],
   3: [[], [], [], [], []],
   4: [pointThree, [], [], [], pointFour]
}
 
```

The easiest part was calculating the outside square color values, because I already knew the initial four points.


However I created this data structure to keep track of the values that were generated by the gradient, that could then be used to find the intermediary values of the interior vertical gradients

### Point One to Point Two 

```javascript
let pieces = document.querySelectorAll('.puzzle__piece');


pieces.forEach((piece, index) => {

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

       piece.style.backgroundColor = generateColor
   }

...

}
```



Looping over all of the pieces, I used the index to determine the position of the first, top row of the puzzle. 

I created four values `varR`, `varG` and varB` -- and then I set up my calculations to get the new value of the point based on its index position.

((( is that right?? )))

Then I made sure to add the calculated values into my `colorValues object`

```javascript
    colorValues[0][index][0] = varR
    colorValues[0][index][1] = varG
    colorValues[0][index][2] = varB
```

then I took the generated value and added it to the piece at the particular index of my row.

```javascript
    const generateColor =  `rgb( ${varR}, ${varG}, ${varB} )`
 
    piece.style.backgroundColor = generateColor
```

### Point 3 to Point 4

((( I think I want to add comments to color.js to really describe what every piece does...)))


### Point 1 to Point 3 (column 1)

To target each column, I made use of a data value I set on the pieces in the HTML. So to get the pieces from Point 1 to Point 3, I targeted everything designated as column 1.

`const col1 = document.querySelectorAll('[data-column="1"]')`

Then I looped over every piece, calculated every new color based on the values in my colorValues object, and assigned it to the pieces

As you can see, the puzzle is starting to take shape.

At this point I no longer need to add the generated color values to the colorValues object. 



## Roadmap

After the successful launch of Version 1.0, there are still many features I look forward to developing. 

Chroma 2.0 will include:

* Mobile styles so Chroma can be played on any device, not just desktop
* Dedicated welcome screen with animated title
* Allow user to continue playing additional rounds with different generated patterns and challenges
* Improved Drag and Drop animations


## Commands

Comands used for development of this application

### Sass

`sass --watch scss/style.scss:css/style.css`

### ES Lint




