import { BaseController } from '@/lib/baseController';

export class MaterialsController extends BaseController {
  constructor() {
    super('materials');
  }
}

export const materialsController = new MaterialsController();
