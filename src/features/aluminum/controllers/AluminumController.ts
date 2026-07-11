import { BaseController } from '@/lib/baseController';

export class AluminumController extends BaseController {
  constructor() {
    super('aluminum');
  }
}

export const aluminumController = new AluminumController();
