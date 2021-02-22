import type { DrawingContext } from '../models/drawing-context';
import type { Action } from '../models/action';
import { ClearSelectionAction } from './clear-selection';
import { CopyAction } from './copy';

export class CutAction implements Action {
  private readonly copy = new CopyAction();
  private readonly clearSelection = new ClearSelectionAction();

  canExecute(drawingContext: DrawingContext): boolean {
    return (
      this.copy.canExecute(drawingContext) &&
      this.clearSelection.canExecute(drawingContext)
    );
  }

  async execute(drawingContext: DrawingContext): Promise<void> {
    await this.copy.execute(drawingContext);
    this.clearSelection.execute(drawingContext);
  }
}
