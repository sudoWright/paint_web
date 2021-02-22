import type { DrawingContext } from '../models/drawing-context';
import { getBlobFromSelection } from '../helpers/get-blob-from-selection';
import { fileSave } from 'browser-fs-access';
import type { Action } from '../models/action';

export class CopyToAction implements Action {
  canExecute({ selection }: DrawingContext): boolean {
    return !!selection;
  }

  async execute({ context, selection }: DrawingContext): Promise<void> {
    if (context && selection) {
      const blob = await getBlobFromSelection(context, selection);
      await fileSave(blob);
    }
  }
}
