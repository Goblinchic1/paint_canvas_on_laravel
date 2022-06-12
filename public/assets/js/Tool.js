import {ToolBar} from './ToolBar.js';
export class Tool {
    constructor({id = '', name = id || '', label = name || ''}) {
        this.id = id;
        this.name = name;
        this.label = label;
        /**@type {HMathMLElement} */
        this._control = null;
    }


    get control() {
        if (!this._control) {
            this._control = document.createElement('div');
            this._control.textContent = this.label;
        }
        return this._control;
    }
}


/**
 * Кнопка
 */
export class Button extends Tool {
    constructor({action = (e) => {console.warn('no action in ${this.name}')}, color = 'black', mode = Button.mods.text, ...props}) {
        super(props);
        this.action = action;
        /**@type {HTMLButtonElement} */
        this._control = null;
        this.color = color;
        this.mode = mode;
    }


    get control() {
        if (!this._control) {
            this._control = document.createElement('button');
            this.mode();
            this._control.style.setProperty('min-width', ToolBar.HEIGHT);
            this._control.addEventListener('click', this.action);
        }
        return this._control;
    }
}
Button.mods = {
    text() {
        this._control.textContent = this.label;
    },
    color() {
        this._control.style.setProperty('background-color', this.color);
    }
};


/**
 * Ползунок
 */
export class Range extends Button {
    constructor({min = 0, max = 100, step = 1, value = step, ...props}) {
        super(props);
        this.min = min;
        this.max = max;
        this.step = step;
        /**@type {HTMLInputElement} */
        this._control = null;
        this.value = value;
    }


    get control() {
        if(!this._contol) {
            this._control = document.createElement('input');
            this._control.type = 'range';
            this._control.min = String(this.min);
            this._control.max = String(this.max);
            this._control.step = String(this.step);
            this._control.value = this.value;
            this._control.addEventListener('input', (e) => {
                this.value = parseFloat(this._control.value);
                this.action(e);
            });
        }
        return this._control;
    }
}


/**
 * Кнопка "color"
 */
export class Color extends Button {
    constructor({...props}) {
        super(props);
        /**@type {HTMLInputElement} */
        this._control = null;
        this.value = '';
    }


    get control() {
        if(!this._contol) {
            this._control = document.createElement('input');
            this._control.type = 'color';
            this._control.addEventListener('input', (e) => {
                this.value = this._control.value;
                this.action(e);
            });
        }
        return this._control;
    }
}
