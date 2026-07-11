import { BaseController } from '@/lib/baseController';

export class PriceAiController extends BaseController {
  constructor() {
    super('price-ai');
  }
}

export const priceAiController = new PriceAiController();
