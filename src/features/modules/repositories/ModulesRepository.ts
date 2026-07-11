import { BaseRepository } from '@/lib/baseRepository';
import type { ID, Module } from '@/types';

export class ModulesRepository extends BaseRepository<Module> {
  async findAll(): Promise<Module[]> { return []; }
  async findById(_id: ID): Promise<Module | null> { return null; }
  async create(_data: Omit<Module, 'id' | 'createdAt' | 'updatedAt'>): Promise<Module> { throw new Error('Not implemented yet.'); }
  async update(_id: ID, _data: Partial<Module>): Promise<Module> { throw new Error('Not implemented yet.'); }
  async delete(_id: ID): Promise<void> { throw new Error('Not implemented yet.'); }
}

export const modulesRepository = new ModulesRepository();
