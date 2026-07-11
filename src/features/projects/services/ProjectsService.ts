import { BaseService } from '@/lib/baseService';

export class ProjectsService extends BaseService {
  constructor() {
    super('projects');
  }
}

export const projectsService = new ProjectsService();
