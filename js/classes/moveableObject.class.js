class MoveableObject {
    x = 0;
    y = 0;
    speedY = 10;
    acclearation = -1.8;
    isInAir = false;
    characterLandOnGround;
    img = new Image();
    imgCache = [];
    isOtherDirection = false;

    constructor(imgPath) {
        this.img.src = imgPath;
    }

    loadImgsToImgCache(array) {
        array.forEach(path => {
            let functionImg = new Image();
            functionImg.src = path;
            this.imgCache[path] = functionImg;
        });
    }

    applyGravity() {
        this.setLandingOnTheGround();
        setInterval(() => {
            if ((this.isAboveGround() || this.speedY > 0) && this.isInAir == true) {
                this.isInAir = true;
                this.setLandingOnTheGround(); //sets a new number for the next jump
                this.y -= this.speedY;
                this.speedY += this.acclearation;
            } else {
                this.isInAir = false;
            }
            
        }, 20);
    }

    isAboveGround() {
        return this.y < (this.characterLandOnGround || level1.character_levelStart_Y - 1);
    }

    setLandingOnTheGround() {
        this.characterLandOnGround = Math.floor(level1.character_levelStart_Y + (Math.random() * level1.character_level_Y_difference)); //sets the landing coordninates
    }
}   