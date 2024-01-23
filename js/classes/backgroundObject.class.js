class BackgroundObject extends MoveableObject{
    width;
    height;

    constructor(imgPath, x, width, height){
        super(imgPath);
        this.width = width;
        this.height = height;
        this.x = x;
    }
}