import { BaseController } from '@/lib/baseController';

export class PiecesController extends BaseController {
  constructor() {
    super('pieces');
  }
}

export const piecesController = new PiecesController();
