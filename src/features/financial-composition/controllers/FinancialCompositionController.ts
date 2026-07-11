import { BaseController } from '@/lib/baseController';

export class FinancialCompositionController extends BaseController {
  constructor() {
    super('financial-composition');
  }
}

export const financialCompositionController = new FinancialCompositionController();
