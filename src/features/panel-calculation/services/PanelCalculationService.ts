import { BaseService } from '@/lib/baseService';

export class PanelCalculationService extends BaseService {
  constructor() {
    super('panel-calculation');
  }
}

export const panelCalculationService = new PanelCalculationService();
