import { BaseService } from '@/lib/baseService';

export class GlassService extends BaseService {
  constructor() {
    super('glass');
  }
}

export const glassService = new GlassService();
