import {Canvas} from './Canvas.js';
import {ToolBar} from './ToolBar.js';
import {Button} from './Tool.js';
import {Color} from './Tool.js';
import {Range} from './Tool.js';
const container = document.getElementById('container');
const canvas = new Canvas(container);
const toolbar = new ToolBar(canvas, container);

const greenBtn = new Button({
    color: 'green', mode: Button.mods.color, action: () => {
        canvas.setStrokeStyle('green')
    }
});
toolbar.bar.appendChild(greenBtn.control);

const blackBtn = new Button({
    color: 'black', mode: Button.mods.color, action: () => {
        canvas.setStrokeStyle('black')
    }
});
toolbar.bar.appendChild(blackBtn.control);

const pinkBtn = new Button({
    color: 'pink', mode: Button.mods.color, action: () => {
        canvas.setStrokeStyle('pink')
    }
});
toolbar.bar.appendChild(pinkBtn.control);

const colorBtn = new Color({
    label: 'custom color', action: () => {
        canvas.setStrokeStyle(colorBtn.value)
    }
});
toolbar.bar.appendChild(colorBtn.control);

const eraserBtn = new Button({
    label: 'ERASER', action: () => {
        canvas.setStrokeStyle('white')
    }
});
toolbar.bar.appendChild(eraserBtn.control);

const range = new Range({
    label: 'size', min: 1, max: 50, action: () => {
        canvas.setLineWidth(range.value)
    }
});
range.value = Canvas.lineWidth;
toolbar.bar.appendChild(range.control);




const clearBtn = new Button({
    label: 'CLEAR', action: () => {
        canvas.clear()
    }
});
toolbar.bar.appendChild(clearBtn.control);


const saveBtn = new Button({
    label: 'SAVE', action: () => {
        canvas.save()
    }
});
toolbar.bar.appendChild(saveBtn.control);
