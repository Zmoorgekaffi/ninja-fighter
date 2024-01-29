class Level {
    character_levelStart_X = 100;
    character_levelEnd_X = 2254;
    character_levelStart_Y = 200;
    character_levelEnd_Y = 268;
    character_level_Y_difference = 68;

    enemies;
    backgroundObjects;

    constructor(enemies, backgroundObjects) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
    }
}