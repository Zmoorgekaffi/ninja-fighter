class MoveableObject {
    x = 0;
    y = 0;
    speed;
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
        this.setLandingOnTheGround(); // sets a random landing point for the first jump
        setInterval(() => {
            if ((this.isAboveGround() || this.speedY > 0) && this.isInAir == true) {
                this.setLandingOnTheGround(); //sets a random new landingnumber for the next jump
                this.fall();
            } else {
                this.isInAir = false;
            }
            
        }, 20);
    }

    playAnimation(animationArray) {
        this.loadImgsToImgCache(animationArray);
        let i = (this.currentImage) % animationArray.length;
        this.img = this.imgCache[animationArray[i]];
        this.currentImage++;
    }

    isAboveGround() {
        return this.y < (this.characterLandOnGround || level1.character_levelStart_Y - 1);
    }

    setLandingOnTheGround() {
        this.characterLandOnGround = Math.floor(level1.character_levelStart_Y + (Math.random() * level1.character_level_Y_difference)); //sets the landing coordninates
    }

    fall() {
        this.y -= this.speedY;
        this.speedY += this.acclearation;
    }

    moveRight() {
        this.isOtherDirection = false;
        this.x += this.speed;
    }

    moveLeft() {
        this.isOtherDirection = true;
        this.x -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    moveUp() {
        this.y -= this.speed
        if(this.y < level1.character_levelStart_Y){
            this.y = level1.character_levelStart_Y;
        }
    }

    jump() {
        this.isInAir = true;
        this.speedY = 15;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        
        this.drawColisionBox(ctx, this.x + 40, this.y +40, this.width -80, this.height -40, 'blue')
    }

    drawColisionBox(ctx, x, y, width, height, colour) {
        if(this instanceof Enemy || this instanceof Character) {
            ctx.beginPath();
            ctx.strokeStyle = colour;
            ctx.rect(x, y, width, height);
            ctx.stroke();
        }
    }
}   