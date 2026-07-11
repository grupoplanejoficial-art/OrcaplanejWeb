import { BaseController } from '@/lib/baseController';

export class GlassController extends BaseController {
  constructor() {
    super('glass');
  }
}

export const glassController = new GlassController();
