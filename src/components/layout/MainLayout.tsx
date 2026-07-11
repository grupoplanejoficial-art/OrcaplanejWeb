import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useAuth } from '@/features/auth/AuthContext';

export function MainLayout() {
  const { user, signOut } = useAuth();
  return <div className="app-shell"><Sidebar /><main className="content"><header className="topbar"><div><span className="eyebrow">SaaS para marcenarias</span><strong>Gestão técnica e comercial</strong></div><button type="button" onClick={signOut}>{user ? `Sair (${user.name})` : 'Entrar'}</button></header><Outlet /></main></div>;
}
