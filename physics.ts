namespace util {
    export enum SpriteStateFlag {
        CollisionLeft = 1 << 12,
        CollisionRight = 1 << 13,
        CollisionBottom = 1 << 14,
        CollisionTop = 1 << 15,

        // TODO: set current ground slope underneath sprite
        SteepSlopeRight = 1 << 16,
        SteepSlopeLeft = 1 << 17,
        SlightSlopeRight = 1 << 18,
        SlightSlopeLeft = 1 << 19,

        MovingLeft = 1 << 20,
        MovingRight = 1 << 21,
        Jumping = 1 << 22,
        Falling = 1 << 23,

        MovementFlags =
        CollisionLeft | CollisionRight | CollisionBottom |
        CollisionTop | MovingLeft | MovingRight | Jumping |
        Falling | SteepSlopeRight | SteepSlopeLeft |
        SlightSlopeRight | SlightSlopeLeft
    }

    const slopes = [img`
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
    `, img`
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
    `, img`
        c 0 0 0 0 0 0 0
        c c 0 0 0 0 0 0
        c c c 0 0 0 0 0
        c c c c 0 0 0 0
        c c c c c 0 0 0
        c c c c c c 0 0
        c c c c c c c 0
        c c c c c c c c
    `, img`
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        c c 0 0 0 0 0 0
        c c c c 0 0 0 0
        c c c c c c 0 0
        c c c c c c c c
    `, img`
        c c 0 0 0 0 0 0
        c c c c 0 0 0 0
        c c c c c c 0 0
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
    `, img`
        c c c c c c c c
        c c c c c c c 0
        c c c c c c 0 0
        c c c c c 0 0 0
        c c c c 0 0 0 0
        c c c 0 0 0 0 0
        c c 0 0 0 0 0 0
        c 0 0 0 0 0 0 0
    `, img`
        c c c c c c c c
        c c c c c c 0 0
        c c c c 0 0 0 0
        c c 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
    `, img`
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c 0 0
        c c c c 0 0 0 0
        c c 0 0 0 0 0 0
    `, img`
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
    `, img`
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
    `, img`
        0 0 0 0 0 0 0 c
        0 0 0 0 0 0 c c
        0 0 0 0 0 c c c
        0 0 0 0 c c c c
        0 0 0 c c c c c
        0 0 c c c c c c
        0 c c c c c c c
        c c c c c c c c
    `, img`
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 c c
        0 0 0 0 c c c c
        0 0 c c c c c c
        c c c c c c c c
    `, img`
        0 0 0 0 0 0 c c
        0 0 0 0 c c c c
        0 0 c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
    `, img`
        c c c c c c c c
        0 c c c c c c c
        0 0 c c c c c c
        0 0 0 c c c c c
        0 0 0 0 c c c c
        0 0 0 0 0 c c c
        0 0 0 0 0 0 c c
        0 0 0 0 0 0 0 c
    `, img`
        c c c c c c c c
        0 0 c c c c c c
        0 0 0 0 c c c c
        0 0 0 0 0 0 c c
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0
    `, img`
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        c c c c c c c c
        0 0 c c c c c c
        0 0 0 0 c c c c
        0 0 0 0 0 0 c c
    `];

    const elevationMap = img`
        4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4
        8 7 6 5 4 3 2 1
        1 2 3 4 5 6 7 8
        4 4 3 3 2 2 1 1
        1 1 2 2 3 3 4 4
        8 8 7 7 6 6 5 5
        5 5 6 6 7 7 8 8
    `

    const horizontalMap = img`
        0 0 0 0 8 8 8 8
        8 8 8 8 0 0 0 0
        1 2 3 4 5 6 7 8
        0 0 0 0 2 4 6 8
        2 4 6 8 8 8 8 8
        8 7 6 5 4 3 2 1
        8 6 4 2 0 0 0 0
        8 8 8 8 8 6 4 2
    `;

    // I messed up the import so the sprites are out of order
    const remap = [0, 2, 4, 6, 8, 10, 12, 14, 1, 3, 5, 7, 9, 11, 13, 15]
    const remappedSlopes: Image[] = [];

    function initSlopes() {
        for (let i = 0; i < slopes.length; i++) {
            scene.setTile(remap[i], slopes[i], i > 0);
            remappedSlopes[remap[i]] = slopes[i];
        }
    }

    export class Platform extends sprites.BaseSprite {
        public map: Image;
        public left: Fx8;
        public top: Fx8;
        public vx: Fx8;
        public vy: Fx8;
        public scale: TileScale;
        protected riders: Sprite[];
        protected lastLeft: number;
        protected lastTop: number;

        constructor(map: Image, left: number, top: number, scale: TileScale) {
            super(1);

            this.map = map;
            this.left = Fx8(left);
            this.top = Fx8(top);

            this.lastLeft = left;
            this.lastTop = top;

            this.scale = scale;

            this.vx = Fx8(10);
            this.vy = Fx8(0);

            const engine = SlopePhysics.getInstance();
            if (engine) {
                engine.addPlatform(this);
            }
            this.riders = [];
        }

        __drawCore(camera: scene.Camera) {
            for (let x = 0; x < this.map.width; x++) {
                for (let y = 0; y < this.map.height; y++) {
                    screen.drawTransparentImage(
                        remappedSlopes[this.map.getPixel(x, y)],
                        Fx.toInt(this.left) + (x << this.scale) - camera.drawOffsetX,
                        Fx.toInt(this.top) + (y << this.scale) - camera.drawOffsetY,
                    );
                }
            }
        }

        addRider(rider: Sprite) {
            if (this.riders.indexOf(rider) === -1)
                this.riders.push(rider);
        }

        move(dx: Fx8, dy: Fx8) {
            this.left = Fx.add(this.left, dx);
            this.top = Fx.add(this.top, dy);

            const dx2 = Fx.toInt(this.left) - this.lastLeft;
            const dy2 = Fx.toInt(this.top) - this.lastTop;

            if (dx2 || dy2) {
                this.lastLeft = Fx.toInt(this.left);
                this.lastTop = Fx.toInt(this.top);

                if (this.riders.length) {
                    for (const r of this.riders) {
                        if (dx2) r.x += dx2;
                        if (dy2) r.y += dy2
                    }
                }
            }

            if (this.riders.length) {
                this.riders = this.riders.filter(r => collision(r, 0, 1, this.scale, this.map, Fx.toInt(this.left), Fx.toInt(this.top) - 1, true))
            }
        }
    }

    export class SlopePhysics extends PhysicsEngine {
        protected static instance: SlopePhysics;

        public static getInstance() {
            return SlopePhysics.instance;
        }

        public static setTileMap(map: Image, scale: TileScale) {
            SlopePhysics.instance = new SlopePhysics(map, scale);
        }

        protected map: Image;
        protected sprites: Sprite[];
        protected scale: TileScale;
        protected platforms: Platform[];
        protected projectiles: Projectile[];

        protected constructor(map: Image, scale: TileScale) {
            super();
            this.map = map;
            this.sprites = [];
            this.scale = scale;
            this.platforms = [];
            this.projectiles = [];
        }

        addSprite(sprite: Sprite) {
            this.sprites.push(sprite);
        }

        addPlatform(platform: Platform) {
            this.platforms.push(platform);
        }

        addProjectile(projectile: Projectile) {
            this.projectiles.push(projectile);
        }

        removeSprite(sprite: Sprite) {
            this.sprites.removeElement(sprite);
        }

        removeProjectile(projectile: Projectile) {
            this.projectiles.removeElement(projectile);
        }

        draw() { }

        /** Apply physics and collisions to all sprites **/
        move(dt: number) {
            const dtf = Fx.min(
                MAX_TIME_STEP,
                Fx8(dt * 1000)
            );

            const dtSec = Fx.idiv(dtf, 1000);

            for (const s of this.sprites) {
                s._vx = Fx.add(s._vx, Fx.mul(dtSec, s._ax));
                s._vy = Fx.add(s._vy, Fx.mul(dtSec, s._ay));

                this.moveSprite(s, Fx.mul(s._vx, dtSec), Fx.mul(s._vy, dtSec))
            }

            const deadProjectiles = this.projectiles.filter(p => this.moveProjectile(p, Fx.mul(p.vx, dtSec), Fx.mul(p.vy, dtSec)))

            for (const p of deadProjectiles) {
                p.destroy();
            }

            for (const p of this.platforms) {
                p.move(Fx.mul(dtSec, p.vx), Fx.mul(dtSec, p.vy));
            }
        }


        /** move a single sprite **/
        moveSprite(s: Sprite, dx: Fx8, dy: Fx8) {
            const steps = 1 + Math.max(Fx.toInt(Fx.idiv(Fx.abs(dx), Math.min(s.width, 1 << this.scale))), Fx.toInt(Fx.idiv(Fx.abs(dy), Math.min(s.height, 1 << this.scale))));

            dx = Fx.idiv(dx, steps);
            dy = Fx.idiv(dy, steps);

            let yComp = Fx.compare(dy, Fx.zeroFx8);
            let xComp = Fx.compare(dx, Fx.zeroFx8);
            for (let i = 0; i < steps; i++) {
                s._x = Fx.add(dx, s._x);
                s._y = Fx.add(dy, s._y);

                if (collision(s, xComp, yComp, this.scale, this.map, 0, 0)) return;

                for (const p of this.platforms) {
                    if (collision(s, xComp, yComp, this.scale, p.map, Fx.toInt(p.left), Fx.toInt(p.top))) {
                        if (yComp > 0) p.addRider(s);
                        return;
                    }

                    // if (yComp < 0 && collision(s, xComp, yComp, this.scale, p.map, Fx.toInt(p.left), Fx.toInt(p.top) + 1)) {
                    //     p.addRider(s); return;
                    // }
                }
            }
        }

        moveProjectile(p: Projectile, dx: Fx8, dy: Fx8) {
            const steps = 1 + Math.max(Fx.toInt(Fx.idiv(Fx.abs(dx), Math.min(p.src.width, 1 << this.scale))), Fx.toInt(Fx.idiv(Fx.abs(dy), Math.min(p.src.height, 1 << this.scale))));

            dx = Fx.idiv(dx, steps);
            dy = Fx.idiv(dy, steps);

            let yComp = Fx.compare(dy, Fx.zeroFx8);
            let xComp = Fx.compare(dx, Fx.zeroFx8);
            for (let i = 0; i < steps; i++) {
                p._left = Fx.add(dx, p._left);
                p._top = Fx.add(dy, p._top);

                if (projectileCollision(p, xComp, yComp, this.scale, this.map, 0, 0)) {
                    return true;
                }

                for (const pl of this.platforms) {
                    if (projectileCollision(p, xComp, yComp, this.scale, pl.map, Fx.toInt(pl.left), Fx.toInt(pl.top))) {
                        // if (yComp > 0) p.addRider(s);
                        return true;
                    }
                }
            }

            return false;
        }

        setMaxSpeed(speed: number) { }

        overlaps(sprite: Sprite): Sprite[] { return []; }
    }

    export function enableSlopePhysics(map: Image) {
        initSlopes();
        SlopePhysics.setTileMap(map, TileScale.Eight);
        game.currentScene().physicsEngine = SlopePhysics.getInstance();

        // Just used for drawing
        scene.setTileMap(map, TileScale.Eight)
    }

    function testDownward(geometry: number, offsetX: number, offsetY: number) {
        switch (geometry) {
            // Empty
            case 0:
            // Top half solid
            case 3:
            // Steep slope (top left)
            case 10:
            // Steep slope (top right)
            case 11:
            // Slight slope (top left)
            case 12:
            // Slight slope (top right)
            case 13:
            // Slight slope (top left, lower half)
            case 14:
            // Slight slope (top right, lower half)
            case 15:
                return 0;

            // Solid
            case 1:
                return offsetY;

            // Bottom half solid
            case 2:
            // Steep slope (bottom left)
            case 4:
            // Steep slope (bottom right)
            case 5:
            // Slight slope (bottom left)
            case 6:
            // Slight slope (bottom right)
            case 7:
            // Slight slope (bottom left, upper half)
            case 8:
            // Slight slope (bottom right, upper half)
            case 9:
                return Math.max(offsetY - (8 - elevationMap.getPixel(offsetX, geometry - 2)), 0);
        }

        return 0;
    }

    function testUpward(geometry: number, offsetX: number, offsetY: number) {
        switch (geometry) {
            // Empty
            case 0:
            // Bottom half solid
            case 2:
            // Steep slope (bottom left)
            case 4:
            // Steep slope (bottom right)
            case 5:
            // Slight slope (bottom left)
            case 6:
            // Slight slope (bottom right)
            case 7:
            // Slight slope (bottom left, upper half)
            case 8:
            // Slight slope (bottom right, upper half)
            case 9:
                return 0;

            // Solid
            case 1:
                return 9 - offsetY;

            // Top half solid
            case 3: return Math.max(4 - offsetY, 0);
            // Steep slope (top left)
            case 10:
            // Steep slope (top right)
            case 11: 
            // Slight slope (top left)
            case 12: 
            // Slight slope (top right)
            case 13: 
            // Slight slope (top left, lower half)
            case 14:
            // Slight slope (top right, lower half)
            case 15:
                break;
        }
        return Math.max(elevationMap.getPixel(offsetX, geometry - 8) - offsetY, 0);
    }

    function testRight(geometry: number, offsetX: number, offsetY: number) {
        let row = 0;
        switch (geometry) {
            // Steep slope (bottom left)
            case 4:
            // Slight slope (bottom left)
            case 6:
            // Slight slope (bottom left, upper half)
            case 8:
            // Steep slope (top left)
            case 10:
            // Slight slope (top left)
            case 12:
            // Slight slope (top left, lower half)
            case 14:
            // Empty
            case 0:
                return 0;

            // Solid
            case 1:
                return offsetX;

            // Bottom half solid
            case 2: row = 0; break;
            // Top half solid
            case 3: row = 1; break;
            // Steep slope (bottom right)
            case 5: row = 2; break;
            // Slight slope (bottom right)
            case 7: row = 3; break;
            // Slight slope (bottom right, upper half)
            case 9: row = 4; break;
            // Steep slope (top right)
            case 11: row = 5; break;
            // Slight slope (top right)
            case 13: row = 6; break;
            // Slight slope (top right, lower half)
            case 15: row = 7; break;
        }

        return Math.max(offsetX - (8 - horizontalMap.getPixel(offsetY, row)), 0);
    }

    function testLeft(geometry: number, offsetX: number, offsetY: number) {
        let row = 0;
        switch (geometry) {
            // Steep slope (bottom right)
            case 5:
            // Slight slope (bottom right)
            case 7:
            // Slight slope (bottom right, upper half)
            case 9:
            // Steep slope (top right)
            case 11:
            // Slight slope (top right)
            case 13:
            // Slight slope (top right, lower half)
            case 15:
            // Empty
            case 0:
                return 0;

            // Solid
            case 1:
                return 9 - offsetX;

            // Bottom half solid
            case 2: row = 0; break;
            // Top half solid
            case 3: row = 1; break;
            // Steep slope (bottom left)
            case 4: row = 2; break;
            // Slight slope (bottom left)
            case 6: row = 3; break;
            // Slight slope (bottom left, upper half)
            case 8: row = 4; break;
            // Steep slope (top left)
            case 10: row = 5; break;
            // Slight slope (top left)
            case 12: row = 6; break;
            // Slight slope (top left, lower half)
            case 14: row = 7; break;
        }

        return Math.max(horizontalMap.getPixel(offsetY, row) - offsetX, 0);
    }


    /** move a single sprite **/
    function collision(s: Sprite, xComp: number, yComp: number, scale: number, map: Image, ox: number, oy: number, dontMove = false) {
        let offset: number;
        let offset2: number;
        let colAligned: number;
        let rowAligned: number;

        // First check horizontal movement and bounce out of walls. Check
        // using the vertical center line of the sprite
        rowAligned = ((s.y - oy) >> scale) << scale;

        if (!dontMove) {
            if (xComp > 0) {
                // Moving right
                colAligned = ((s.right - ox) >> scale) << scale;

                offset = testRight(
                    map.getPixel(colAligned >> scale, rowAligned >> scale),
                    (s.right - ox) - colAligned,
                    (s.y - oy) - rowAligned
                );

                if (offset) {
                    s._x = Fx8(s.left - offset);
                    s.vx = 0;
                }
            }
            else if (xComp < 0) {
                // Moving left
                colAligned = ((s.left - ox) >> scale) << scale;

                offset = testLeft(
                    map.getPixel(colAligned >> scale, rowAligned >> scale),
                    (s.left - ox) - colAligned,
                    (s.y - oy) - rowAligned
                );

                if (offset) {
                    s._x = Fx8(s.left + offset)
                    s.vx = 0;
                    xComp = 0;
                }
            }
        }


        // Next check vertical movement using the left and right sides
        if (yComp > 0) {
            // Moving down
            colAligned = ((s.left - ox) >> scale) << scale;
            rowAligned = (((s.bottom - oy) - 1) >> scale) << scale;


            offset = testDownward(
                map.getPixel(colAligned >> scale, rowAligned >> scale),
                (s.left - ox) - colAligned,
                (s.bottom - oy) - rowAligned
            );
            console.log(`row: ${rowAligned} bottom:${s.bottom} offset:${offset} y:${Fx.toInt(s._y)}`)

            colAligned = (((s.right - ox) - 1) >> scale) << scale;

            offset2 = testDownward(
                map.getPixel(colAligned >> scale, rowAligned >> scale),
                (s.right - ox) - 1 - colAligned,
                (s.bottom - oy) - rowAligned
            );

            if (offset || offset2) {
                if (!dontMove) {
                    s._y = Fx8(s.top - (Math.max(offset, offset2)))
                    s.vy = 0;
                    console.log(`new-bottom:${s.bottom} y:${Fx.toInt(s._y)} offset:${Math.max(offset, offset2)} roundtrip:${Fx.toInt(Fx8(s.y - (Math.max(offset, offset2))))}`)
                }

                return true;
            }
        }
        else if (yComp < 0) {
            // Moving up
            colAligned = ((s.left - ox) >> scale) << scale;
            rowAligned = ((s.top - oy) >> scale) << scale;

            offset = testUpward(
                map.getPixel(colAligned >> scale, rowAligned >> scale),
                (s.left - ox) - colAligned,
                (s.top - oy) - rowAligned
            );

            colAligned = (((s.right - ox) - 1) >> scale) << scale;

            offset2 = testUpward(
                map.getPixel(colAligned >> scale, rowAligned >> scale),
                (s.right - ox) - 1 - colAligned,
                (s.top - oy) - rowAligned
            );

            if (offset || offset2) {
                if (!dontMove) {
                    s._y = Fx8(s.top + Math.max(offset, offset2) - 2)
                    s.vy = 0;
                }
                return true;
            }
        }

        return false;
    }

    function projectileCollision(p: Projectile, xComp: number, yComp: number, scale: number, map: Image, ox: number, oy: number) {
        let colAligned: number;
        let rowAligned: number;

        // Check horizontal from center
        rowAligned = ((p.cy - oy) >> scale) << scale;

        if (xComp > 0) {
            // Moving right
            colAligned = ((p.right - ox) >> scale) << scale;

            if (testRight(
                map.getPixel(colAligned >> scale, rowAligned >> scale),
                (p.right - ox) - colAligned,
                (p.cy - oy) - rowAligned
            )) return true;
        }
        else if (xComp < 0) {
            // Moving left
            colAligned = ((p.left - ox) >> scale) << scale;

            if (testLeft(
                map.getPixel(colAligned >> scale, rowAligned >> scale),
                (p.left - ox) - colAligned,
                (p.cy - oy) - rowAligned
            )) return true;
        }


        // Check vertical from center
        colAligned = ((p.cx - ox) >> scale) << scale;

        if (yComp > 0) {
            // Moving down
            rowAligned = (((p.bottom - oy) - 1) >> scale) << scale;

            if (testDownward(
                map.getPixel(colAligned >> scale, rowAligned >> scale),
                (p.cx - ox) - colAligned,
                (p.bottom - oy) - rowAligned
            )) return true;
        }
        else if (yComp < 0) {
            // Moving up
            rowAligned = ((p.top - oy) >> scale) << scale;

            if(testUpward(
                map.getPixel(colAligned >> scale, rowAligned >> scale),
                (p.cx - ox) - colAligned,
                (p.top - oy) - rowAligned
            )) return true;
        }

        return false;
    }
}
