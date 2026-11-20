
/**
 * 
 * @param ctx 
 * @param x 
 * @param y 
 * @param w 
 * @param h 
 * @param color 
 */
export const drawRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

/**
 * @note links úteis:
 * * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign}
 * * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline}
 * * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textRendering}
 * 
 * @param ctx contexto atual
 * @param text texto a ser exibido
 * @param x posição x do texto
 * @param y posição y do texto
 * @param size tamanho do texto de 0 a 1, será mapeado para uma fração do tamanho do canvas
 * @param fillStyle cor de preenchimento
 * @param fontFamily fonta desejada
 * @param textAlign alinhamento horizontal do texto
 * @param textBaseline alinhamento vertical do texto
 */
export function drawText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, size: number, fillStyle = '#FFFFFF', fontFamily = 'monospace', textAlign: CanvasTextAlign = 'center', textBaseline: CanvasTextBaseline = 'middle'): void {
  const { width, height } = ctx.canvas;

  const sizeInPixels = size;
  ctx.font = `${sizeInPixels}px ${fontFamily}`;
  ctx.fillStyle = fillStyle;
  /**
   * @note no geral os métodos de renderização estão sempre renderizando o elemento centralizado,
   * por isso por padrão o texto também estará centralizado vertical e horizontalmente
   */
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.fillText(text, x, y);
}
