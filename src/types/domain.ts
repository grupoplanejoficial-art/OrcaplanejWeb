import { ApprovalStatus, BudgetStatus, IntegrationStatus, MaterialCategory, MaterialType, PdfType, PieceShape, PriceSuggestionStatus, PricingSource, ProjectStatus, UnitOfMeasure, UserRole } from './enums';

export type ID = string;
export type ISODateTime = string;
export type Decimal = number;

export interface Address { street?: string; number?: string; complement?: string; district?: string; city?: string; state?: string; zipCode?: string; country?: string; }
export interface BaseEntity { id: ID; createdAt: ISODateTime; updatedAt: ISODateTime; }

export interface Empresa extends BaseEntity { razaoSocial: string; nomeFantasia?: string; cnpj: string; telefone?: string; email?: string; endereco?: Address; logo?: string; }
export interface Tenant extends Empresa {}
export interface User extends BaseEntity { empresaId: ID; name: string; email: string; role: UserRole; isActive: boolean; }
export interface Cliente extends BaseEntity { empresaId: ID; nome: string; cpfCnpj?: string; telefone?: string; email?: string; endereco?: Address; observacoes?: string; }
export interface Projeto extends BaseEntity { clienteId: ID; empresaId: ID; nome: string; descricao?: string; status: ProjectStatus; dataCriacao: ISODateTime; dataAtualizacao: ISODateTime; }
export interface Ambiente extends BaseEntity { projetoId: ID; nome: string; ordem: number; }
export interface Modulo extends BaseEntity { ambienteId: ID; nome: string; largura: Decimal; altura: Decimal; profundidade: Decimal; }
export interface Material extends BaseEntity { empresaId: ID; nome: string; categoria: MaterialCategory; unidade: UnitOfMeasure; preco: Decimal; fabricante?: string; cor?: string; espessura?: Decimal; larguraChapa?: Decimal; alturaChapa?: Decimal; ativo: boolean; pricingSource?: PricingSource; }
export interface Peca extends BaseEntity { moduloId: ID; codigo: string; descricao?: string; largura: Decimal; altura: Decimal; profundidade?: Decimal; espessura?: Decimal; materialId?: ID; quantidade: number; fitaSuperior: boolean; fitaInferior: boolean; fitaEsquerda: boolean; fitaDireita: boolean; shape?: PieceShape; }
export interface Ferragem extends BaseEntity { empresaId: ID; nome: string; codigo?: string; unidade: UnitOfMeasure; preco: Decimal; }
export interface ItemFerragem { pecaId: ID; ferragemId: ID; quantidade: Decimal; createdAt: ISODateTime; updatedAt: ISODateTime; }
export interface Vidro extends BaseEntity { moduloId: ID; largura: Decimal; altura: Decimal; tipo: string; espessura: Decimal; quantidade: number; }
export interface Aluminio extends BaseEntity { moduloId: ID; tipo: string; comprimento: Decimal; quantidade: Decimal; }
export interface Operacao extends BaseEntity { empresaId: ID; nome: string; unidade: UnitOfMeasure; tempoPadrao: Decimal; custoHora: Decimal; }
export interface Orcamento extends BaseEntity { projetoId: ID; status: BudgetStatus; materiais: Decimal; ferragens: Decimal; vidros: Decimal; aluminio: Decimal; maoDeObra: Decimal; impostos: Decimal; margem: Decimal; desconto: Decimal; total: Decimal; }
export interface ItemOrcamento extends BaseEntity { orcamentoId: ID; categoria: string; descricao: string; quantidade: Decimal; unidade: UnitOfMeasure; valorUnitario: Decimal; valorTotal: Decimal; }
export interface SugestaoPreco extends BaseEntity { materialId: ID; precoAtual: Decimal; precoSugerido: Decimal; fonte: string; url?: string; dataPesquisa: ISODateTime; status: PriceSuggestionStatus; }
export interface ConfiguracaoMarcenaria extends BaseEntity { empresaId: ID; custoHora: Decimal; margem: Decimal; impostos: Decimal; perdaChapa: Decimal; larguraChapaPadrao: Decimal; alturaChapaPadrao: Decimal; }

export interface CalculationRecord extends BaseEntity { empresaId: ID; projetoId: ID; category: MaterialType | 'production_time' | 'financial'; total: Decimal; metadata?: Record<string, unknown>; }
export interface Approval extends BaseEntity { empresaId: ID; projetoId: ID; requestedBy: ID; reviewedBy?: ID; status: ApprovalStatus; notes?: string; }
export interface GeneratedPdf { id: ID; empresaId: ID; projetoId: ID; type: PdfType; fileUrl?: string; createdAt: ISODateTime; }
export interface Integration extends BaseEntity { empresaId: ID; provider: 'google_sheets' | 'parceiros_planej' | 'promob' | 'price_ai'; status: IntegrationStatus; settings?: Record<string, unknown>; }
export interface PromobXmlImport { id: ID; empresaId: ID; projetoId?: ID; fileName: string; rawStoragePath?: string; createdAt: ISODateTime; }

export type Client = Cliente;
export type Project = Projeto;
export type Environment = Ambiente;
export type Module = Modulo;
export type Piece = Peca;
