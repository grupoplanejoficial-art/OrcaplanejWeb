import type { Aluminio, Ambiente, Approval, Cliente, ConfiguracaoMarcenaria, Empresa, Ferragem, GeneratedPdf, Integration, ItemFerragem, ItemOrcamento, Material, Modulo, Operacao, Orcamento, Peca, Projeto, PromobXmlImport, SugestaoPreco, User, Vidro } from '@/types';
import { UnimplementedDataRepository } from './DataRepository';
import { tableNames } from './tableNames';

export const empresaRepository = new UnimplementedDataRepository<Empresa>(tableNames.empresas);
export const userRepository = new UnimplementedDataRepository<User>(tableNames.users);
export const clienteRepository = new UnimplementedDataRepository<Cliente>(tableNames.clientes);
export const projetoRepository = new UnimplementedDataRepository<Projeto>(tableNames.projetos);
export const ambienteRepository = new UnimplementedDataRepository<Ambiente>(tableNames.ambientes);
export const moduloRepository = new UnimplementedDataRepository<Modulo>(tableNames.modulos);
export const pecaRepository = new UnimplementedDataRepository<Peca>(tableNames.pecas);
export const materialRepository = new UnimplementedDataRepository<Material>(tableNames.materiais);
export const ferragemRepository = new UnimplementedDataRepository<Ferragem>(tableNames.ferragens);
export const itemFerragemRepository = new UnimplementedDataRepository<ItemFerragem>(tableNames.itemFerragens);
export const vidroRepository = new UnimplementedDataRepository<Vidro>(tableNames.vidros);
export const aluminioRepository = new UnimplementedDataRepository<Aluminio>(tableNames.aluminios);
export const operacaoRepository = new UnimplementedDataRepository<Operacao>(tableNames.operacoes);
export const orcamentoRepository = new UnimplementedDataRepository<Orcamento>(tableNames.orcamentos);
export const itemOrcamentoRepository = new UnimplementedDataRepository<ItemOrcamento>(tableNames.itemOrcamentos);
export const sugestaoPrecoRepository = new UnimplementedDataRepository<SugestaoPreco>(tableNames.sugestoesPreco);
export const configuracaoMarcenariaRepository = new UnimplementedDataRepository<ConfiguracaoMarcenaria>(tableNames.configuracoesMarcenaria);
export const promobXmlImportRepository = new UnimplementedDataRepository<PromobXmlImport>(tableNames.promobXmlImports);
export const integrationRepository = new UnimplementedDataRepository<Integration>(tableNames.integrations);
export const approvalRepository = new UnimplementedDataRepository<Approval>(tableNames.approvals);
export const generatedPdfRepository = new UnimplementedDataRepository<GeneratedPdf>(tableNames.generatedPdfs);

export * from './DataRepository';
export * from './tableNames';
