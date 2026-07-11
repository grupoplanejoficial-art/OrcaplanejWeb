import { BaseRepository } from '@/lib/baseRepository';
import type { ID, Integration } from '@/types';

export class GoogleSheetsRepository extends BaseRepository<Integration> {
  async findAll(): Promise<Integration[]> { return []; }
  async findById(_id: ID): Promise<Integration | null> { return null; }
  async create(_data: Omit<Integration, 'id' | 'createdAt' | 'updatedAt'>): Promise<Integration> { throw new Error('Not implemented yet.'); }
  async update(_id: ID, _data: Partial<Integration>): Promise<Integration> { throw new Error('Not implemented yet.'); }
  async delete(_id: ID): Promise<void> { throw new Error('Not implemented yet.'); }
}

export const googleSheetsRepository = new GoogleSheetsRepository();
