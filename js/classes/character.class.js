class Character extends MoveableObject {
    world;
    x = 100;
    y = 225;
    width = 142;
    height = 126;
    isOtherDirection = false;
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
    speed = 3;
    sound_run_cut =  new Audio('sounds/character-sounds/run/character_run_cut.wav');



    constructor(imgPath, world) {
        super(imgPath);
        this.world = world;
        this.loadImgsToImgCache(this.RUN_PATH);
        this.animate();
        this.firstImg = imgPath;
    }

    animate() {
        setInterval(() => { //for KEY_D and KEY_A (animation)
            if (this.world.keyboard.KEY_D == true || this.world.keyboard.KEY_A == true) {
                this.playRunAnimation();         
                this.sound_run_cut.play();
            } else {
                this.sound_run_cut.pause();
                this.letCharacterStay();
            }

            if(this.world.keyboard.KEY_D == true && this.world.keyboard.KEY_A == true) {//if a & d is pressed => isOtherDirection = false && letCharacterStay
                this.isOtherDirection = false;
                this.letCharacterStay();
            }
        }, 1000 / 10);

        setInterval(() => { // (actual walking)
            if(this.world.keyboard.KEY_D == true && this.x < level1.character_levelEnd_X) { // for KEY_D
                this.isOtherDirection = false;
                this.x += this.speed
            }

            if(this.world.keyboard.KEY_A == true && this.x > level1.character_levelStart_X) { // for KEY_A
                this.isOtherDirection = true;
                this.x -= this.speed
            }

            this.world.camera_x = -this.x + 100;
        }, 1000/60); //frames animation
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