class Skeleton_enemy extends Enemy {
    volume = 0.1 + Math.random()*0.15;
    walk_animation = [
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
        this.loadImgsToImgCache(this.walk_animation);
        this.animate();
    }
}