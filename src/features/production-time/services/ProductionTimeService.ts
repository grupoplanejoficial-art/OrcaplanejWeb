import { BaseService } from '@/lib/baseService';

export class ProductionTimeService extends BaseService {
  constructor() {
    super('production-time');
  }
}

export const productionTimeService = new ProductionTimeService();
