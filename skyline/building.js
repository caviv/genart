class Building {
    constructor(baseline, left, width, height, color) {
        this.baseline = baseline;
        this.left = left;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(ctx) {
        

        ctx.beginPath();
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