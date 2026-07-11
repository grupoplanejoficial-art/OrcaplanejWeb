import { BaseService } from '@/lib/baseService';

export class FinancialCompositionService extends BaseService {
  constructor() {
    super('financial-composition');
  }
}

export const financialCompositionService = new FinancialCompositionService();
