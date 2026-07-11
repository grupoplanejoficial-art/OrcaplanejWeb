import { BaseRepository } from '@/lib/baseRepository';
import type { ID, Environment } from '@/types';

export class EnvironmentsRepository extends BaseRepository<Environment> {
  async findAll(): Promise<Environment[]> { return []; }
  async findById(_id: ID): Promise<Environment | null> { return null; }
  async create(_data: Omit<Environment, 'id' | 'createdAt' | 'updatedAt'>): Promise<Environment> { throw new Error('Not implemented yet.'); }
  async update(_id: ID, _data: Partial<Environment>): Promise<Environment> { throw new Error('Not implemented yet.'); }
  async delete(_id: ID): Promise<void> { throw new Error('Not implemented yet.'); }
}

export const environmentsRepository = new EnvironmentsRepository();
