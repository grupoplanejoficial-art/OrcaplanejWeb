import { BaseService } from '@/lib/baseService';

export class EdgeBandingService extends BaseService {
  constructor() {
    super('edge-banding');
  }
}

export const edgeBandingService = new EdgeBandingService();
