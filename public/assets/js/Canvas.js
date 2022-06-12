export class Canvas {
    /**
     * @param {HTMLElement} container
     */
    constructor(container) {
        this.container = container;

        this.cnv = document.createElement('canvas');
        this.ctx = this.cnv.getContext('2d');

        this.cnv.style.setProperty('border', '1px solid black');
        this.cnv.style.setProperty('width', '100%');
        this.cnv.style.setProperty('height', '100%');

        this.container.appendChild(this.cnv);

        this.clear();

        const down = () => {
            this.cnv.addEventListener('mousemove', move);
            this.cnv.addEventListener('mouseup', up);
            this.ctx.strokeStyle = this.strokeStyle;
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.fillStyle = this.strokeStyle;
        };

        const move = (evt) => {
            this.ctx.beginPath();
            this.ctx.arc(evt.x, evt.y, this.lineWidth, 0, Math.PI * 2);
            this.ctx.fill();
        };

        const up = () => {
            this.cnv.removeEventListener('mousemove', move);
            this.cnv.removeEventListener('mousemoveup', up);
        };

        this.setStrokeStyle('black');
        this.setLineWidth(10);


        this.cnv.addEventListener('mousedown', down);
    }


    /**
     * Устанавливает цвет курсора
     *
     * @param {string} style
     */
    setStrokeStyle(style) {
        this.strokeStyle = style;
    }


    /**
     * Устанавливает толщину курсора
     *
     * @param {number} width
     */
    setLineWidth(width) {
        this.lineWidth = width;
    }


    /**
     * Обновляет размер канваса
     */
    updateSize() {
        this.cnv.width = this.cnv.offsetWidth;
        this.cnv.height = this.cnv.offsetHeight;
    }


    /**
     * Очищает Canvas
     */
    clear() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
    }


    /**
     * Сохраняет картинку
     */
    save() {
        const token = document.querySelector('[name="_token"]').getAttribute('content');
        var data = JSON.stringify({
            '_token': token,
            'image': this.cnv.toDataURL(),
        });
        const url = 'http://maximfrb.beget.tech/';
        var xhr = new XMLHttpRequest();
        xhr.open( 'POST', url );
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhr.send( data );
        xhr.addEventListener( 'readystatechange', function(){
            if( xhr.readyState !== 4 ) return;
            if( xhr.status === 200 ){
                let image = document.createElement('img');
                image.setAttribute('src', xhr.responseText);
                document.querySelector('.gallery').appendChild(image);
            } else {
                console.log( xhr.statusText );
            }
        });
    }
}
