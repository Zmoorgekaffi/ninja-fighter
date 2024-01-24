class Keyboard {
    KEY_W = false;
    KEY_A = false;
    KEY_S = false;
    KEY_D = false;
    KEY_SPACE = false;

    constructor() {
        document.addEventListener(('keydown'), (event) => {
            if (event.keyCode == 87) {
                this.KEY_W = true;

                this.KEY_A = false;
                this.KEY_S = false;
                this.KEY_D = false;
            }

            if (event.keyCode == 65) {
                this.KEY_A = true;

                this.KEY_W = false;
                this.KEY_S = false;
                this.KEY_D = false;
            }

            if (event.keyCode == 83) {
                this.KEY_S = true;

                this.KEY_W = false;
                this.KEY_A = false;
                this.KEY_D = false;
            }

            if (event.keyCode == 68) {
                this.KEY_D = true;

                this.KEY_A = false;
                this.KEY_W = false;
                this.KEY_S = false;
            }

            if (event.key == " ") {
                this.KEY_SPACE = true;

                this.KEY_W = false;
                this.KEY_S = false;
            }
        });

        document.addEventListener(('keyup'), (event) => {
            if (event.keyCode == 87) {
                this.KEY_W = false;
            }

            if (event.keyCode == 65) {
                this.KEY_A = false;
            }

            if (event.keyCode == 83) {
                this.KEY_S = false;
            }

            if (event.keyCode == 68) {
                this.KEY_D = false;
            }

            if (event.key == " ") {
                this.KEY_SPACE = true;
            }
        });
    }
}