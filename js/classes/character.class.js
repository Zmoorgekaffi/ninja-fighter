class Character extends MoveableObject {
    x = 100;
    y = 225;
    width = 142;
    height = 126;
    RUN_PATH = [
        'imgs/character/run/run1.png',
        'imgs/character/run/run2.png',
        'imgs/character/run/run3.png',
        'imgs/character/run/run4.png',
        'imgs/character/run/run5.png',
        'imgs/character/run/run6.png',
        'imgs/character/run/run7.png',
        'imgs/character/run/run8.png',
    ]
    currentImage = 0;



    constructor(imgPath) {
        super(imgPath);
        this.loadImgsToImgCache(this.RUN_PATH);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = (this.currentImage += 1) % this.RUN_PATH.length;
            this.img = this.imgCache[this.RUN_PATH[i]];
        },1000/6.7);
    }
}