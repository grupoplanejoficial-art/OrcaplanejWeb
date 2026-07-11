import { BaseController } from '@/lib/baseController';

export class PanelCalculationController extends BaseController {
  constructor() {
    super('panel-calculation');
  }
}

export const panelCalculationController = new PanelCalculationController();
