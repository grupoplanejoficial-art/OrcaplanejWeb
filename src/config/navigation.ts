export interface NavigationItem { label: string; path: string; group: string; }

export const navigationItems: NavigationItem[] = [
  { label: 'Clientes', path: '/clientes', group: 'Comercial' },
  { label: 'Projetos', path: '/projetos', group: 'Comercial' },
  { label: 'Ambientes', path: '/ambientes', group: 'Técnico' },
  { label: 'Módulos', path: '/modulos', group: 'Técnico' },
  { label: 'Peças', path: '/pecas', group: 'Técnico' },
  { label: 'Materiais', path: '/materiais', group: 'Catálogo' },
  { label: 'Painéis', path: '/calculos/paineis', group: 'Cálculos' },
  { label: 'Fitamento', path: '/calculos/fitamento', group: 'Cálculos' },
  { label: 'Vidros', path: '/calculos/vidros', group: 'Cálculos' },
  { label: 'Alumínio', path: '/calculos/aluminio', group: 'Cálculos' },
  { label: 'Ferragens', path: '/calculos/ferragens', group: 'Cálculos' },
  { label: 'Tempo de produção', path: '/calculos/tempo-producao', group: 'Cálculos' },
  { label: 'Composição financeira', path: '/financeiro/composicao', group: 'Financeiro' },
  { label: 'Aprovação interna', path: '/aprovacoes', group: 'Governança' },
  { label: 'PDF comercial', path: '/pdf/comercial', group: 'Documentos' },
  { label: 'PDF técnico', path: '/pdf/tecnico', group: 'Documentos' },
  { label: 'Preços com IA', path: '/integracoes/precos-ia', group: 'Integrações' },
  { label: 'Google Sheets', path: '/integracoes/google-sheets', group: 'Integrações' },
  { label: 'Parceiros Planej', path: '/integracoes/parceiros-planej', group: 'Integrações' },
  { label: 'XML Promob', path: '/integracoes/promob-xml', group: 'Integrações' },
];
