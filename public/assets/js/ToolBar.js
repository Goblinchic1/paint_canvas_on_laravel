export class ToolBar {
    constructor(canvas, container) {
        /**
         * @param {Canvas} canvas
         * @param {HTMLElement} container
         */
        this.canvas = canvas;
        this.container = container || Canvas.container;

        this.BAR_HEIGHT = '3em';

        this.bar = document.createElement('div');
        this.bar.style.setProperty('display', 'flex');
        this.bar.style.setProperty('width', '100%');
        this.bar.style.setProperty('height', this.BAR_HEIGHT);
        this.bar.style.setProperty('border', '2px solid red');
        this.bar.style.setProperty('position', 'relative');
        this.bar.style.setProperty('background-color', 'whitesmoke');
        this.container.appendChild(this.bar);

        this.canvas.cnv.style.setProperty('height', 'calc(100% - ${this.BAR_HEIGHT})');
        this.canvas.updateSize();
        this.canvas.clear();
    }
}
ToolBar.HEIGHT = '3em';
