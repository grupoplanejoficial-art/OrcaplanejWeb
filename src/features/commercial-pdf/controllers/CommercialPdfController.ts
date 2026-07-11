import { BaseController } from '@/lib/baseController';

export class CommercialPdfController extends BaseController {
  constructor() {
    super('commercial-pdf');
  }
}

export const commercialPdfController = new CommercialPdfController();
