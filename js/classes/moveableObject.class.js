class MoveableObject {
    x = 0;
    y = 0;
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
}   