import { BaseService } from '@/lib/baseService';

export class AuthService extends BaseService {
  constructor() {
    super('auth');
  }
}

export const authService = new AuthService();
