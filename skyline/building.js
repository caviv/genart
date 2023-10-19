class Building {
    constructor(baseline, left, width, height, color, line) {
        this.baseline = baseline;
        this.left = left;
        this.width = width;
        this.height = height;
        this.color = color;
        this.line = line;
    }

    draw(ctx) {
        // let alpha = 1;
        // switch(this.line) {
        //     case 0:
        //         alpha = 0.5;
        //         break;
        //     case 1:
        //         alpha = 0.7;
        //         break;
        //     case 2:
        //         alpha = 1;
        //         break;
        // }
        ctx.beginPath();
        //ctx.fillStyle = `rgba(50, 50, 50, ${alpha})`;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.left, this.baseline - this.height, this.width, this.height);
        ctx.closePath();

        // lines of windows - starting from top left to bottom
        for(let h = this.baseline - this.height + config.whm; h < this.baseline - config.whm; h += config.wh + config.whm) {
            // each line
            for (let w = this.left + config.wwm; w < this.left + this.width - config.wwm; w += config.ww + config.wwm) {
                ctx.beginPath();
                ctx.fillStyle = config.windowsColors[getRandomInt(config.windowsColors.length)];
                ctx.fillRect(w, h, config.ww, config.wh);
                ctx.closePath();
            }
        }
    }

}