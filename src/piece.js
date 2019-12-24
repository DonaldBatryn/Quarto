
class Piece {
    constructor(size, color, shape, surface) {
        this.size = size;
        this.color = color;
        this.shape = shape;
        this.surface = surface;
        this.faces = {};
        this.build(this.shape);
    }

    build = (shape) => {
        if (shape === 'square') {
            // logic to assemble top, left and right
            // this.faces = {
            //     "top": null,
            //     "left": null,
            //     "right": null
            // }
        } else {
            // logic to assemble top, bottom and center
            // this.faces = {
            //     "top": null,
            //     "bottom": null,
            //     "center": null,
            // }
        }
    }
}