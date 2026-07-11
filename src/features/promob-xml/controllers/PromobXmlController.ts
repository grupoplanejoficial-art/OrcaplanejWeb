import { BaseController } from '@/lib/baseController';

export class PromobXmlController extends BaseController {
  constructor() {
    super('promob-xml');
  }
}

export const promobXmlController = new PromobXmlController();
