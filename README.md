# Lights Out Game

It is a game board that has squares. Some are 'lit', some are 'out' and clicking a square toggles the adjacent squares.

## Complete: Takeaways

### Looping 2d Arrays

* Simple logic to handle iterating rows and columns. I overthought a lot of this project.

* Array.every() nested calls to handle logic on them as well.

### Centralized State

The `<Cell />` child here displays based on the class prop it's passed, and if clicked can call a function passed as prop from `<Board />` to flip the cells around itself. This allows the `<Cell />` to remain 'dumb'.

> I enjoyed this project but it identified a clear problem: I'm over thinking it. I get the assignment and begin to wonder what the best way to display the board is, and got hung up wondering how to iterate over the board to display and check for victory every time. Watching the solution opened my eyes to a bit of that and I aim to clarify my intents based on what I've learned for the future assingments.

<br>

<img src="https://i.imgur.com/VWmXEFO.png">
<img src="https://i.imgur.com/SKr4qOM.png">

# Original Post

## Requirements

* Think about the components that I need? Stateful parent with multiple dumb children display elements.

### My Initial Thoughts Before Looking

GameContainer :
  - handles everything basically
  - default props could be size of gameboard, time limit, tries? game options? visuals?
  - initial state ("new game" gameboard):
    - gameboard[] = on or offs for the game tiles
    - gameOver bool
    - bind clickhandler
  - render() : map the array of gameboard and draw cells based on their value

Cell:
  - simple display element, should only really have a prop for color to show, passed down from parent as prop after parent handles the logic of whether it is on or not.
  - should also get a parent function handler for on click that allows the cell to tell the parent that it was the one clicked.


### How The Starter Code Is Setup

## Board

Constructor(props):
  - numRows
  - numColumns
  -chanceLightStartsOn float (chance a cell is lit at 'new game')

State:
  -hasWOn: bool true when board is all off
  - board: array-of-arrays of true/false

createBoard():
  - start board empty array and make it array-of-arrays of true/false values
  - return the board

flipCellsAround(coord) :
  - if the coordinate is on the board, flip the cell
  - logic to handle the 2 dimensional board of coordinates and invert them if they are the respective adjacent cells
  - determine when the game has been won (all cells off)
  - set state of board and hasWon

Render:
  - html table of cells
  - show game board or winning message if game is won
  - does not handle clicks, that is on each individual cell

## Cell

Constructor:
  - bind click handler

handleclick:
  - calls the parent function passed in to flip cells

render:
  - variable to determine display class for the html element
  - this.props.isLit? Cell-lit : ''
  - return the html element to draw

### What I got right:

* Board props is gameboard size, game options etc.
* gameboard array of true/falses
* render map the cells and draw based on value

### What I missed:

* Cell gets the click handler from the parent as a prop and calls it which affects the state in the parent.