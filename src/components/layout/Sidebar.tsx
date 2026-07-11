import { NavLink } from 'react-router-dom';
import { navigationItems } from '@/config/navigation';

const groups = navigationItems.reduce<Record<string, typeof navigationItems>>((acc, item) => {
  acc[item.group] = [...(acc[item.group] ?? []), item];
  return acc;
}, {});

export function Sidebar() {
  return <aside className="sidebar"><div className="brand">Orcaplanej ERP</div>{Object.entries(groups).map(([group, items]) => <nav key={group}><h2>{group}</h2>{items.map((item) => <NavLink key={item.path} to={item.path}>{item.label}</NavLink>)}</nav>)}</aside>;
}
