
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
