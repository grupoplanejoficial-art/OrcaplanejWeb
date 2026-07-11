import { BaseRepository } from '@/lib/baseRepository';
import type { ID, GeneratedPdf } from '@/types';

export class TechnicalPdfRepository extends BaseRepository<GeneratedPdf> {
  async findAll(): Promise<GeneratedPdf[]> { return []; }
  async findById(_id: ID): Promise<GeneratedPdf | null> { return null; }
  async create(_data: Omit<GeneratedPdf, 'id' | 'createdAt' | 'updatedAt'>): Promise<GeneratedPdf> { throw new Error('Not implemented yet.'); }
  async update(_id: ID, _data: Partial<GeneratedPdf>): Promise<GeneratedPdf> { throw new Error('Not implemented yet.'); }
  async delete(_id: ID): Promise<void> { throw new Error('Not implemented yet.'); }
}

export const technicalPdfRepository = new TechnicalPdfRepository();
