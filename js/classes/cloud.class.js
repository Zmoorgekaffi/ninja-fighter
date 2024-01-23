class Cloud extends BackgroundObject{
    speed = 0.015;
    
    constructor(imgPath, x, width, height) {
        super(imgPath, x, width, height)
        this.animateCloud();
    }

    animateCloud() {
        setInterval(() => {
            if(Math.round(this.x) == -720){
                this.x = 720*4
            }
            this.x -= this.speed;
        });
    }
}