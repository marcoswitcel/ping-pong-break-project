import { AppLoop } from './app-loop.js';
import { drawRect, drawText } from './render.js';
export const makeDefaultApp = (canvas) => {
    const ctx = canvas.getContext('2d');
    if (!ctx)
        throw new Error('ctx não criado com sucesso!');
    const rect = { x: canvas.width * .5, y: canvas.height * .8, width: canvas.width * .10, height: canvas.width * .03 };
    const point = { x: 0, y: 0, };
    const marginY = canvas.height * .08;
    let isUserInteractionRegistered = false;
    const appLoop = new AppLoop();
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
    appLoop.add((timestamp, deltaTime) => {
        // update
        rect.x = point.x;
        rect.y = point.y - marginY;
        // background
        drawRect(ctx, 0, 0, ctx.canvas.width, ctx.canvas.height, 'blue');
        if (isUserInteractionRegistered) {
            // paddle (renderiza centralizado)
            drawRect(ctx, rect.x - rect.width / 2, rect.y - rect.height / 2, rect.width, rect.height, 'white');
        }
        else {
            drawText(ctx, 'Por favor, toque na tela', 250, 250, 24);
        }
    });
    return appLoop;
};
