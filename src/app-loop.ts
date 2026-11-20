
/**
 * @param timestamp timestamp acumulado desde a inicialização da página, gerenciado pelo navegador
 * @param deltaTime valor calculado para o frame atual
 */
export type HandleLoop = (timestamp: number, deltaTime: number) => void; 

export class AppLoop {
  /**
   * RequestAnimationFrame handleId para cancelamento
   */
  private handleId = 0;

  /**
   * Handles que serão executados, em ordem para cada frame
   */
  private handles: HandleLoop[]  = [];

  /**
   * controle interno para calcular o deltaTime
   */
  private lastTimestmap = 0;

  /**
   * Inicializa o "loop da aplicação"
   */
  public start(): void {
    if (this.handleId === 0) {
      this.handleId = requestAnimationFrame(this.handleLoop)
    }
  }

  /** 
   * @param currentTimestamp 
   */
  private handleLoop = (currentTimestamp: number) => {

    const currentDt = currentTimestamp - this.lastTimestmap;
    this.lastTimestmap = currentTimestamp;

    for (let i = 0; i < this.handles.length; i++) {
      try {
        const handle = this.handles[i];
        console.log(currentTimestamp, currentDt)
        handle(currentTimestamp, currentDt);
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
  public add(handler: HandleLoop) {
    this.handles.push(handler);
  }
}