import { line } from '../../_snowpack/pkg/bresenham-zingl.js';
export class PencilTool {
  onPointerDown(x, y, {
    context
  }, color) {
    context.fillStyle = color.stroke.value;
    context.fillRect(x, y, 1, 1);
    this.previous = {
      x,
      y
    };
  }

  onPointerMove(x, y, {
    context
  }) {
    line(this.previous.x, this.previous.y, x, y, (x, y) => {
      context.fillRect(x, y, 1, 1);
    });
    this.previous = {
      x,
      y
    };
  }

}