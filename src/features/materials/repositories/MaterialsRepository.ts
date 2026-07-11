import { BaseRepository } from '@/lib/baseRepository';
import type { ID, Material } from '@/types';

export class MaterialsRepository extends BaseRepository<Material> {
  async findAll(): Promise<Material[]> { return []; }
  async findById(_id: ID): Promise<Material | null> { return null; }
  async create(_data: Omit<Material, 'id' | 'createdAt' | 'updatedAt'>): Promise<Material> { throw new Error('Not implemented yet.'); }
  async update(_id: ID, _data: Partial<Material>): Promise<Material> { throw new Error('Not implemented yet.'); }
  async delete(_id: ID): Promise<void> { throw new Error('Not implemented yet.'); }
}

export const materialsRepository = new MaterialsRepository();
