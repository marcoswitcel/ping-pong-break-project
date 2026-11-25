export class AppLoop {
    constructor() {
        /**
         * RequestAnimationFrame handleId para cancelamento
         */
        this.handleId = 0;
        /**
         * Handles que serão executados, em ordem para cada frame
         */
        this.handles = [];
        /**
         * controle interno para calcular o deltaTime
         */
        this.lastTimestmap = 0;
        /**
         * @param currentTimestamp
         */
        this.handleLoop = (currentTimestamp) => {
            const currentDt = currentTimestamp - this.lastTimestmap;
            this.lastTimestmap = currentTimestamp;
            for (let i = 0; i < this.handles.length; i++) {
                try {
                    const handle = this.handles[i];
                    handle(currentTimestamp, currentDt);
                }
                catch (ex) {
                    console.error('Erro no handler', ex);
                }
            }
            this.handleId = requestAnimationFrame(this.handleLoop);
        };
    }
    /**
     * Inicializa o "loop da aplicação"
     */
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
