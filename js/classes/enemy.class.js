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

    animate() {
        setInterval(() => { // walk animation
            if (Math.round(this.x) > level1.character_levelStart_X) {
                let i = (this.currentImage += 1) % this.walk_animation.length;
                this.img = this.imgCache[this.walk_animation[i]];
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