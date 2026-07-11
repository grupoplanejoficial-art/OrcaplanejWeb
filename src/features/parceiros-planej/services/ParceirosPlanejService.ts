import { BaseService } from '@/lib/baseService';

export class ParceirosPlanejService extends BaseService {
  constructor() {
    super('parceiros-planej');
  }
}

export const parceirosPlanejService = new ParceirosPlanejService();
