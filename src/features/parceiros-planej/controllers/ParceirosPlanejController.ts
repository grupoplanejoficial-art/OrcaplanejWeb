import { BaseController } from '@/lib/baseController';

export class ParceirosPlanejController extends BaseController {
  constructor() {
    super('parceiros-planej');
  }
}

export const parceirosPlanejController = new ParceirosPlanejController();
