import { Navigate, RouteObject } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { ClientsPage } from '@/features/clients/pages/ClientsPage';
import { ProjectsPage } from '@/features/projects/pages/ProjectsPage';
import { EnvironmentsPage } from '@/features/environments/pages/EnvironmentsPage';
import { ModulesPage } from '@/features/modules/pages/ModulesPage';
import { PiecesPage } from '@/features/pieces/pages/PiecesPage';
import { MaterialsPage } from '@/features/materials/pages/MaterialsPage';
import { PanelCalculationPage } from '@/features/panel-calculation/pages/PanelCalculationPage';
import { EdgeBandingPage } from '@/features/edge-banding/pages/EdgeBandingPage';
import { GlassPage } from '@/features/glass/pages/GlassPage';
import { AluminumPage } from '@/features/aluminum/pages/AluminumPage';
import { HardwarePage } from '@/features/hardware/pages/HardwarePage';
import { ProductionTimePage } from '@/features/production-time/pages/ProductionTimePage';
import { FinancialCompositionPage } from '@/features/financial-composition/pages/FinancialCompositionPage';
import { InternalApprovalPage } from '@/features/internal-approval/pages/InternalApprovalPage';
import { CommercialPdfPage } from '@/features/commercial-pdf/pages/CommercialPdfPage';
import { TechnicalPdfPage } from '@/features/technical-pdf/pages/TechnicalPdfPage';
import { PriceAiPage } from '@/features/price-ai/pages/PriceAiPage';
import { GoogleSheetsPage } from '@/features/google-sheets/pages/GoogleSheetsPage';
import { ParceirosPlanejPage } from '@/features/parceiros-planej/pages/ParceirosPlanejPage';
import { PromobXmlPage } from '@/features/promob-xml/pages/PromobXmlPage';

export const routes: RouteObject[] = [{ path: '/', element: <MainLayout />, children: [
  { index: true, element: <Navigate to="/projetos" replace /> },
  { path: 'clientes', element: <ClientsPage /> }, { path: 'projetos', element: <ProjectsPage /> }, { path: 'ambientes', element: <EnvironmentsPage /> }, { path: 'modulos', element: <ModulesPage /> }, { path: 'pecas', element: <PiecesPage /> }, { path: 'materiais', element: <MaterialsPage /> },
  { path: 'calculos/paineis', element: <PanelCalculationPage /> }, { path: 'calculos/fitamento', element: <EdgeBandingPage /> }, { path: 'calculos/vidros', element: <GlassPage /> }, { path: 'calculos/aluminio', element: <AluminumPage /> }, { path: 'calculos/ferragens', element: <HardwarePage /> }, { path: 'calculos/tempo-producao', element: <ProductionTimePage /> },
  { path: 'financeiro/composicao', element: <FinancialCompositionPage /> }, { path: 'aprovacoes', element: <InternalApprovalPage /> }, { path: 'pdf/comercial', element: <CommercialPdfPage /> }, { path: 'pdf/tecnico', element: <TechnicalPdfPage /> },
  { path: 'integracoes/precos-ia', element: <PriceAiPage /> }, { path: 'integracoes/google-sheets', element: <GoogleSheetsPage /> }, { path: 'integracoes/parceiros-planej', element: <ParceirosPlanejPage /> }, { path: 'integracoes/promob-xml', element: <PromobXmlPage /> },
]}];
