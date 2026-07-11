export const tableNames = {
  empresas: 'empresas', users: 'users', clientes: 'clientes', projetos: 'projetos', ambientes: 'ambientes', modulos: 'modulos', pecas: 'pecas', materiais: 'materiais', ferragens: 'ferragens', itemFerragens: 'item_ferragens', vidros: 'vidros', aluminios: 'aluminios', operacoes: 'operacoes', orcamentos: 'orcamentos', itemOrcamentos: 'item_orcamentos', sugestoesPreco: 'sugestoes_preco', configuracoesMarcenaria: 'configuracoes_marcenaria', promobXmlImports: 'promob_xml_imports', integrations: 'integrations', approvals: 'approvals', generatedPdfs: 'generated_pdfs',
} as const;

export type TableName = (typeof tableNames)[keyof typeof tableNames];
