import { drawRect } from './render.js';

console.log('Olá mundo do Ping Pong Breaker Project');

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

if (!ctx) throw new Error('ctx não criado com sucesso!');

canvas.classList.add('canvas-display');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

const rect = { x: canvas.width * .5, y: canvas.height * .8, width: 20, height: 10 };

canvas.addEventListener('pointerdown', (event) => {
    console.log(event);
    rect.x = event.clientX;
    rect.y = event.clientY;
});

canvas.addEventListener('pointerup', (event) => {
    console.log(event);
    rect.x = event.clientX;
    rect.y = event.clientY;
});

canvas.addEventListener('pointerenter', (event) => {
    console.log(event);
    rect.x = event.clientX;
    rect.y = event.clientY;
});

canvas.addEventListener('pointerout', (event) => {
    console.log(event);
    rect.x = event.clientX;
    rect.y = event.clientY;
});

canvas.addEventListener('pointermove', (event) => {
    console.log(event);
    rect.x = event.clientX;
    rect.y = event.clientY;
});



/**
 * @typedef {(timestamp: number) => void} HandleLoop
 */

class AppLoop {
    handleId = 0;
    /**
     * @type {HandleLoop[]}
     */
    handles = [];

    start() {
        if (this.handleId === 0) {
            this.handleId = requestAnimationFrame(this.handleLoop)
        }
    }

    /**
     * @private 
     * @param {number} timestamp 
     */
    handleLoop = (timestamp) => {
        for (const handle of this.handles) {
            try {
                handle(timestamp)
            } catch (ex) {
                console.error('Erro no handler', ex);
            }
        }

        this.handleId = requestAnimationFrame(this.handleLoop)
    }
    
    /**
     * 
     * @param {HandleLoop} handler 
     */
    add(handler) {
        this.handles.push(handler);
    }
}

const appLoop = new AppLoop();

appLoop.add((timestamp) => {
    // background
    drawRect(ctx, 0, 0, ctx.canvas.width, ctx.canvas.height, 'blue');

    // paddle
    drawRect(ctx, rect.x, rect.y, rect.width, rect.height, 'white');
})

appLoop.start();
