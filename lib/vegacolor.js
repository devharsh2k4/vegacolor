// file path: lib/vegacolor.js

const COLORS = require('./color');

class StyledText {
    constructor(text) {
        if (typeof text !== 'string') {
            throw new Error('Text must be a string');
        }
        this.text = text;
        this.styles = '';
    }

    applyStyle(styleCode) {
        this.styles += styleCode;
        return this;
    }

    color(color) {
        if (!COLORS.fg[color]) {
            throw new Error(`Invalid color: ${color}`);
        }
        return this.applyStyle(COLORS.fg[color]);
    }

    bgColor(color) {
        if (!COLORS.bg[color]) {
            throw new Error(`Invalid background color: ${color}`);
        }
        return this.applyStyle(COLORS.bg[color]);
    }

    bright() {
        return this.applyStyle(COLORS.bright);
    }

    dim() {
        return this.applyStyle(COLORS.dim);
    }

    underscore() {
        return this.applyStyle(COLORS.underscore);
    }

    blink() {
        return this.applyStyle(COLORS.blink);
    }

    reverse() {
        return this.applyStyle(COLORS.reverse);
    }

    hidden() {
        return this.applyStyle(COLORS.hidden);
    }

    toString() {
        return `${this.styles}${this.text}${COLORS.reset}`;
    }

    valueOf() {
        return this.toString();
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.toString();
        }
        return this.text;
    }
}

function vegacolor(text) {
    return new StyledText(text); // Return the instance directly
}

module.exports = {
    vegacolor
};