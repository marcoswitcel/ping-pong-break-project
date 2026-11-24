import { makeDefaultApp } from './defaut-app.js';

console.log('Olá mundo do Ping Pong Breaker Project');

const canvas = document.createElement('canvas');

canvas.classList.add('canvas-display');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

const appLoop = makeDefaultApp(canvas);

appLoop.start();
