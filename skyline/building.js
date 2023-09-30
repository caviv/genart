class Building {
    constructor(baseline, left, width, height, color) {
        this.baseline = baseline;
        this.left = left;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(ctx) {
        const windowsColors = ["transparent", "yellow", "#efff73", "ddd"];

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.left, this.baseline - this.height, this.width, this.height);
        ctx.closePath();

        // draw windows
        let wh = 7; // window height
        let ww = 7; // window width
        let whm = 5; // window height margin
        let wwm = 5; // window width margin

        // lines of windows - starting from top left to bottom
        for(let h = this.baseline - this.height + whm; h < this.baseline - whm; h += wh + whm) {
            // each line
            for (let w = this.left + wwm; w < this.left + this.width - wwm; w += ww + wwm) {
                ctx.beginPath();
                ctx.fillStyle = windowsColors[getRandomInt(windowsColors.length)];
                ctx.fillRect(w, h, ww, wh);
                ctx.closePath();
            }
        }
    }

}