import { BaseService } from '@/lib/baseService';

export class EnvironmentsService extends BaseService {
  constructor() {
    super('environments');
  }
}

export const environmentsService = new EnvironmentsService();
