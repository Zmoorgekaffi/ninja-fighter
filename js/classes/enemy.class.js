class Enemy extends MoveableObject {
    x = 300 + Math.random() * 200;
    y = 230 + Math.random() * 30;
    width = 112;
    height = 120;
    speed = 0.15 + Math.random() * 0.08;
    currentImage = 0;
    isOtherDirection = true;
    sound_walk = new Audio('/sounds/skeleton/walk/skeleton_walk.wav');

    WALK_PATH = [
        'imgs/enemies/skeleton/skeleton_walk/00_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/01_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/02_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/03_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/04_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/05_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/06_Walk.png',
        'imgs/enemies/skeleton/skeleton_walk/07_Walk.png',
    ];

    constructor(imgPath) {
        super(imgPath);
        this.loadImgsToImgCache(this.WALK_PATH);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (Math.round(this.x) > 2) {
                let i = (this.currentImage += 1) % this.WALK_PATH.length;
                this.img = this.imgCache[this.WALK_PATH[i]];
            }
        }, 1000 / 6.5)

        setTimeout(() => {
            setInterval(() => {
                if (Math.round(this.x) > 2) {
                    this.x -= this.speed;
                    this.sound_walk.play()
                    this.sound_walk.volume = 0.1 + Math.random()*0.2;
                } else {
                    this.sound_walk.pause();
                }
            }, 1000 / 60);
        }, 0 + (Math.random()*250 + Math.random()*250));

    }
}