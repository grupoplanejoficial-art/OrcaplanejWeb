import React from 'react';
import ReactDOM from 'react-dom/client';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/features/auth/AuthContext';
import { routes } from '@/app/routes';
import './styles.css';

function AppRoutes() { return useRoutes(routes); }

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><AuthProvider><BrowserRouter><AppRoutes /></BrowserRouter></AuthProvider></React.StrictMode>);
