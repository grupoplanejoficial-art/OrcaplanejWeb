import { BaseController } from '@/lib/baseController';

export class ProductionTimeController extends BaseController {
  constructor() {
    super('production-time');
  }
}

export const productionTimeController = new ProductionTimeController();
