class Yokai_Endboss extends Enemy {
    volume = 0.6;
    x = 500;
    y = 155;
    height = 200;
    width = 150;
    speed = 1; 
    WALK_PATH = [
        'imgs/enemies/yokai_endboss/yokai_run/Run_00.png',
        'imgs/enemies/yokai_endboss/yokai_run/Run_01.png',
        'imgs/enemies/yokai_endboss/yokai_run/Run_02.png',
        'imgs/enemies/yokai_endboss/yokai_run/Run_03.png',
        'imgs/enemies/yokai_endboss/yokai_run/Run_04.png',
        'imgs/enemies/yokai_endboss/yokai_run/Run_05.png',
        'imgs/enemies/yokai_endboss/yokai_run/Run_06.png',
        'imgs/enemies/yokai_endboss/yokai_run/Run_07.png',
    ]
    walk_sound = new Audio('sounds/enemies/yokai_endboss/run/yokai_run.wav');

    constructor(imgPath) {
        super(imgPath);
        this.loadImgsToImgCache(this.WALK_PATH);
        this.animate();
    }

    animate() {
        setInterval(() => { // walk animation
            if (Math.round(this.x) > level1.character_levelStart_X) {
                this.playAnimation(this.WALK_PATH);
            }
        }, 1000 / 6.5)

        setTimeout(() => { //actual walking
            setInterval(() => {
                if (Math.round(this.x) > level1.character_levelStart_X) {
                    this.moveLeft();
                    this.walk_sound.play()
                    this.walk_sound.volume = this.volume;
                } else {
                    this.walk_sound.pause();
                }
            }, 1000 / 60);
        }, 0 + (Math.random()*250 + Math.random()*250)); // this settimeout prevents enemies from walking at the same time
    }
    
}