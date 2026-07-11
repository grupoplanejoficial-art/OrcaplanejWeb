import { BaseController } from '@/lib/baseController';

export class EdgeBandingController extends BaseController {
  constructor() {
    super('edge-banding');
  }
}

export const edgeBandingController = new EdgeBandingController();
