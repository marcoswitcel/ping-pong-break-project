/**
 *
 * @param ctx
 * @param x
 * @param y
 * @param w
 * @param h
 * @param color
 */
export const drawRect = (ctx, x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
};
