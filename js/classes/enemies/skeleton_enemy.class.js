class Skeleton_enemy extends Enemy {
    volume = 0.1 + Math.random()*0.15;
    WALK_PATH = [
        'imgs/enemies/skeleton/skeleton_walk/00_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/01_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/02_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/03_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/04_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/05_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/06_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/07_Walk.png',
    ]
    walk_sound = new Audio('/sounds/enemies/skeleton/walk/skeleton_walk.wav');

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