import { makeDefaultApp } from './defaut-app.js';
import { createCanvas } from './utils.js';
console.log('Olá mundo do Ping Pong Breaker Project');
const canvas = createCanvas(window.innerWidth, window.innerHeight);
canvas.classList.add('canvas-display');
document.body.appendChild(canvas);
const appLoop = makeDefaultApp(canvas);
appLoop.start();
