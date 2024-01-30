class Enemy extends MoveableObject {
    x = 300 + Math.random() * 200;
    y = 230 + Math.random() * 30;
    width = 112;
    height = 120;
    speed = 0.15 + Math.random() * 0.08;
    currentImage = 0;
    isOtherDirection = true;

    constructor(imgPath) {
        super(imgPath);
    }

}