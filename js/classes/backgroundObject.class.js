class BackgroundObject extends MoveableObject{
    width;
    height;

    constructor(imgPath, width, height){
        super(imgPath);
        this.width = width;
        this.height = height;
    }
}