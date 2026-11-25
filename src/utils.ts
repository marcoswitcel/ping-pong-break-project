
/**
 * Cria um canvas com as dimensões especificadas e adiciona ele a algum elemnto
 * caso o parâmetro `appendTo` seja especificado.
 * 
 * @param width Largura inicial do canvas
 * @param height Altura inicial do canvas
 * @param appendTo O elemento especificado através dessa propriedade
 * terá o canvas adicionado a sua lista de filhos
 * @returns Canvas recém criado
 */
export function createCanvas(width: number, height: number, appendTo?: HTMLElement): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  
  canvas.width = width;
  canvas.height = height;
  
  if (appendTo) {
    appendTo.appendChild(canvas);
  }

  return canvas;
}

/**
 * @note um detalhe interessante dessa implementação é que na verdade quando o usuário está com
 * zoom aplicado à página, o cheque lógico abaixo não produz o resultado correto. Por isso adicionei
 * o atributo depreciado do documento `document.fullscreen` ao cheque, quando presente ele será
 * mais confiável.
 * 
 * @returns booleano indicando se está ou não em modo 'fullscreen'
 */
export function isFullScreen(): boolean {
  return document.fullscreen || (document.fullscreenElement != null) || (window.innerWidth == screen.width && window.innerHeight == screen.height);
}

/**
 * se é um userAgent normalmente usado em dispositivos 'mobile'
 * @returns se é ou não mobile
 */
export function isMobileBrowser(): boolean {
  const userAgentsKnownToBeMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return userAgentsKnownToBeMobile.test(navigator.userAgent);
}
