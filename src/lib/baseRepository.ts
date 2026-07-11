import type { ID } from '@/types';

export interface Repository<T> {
  findAll(): Promise<T[]>;
  findById(id: ID): Promise<T | null>;
  create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T>;
  update(id: ID, data: Partial<T>): Promise<T>;
  delete(id: ID): Promise<void>;
}

export abstract class BaseRepository<T> implements Repository<T> {
  abstract findAll(): Promise<T[]>;
  abstract findById(id: ID): Promise<T | null>;
  abstract create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T>;
  abstract update(id: ID, data: Partial<T>): Promise<T>;
  abstract delete(id: ID): Promise<void>;
}
