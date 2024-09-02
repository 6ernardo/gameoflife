# Conway's Game of Life
Implementation of the popular Conway's Game of Life using the p5.js libray.

The Game of Life is played on a two dimensional grid of cells. Each cell can be either dead or alive, and this status might change at each iteration of the game depending on the status of the neighboring cells.

This is a 0-player game, meaning it does not require any input of the player. It only needs to have its initial state defined.

## Rules

The rules that determine what will happen to a cell in the following iteration are simple:

- If a cell is alive, with will remain alive if it has 2 or 3 alive neighbors. If it has more or less than those, it will die.
- If a cell is dead, with will become alive if it has 3 alive neighbors. Otherwise it will remain dead.

## Interface

The implemented interface is the following:

- Click a cell on the grid to toggle its state. Yellow represents that the cell is alive, grey represents that its dead.

- Press START to start the game. When toggled it will iterate through the stages of the game. You can pause the game by pressing STOP.

- You can change the speed at which the game iterates by pressing the SPEED button.

- You can manually step through the iterations by pressing the STEP button or the spacebar.

- Clicking CLEAR will set all the cells in the grid as dead.

- The INFO button includes these same instructions.