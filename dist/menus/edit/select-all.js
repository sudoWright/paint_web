import { updateContext } from '../../helpers/update-context.js';
export class SelectAllAction {
  execute(drawingContext) {
    if (drawingContext.canvas) {
      const {
        width,
        height
      } = drawingContext.canvas;
      drawingContext.selection = {
        x: 0,
        y: 0,
        width,
        height
      };
      updateContext(drawingContext.element);
    }
  }
}