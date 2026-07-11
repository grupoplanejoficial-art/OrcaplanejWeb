import { BaseController } from '@/lib/baseController';

export class TechnicalPdfController extends BaseController {
  constructor() {
    super('technical-pdf');
  }
}

export const technicalPdfController = new TechnicalPdfController();
