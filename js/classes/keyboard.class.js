class Keyboard {
    KEY_W = false;
    KEY_A = false;
    KEY_S = false;
    KEY_D = false;
    KEY_SPACE = false;

    constructor() {
        document.addEventListener( ('keydown'), (event) => {
            if(event.keyCode == 87){
                this.KEY_W = true;
            }

            if(event.keyCode == 65){
                this.KEY_A = true;
            }

            if(event.keyCode == 83){
                this.KEY_S = true;
            }

            if(event.keyCode == 68){
                this.KEY_D = true;
            }

            if(event.key == " "){
                this.KEY_SPACE = true;
            }
        });

        document.addEventListener( ('keyup'), (event) => {
            if(event.keyCode == 87){
                this.KEY_W = false;
            }

            if(event.keyCode == 65){
                this.KEY_A = false;
            }

            if(event.keyCode == 83){
                this.KEY_S = false;
            }

            if(event.keyCode == 68){
                this.KEY_D = false;
            }

            if(event.key == " "){
                this.KEY_SPACE = true;
            }
        });
    }
}