import { BaseController } from '@/lib/baseController';

export class EnvironmentsController extends BaseController {
  constructor() {
    super('environments');
  }
}

export const environmentsController = new EnvironmentsController();
