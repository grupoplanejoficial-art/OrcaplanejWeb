import { BaseRepository } from '@/lib/baseRepository';
import type { ID, Project } from '@/types';

export class ProjectsRepository extends BaseRepository<Project> {
  async findAll(): Promise<Project[]> { return []; }
  async findById(_id: ID): Promise<Project | null> { return null; }
  async create(_data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<Project> { throw new Error('Not implemented yet.'); }
  async update(_id: ID, _data: Partial<Project>): Promise<Project> { throw new Error('Not implemented yet.'); }
  async delete(_id: ID): Promise<void> { throw new Error('Not implemented yet.'); }
}

export const projectsRepository = new ProjectsRepository();
