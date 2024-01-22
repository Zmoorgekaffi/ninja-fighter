class MoveableObject {
    x = 0;
    y = 0;
    img = new Image();

    constructor(imgPath) {
        this.img.src = imgPath;
    }
}