class Square {
    constructor(col, line) {
        this.alive = false;
        this.col = col;
        this.line = line;
    }

    toggleAlive() {
        this.alive = !this.alive;
    }

    //count = nr of neighbors
    step(count) {
        if(this.alive){
            if(count < 2) this.alive = false;
            else if(count > 3) this.alive = false;
        } else {
            if(count == 3) this.alive = true;
        }
    }

    draw() {
        stroke('lightgrey');
        strokeWeight(1);
        fill(this.alive ? 'yellow' : 'grey');
        rect(20 * this.col, 20 * this.line, 20);
    }
}