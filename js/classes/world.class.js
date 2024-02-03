class World {
    canvas;
    ctx;
    keyboard;
    camera_x;
    character = new Character("../imgs/character/walk/walk1.png", this);
    enemies = level1.enemies;
    backgroundObjects = level1.backgroundObjects;

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.giveCanvasHeightAndWidth();
        this.keyboard = keyboard;
        this.draw();
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
        //clear
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //camera
        this.ctx.translate(this.camera_x, 0);

        //add objects to map
        this.addArrayToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addArrayToMap(this.enemies);

        //collision boxes
    

        //camera
        this.ctx.translate(-this.camera_x, 0);

        //repeat itself with requestAnimationFrame. 
        // requestAnimationFrame(), is a function to call the function within, over and over, adjustet to the GU stats.
        let self = this;
        setTimeout(() => {
            requestAnimationFrame(function () {
                self.draw();
            })
        }, 1000 / 60);

    }
    count = 0;
    addToMap(object) {
        if (object.isOtherDirection) {
            this.mirrorCtx(object);
        }

        object.draw(this.ctx);

        if (object.isOtherDirection) {
            this.restoreMirroredCtx(object);
        }

    }

    mirrorCtx(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    restoreMirroredCtx(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }

    addArrayToMap(array) {
        array.forEach(object => {
            this.addToMap(object);
        })
    }
}