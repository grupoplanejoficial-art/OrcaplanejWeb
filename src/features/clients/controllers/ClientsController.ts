import { BaseController } from '@/lib/baseController';

export class ClientsController extends BaseController {
  constructor() {
    super('clients');
  }
}

export const clientsController = new ClientsController();
