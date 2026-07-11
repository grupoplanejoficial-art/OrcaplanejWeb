-- Modelagem inicial PostgreSQL para Orcaplanej ERP.
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE user_role AS ENUM ('owner','admin','manager','designer','production','sales','viewer');
CREATE TYPE project_status AS ENUM ('draft','in_review','approved','in_production','completed','cancelled');
CREATE TYPE approval_status AS ENUM ('pending','approved','rejected','changes_requested');
CREATE TYPE material_type AS ENUM ('panel','edge_band','glass','aluminum','hardware','consumable');
CREATE TYPE unit_of_measure AS ENUM ('unit','meter','square_meter','cubic_meter','kilogram','sheet');
CREATE TYPE piece_shape AS ENUM ('rectangle','custom');
CREATE TYPE pricing_source AS ENUM ('manual','ai','google_sheets','parceiros_planej');
CREATE TYPE pdf_type AS ENUM ('commercial','technical');
CREATE TYPE integration_status AS ENUM ('disabled','pending','connected','error');

CREATE TABLE tenants (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), name text NOT NULL, document text, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE users (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), tenant_id uuid NOT NULL REFERENCES tenants(id), name text NOT NULL, email text NOT NULL UNIQUE, role user_role NOT NULL DEFAULT 'viewer', is_active boolean NOT NULL DEFAULT true, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE clients (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), tenant_id uuid NOT NULL REFERENCES tenants(id), name text NOT NULL, document text, email text, phone text, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE promob_xml_imports (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), tenant_id uuid NOT NULL REFERENCES tenants(id), file_name text NOT NULL, raw_storage_path text, created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE projects (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), tenant_id uuid NOT NULL REFERENCES tenants(id), client_id uuid NOT NULL REFERENCES clients(id), name text NOT NULL, status project_status NOT NULL DEFAULT 'draft', promob_xml_import_id uuid REFERENCES promob_xml_imports(id), created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
ALTER TABLE promob_xml_imports ADD COLUMN project_id uuid REFERENCES projects(id);
CREATE TABLE environments (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), tenant_id uuid NOT NULL REFERENCES tenants(id), project_id uuid NOT NULL REFERENCES projects(id), name text NOT NULL, description text, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE modules (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), tenant_id uuid NOT NULL REFERENCES tenants(id), environment_id uuid NOT NULL REFERENCES environments(id), name text NOT NULL, width_mm numeric(12,2), height_mm numeric(12,2), depth_mm numeric(12,2), created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE materials (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), tenant_id uuid NOT NULL REFERENCES tenants(id), name text NOT NULL, type material_type NOT NULL, unit unit_of_measure NOT NULL, price numeric(14,4) NOT NULL DEFAULT 0, pricing_source pricing_source NOT NULL DEFAULT 'manual', created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE pieces (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), tenant_id uuid NOT NULL REFERENCES tenants(id), module_id uuid NOT NULL REFERENCES modules(id), material_id uuid REFERENCES materials(id), name text NOT NULL, shape piece_shape NOT NULL DEFAULT 'rectangle', width_mm numeric(12,2), height_mm numeric(12,2), quantity integer NOT NULL DEFAULT 1, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE calculation_records (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), tenant_id uuid NOT NULL REFERENCES tenants(id), project_id uuid NOT NULL REFERENCES projects(id), category text NOT NULL, total numeric(14,4) NOT NULL DEFAULT 0, metadata jsonb, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE approvals (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), tenant_id uuid NOT NULL REFERENCES tenants(id), project_id uuid NOT NULL REFERENCES projects(id), requested_by uuid NOT NULL REFERENCES users(id), reviewed_by uuid REFERENCES users(id), status approval_status NOT NULL DEFAULT 'pending', notes text, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE generated_pdfs (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), tenant_id uuid NOT NULL REFERENCES tenants(id), project_id uuid NOT NULL REFERENCES projects(id), type pdf_type NOT NULL, file_url text, created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE integrations (id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), tenant_id uuid NOT NULL REFERENCES tenants(id), provider text NOT NULL, status integration_status NOT NULL DEFAULT 'disabled', settings jsonb, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());

CREATE INDEX idx_clients_tenant_id ON clients(tenant_id);
CREATE INDEX idx_projects_tenant_client ON projects(tenant_id, client_id);
CREATE INDEX idx_environments_project ON environments(project_id);
CREATE INDEX idx_modules_environment ON modules(environment_id);
CREATE INDEX idx_pieces_module ON pieces(module_id);
CREATE INDEX idx_materials_tenant_type ON materials(tenant_id, type);
CREATE INDEX idx_calculation_records_project ON calculation_records(project_id);
CREATE INDEX idx_approvals_project_status ON approvals(project_id, status);
CREATE INDEX idx_integrations_tenant_provider ON integrations(tenant_id, provider);
