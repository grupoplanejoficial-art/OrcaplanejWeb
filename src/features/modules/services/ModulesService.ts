import { BaseService } from '@/lib/baseService';

export class ModulesService extends BaseService {
  constructor() {
    super('modules');
  }
}

export const modulesService = new ModulesService();
