import { BaseService } from '@/lib/baseService';

export class PriceAiService extends BaseService {
  constructor() {
    super('price-ai');
  }
}

export const priceAiService = new PriceAiService();
