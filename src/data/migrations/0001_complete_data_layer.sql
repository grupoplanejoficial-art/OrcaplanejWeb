-- Complete persistence layer for Orcaplanej ERP (PostgreSQL).
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS citext;

CREATE TYPE user_role AS ENUM ('owner','admin','manager','designer','production','sales','viewer');
CREATE TYPE project_status AS ENUM ('draft','in_review','approved','in_production','completed','cancelled');
CREATE TYPE budget_status AS ENUM ('draft','in_review','approved','rejected','sent','expired');
CREATE TYPE price_suggestion_status AS ENUM ('pending','approved','rejected');
CREATE TYPE material_category AS ENUM ('mdf','mdp','edge_band','glass','aluminum','hardware','accessory');
CREATE TYPE unit_of_measure AS ENUM ('unit','meter','millimeter','square_meter','cubic_meter','kilogram','sheet','hour');
CREATE TYPE integration_status AS ENUM ('disabled','pending','connected','error');
CREATE TYPE approval_status AS ENUM ('pending','approved','rejected','changes_requested');
CREATE TYPE pdf_type AS ENUM ('commercial','technical');

CREATE TABLE empresas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  razao_social text NOT NULL,
  nome_fantasia text,
  cnpj varchar(14) NOT NULL UNIQUE,
  telefone text,
  email citext,
  endereco jsonb,
  logo text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT empresas_cnpj_digits_chk CHECK (cnpj ~ '^[0-9]{14}$'),
  CONSTRAINT empresas_email_chk CHECK (email IS NULL OR email::text ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$')
);

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id uuid NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  name text NOT NULL,
  email citext NOT NULL UNIQUE,
  role user_role NOT NULL DEFAULT 'viewer',
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE clientes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id uuid NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  nome text NOT NULL,
  cpf_cnpj varchar(14),
  telefone text,
  email citext,
  endereco jsonb,
  observacoes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT clientes_cpf_cnpj_digits_chk CHECK (cpf_cnpj IS NULL OR cpf_cnpj ~ '^[0-9]{11}$|^[0-9]{14}$'),
  CONSTRAINT clientes_email_chk CHECK (email IS NULL OR email::text ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$')
);

CREATE TABLE projetos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cliente_id uuid NOT NULL REFERENCES clientes(id) ON DELETE RESTRICT,
  empresa_id uuid NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  nome text NOT NULL,
  descricao text,
  status project_status NOT NULL DEFAULT 'draft',
  data_criacao timestamptz NOT NULL DEFAULT now(),
  data_atualizacao timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE ambientes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  projeto_id uuid NOT NULL REFERENCES projetos(id) ON DELETE CASCADE,
  nome text NOT NULL,
  ordem integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT ambientes_ordem_chk CHECK (ordem > 0),
  CONSTRAINT ambientes_unique_ordem UNIQUE (projeto_id, ordem)
);

CREATE TABLE modulos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ambiente_id uuid NOT NULL REFERENCES ambientes(id) ON DELETE CASCADE,
  nome text NOT NULL,
  largura numeric(12,2) NOT NULL,
  altura numeric(12,2) NOT NULL,
  profundidade numeric(12,2) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT modulos_dimensoes_chk CHECK (largura > 0 AND altura > 0 AND profundidade > 0)
);

CREATE TABLE materiais (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id uuid NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  nome text NOT NULL,
  categoria material_category NOT NULL,
  unidade unit_of_measure NOT NULL,
  preco numeric(14,4) NOT NULL DEFAULT 0,
  fabricante text,
  cor text,
  espessura numeric(12,2),
  largura_chapa numeric(12,2),
  altura_chapa numeric(12,2),
  ativo boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT materiais_preco_chk CHECK (preco >= 0),
  CONSTRAINT materiais_espessura_chk CHECK (espessura IS NULL OR espessura > 0),
  CONSTRAINT materiais_chapa_chk CHECK ((largura_chapa IS NULL AND altura_chapa IS NULL) OR (largura_chapa > 0 AND altura_chapa > 0))
);

CREATE TABLE pecas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  modulo_id uuid NOT NULL REFERENCES modulos(id) ON DELETE CASCADE,
  codigo text NOT NULL,
  descricao text,
  largura numeric(12,2) NOT NULL,
  altura numeric(12,2) NOT NULL,
  profundidade numeric(12,2),
  espessura numeric(12,2),
  material_id uuid REFERENCES materiais(id) ON DELETE RESTRICT,
  quantidade integer NOT NULL DEFAULT 1,
  fita_superior boolean NOT NULL DEFAULT false,
  fita_inferior boolean NOT NULL DEFAULT false,
  fita_esquerda boolean NOT NULL DEFAULT false,
  fita_direita boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT pecas_dimensoes_chk CHECK (largura > 0 AND altura > 0 AND (profundidade IS NULL OR profundidade > 0) AND (espessura IS NULL OR espessura > 0)),
  CONSTRAINT pecas_quantidade_chk CHECK (quantidade > 0),
  CONSTRAINT pecas_codigo_por_modulo_uk UNIQUE (modulo_id, codigo)
);

CREATE TABLE ferragens (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id uuid NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  nome text NOT NULL,
  codigo text,
  unidade unit_of_measure NOT NULL DEFAULT 'unit',
  preco numeric(14,4) NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT ferragens_preco_chk CHECK (preco >= 0),
  CONSTRAINT ferragens_codigo_empresa_uk UNIQUE (empresa_id, codigo)
);

CREATE TABLE item_ferragens (
  peca_id uuid NOT NULL REFERENCES pecas(id) ON DELETE CASCADE,
  ferragem_id uuid NOT NULL REFERENCES ferragens(id) ON DELETE RESTRICT,
  quantidade numeric(12,3) NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (peca_id, ferragem_id),
  CONSTRAINT item_ferragens_quantidade_chk CHECK (quantidade > 0)
);

CREATE TABLE vidros (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  modulo_id uuid NOT NULL REFERENCES modulos(id) ON DELETE CASCADE,
  largura numeric(12,2) NOT NULL,
  altura numeric(12,2) NOT NULL,
  tipo text NOT NULL,
  espessura numeric(12,2) NOT NULL,
  quantidade integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT vidros_dimensoes_chk CHECK (largura > 0 AND altura > 0 AND espessura > 0),
  CONSTRAINT vidros_quantidade_chk CHECK (quantidade > 0)
);

CREATE TABLE aluminios (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  modulo_id uuid NOT NULL REFERENCES modulos(id) ON DELETE CASCADE,
  tipo text NOT NULL,
  comprimento numeric(12,2) NOT NULL,
  quantidade numeric(12,3) NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT aluminios_quantidade_chk CHECK (comprimento > 0 AND quantidade > 0)
);

CREATE TABLE operacoes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id uuid NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  nome text NOT NULL,
  unidade unit_of_measure NOT NULL DEFAULT 'unit',
  tempo_padrao numeric(12,4) NOT NULL DEFAULT 0,
  custo_hora numeric(14,4) NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT operacoes_valores_chk CHECK (tempo_padrao >= 0 AND custo_hora >= 0),
  CONSTRAINT operacoes_nome_empresa_uk UNIQUE (empresa_id, nome)
);

CREATE TABLE orcamentos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  projeto_id uuid NOT NULL REFERENCES projetos(id) ON DELETE CASCADE,
  status budget_status NOT NULL DEFAULT 'draft',
  materiais numeric(14,4) NOT NULL DEFAULT 0,
  ferragens numeric(14,4) NOT NULL DEFAULT 0,
  vidros numeric(14,4) NOT NULL DEFAULT 0,
  aluminio numeric(14,4) NOT NULL DEFAULT 0,
  mao_de_obra numeric(14,4) NOT NULL DEFAULT 0,
  impostos numeric(14,4) NOT NULL DEFAULT 0,
  margem numeric(14,4) NOT NULL DEFAULT 0,
  desconto numeric(14,4) NOT NULL DEFAULT 0,
  total numeric(14,4) NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT orcamentos_valores_chk CHECK (materiais >= 0 AND ferragens >= 0 AND vidros >= 0 AND aluminio >= 0 AND mao_de_obra >= 0 AND impostos >= 0 AND margem >= 0 AND desconto >= 0 AND total >= 0)
);

CREATE TABLE item_orcamentos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  orcamento_id uuid NOT NULL REFERENCES orcamentos(id) ON DELETE CASCADE,
  categoria text NOT NULL,
  descricao text NOT NULL,
  quantidade numeric(12,3) NOT NULL,
  unidade unit_of_measure NOT NULL,
  valor_unitario numeric(14,4) NOT NULL,
  valor_total numeric(14,4) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT item_orcamentos_valores_chk CHECK (quantidade > 0 AND valor_unitario >= 0 AND valor_total >= 0)
);

CREATE TABLE sugestoes_preco (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  material_id uuid NOT NULL REFERENCES materiais(id) ON DELETE CASCADE,
  preco_atual numeric(14,4) NOT NULL,
  preco_sugerido numeric(14,4) NOT NULL,
  fonte text NOT NULL,
  url text,
  data_pesquisa timestamptz NOT NULL DEFAULT now(),
  status price_suggestion_status NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT sugestoes_preco_valores_chk CHECK (preco_atual >= 0 AND preco_sugerido >= 0),
  CONSTRAINT sugestoes_preco_url_chk CHECK (url IS NULL OR url ~* '^https?://')
);

CREATE TABLE configuracoes_marcenaria (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id uuid NOT NULL UNIQUE REFERENCES empresas(id) ON DELETE CASCADE,
  custo_hora numeric(14,4) NOT NULL DEFAULT 0,
  margem numeric(7,4) NOT NULL DEFAULT 0,
  impostos numeric(7,4) NOT NULL DEFAULT 0,
  perda_chapa numeric(7,4) NOT NULL DEFAULT 0,
  largura_chapa_padrao numeric(12,2) NOT NULL DEFAULT 2750,
  altura_chapa_padrao numeric(12,2) NOT NULL DEFAULT 1840,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT configuracoes_marcenaria_valores_chk CHECK (custo_hora >= 0 AND margem >= 0 AND impostos >= 0 AND perda_chapa >= 0 AND largura_chapa_padrao > 0 AND altura_chapa_padrao > 0)
);

CREATE TABLE promob_xml_imports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id uuid NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  projeto_id uuid REFERENCES projetos(id) ON DELETE SET NULL,
  file_name text NOT NULL,
  raw_storage_path text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE integrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id uuid NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  provider text NOT NULL,
  status integration_status NOT NULL DEFAULT 'disabled',
  settings jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT integrations_provider_chk CHECK (provider IN ('google_sheets','parceiros_planej','promob','price_ai')),
  CONSTRAINT integrations_provider_empresa_uk UNIQUE (empresa_id, provider)
);

CREATE TABLE approvals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id uuid NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  projeto_id uuid NOT NULL REFERENCES projetos(id) ON DELETE CASCADE,
  requested_by uuid NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  reviewed_by uuid REFERENCES users(id) ON DELETE SET NULL,
  status approval_status NOT NULL DEFAULT 'pending',
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE generated_pdfs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id uuid NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  projeto_id uuid NOT NULL REFERENCES projetos(id) ON DELETE CASCADE,
  type pdf_type NOT NULL,
  file_url text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_users_empresa_role ON users(empresa_id, role);
CREATE INDEX idx_clientes_empresa_nome ON clientes(empresa_id, nome);
CREATE INDEX idx_projetos_empresa_status ON projetos(empresa_id, status);
CREATE INDEX idx_projetos_cliente ON projetos(cliente_id);
CREATE INDEX idx_ambientes_projeto_ordem ON ambientes(projeto_id, ordem);
CREATE INDEX idx_modulos_ambiente ON modulos(ambiente_id);
CREATE INDEX idx_materiais_empresa_categoria ON materiais(empresa_id, categoria) WHERE ativo = true;
CREATE INDEX idx_materiais_nome_trgm ON materiais(nome);
CREATE INDEX idx_pecas_modulo_material ON pecas(modulo_id, material_id);
CREATE INDEX idx_ferragens_empresa_nome ON ferragens(empresa_id, nome);
CREATE INDEX idx_item_ferragens_ferragem ON item_ferragens(ferragem_id);
CREATE INDEX idx_vidros_modulo ON vidros(modulo_id);
CREATE INDEX idx_aluminios_modulo ON aluminios(modulo_id);
CREATE INDEX idx_operacoes_empresa_nome ON operacoes(empresa_id, nome);
CREATE INDEX idx_orcamentos_projeto_status ON orcamentos(projeto_id, status);
CREATE INDEX idx_item_orcamentos_orcamento ON item_orcamentos(orcamento_id);
CREATE INDEX idx_sugestoes_preco_material_status ON sugestoes_preco(material_id, status);
CREATE INDEX idx_promob_xml_imports_empresa_projeto ON promob_xml_imports(empresa_id, projeto_id);
CREATE INDEX idx_approvals_projeto_status ON approvals(projeto_id, status);
CREATE INDEX idx_generated_pdfs_projeto_type ON generated_pdfs(projeto_id, type);
