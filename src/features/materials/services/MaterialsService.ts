import { BaseService } from '@/lib/baseService';

export class MaterialsService extends BaseService {
  constructor() {
    super('materials');
  }
}

export const materialsService = new MaterialsService();
