import { BaseController } from '@/lib/baseController';

export class HardwareController extends BaseController {
  constructor() {
    super('hardware');
  }
}

export const hardwareController = new HardwareController();
