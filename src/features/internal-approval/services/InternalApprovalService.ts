import { BaseService } from '@/lib/baseService';

export class InternalApprovalService extends BaseService {
  constructor() {
    super('internal-approval');
  }
}

export const internalApprovalService = new InternalApprovalService();
