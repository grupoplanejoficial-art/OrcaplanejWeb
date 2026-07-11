import { BaseController } from '@/lib/baseController';

export class InternalApprovalController extends BaseController {
  constructor() {
    super('internal-approval');
  }
}

export const internalApprovalController = new InternalApprovalController();
