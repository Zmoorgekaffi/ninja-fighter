class Cloud extends BackgroundObject{
    speed = 0.015;
    
    constructor(imgPath, x, width, height) {
        super(imgPath, width, height)
        this.x = x;
        this.animateCloud();
    }

    animateCloud() {
        setInterval(() => {
            if(Math.round(this.x) == -720){
                this.x = 720
            }
            this.x -= this.speed;
        });
    }
}