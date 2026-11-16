
console.log('Olá mundo do Ping Pong Breaker Project');

const canvas = document.createElement('canvas');

canvas.classList.add('canvas-display');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

class AppLoop {
    handleId = 0;
    handles = [];

    start() {
        if (this.handleId === 0) {
            this.handleId = requestAnimationFrame(this.handleLoop)
        }
    }

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
    
    add(handle) {
        this.handles.push(handle);
    }
}

const appLoop = new AppLoop();

appLoop.add((timestamp) => {
    
})

appLoop.start();
