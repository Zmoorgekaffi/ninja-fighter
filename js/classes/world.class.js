class World {
    canvas;
    ctx;
    keyboard;
    character = new Character("../imgs/character/walk/walk1.png");
    enemies = [
        new Enemy('imgs/enemies/skeleton/skeleton_walk/00_Walk.png'),
        new Enemy('imgs/enemies/skeleton/skeleton_walk/00_Walk.png'),
        new Enemy('imgs/enemies/skeleton/skeleton_walk/00_Walk.png')
    ];
    backgroundObjects = [
        new BackgroundObject('imgs/backgroundItems/bg1.png', 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg2.png', 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg3.png', 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg4.png', 720, 480), 
        new BackgroundObject('imgs/backgroundItems/bg5.png', 720, 480),
        new Cloud('imgs/backgroundItems/bg6.png', 0 ,720, 480),
        new Cloud('imgs/backgroundItems/bg6.png', 720 ,720, 480),
        new BackgroundObject('imgs/backgroundItems/bg7.png', 720 ,480),
    ];


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
        
        //add objects to map
        this.addArrayToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addArrayToMap(this.enemies);
        
        //repeat itself with requestAnimationFrame. 
        // requestAnimationFrame(), is a function to call the function within, over and over, adjustet to the GU stats.
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }

    addToMap(object) {
        this.ctx.drawImage(object.img, object.x, object.y,object. width, object.height);
    }

    addArrayToMap(array) {
        array.forEach(object => {
            this.addToMap(object);
        })
    }
}