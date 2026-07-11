import { BaseRepository } from '@/lib/baseRepository';
import type { ID, CalculationRecord } from '@/types';

export class FinancialCompositionRepository extends BaseRepository<CalculationRecord> {
  async findAll(): Promise<CalculationRecord[]> { return []; }
  async findById(_id: ID): Promise<CalculationRecord | null> { return null; }
  async create(_data: Omit<CalculationRecord, 'id' | 'createdAt' | 'updatedAt'>): Promise<CalculationRecord> { throw new Error('Not implemented yet.'); }
  async update(_id: ID, _data: Partial<CalculationRecord>): Promise<CalculationRecord> { throw new Error('Not implemented yet.'); }
  async delete(_id: ID): Promise<void> { throw new Error('Not implemented yet.'); }
}

export const financialCompositionRepository = new FinancialCompositionRepository();
