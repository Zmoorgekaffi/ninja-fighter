const level1 = new Level(
    [ //enemies
        new Skeleton_enemy('imgs/enemies/skeleton/skeleton_walk/00_Walk.png'),
        new Skeleton_enemy('imgs/enemies/skeleton/skeleton_walk/00_Walk.png'),
        new Skeleton_enemy('imgs/enemies/skeleton/skeleton_walk/00_Walk.png'),
        new Yokai_Endboss('imgs/enemies/yokai_endboss/yokai_run/Run_00.png')
    ],
    [
        new BackgroundObject('imgs/backgroundItems/bg1.png', 0, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg2.png', 0, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg3.png', 0, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg4.png', 0, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg5.png', 0, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg7.png', 0, 720, 480),
        new Cloud('imgs/backgroundItems/bg6.png', 0, 720, 480),

        new BackgroundObject('imgs/backgroundItems/bg1.png', 720, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg2.png', 720, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg3.png', 720, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg4.png', 720, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg5.png', 720, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg7.png', 720, 720, 480),
        new Cloud('imgs/backgroundItems/bg6.png', 720, 720, 480),

        new BackgroundObject('imgs/backgroundItems/bg1.png', 720*2, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg2.png', 720*2, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg3.png', 720*2, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg4.png', 720*2, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg5.png', 720*2, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg7.png', 720*2, 720, 480),
        new Cloud('imgs/backgroundItems/bg6.png', 720*2, 720, 480),

        new BackgroundObject('imgs/backgroundItems/bg1.png', 720*3, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg2.png', 720*3, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg3.png', 720*3, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg4.png', 720*3, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg5.png', 720*3, 720, 480),
        new BackgroundObject('imgs/backgroundItems/bg7.png', 720*3, 720, 480),
        new Cloud('imgs/backgroundItems/bg6.png', 720*3, 720, 480),


        new Cloud('imgs/backgroundItems/bg6.png', 720*4, 720, 480),
    ]
);