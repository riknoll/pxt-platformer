namespace util {
    let allProjectiles: Projectile[];

    export class Projectile {
        src: Image;
        _top: Fx8;
        _left: Fx8;
        vx: Fx8;
        vy: Fx8;

        constructor(src: Image, left: number, top: number) {
            this.src = src;
            this._left = Fx8(left);
            this._top = Fx8(top);
            this.vx = Fx.zeroFx8;
            this.vy = Fx.zeroFx8;

            if (!allProjectiles) {
                allProjectiles = [this];
                scene.createRenderable(0, function (target: Image, camera: scene.Camera) {
                    for (const p of allProjectiles) p.draw(camera);
                })
            }
            else {
                allProjectiles.push(this);
            }

            SlopePhysics.getInstance().addProjectile(this);
        }

        get top() {
            return Fx.toInt(this._top) ;
        }

        get left() {
            return Fx.toInt(this._left); 
        }

        get bottom() {
            return Fx.toInt(this._top) + this.src.height;
        }

        get right() {
            return Fx.toInt(this._left) + this.src.width;
        }

        get cx() {
            return Fx.toInt(this._left) + (this.src.width >> 1);
        }

        get cy() {
            return Fx.toInt(this._top) + (this.src.height >> 1);
        }

        setVelocity(vx: number, vy: number) {
            this.vx = Fx8(vx);
            this.vy = Fx8(vy);
        }

        overlapsSprite(s: Sprite) {
            return overlaps(s, this.left, this.top, this.src.width, this.src.height);
        }

        destroy() {
            SlopePhysics.getInstance().removeProjectile(this);
            allProjectiles.removeElement(this);
        }

        draw(camera: scene.Camera) {
            screen.drawTransparentImage(this.src, this.left - camera.drawOffsetX, this.top - camera.drawOffsetY);
        }
    }

    export function overlaps(s: Sprite, x: number, y: number, width: number, height: number) {
        return !(s.right < x || s.left > (x + width) || s.bottom < y || s.top > (y + height));
    }
}