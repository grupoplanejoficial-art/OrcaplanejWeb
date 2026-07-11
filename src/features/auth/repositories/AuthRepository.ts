import { BaseRepository } from '@/lib/baseRepository';
import type { ID, User } from '@/types';

export class AuthRepository extends BaseRepository<User> {
  async findAll(): Promise<User[]> { return []; }
  async findById(_id: ID): Promise<User | null> { return null; }
  async create(_data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> { throw new Error('Not implemented yet.'); }
  async update(_id: ID, _data: Partial<User>): Promise<User> { throw new Error('Not implemented yet.'); }
  async delete(_id: ID): Promise<void> { throw new Error('Not implemented yet.'); }
}

export const authRepository = new AuthRepository();
