import { drawRect, drawText } from './render.js';

console.log('Olá mundo do Ping Pong Breaker Project');

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

if (!ctx) throw new Error('ctx não criado com sucesso!');

canvas.classList.add('canvas-display');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

const rect = { x: canvas.width * .5, y: canvas.height * .8, width: canvas.width * .10, height: canvas.width * .03 };
const point = { x: 0, y: 0, };
let isUserInteractionRegistered = false;

const marginY = canvas.height * .08;

canvas.addEventListener('pointerdown', (event) => {
    isUserInteractionRegistered = true;

    point.x = event.clientX;
    point.y = event.clientY;
});

canvas.addEventListener('pointerup', (event) => {
    isUserInteractionRegistered = true;

    point.x = event.clientX;
    point.y = event.clientY;
});

canvas.addEventListener('pointerenter', (event) => {
    isUserInteractionRegistered = true;

    point.x = event.clientX;
    point.y = event.clientY;
});

canvas.addEventListener('pointerout', (event) => {
    isUserInteractionRegistered = true;

    point.x = event.clientX;
    point.y = event.clientY;
});

canvas.addEventListener('pointermove', (event) => {
    isUserInteractionRegistered = true;

    point.x = event.clientX;
    point.y = event.clientY;
});


type HandleLoop = (timestamp: number) => void; 


class AppLoop {
    handleId = 0;
    handles: HandleLoop[]  = [];

    start() {
        if (this.handleId === 0) {
            this.handleId = requestAnimationFrame(this.handleLoop)
        }
    }

    /** 
     * @param timestamp 
     */
    private handleLoop = (timestamp: number) => {
        for (let i = 0; i < this.handles.length; i++) {
            try {
                const handle = this.handles[i];
                handle(timestamp)
            } catch (ex) {
                console.error('Erro no handler', ex);
            }
        }

        this.handleId = requestAnimationFrame(this.handleLoop)
    }
    
    /**
     * 
     * @param handler 
     */
    add(handler: HandleLoop) {
        this.handles.push(handler);
    }
}

const appLoop = new AppLoop();

appLoop.add((timestamp: number) => {
    // update
    rect.x = point.x;
    rect.y = point.y - marginY;
    
    // background
    drawRect(ctx, 0, 0, ctx.canvas.width, ctx.canvas.height, 'blue');

    if (isUserInteractionRegistered)
    {
        // paddle (renderiza centralizado)
        drawRect(ctx, rect.x - rect.width / 2, rect.y - rect.height / 2, rect.width, rect.height, 'white');
    }
    else
    {
        drawText(ctx, 'Por favor, toque na tela', 250, 250, 24);
    }
})

appLoop.start();
