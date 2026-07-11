import { BaseService } from '@/lib/baseService';

export class TechnicalPdfService extends BaseService {
  constructor() {
    super('technical-pdf');
  }
}

export const technicalPdfService = new TechnicalPdfService();
