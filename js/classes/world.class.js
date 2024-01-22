class World {
    canvas;
    ctx;
    character = new Character("../imgs/character/walk/walk1.png");


    constructor(canvas) {
        this.canvas = canvas;
        this.giveCanvasHeightAndWidth();
        this.character.img.onload = () => {
            this.draw();
        };
    }
    
    /* preparing */
    /**
     * gives the canvas a context named ctx and sets the width and the height of the canvas
     */
    giveCanvasHeightAndWidth() {
        this.canvas.height = 480;
        this.canvas.width = 720
        this.ctx = this.canvas.getContext('2d')
    }

    /* draw */
    draw() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
    }
}