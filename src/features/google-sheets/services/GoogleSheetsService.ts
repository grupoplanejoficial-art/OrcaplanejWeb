import { BaseService } from '@/lib/baseService';

export class GoogleSheetsService extends BaseService {
  constructor() {
    super('google-sheets');
  }
}

export const googleSheetsService = new GoogleSheetsService();
