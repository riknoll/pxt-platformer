function playerAnimation() {
    const m = new util.MovementAnimation();

    m.walkLeftFrames = new util.FrameAnimation(assets.walkFramesLeft, 100);
    m.walkRightFrames = new util.FrameAnimation(assets.walkFramesRight, 100);

    m.idleLeftFrames = new util.FrameAnimation(assets.idleFramesLeft, 100);
    m.idleRightFrames = new util.FrameAnimation(assets.idleFramesRight, 100);

    m.jumpLeftFrames = new util.FrameAnimation(assets.walkFramesLeft, 100);
    m.jumpRightFrames = new util.FrameAnimation(assets.walkFramesRight, 100);

    m.fallLeftFrames = new util.FrameAnimation(assets.idleFramesLeft, 100);
    m.fallRightFrames = new util.FrameAnimation(assets.idleFramesRight, 100);

    return m;
}

function slopesTest() {
    game.stats = true;
    scene.setBackgroundColor(13)
    // util.enableSlopePhysics(img`
    //     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    //     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e c . . . . . . . . . . . . . . . . . . . . 5 1 a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 5 a b 4 . . 5 a . . 5 a . . b 4 5 a . . 5 a . . . 1
    //     1 1 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 4 . 5 1 a . . . . . . . . . . . . . . 7 2 6 . . . . . . . . . 7 2 6 . . . . . . . . 1 a . . b 4 5 a . . 5 a . . . . b a . . 5 a . . . . 1
    //     1 1 1 4 . . . . . . . . . . . . . . . . . . 7 2 2 2 6 . 7 2 2 2 6 . . . . . b 1 1 1 a . . . . . . . . . . . . . . 5 1 1 1 4 . . . . . . . 5 1 1 1 4 . . . 5 1 . . 1 . . . . b a . . 5 a . . 5 4 . . . . 5 a . . . . . 1
    //     1 1 b 1 4 . . . . . . . . . . . . . . . . . d 3 3 3 c . d 3 3 3 c . . . . . . 1 1 1 . . . . . . . . . . . . . . 5 1 e 3 f 1 4 . . . . . 5 1 e 3 f 1 8 2 9 1 a . . 1 . 5 4 . . . . 5 a . . 5 a b 4 . . 5 a . . . . . . 1
    //     1 1 . b 1 4 . 5 4 . . . . . . . . . . 7 2 2 2 6 . 7 2 2 2 6 . 7 2 2 2 6 . . 5 1 1 1 4 . . . . . . 2 2 6 . . . 5 1 a . . . b 1 4 . . . 5 1 a . . . b 1 1 1 a . . . 1 5 a b 4 . . 5 a . . 5 a . . b 4 5 a . . . . . . 5 1
    //     1 1 . . b 1 1 1 a . . . . . . . . . . d 3 3 3 c . d 3 3 3 c . d 3 3 3 c . . b a . b a . . . . . . d f 1 8 2 9 1 a . . . . . b 1 8 2 9 1 a . . . . . d 3 c . . . . 1 a . . b 4 5 a . . 5 a . . . . b a . . . . . . . b 1
    //     1 1 . . . 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 1 a . . . 5 4 . . b 1 1 1 a . . . 5 4 . . 5 4 . . 5 4 1 . . . . b a . . 5 a . . 5 4 . . . . 5 1 . . . . . 1
    //     1 1 . . 5 1 1 1 4 . . . . . . . . . . . . . . . . . . . 7 2 9 1 1 1 8 2 6 . . . . . . . . . . . . . . . d 3 c . . . . b a . . . d 3 c . . . . b a . . b a . . b a 1 . 5 4 . . . . 5 a . . 5 a b 4 . . 5 a 1 4 . . . . 1
    //     1 a . . b a . b a . . . . . . . . . . . . . . . . . . 5 1 1 1 1 1 1 1 1 1 4 . . . . . . . . . . . . . . . . . . . 5 4 . . 5 4 . . 5 4 . . 5 4 . . 5 4 . . 5 4 . . 1 5 a b 4 . . 5 a . . 5 a . . b 4 5 a . 1 a . . . . 1
    //     1 . . . . . . . . . . . . . . . . . . . . . 7 2 6 . 5 1 1 1 1 1 1 1 1 1 1 1 4 . . . . . . . . . . . . . . . . . . b a . . b a . . b a . . b a . . b a . . b a . . 1 a . . b 4 5 a . . 5 a . . . . b a . . 1 . . . . . 1
    //     1 . . . . . . . . . . . . . . . . . . . . 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 2 6 . . . . . . . . . . . . 5 4 . . 5 4 . . 5 4 . . 5 4 . . 5 4 . . 5 4 . . . . . . . . . b a . . 5 a . . 5 4 . . . . 5 1 . . . . 5 1
    //     1 . . . . . . . . . . . . . . . . . . . 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 . . . . . . . . . . . b a . . b a . . b a . . b a . . b a . . b a . . . . . . 5 4 . . . . 5 a . . 5 a b 4 . . 5 a 1 . . . . b 1
    //     1 . . . . . . . . . . . . . . . . . 7 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 . . . . . . . . 5 4 . . 5 4 . . 5 4 . . 5 4 . . 5 4 . . 5 4 . . 5 4 . . . 5 a b 4 . . 5 a . . 5 a . . b 4 5 a . 1 . . . . . 1
    //     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    // `);

    // util.enableSlopePhysics(img`
    //     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    //     1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
    //     1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
    //     1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
    //     1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
    //     1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
    //     1 . . . . . . . . . . . . . 5 4 . . . . . . . . . . . . . . . . . . . . . . . 1
    //     1 . . . . . . . . . . . . 5 a b 4 . . . . . . . . . . . . . . . . . . . . . . 1
    //     1 . . . . . . . . . . . 5 a . . b 4 . . . . . . . . . . . . . . . . . . . . . 1
    //     1 . . . . . . . . . . 5 a . . . . b 4 . . . . . . . . . . . . . . . . . . . . 1
    //     1 . . . . . . . . . 5 a . . . . . . b 4 . . . . . . . . . . . . . . . . . . . 1
    //     1 . . . . . . . . 5 a . . . . . . . . b 4 . . . . . . . . . . . . . . . . . . 1
    //     1 . . . . . . . 5 a . . . . . . . . . . b 4 . . . . . . . . . . . . . . . . . 1
    //     1 . . . . . . 5 a . . . . . . . . . . . . b 4 . . . . . . . . . . . . . . . . 1
    //     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    // `)

    util.enableSlopePhysics(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 a . . . . . . . . . . . . . . . . b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 a . . . . . . . . . . . . . b 1 1 1 1 1 1 1 a . . . . . . . . . . . b 1 1 1 1 1 1 a . . . . . . . . . . . b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 a . . b a . . b a . . b 1 a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . b 1 1 1 1 1 . . . . . . . 5 4 . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 5 4 . . 5 4 . . 5 4 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 . . 1 1 1 1 1 1 1 1 1 4 . . b 1 1 1 1 . . . . . . . b 1 1 4 . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 3 3 f 1 1
        1 . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . b a . . b a . . b a . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . 1 5 a . 5 a . 5 a . 1 . . 1 1 1 1 1 1 1 . . b 1 1 1 1 1 1 1 1 1 4 . . b 1 1 1 . . . . 5 4 . . . b a . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a . . . . b 1
        1 . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 5 4 . . 5 4 . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . 1 a . 5 a . 5 a . 5 1 . . 1 1 1 1 1 1 1 4 . . b 1 1 a . . . b 1 1 4 . . 1 1 1 . . 5 1 1 a . 5 4 . . . . 1 1 1 1 1 e c . . d f 1 1 1 a . . . . . . b
        1 . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . b a . . b a . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . 1 . 5 a . 5 a . 5 a 1 . . 1 1 1 1 1 1 1 1 4 . . b a . . . . . 1 1 1 . . 1 1 1 . . b a . . . b 1 1 4 . . 1 1 1 1 a . . . . . . d 3 c . . . 7 2 . . .
        1 . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 5 4 . . 5 4 . . 5 4 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . 1 5 a . 5 a . 5 a . 1 . . 1 1 1 1 a . . b 1 4 . . . . 5 1 . . 1 1 1 . . 1 1 1 . . . . 5 4 . . . b a . . b 1 1 a . . . . . . . . . . . . 5 1 1 . . .
        1 . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . b a . . b a . . b a . 1 . . . . . . . . . . 7 2 2 . . . . . . . . . . . . . . 2 2 6 . . . . . . . . 1 1 . . 1 a . 5 a . 5 a . 5 1 . . 1 1 1 a . . . . b 1 4 . . 5 1 a . . 1 1 a . . 1 1 1 . . 5 1 1 a . . . . . . . . . . . . . . 7 2 6 . . . . . 5 1 1 1 . . .
        1 . . . . . . . . . . . . . . . . . . . . . b 1 1 1 a . . . . . . . 5 4 . . 5 4 . . . 1 . . . . . . . . . 5 1 1 a . . . . . . . . . . . . . . b 1 1 4 . . . . . . . 1 1 . . 1 . 5 a . 5 a . 5 a 1 . . 1 1 a . . . . . . b 1 1 1 1 a . . 5 1 a . . 5 1 1 1 . . b a . . . . . . . . . . . . . . . 5 1 1 1 4 . . . 5 1 1 1 1 . . .
        1 . . . . . . . . . . . . . . . . . . . . . . d 3 c . . . . . . . . b a . . b a . . . 1 . . . . . . . . 5 1 1 1 . . . . . . . . . . . . . . . . 1 1 1 4 . . . . . . 1 1 . . 1 5 a . 5 a . 5 a . 1 . . 1 a . . 5 1 1 4 . . b 1 1 a . . 5 1 1 . . 5 1 1 1 1 4 . . . . . . . . . 7 2 6 . . . . . 5 1 1 1 1 1 8 2 9 1 1 1 1 1 . . .
        1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 4 . . 5 4 . . 5 4 . 1 . . . . . . . 5 1 1 1 1 . . . . . . . . . . . . . . . . 1 1 1 1 4 . . . . . . . . . 1 a . 5 a . 5 a . 5 1 . . . . . 5 1 1 1 1 4 . . b a . . 5 1 1 1 . . 1 1 1 1 1 1 1 . . . . . . . 5 1 1 1 4 . . . 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
        1 . . . . . . . . . . . . . . . . . . 7 2 6 . . . . . 7 2 6 . . b a . . b a . . b a . . . . . . . . 5 1 1 1 1 1 . . . . . . . . . . . . . . . . 1 1 1 1 1 8 6 . . . . . . . 1 . 5 a . 5 a . 5 a 1 . . . . 5 1 a . . b 1 4 . . . . 5 1 1 1 1 . . . . . . . . . . . . . . . 5 1 1 1 1 1 8 2 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
        1 4 . . . . . . . . . . . . . . . . 5 1 1 1 4 . . . 5 1 1 1 4 . . . 5 4 . . 5 4 . . . . . . . . 7 9 1 1 1 1 1 1 . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 1 5 a . 5 a . 5 a . 1 . . 1 1 1 a . . . . b 1 4 . . 5 1 a . b 1 4 . . . . . . . . . . . . 7 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a . . . . . . b 1 1 1 1 a . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
    `)

    const player = sprites.create(img`
        3 3 3
        3 3 3
        3 3 3
        3 3 3
        3 3 3
    `, SpriteKind.Player);

    // const p = new util.Platform(
    //     img`
    //         . . . 5 1
    //         . . 5 1 1
    //         . 5 1 1 1
    //         5 1 1 1 1
    //         1 1 1 1 1
    //     `,
    //     20,
    //     72,
    //     TileScale.Eight);

    scene.cameraFollowSprite(player);

    player.ay = 200;
    player.x = 40
    player.y = 40
    controller.moveSprite(player, 70, 0);

    util.attachAnimation(player, playerAnimation());


    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        if (player.flags & util.SpriteStateFlag.CollisionBottom)
            player.vy = -100;
    })


    // game.onUpdateInterval(20, function () {
    //     const p = new util.Projectile(img`
    //         . 2 .
    //         2 2 2
    //         . 2 .
    //     `, 40, 30);

    //     const angle = (Math.randomRange(0, 360) / 180) * Math.PI;
    //     const speed = 40;
    //     p.setVelocity(speed * Math.cos(angle), speed * Math.sin(angle))
    // })

    // game.onUpdateInterval(20, function () {
    //     const p = new util.Projectile(img`
    //         . 2 .
    //         2 2 2
    //         . 2 .
    //     `, 70, 60);

    //     const angle = (Math.randomRange(0, 360) / 180) * Math.PI;
    //     const speed = 40;
    //     p.setVelocity(speed * Math.cos(angle), speed * Math.sin(angle))
    // })

    game.onShade(function () {
        if (player.flags & util.SpriteStateFlag.CollisionBottom) {
            screen.fillRect(0, screen.height - 2, screen.width, 2, 2)
        }
        if (player.flags & util.SpriteStateFlag.CollisionRight) {
            screen.fillRect(screen.width - 2, 0, 2, screen.height, 2)
        }
        if (player.flags & util.SpriteStateFlag.CollisionLeft) {
            screen.fillRect(0, 0, 2, screen.height, 2)
        }
        if (player.flags & util.SpriteStateFlag.CollisionTop) {
            screen.fillRect(0, 0, screen.width, 2, 2)
        }

        // if (player.flags & util.SpriteStateFlag.Falling) {
        //     screen.drawTransparentImage(img`
        //         . . 2 . .
        //         . . 2 . .
        //         . . 2 . .
        //         2 2 2 2 2
        //         . 2 2 2 .
        //         . . 2 . .
        //     `, 78, 65)
        // }
        // if (player.flags & util.SpriteStateFlag.Jumping) {
        //     screen.drawTransparentImage(img`
        //         . . 2 . .
        //         . 2 2 2 .
        //         2 2 2 2 2
        //         . . 2 . .
        //         . . 2 . .
        //         . . 2 . .
        //     `, 78, 65)
        // }
        // if (player.flags & util.SpriteStateFlag.MovingLeft) {
        //     screen.drawTransparentImage(img`
        //         . . 2 . . .
        //         . 2 2 . . .
        //         2 2 2 2 2 2
        //         . 2 2 . . .
        //         . . 2 . . .
        //     `, 70, 58)
        // }
        // if (player.flags & util.SpriteStateFlag.MovingRight) {
        //     screen.drawTransparentImage(img`
        //         . . . 2 . .
        //         . . . 2 2 .
        //         2 2 2 2 2 2
        //         . . . 2 2 .
        //         . . . 2 . .
        //     `, 85, 58)
        // }

        if (player.top > screen.height) {
            game.reset();
        }
    })

    for (let i = 57; i < 71; i++) {
        makeFallingPlatform(i, 8)
    }

    makeElevator(84, 13, 10, false);
    makeElevator(97, 3, 10, true);
}

function makeFallingPlatform(col: number, row: number) {
    const p = new util.Platform(img`2`, col << TileScale.Eight, row << TileScale.Eight, TileScale.Eight);

    const t = new util.TileTrigger((t: util.TileTrigger) => {
        setTimeout(function () {
            p.setVelocity(0, 60);
        }, 200);
        t.stop();
    });
    t.setArea(new util.MapLocation(col, row));
    t.setKind(SpriteKind.Player);
    t.start();
}

function makeElevator(col: number, row: number, heightInTiles: number, isUp: boolean) {
    const p = new util.Platform(img`1 1`, col << TileScale.Eight, row << TileScale.Eight, TileScale.Eight);

    let moving = false;

    const top = (row - (isUp ? 0 : heightInTiles)) << TileScale.Eight;
    const bottom = (row + (isUp ? heightInTiles : 0)) << TileScale.Eight;

    const t = new util.TileTrigger((t: util.TileTrigger) => {
        setTimeout(function () {
            p.setVelocity(0, isUp ? 60 : -60);
            moving = true;
        }, 200);
        t.stop();
    });
    t.setArea(new util.MapLocation(col, row - 1), 2, 1);
    t.setKind(SpriteKind.Player);
    t.start();

    game.onUpdate(() => {
        if (moving) {
            if (!isUp && Fx.toInt(p.top) < top) {
                p.setVelocity(0, 0);
                p.top = Fx8(top);
                isUp = true;
                moving = false;
                t.setArea(new util.MapLocation(col, (top >> TileScale.Eight) - 1), 2, 1);
                t.start();
            }
            else if (isUp && Fx.toInt(p.top) > bottom) {
                p.setVelocity(0, 0);
                p.top = Fx8(bottom);
                isUp = false;
                moving = false;
                t.setArea(new util.MapLocation(col, (bottom >> TileScale.Eight) - 1), 2, 1);
                t.start();
            }
        }
    })
}

function moveSprite(s: Sprite, left: number, top: number) {
    // HACK
    s._x = Fx8(left);
    s._y = Fx8(top);
}

slopesTest();