class World {
    canvas;
    ctx;


    constructor(canvas) {
        this.canvas = canvas;
        this.giveCanvasHeightAndWidth();
        this.draw();
    }

    /* preparing */
    giveCanvasHeightAndWidth() {
        this.canvas.height = 480;
        this.canvas.width = 720
        this.ctx = this.canvas.getContext('2d')
    }

    /* draw */
    draw() {
        
    }
}