import { BaseController } from '@/lib/baseController';

export class AuthController extends BaseController {
  constructor() {
    super('auth');
  }
}

export const authController = new AuthController();
