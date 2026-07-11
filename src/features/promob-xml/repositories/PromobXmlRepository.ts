import { BaseRepository } from '@/lib/baseRepository';
import type { ID, PromobXmlImport } from '@/types';

export class PromobXmlRepository extends BaseRepository<PromobXmlImport> {
  async findAll(): Promise<PromobXmlImport[]> { return []; }
  async findById(_id: ID): Promise<PromobXmlImport | null> { return null; }
  async create(_data: Omit<PromobXmlImport, 'id' | 'createdAt' | 'updatedAt'>): Promise<PromobXmlImport> { throw new Error('Not implemented yet.'); }
  async update(_id: ID, _data: Partial<PromobXmlImport>): Promise<PromobXmlImport> { throw new Error('Not implemented yet.'); }
  async delete(_id: ID): Promise<void> { throw new Error('Not implemented yet.'); }
}

export const promobXmlRepository = new PromobXmlRepository();
