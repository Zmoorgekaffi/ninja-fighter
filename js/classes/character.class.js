class Character extends MoveableObject {
    world;
    x = 100;
    y = 200;
    width = 142;
    height = 126;
    isOtherDirection = false;
    currentImage = 0;
    speed = 3;
    sound_run_cut =  new Audio('sounds/character-sounds/run/character_run_cut.wav');
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

    IDLE_PATH = [
        'imgs/character/idle/00_Idle.png',
        'imgs/character/idle/01_Idle.png',
        'imgs/character/idle/02_Idle.png',
        'imgs/character/idle/03_Idle.png',
        'imgs/character/idle/04_Idle.png',
        'imgs/character/idle/05_Idle.png',
    ]

    JUMP_PATH = [
        'imgs/character/Jump/00_Jump.png',
        'imgs/character/Jump/01_Jump.png',
        'imgs/character/Jump/02_Jump.png',
        'imgs/character/Jump/03_Jump.png',
        'imgs/character/Jump/04_Jump.png',
        'imgs/character/Jump/05_Jump.png',
        'imgs/character/Jump/06_Jump.png',
        'imgs/character/Jump/07_Jump.png',
        'imgs/character/Jump/08_Jump.png',
        'imgs/character/Jump/09_Jump.png',
    ];

    constructor(imgPath, world) {
        super(imgPath);
        this.world = world;
        this.animate();
        this.firstImg = imgPath;
        this.applyGravity()
    }

    animate() {
        setInterval(() => { //for KEY_D and KEY_A (walk animation)
            if (this.world.keyboard.KEY_D == true || this.world.keyboard.KEY_A == true || this.world.keyboard.KEY_W == true || this.world.keyboard.KEY_S == true) {
                this.playAnimation(this.RUN_PATH);         
                this.sound_run_cut.play();
            } else {
                this.sound_run_cut.pause();
                this.playAnimation(this.IDLE_PATH);
            }

            if(this.world.keyboard.KEY_D == true && this.world.keyboard.KEY_A == true) {//if a & d is pressed => isOtherDirection = false && letCharacterStay
                this.isOtherDirection = false;
                this.playAnimation(this.IDLE_PATH);
            }

            if(this.y < level1.character_levelStart_Y) {
                this.loadImgsToImgCache(this.JUMP_PATH);
                this.playAnimation(this.JUMP_PATH);
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

            if(this.world.keyboard.KEY_S == true && this.y < level1.character_levelEnd_Y) { // for KEY_S
                this.y += this.speed
            }

            if(this.world.keyboard.KEY_W == true && this.y > level1.character_levelStart_Y) { // for KEY_W
                
                this.y -= this.speed
                if(this.y < level1.character_levelStart_Y){
                    this.y = level1.character_levelStart_Y;
                }
            }

            
            if(this.world.keyboard.KEY_SPACE == true && this.y > (level1.character_levelStart_Y - 0.1)) { // for KEY_SPACE
                this.isInAir = true;
                this.speedY = 15;
            }

            this.world.camera_x = -this.x + 100;
        }, 1000/60); //frames animation
    }

    playAnimation(animationArray) {
        this.loadImgsToImgCache(animationArray);
        let i = (this.currentImage) % animationArray.length;
        this.img = this.imgCache[animationArray[i]];
        this.currentImage++;
    }
}