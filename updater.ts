namespace util {
    export class UpdaterService {
        private static instance: UpdaterService;

        static getService() {
            if (!UpdaterService.instance) {
                UpdaterService.instance = new UpdaterService();
            }
            return UpdaterService.instance;
        }

        protected updaters: Updater[];
        protected removeQueue: Updater[];
        protected updateLock: boolean;

        private constructor() {
            this.updaters = [];
            this.removeQueue = [];

            let lastTime = game.runtime();
            let time: number;
            let dt: number;
            let i = 0;
            game.onUpdate(() => {
                time = game.runtime();
                dt = time - lastTime;

                this.updateLock = true;
                for (i = 0; i < this.updaters.length; i++) {
                    this.updaters[i].update(dt);
                }
                this.updateLock = false;

                while (this.removeQueue.length) {
                    this.updaters.removeElement(this.removeQueue.pop());
                }

                lastTime = time;
            });
        }

        addUpdater(updater: Updater) {
            this.updaters.push(updater);
        }

        removeUpdater(updater: Updater) {
            if (this.updateLock) {
                this.removeQueue.push(updater);
            }
            else {
                this.updaters.removeElement(updater);
            }
        }
    }

    export class Updater {
        protected running: boolean;

        constructor() {
            this.running = false;
        }

        isRunning() {
            return this.running;
        }

        start() {
            if (this.isRunning()) return;

            UpdaterService.getService().addUpdater(this);
            this.running = true;
        }

        stop() {
            if (this.isRunning()) {
                this.running = false;
                UpdaterService.getService().removeUpdater(this);
            }
        }

        update(dt: number) {
            // subclass
        }
    }

    export class IntervalUpdater extends Updater {
        protected timer: number;
        protected interval: number;

        constructor(interval: number) {
            super();
            this.interval = interval;
            this.timer = 0;
        }

        update(dt: number) {
            this.timer += dt;
            while (this.timer > this.interval) {
                this.timer -= this.interval;
                this.onInterval();
            }
        }

        onInterval() {
            // subclass
        }
    }
} 