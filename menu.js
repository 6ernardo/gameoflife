class Menu {
    //x and y are offset values
    //Define the position of the upper left corner of the first menu button on the canvas
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.play = false;

        this.speeds = [0.5, 1, 1.5, 2];
        this.selected_speed = 1;

        this.info = false;
    }

    //main draw function
    draw() {
        this.draw_play();
        this.draw_speed();
        this.draw_step();
        this.draw_clear();
        this.draw_info();
    }

    draw_play(){
        //play button
        fill(play ? 'grey' : 'steelblue');
        rect(this.x, this.y, 140, 50, 5);
        fill('white');
        textSize(30);
        textAlign(CENTER, CENTER);
        text(play ? 'STOP' : 'PLAY', this.x + 70, this.y + 25);
    }

    draw_speed(){
        //speed button
        fill('steelblue');
        rect(this.x, this.y + 100, 140, 50, 5);
        fill('white');
        textSize(20);
        textAlign(CENTER, CENTER);
        text(`${this.speeds[this.selected_speed]}x SPEED`, this.x + 70, this.y + 125);
    }

    toggleSpeed(){
        if(this.selected_speed < 3) this.selected_speed++;
        else this.selected_speed = 0;
    }

    draw_step(){
        //step button
        fill('steelblue');
        rect(this.x, this.y + 200, 140, 50, 5);
        fill('white');
        textSize(30);
        textAlign(CENTER, CENTER);
        text('STEP', this.x + 70, this.y + 225);
    }

    draw_clear(){
        //clear button
        fill('steelblue');
        rect(this.x, this.y + 300, 140, 50, 5);
        fill('white');
        textSize(30);
        textAlign(CENTER, CENTER);
        text('CLEAR', this.x + 70, this.y + 325);
    }

    draw_info(){
        //info button
        fill('steelblue');
        rect(this.x, this.y + 400, 140, 50, 5);
        fill('white');
        textSize(30);
        textAlign(CENTER, CENTER);
        text('INFO', this.x + 70, this.y + 425);

        if(this.info){
            strokeWeight(0);
            fill(0, 127);
            rect(0, 0, width, height);
            fill('gainsboro');
            rect(100, 100, 600, 300, 5);

            fill('black');
            textSize(35);   
            textAlign(CENTER, CENTER);
            text('Conway\'s Game of Life', 400, 135);

            textAlign(LEFT, CENTER);
            textSize(20);
            text(`This is my simple implementation of the popular Game of Life.
- Click any of the squares on the grid to toggle its aliveness state.
- Press PLAY to start the game, 
  and SPEED to adjust the duration of each iteration.
- Using STEP or the spacebar you can advance a single iteration.
- Clicking CLEAR will set all the grid cells to not alive.
- INFO is the button used to open this window. 
  Click outside the window to close it.
- By Bernardo Campos (@6ernardo)`, 110, 270);
        }
    }
}