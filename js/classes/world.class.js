class World {
    canvas;
    ctx;
    keyboard;
    camera_x;
    character = new Character("../imgs/character/walk/walk1.png", this);

//lvl
    character_levelStart_X = 100;
    character_levelEnd_X = 2254;
    character_levelStart_Y = 200;
    character_levelEnd_Y = 268;

    enemies = [
        new Enemy('imgs/enemies/skeleton/skeleton_walk/00_Walk.png'),
        new Enemy('imgs/enemies/skeleton/skeleton_walk/00_Walk.png'),
        new Enemy('imgs/enemies/skeleton/skeleton_walk/00_Walk.png')
    ];
    backgroundObjects = [
        new BackgroundObject('imgs/backgroundItems/bg1.png', 0, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg2.png', 0, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg3.png', 0, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg4.png', 0, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg5.png', 0, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg7.png', 0, 720, 480),
        new Cloud('imgs/backgroundItems/bg6.png', 0, 720, 480),

        new BackgroundObject('imgs/backgroundItems/bg1.png', 720, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg2.png', 720, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg3.png', 720, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg4.png', 720, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg5.png', 720, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg7.png', 720, 720, 480),
        new Cloud('imgs/backgroundItems/bg6.png', 720, 720, 480),

        new BackgroundObject('imgs/backgroundItems/bg1.png', 720*2, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg2.png', 720*2, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg3.png', 720*2, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg4.png', 720*2, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg5.png', 720*2, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg7.png', 720*2, 720, 480),
        new Cloud('imgs/backgroundItems/bg6.png', 720*2, 720, 480),

        new BackgroundObject('imgs/backgroundItems/bg1.png', 720*3, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg2.png', 720*3, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg3.png', 720*3, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg4.png', 720*3, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg5.png', 720*3, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg7.png', 720*3, 720, 480),
        new Cloud('imgs/backgroundItems/bg6.png', 720*3, 720, 480),


        new Cloud('imgs/backgroundItems/bg6.png', 720*4, 720, 480),
    ];
//lvlend

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

        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        
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