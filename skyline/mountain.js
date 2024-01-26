class Mountain {
    constructor(baseline, left, width, height) {
        this.baseline = baseline;
        this.left = left;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        // the triangle
        ctx.beginPath();
        ctx.moveTo(this.left, this.baseline);
        ctx.lineTo(this.left + this.width / 2, this.baseline - this.height);
        ctx.lineTo(this.left + this.width, this.baseline);
        ctx.closePath();

        // the outline
        // ctx.lineWidth = 10;
        // ctx.strokeStyle = '#666666';
        // ctx.stroke();

        // the fill color
        ctx.fillStyle = "gray";
        ctx.fill();

    }

}