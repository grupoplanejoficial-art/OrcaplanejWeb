import { BaseRepository } from '@/lib/baseRepository';
import type { ID, Piece } from '@/types';

export class PiecesRepository extends BaseRepository<Piece> {
  async findAll(): Promise<Piece[]> { return []; }
  async findById(_id: ID): Promise<Piece | null> { return null; }
  async create(_data: Omit<Piece, 'id' | 'createdAt' | 'updatedAt'>): Promise<Piece> { throw new Error('Not implemented yet.'); }
  async update(_id: ID, _data: Partial<Piece>): Promise<Piece> { throw new Error('Not implemented yet.'); }
  async delete(_id: ID): Promise<void> { throw new Error('Not implemented yet.'); }
}

export const piecesRepository = new PiecesRepository();
