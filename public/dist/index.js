import { drawRect } from './render.js';
console.log('Olá mundo do Ping Pong Breaker Project');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
if (!ctx)
    throw new Error('ctx não criado com sucesso!');
canvas.classList.add('canvas-display');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const rect = { x: canvas.width * .5, y: canvas.height * .8, width: canvas.width * .10, height: canvas.width * .03 };
const point = { x: 0, y: 0, };
const marginY = canvas.height * .08;
canvas.addEventListener('pointerdown', (event) => {
    point.x = event.clientX;
    point.y = event.clientY;
});
canvas.addEventListener('pointerup', (event) => {
    point.x = event.clientX;
    point.y = event.clientY;
});
canvas.addEventListener('pointerenter', (event) => {
    point.x = event.clientX;
    point.y = event.clientY;
});
canvas.addEventListener('pointerout', (event) => {
    point.x = event.clientX;
    point.y = event.clientY;
});
canvas.addEventListener('pointermove', (event) => {
    point.x = event.clientX;
    point.y = event.clientY;
});
class AppLoop {
    constructor() {
        this.handleId = 0;
        this.handles = [];
        /**
         * @param timestamp
         */
        this.handleLoop = (timestamp) => {
            for (const handle of this.handles) {
                try {
                    handle(timestamp);
                }
                catch (ex) {
                    console.error('Erro no handler', ex);
                }
            }
            this.handleId = requestAnimationFrame(this.handleLoop);
        };
    }
    start() {
        if (this.handleId === 0) {
            this.handleId = requestAnimationFrame(this.handleLoop);
        }
    }
    /**
     *
     * @param handler
     */
    add(handler) {
        this.handles.push(handler);
    }
}
const appLoop = new AppLoop();
appLoop.add((timestamp) => {
    // update
    rect.x = point.x;
    rect.y = point.y - marginY;
    // background
    drawRect(ctx, 0, 0, ctx.canvas.width, ctx.canvas.height, 'blue');
    // paddle (renderiza centralizado)
    drawRect(ctx, rect.x - rect.width / 2, rect.y - rect.height / 2, rect.width, rect.height, 'white');
});
appLoop.start();
