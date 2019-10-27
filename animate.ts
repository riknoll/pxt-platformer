namespace util {
    let animating: AnimationState[];

    function init() {
        if (animating) return;
        animating = [];

        let destroyedSprite = false;

        game.onUpdate(function () {
            destroyedSprite = false;
            for (const a of animating) {
                a.update();
                if (a.target.flags & sprites.Flag.Destroyed) {
                    destroyedSprite = true;
                }
            }
            if (destroyedSprite) animating = animating.filter(a => !!(a.target.flags & sprites.Flag.Destroyed))
        })
    }


    export class FrameAnimation {
        constructor(public frames: Image[], public interval: number) { }
    }

    export class MovementAnimation {
        public idleLeftFrames: FrameAnimation;
        public idleRightFrames: FrameAnimation;
        public jumpRightFrames: FrameAnimation;
        public jumpLeftFrames: FrameAnimation;
        public fallLeftFrames: FrameAnimation;
        public fallRightFrames: FrameAnimation;
        public walkLeftFrames: FrameAnimation;
        public walkRightFrames: FrameAnimation;

        constructor() { }

        getCurrentFrames(state: number, facingLeft: boolean) {
            if (state & SpriteStateFlag.CollisionBottom) {
                if (state & SpriteStateFlag.MovingRight) {
                    return this.walkRightFrames;
                }
                else if (state & SpriteStateFlag.MovingLeft) {
                    return this.walkLeftFrames;
                }
            }
            else if (state & SpriteStateFlag.Falling) {
                if (state & SpriteStateFlag.MovingRight) {
                    return this.fallRightFrames;
                }
                else if (state & SpriteStateFlag.MovingLeft) {
                    return this.fallLeftFrames;
                }
                else {
                    return facingLeft ? this.fallLeftFrames : this.fallRightFrames;
                }
            }
            else if (state & SpriteStateFlag.Jumping) {
                if (state & SpriteStateFlag.MovingRight) {
                    return this.jumpRightFrames;
                }
                else if (state & SpriteStateFlag.MovingLeft) {
                    return this.jumpLeftFrames;
                }
                else {
                    return facingLeft ? this.jumpLeftFrames : this.jumpRightFrames;
                }
            }

            return facingLeft ? this.idleLeftFrames : this.idleRightFrames;
        }
    }

    export class AnimationState {
        public facingLeft: boolean;
        public lastState: number;

        constructor(public target: Sprite, public animation: MovementAnimation) {
            this.facingLeft = false;
        }

        update() {
            if ((this.target.flags & SpriteStateFlag.MovementFlags) != this.lastState) {
                this.lastState = this.target.flags & SpriteStateFlag.MovementFlags;
                logState(this.lastState)

                if (this.lastState & SpriteStateFlag.MovingLeft) this.facingLeft = true;
                else if (this.lastState & SpriteStateFlag.MovingRight) this.facingLeft = false;

                const frames = this.animation.getCurrentFrames(this.lastState, this.facingLeft);

                if (frames) {
                    animation.runImageAnimation(this.target, frames.frames, frames.interval, true);
                }
            }
        }
    }

    export function attachAnimation(s: Sprite, anim: MovementAnimation) {
        init();

        animating.push(new AnimationState(s, anim));
    }

    export function logState(state: number) {
        // console.log(`bottom:${!!(state & SpriteStateFlag.CollisionBottom) ? 1 : 0} top:${!!(state & SpriteStateFlag.CollisionTop) ? 1 : 0} left:${!!(state & SpriteStateFlag.CollisionLeft) ? 1 : 0} right:${!!(state & SpriteStateFlag.CollisionRight) ? 1 : 0} move-right:${!!(state & SpriteStateFlag.MovingRight) ? 1 : 0} move-left:${!!(state & SpriteStateFlag.MovingLeft) ? 1 : 0} jump:${!!(state & SpriteStateFlag.Jumping) ? 1 : 0} fall:${!!(state & SpriteStateFlag.Falling) ? 1 : 0}`)
    }
}