import { BaseService } from '@/lib/baseService';

export class PromobXmlService extends BaseService {
  constructor() {
    super('promob-xml');
  }
}

export const promobXmlService = new PromobXmlService();
