import { BaseService } from '@/lib/baseService';

export class AluminumService extends BaseService {
  constructor() {
    super('aluminum');
  }
}

export const aluminumService = new AluminumService();
