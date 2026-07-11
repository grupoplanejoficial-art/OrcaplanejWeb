import type { ID } from '@/types';
import type { TableName } from './tableNames';

export interface DataRepository<TRecord, TCreate = Partial<TRecord>, TUpdate = Partial<TRecord>> {
  readonly tableName: TableName;
  findAll(): Promise<TRecord[]>;
  findById(id: ID): Promise<TRecord | null>;
  create(data: TCreate): Promise<TRecord>;
  update(id: ID, data: TUpdate): Promise<TRecord>;
  delete(id: ID): Promise<void>;
}

export class UnimplementedDataRepository<TRecord, TCreate = Partial<TRecord>, TUpdate = Partial<TRecord>> implements DataRepository<TRecord, TCreate, TUpdate> {
  constructor(readonly tableName: TableName) {}
  async findAll(): Promise<TRecord[]> { return []; }
  async findById(_id: ID): Promise<TRecord | null> { return null; }
  async create(_data: TCreate): Promise<TRecord> { throw new Error(`Repository for ${this.tableName} is not connected to a database adapter yet.`); }
  async update(_id: ID, _data: TUpdate): Promise<TRecord> { throw new Error(`Repository for ${this.tableName} is not connected to a database adapter yet.`); }
  async delete(_id: ID): Promise<void> { throw new Error(`Repository for ${this.tableName} is not connected to a database adapter yet.`); }
}
