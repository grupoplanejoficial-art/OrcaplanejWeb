import { BaseService } from '@/lib/baseService';

export class HardwareService extends BaseService {
  constructor() {
    super('hardware');
  }
}

export const hardwareService = new HardwareService();
