import { BaseService } from '@/lib/baseService';

export class CommercialPdfService extends BaseService {
  constructor() {
    super('commercial-pdf');
  }
}

export const commercialPdfService = new CommercialPdfService();
