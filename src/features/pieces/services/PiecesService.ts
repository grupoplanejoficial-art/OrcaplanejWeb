import { BaseService } from '@/lib/baseService';

export class PiecesService extends BaseService {
  constructor() {
    super('pieces');
  }
}

export const piecesService = new PiecesService();
