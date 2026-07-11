import { BaseRepository } from '@/lib/baseRepository';
import type { ID, Approval } from '@/types';

export class InternalApprovalRepository extends BaseRepository<Approval> {
  async findAll(): Promise<Approval[]> { return []; }
  async findById(_id: ID): Promise<Approval | null> { return null; }
  async create(_data: Omit<Approval, 'id' | 'createdAt' | 'updatedAt'>): Promise<Approval> { throw new Error('Not implemented yet.'); }
  async update(_id: ID, _data: Partial<Approval>): Promise<Approval> { throw new Error('Not implemented yet.'); }
  async delete(_id: ID): Promise<void> { throw new Error('Not implemented yet.'); }
}

export const internalApprovalRepository = new InternalApprovalRepository();
