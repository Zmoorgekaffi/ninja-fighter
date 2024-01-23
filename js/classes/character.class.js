class Character extends MoveableObject {
    world;
    x = 100;
    y = 225;
    width = 142;
    height = 126;
    RUN_PATH = [
        'imgs/character/run/run1.png',
        'imgs/character/run/run2.png',
        'imgs/character/run/run3.png',
        'imgs/character/run/run4.png',
        'imgs/character/run/run5.png',
        'imgs/character/run/run6.png',
        'imgs/character/run/run7.png',
        'imgs/character/run/run8.png',
    ]
    currentImage = 0;
    firstImg;
    speed = 1.67;
    isOtherDirection = false;



    constructor(imgPath, world) {
        super(imgPath);
        this.world = world;
        this.loadImgsToImgCache(this.RUN_PATH);
        this.animate();
        this.firstImg = imgPath;
    }

    animate() {
        setInterval(() => { //for KEY_D and KEY_A
            if (this.world.keyboard.KEY_D == true || this.world.keyboard.KEY_A == true) {
                this.playRunAnimation();         
            } else {
                this.letCharacterStay();
            }

            if(this.world.keyboard.KEY_A == true) { //for KEY_A
                this.isOtherDirection = true;
            } else {
                this.isOtherDirection = false;
            }

            if(this.world.keyboard.KEY_D == true && this.world.keyboard.KEY_A == true) {
                this.letCharacterStay();
                this.isOtherDirection = false;
            }
        }, 1000 / 8);

        setInterval(() => {
            if(this.world.keyboard.KEY_D == true) { // for KEY_D
                this.x += this.speed
            }

            if(this.world.keyboard.KEY_A == true) { // for KEY_A
                this.x -= this.speed
            }

            this.world.camera_x = -this.x + 100;
        }, 1000/120);
    }

    playRunAnimation() {
        let i = (this.currentImage) % this.RUN_PATH.length;
        this.img = this.imgCache[this.RUN_PATH[i]];
        this.currentImage++;
    }

    letCharacterStay() {
        let functionImg = new Image();
        functionImg.src = this.firstImg;
        this.img = functionImg;
    }
}