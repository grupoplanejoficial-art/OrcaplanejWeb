import { BaseService } from '@/lib/baseService';

export class ClientsService extends BaseService {
  constructor() {
    super('clients');
  }
}

export const clientsService = new ClientsService();
