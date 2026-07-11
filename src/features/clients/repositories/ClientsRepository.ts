import { BaseRepository } from '@/lib/baseRepository';
import type { ID, Client } from '@/types';

export class ClientsRepository extends BaseRepository<Client> {
  async findAll(): Promise<Client[]> { return []; }
  async findById(_id: ID): Promise<Client | null> { return null; }
  async create(_data: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>): Promise<Client> { throw new Error('Not implemented yet.'); }
  async update(_id: ID, _data: Partial<Client>): Promise<Client> { throw new Error('Not implemented yet.'); }
  async delete(_id: ID): Promise<void> { throw new Error('Not implemented yet.'); }
}

export const clientsRepository = new ClientsRepository();
