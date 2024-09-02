let grid = [];
let play = false;
let menu;

function setup() {
  createCanvas(800, 500);

  menu = new Menu(580, 25);

  for(let i = 0; i<25; i++){
    let line = [];
    for(let j=0; j<25; j++){
      line.push(new Square(i, j));
    }
    grid.push(line);
  }
}

function draw() {
  background(220);

  // draws square grid
  for(line of grid){
    for(square of line){
      square.draw();
    }
  }

  menu.draw();

  // if play is toggled, iterates game every second (60fps)
  if(frameCount % (60/menu.speeds[menu.selected_speed]) == 0 && play) iterate();
}

function keyPressed() {
  if(key == ' ') iterate();
}

// toggles squares alive/unalive
function mouseClicked() {
  if(!menu.info){
    //start button
    if(mouseX >= 580 && mouseX <= 720 && mouseY >= 25 && mouseY <= 75){
      play = !play;
      menu.play = !menu.play;
    } else if(mouseX >= 580 && mouseX <= 720 && mouseY >= 125 && mouseY <= 175) { //speed button
      menu.toggleSpeed();
    } else if(mouseX >= 580 && mouseX <= 720 && mouseY >= 225 && mouseY <= 275 && !play){ //step button
      iterate();
    } else if(mouseX >= 580 && mouseX <= 720 && mouseY >= 325 && mouseY <= 375){ //clear button
      clear_grid();
    } else if(mouseX >= 580 && mouseX <= 720 && mouseY >= 425 && mouseY <= 475){ //info button
      menu.info = !menu.info;
    } else if(mouseX <= 500 && mouseY <= 500){ //grid area
      grid[floor(mouseX/20)][floor(mouseY/20)].toggleAlive();
    }
  } else if(mouseX <= 100 || mouseX >= 700 || mouseY <= 100 || mouseY >= 400) {
    menu.info = !menu.info;
  }
  
}

/*=================*/
/*= aux functions =*/
/*=================*/

//returns array of neigboors of square (i,j)
function getNeighbors(i, j){
  let neighbors = [];

  for(let k=i-1;k<=i+1;k++){
    for(let p=j-1;p<=j+1;p++){
      if(k>=0 && p>=0 && k<25 && p<25 && !(k==i && p==j)) neighbors.push(grid[k][p]);
    }
  }

  return neighbors;
}

//goes through squares (neighbors), returns nr of alive squares
function aliveNeighbors(neighbors){
  let count = 0;
  for(n of neighbors){
      if(n.alive) count++;
  }

  return count;
}

// iterates to next step of the game
function iterate(){
  //contains count of alive neighbors of each cell
  let aux_grid = [];

  for(let i = 0; i<25; i++){
    let line = [];
    for(let j=0; j<25; j++){
      let neighbors = getNeighbors(i, j);
      line.push(aliveNeighbors(neighbors));
    }
    aux_grid.push(line);
  }

  for(let i=0; i<25; i++){
    for(let j=0;j<25; j++){
      grid[i][j].step(aux_grid[i][j]);
    }
  }
}

function clear_grid() {
  for(line of grid){
    for(square of line){
      square.alive = false;
    }
  }
}

