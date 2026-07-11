import { BaseController } from '@/lib/baseController';

export class GoogleSheetsController extends BaseController {
  constructor() {
    super('google-sheets');
  }
}

export const googleSheetsController = new GoogleSheetsController();
