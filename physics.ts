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
        NoCollide = 1 << 24,

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


    // I messed up the import so the sprites are out of order
    const remap = [0, 2, 4, 6, 8, 10, 12, 14, 1, 3, 5, 7, 9, 11, 13, 15]
    const remappedSlopes: Image[] = [];

    let debug: number[];

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

            this.vx = Fx8(0);
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
                        if (dx2) r._x = Fx8(r.left + dx2);
                        if (dy2) r._y = Fx8(r.top + dy2)
                    }
                }
            }

            if (this.riders.length) {
                this.riders = this.riders.filter(r => !!collision(r, 0, 1, this.scale, this.map, Fx.toInt(this.left), Fx.toInt(this.top) - 1, true))
            }
        }

        setVelocity(vx: number, vy: number) {
            this.vx = Fx8(vx);
            this.vy = Fx8(vy);
        }

        overlapsSprite(s: Sprite) {
            return overlaps(s, Fx.toInt(this.left), Fx.toInt(this.top), this.map.width << this.scale, this.map.height << this.scale);
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
        protected spriteMap: sprites.SpriteMap;
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
            this.spriteMap = new sprites.SpriteMap();

            if (!debug && false) {
                debug = [0, 0, 0];
                scene.createRenderable(-1, function () {
                    drawDebug(debug[0], debug[1], debug[2]);
                })
            }
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

            this.spriteMap.clear();
            this.spriteMap.resizeBuckets(this.sprites);

            for (const s of this.sprites) {
                s._vx = Fx.add(s._vx, Fx.mul(dtSec, s._ax));
                s._vy = Fx.add(s._vy, Fx.mul(dtSec, s._ay));

                this.moveSprite(s, Fx.mul(s._vx, dtSec), Fx.mul(s._vy, dtSec))

                // debug[0] = s.left;
                // debug[1] = s.right;
                // debug[2] = s.y + 2;

                if (!(s.flags & SPRITE_CANNOT_COLLIDE)) {
                    this.spriteMap.insertAABB(s);
                }
            }

            const deadProjectiles = this.projectiles.filter(p => this.moveProjectile(p, Fx.mul(p.vx, dtSec), Fx.mul(p.vy, dtSec)))

            for (const p of deadProjectiles) {
                p.destroy();
            }

            for (const p of this.platforms) {
                p.move(Fx.mul(dtSec, p.vx), Fx.mul(dtSec, p.vy));
            }

            this.spriteCollisions(this.sprites, game.currentScene().overlapHandlers.slice());
        }


        /** move a single sprite **/
        moveSprite(s: Sprite, dx: Fx8, dy: Fx8) {
            s._lastX = s._x;
            s._lastY = s._y;
            
            const steps = 1 + Math.max(Fx.toInt(Fx.idiv(Fx.abs(dx), Math.min(s.width, 1 << (this.scale - 1)))), Fx.toInt(Fx.idiv(Fx.abs(dy), Math.min(s.height, 1 << (this.scale - 1)))));

            s.flags = clearAnimationState(s.flags)

            dx = Fx.idiv(dx, steps);
            dy = Fx.idiv(dy, steps);

            let yComp = Fx.compare(dy, Fx.zeroFx8);
            let xComp = Fx.compare(dx, Fx.zeroFx8);

            for (let i = 0; i < steps; i++) {
                s._x = Fx.add(dx, s._x);
                s._y = Fx.add(dy, s._y);

                if (collision(s, xComp, yComp, this.scale, this.map, 0, 0)) break;

                for (const p of this.platforms) {       
                    if (collision(s, xComp, yComp, this.scale, p.map, Fx.toInt(p.left), Fx.toInt(p.top))) {
                        if (yComp > 0) p.addRider(s);
                        break;
                    }

                    // if (yComp < 0 && collision(s, xComp, yComp, this.scale, p.map, Fx.toInt(p.left), Fx.toInt(p.top) + 1)) {
                    //     p.addRider(s); return;
                    // }
                }
            }

            if (xComp > 0) {
                s.flags |= SpriteStateFlag.MovingRight;
            }
            else if (xComp < 0) {
                s.flags |= SpriteStateFlag.MovingLeft;
            }

            if (yComp > 0 && !(s.flags & SpriteStateFlag.CollisionBottom)) {
                s.flags |= SpriteStateFlag.Falling;
            }
            else if (yComp < 0) {
                s.flags |= SpriteStateFlag.Jumping;
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

        overlaps(sprite: Sprite): Sprite[] {
            return this.spriteMap.overlaps(sprite);
        }

        protected spriteCollisions(movedSprites: Sprite[], handlers: scene.OverlapHandler[]) {
            control.enablePerfCounter("phys_collisions");
            if (!handlers.length) return;

            // sprites that have moved this step
            for (const sprite of movedSprites) {
                if (sprite.flags & SPRITE_CANNOT_COLLIDE) continue;
                const overSprites = this.spriteMap.overlaps(sprite);

                for (const overlapper of overSprites) {
                    if (overlapper.flags & SPRITE_CANNOT_COLLIDE) continue;
                    const thisKind = sprite.kind();
                    const otherKind = overlapper.kind();

                    // skip if no overlap event between these two kinds of sprites
                    if (sprite._kindsOverlappedWith.indexOf(otherKind) === -1) continue;

                    // Maintaining invariant that the sprite with the higher ID has the other sprite as an overlapper
                    const higher = sprite.id > overlapper.id ? sprite : overlapper;
                    const lower = higher === sprite ? overlapper : sprite;

                    // if the two sprites are not currently engaged in an overlap event,
                    // apply all matching overlap events
                    if (higher._overlappers.indexOf(lower.id) === -1) {
                        handlers
                            .filter(h => (h.kind === thisKind && h.otherKind === otherKind)
                                || (h.kind === otherKind && h.otherKind === thisKind)
                            )
                            .forEach(h => {
                                higher._overlappers.push(lower.id);
                                control.runInParallel(() => {
                                    h.handler(
                                        thisKind === h.kind ? sprite : overlapper,
                                        thisKind === h.kind ? overlapper : sprite
                                    );
                                    higher._overlappers.removeElement(lower.id);
                                });
                            });
                    }
                }
            }
        }
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
        if (geometry === 1) return offsetX;
        return 0;
    }

    function testLeft(geometry: number, offsetX: number, offsetY: number) {
        if (geometry === 1) return 8 - offsetX;
        return 0;
    }


    /** move a single sprite **/
    function collision(s: Sprite, xComp: number, yComp: number, scale: number, map: Image, ox: number, oy: number, dontMove = false) {
        if (s.flags & SpriteStateFlag.NoCollide) return false;
        let didCollide: number;
            horizontalCollision(s, xComp, yComp, scale, map, ox, oy, dontMove);
            didCollide = verticalCollision(s, yComp, scale, map, ox, oy, dontMove);
        // if (xComp === 0 || Math.abs(xComp) < Math.abs(yComp)) {
        // }
        // else {
        //     didCollide = verticalCollision(s, yComp, scale, map, ox, oy, dontMove);
        //     horizontalCollision(s, xComp, scale, map, ox, oy, dontMove);
        // }
        return didCollide;
    }

    function verticalCollision(s: Sprite, yComp: number, scale: number, map: Image, ox: number, oy: number, dontMove: boolean) {
        let offset: number;

        let leftAligned = alignToScale(s.left - ox, scale);
        let rightAligned = alignToScale(s.right - ox - 1, scale);
        let rowAligned = alignToScale(s.bottom - oy - 1, scale);

        // Next check vertical movement using the left and right sides
        if (yComp > 0) {
            // Moving down

            offset = testDownward(
                map.getPixel(leftAligned >> scale, rowAligned >> scale),
                (s.left - ox) - leftAligned,
                (s.bottom - oy) - rowAligned
            );


            offset = Math.max(offset, testDownward(
                map.getPixel(rightAligned >> scale, rowAligned >> scale),
                (s.right - ox) - 1 - rightAligned,
                (s.bottom - oy) - rowAligned
            ))

            if (offset) {
                if (!dontMove) {
                    s._y = Fx8(s.top - offset)
                    s.vy = 0;
                    s.flags |= SpriteStateFlag.CollisionBottom
                }
            }

            // Test to see if we are 1 pixel above the ground but not
            // overlapping
            if (!offset) {
                // If 1 pixel below the sprite is the next tile, shift rowAligned
                if (alignToScale(s.bottom - oy, scale) != rowAligned) {
                    rowAligned = alignToScale(s.bottom - oy, scale);

                    if (testDownward(map.getPixel(rightAligned >> scale, rowAligned >> scale), (s.right - ox) - 1 - rightAligned, 1) ||
                        testDownward(map.getPixel(leftAligned >> scale, rowAligned >> scale), (s.left - ox) - leftAligned, 1)) {

                        s.flags |= SpriteStateFlag.CollisionBottom
                    }
                }
                else if (testDownward(map.getPixel(rightAligned >> scale, rowAligned >> scale), (s.right - ox) - 1 - rightAligned, (s.bottom - oy) - rowAligned + 1) ||
                    testDownward(map.getPixel(leftAligned >> scale, rowAligned >> scale), (s.left - ox) - leftAligned, (s.bottom - oy) - rowAligned + 1)) {
                    s.flags |= SpriteStateFlag.CollisionBottom
                }
            }
        }
        else if (yComp < 0) {
            // Moving up
            rowAligned = alignToScale(s.top - oy, scale);

            offset = testUpward(
                map.getPixel(leftAligned >> scale, rowAligned >> scale),
                (s.left - ox) - leftAligned,
                (s.top - oy) - rowAligned
            );

            rightAligned = alignToScale(s.right - ox - 1, scale);;

            offset = Math.max(offset, testUpward(
                map.getPixel(rightAligned >> scale, rowAligned >> scale),
                (s.right - ox) - 1 - rightAligned,
                (s.top - oy) - rowAligned
            ));

            if (offset) {
                if (!dontMove) {
                    s._y = Fx8(s.top + offset - 2)
                    s.vy = 0;
                }
            }
        }

        return offset;
    }

    function horizontalCollision(s: Sprite, xComp: number, yComp: number, scale: number, map: Image, ox: number, oy: number, dontMove: boolean) {
        let offset: number;

        // First check horizontal movement and bounce out of walls. Check
        // using the vertical center line of the sprite
        const y = (yComp > 0 ? s.y - 2 : s.y + 2) - oy;
        let leftAligned = alignToScale(s.left - ox, scale);
        let rightAligned = alignToScale(s.right - ox, scale);
        let rowAligned = alignToScale(y, scale);

        if (xComp > 0) {
            // Moving right

            offset = testRight(
                map.getPixel(rightAligned >> scale, rowAligned >> scale),
                (s.right - ox) - rightAligned,
                y - rowAligned
            );

            if (offset) {
                if (!dontMove) {
                    s._x = Fx8(s.left - offset);
                    s.vx = 0;
                }
            }
        }
        if (xComp < 0) {
            // Moving left
            offset = testLeft(
                map.getPixel(leftAligned >> scale, rowAligned >> scale),
                (s.left - ox) - leftAligned,
                y - rowAligned
            );

            if (offset) {
                if (!dontMove) {
                    s._x = Fx8(s.left + offset)
                    s.vx = 0;
                }
            }
        }

        return offset;
    }

    function projectileCollision(p: Projectile, xComp: number, yComp: number, scale: number, map: Image, ox: number, oy: number) {
        let colAligned: number;
        let rowAligned: number;

        // Check horizontal from center
        rowAligned = alignToScale(p.cy - oy, scale);

        if (xComp > 0) {
            // Moving right
            colAligned = alignToScale(p.right - ox, scale);

            if (testRight(
                map.getPixel(colAligned >> scale, rowAligned >> scale),
                (p.right - ox) - colAligned,
                (p.cy - oy) - rowAligned
            )) return true;
        }
        else if (xComp < 0) {
            // Moving left
            colAligned = alignToScale(p.left - ox, scale);

            if (testLeft(
                map.getPixel(colAligned >> scale, rowAligned >> scale),
                (p.left - ox) - colAligned,
                (p.cy - oy) - rowAligned
            )) return true;
        }


        // Check vertical from center
        colAligned = alignToScale(p.cx - ox, scale);

        if (yComp > 0) {
            // Moving down
            rowAligned = alignToScale(p.bottom - oy - 1, scale);

            if (testDownward(
                map.getPixel(colAligned >> scale, rowAligned >> scale),
                (p.cx - ox) - colAligned,
                (p.bottom - oy) - rowAligned
            )) return true;
        }
        else if (yComp < 0) {
            // Moving up
            rowAligned = alignToScale(p.top - oy, scale);

            if(testUpward(
                map.getPixel(colAligned >> scale, rowAligned >> scale),
                (p.cx - ox) - colAligned,
                (p.top - oy) - rowAligned
            )) return true;
        }

        return false;
    }

    function clearAnimationState(flags: number) {
        return flags & (0xfffffff ^ SpriteStateFlag.MovementFlags);
    }

    function drawDebug(left: number, right: number, bottom: number) {
        const c = game.currentScene().camera;
        // Column aligned
        verticalLine(c.drawOffsetX, (right >> 3) << 3, 1)
        verticalLine(c.drawOffsetX, (left >> 3) << 3, 1)

        // Actual
        verticalLine(c.drawOffsetX, right, 4)
        verticalLine(c.drawOffsetX, left, 4)

        // Row aligned
        horizontalLine(c.drawOffsetY, (bottom >> 3) << 3, 15)

        // Actual
        horizontalLine(c.drawOffsetY, bottom, 15)
    }

    function verticalLine(drawOffsetX: number, x: number, color: number) {
        screen.fillRect(x - drawOffsetX, 0, 1, screen.height, color);
    }

    function horizontalLine(drawOffsetY: number, y: number, color: number) {
        screen.fillRect(0, y - drawOffsetY, screen.width, 1, color);
    }

    function alignToScale(value: number, scale: number) {
        return (value >> scale) << scale;
    }
}
