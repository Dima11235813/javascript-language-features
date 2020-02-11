const point = (x, y) => {
    return {
        x: x,
        y: y,
        get r() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
}

export default point