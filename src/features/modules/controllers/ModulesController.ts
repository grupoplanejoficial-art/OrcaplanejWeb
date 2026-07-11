import { BaseController } from '@/lib/baseController';

export class ModulesController extends BaseController {
  constructor() {
    super('modules');
  }
}

export const modulesController = new ModulesController();
