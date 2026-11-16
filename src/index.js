import { drawRect } from './render.js';

console.log('Olá mundo do Ping Pong Breaker Project');

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

if (!ctx) throw new Error('ctx não criado com sucesso!');

canvas.classList.add('canvas-display');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

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
    drawRect(ctx, 0, 0, ctx.canvas.width, ctx.canvas.height, 'blue');
})

appLoop.start();
