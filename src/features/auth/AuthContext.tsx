import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { PermissionAction, UserRole, type User } from '@/types';

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  hasRole(role: UserRole): boolean;
  can(action: PermissionAction, resource: string): boolean;
  signInAsMockUser(): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const mockUser: User = { id: 'mock-user', empresaId: 'mock-empresa', name: 'Administrador Orcaplanej', email: 'admin@orcaplanej.local', role: UserRole.Admin, isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(mockUser);
  const value = useMemo<AuthContextValue>(() => ({
    user,
    isAuthenticated: Boolean(user),
    hasRole: (role) => user?.role === role,
    can: (_action, _resource) => Boolean(user),
    signInAsMockUser: () => setUser(mockUser),
    signOut: () => setUser(null),
  }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider.');
  return context;
}
