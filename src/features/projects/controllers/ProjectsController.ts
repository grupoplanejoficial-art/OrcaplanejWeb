import { BaseController } from '@/lib/baseController';

export class ProjectsController extends BaseController {
  constructor() {
    super('projects');
  }
}

export const projectsController = new ProjectsController();
