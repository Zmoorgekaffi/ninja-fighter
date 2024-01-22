class MoveableObject {
    x;
    y;
    img = new Image();

    constructor(imgPath) {
        this.img.src = imgPath;
    }
}