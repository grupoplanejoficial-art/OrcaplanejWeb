-- Initial seed with one demo company, default workshop configuration and base operations/materials.
WITH empresa AS (
  INSERT INTO empresas (id, razao_social, nome_fantasia, cnpj, telefone, email, endereco)
  VALUES ('00000000-0000-0000-0000-000000000001', 'Orcaplanej Demonstração LTDA', 'Orcaplanej Demo', '00000000000000', '(00) 0000-0000', 'demo@orcaplanej.local', '{"city":"São Paulo","state":"SP","country":"Brasil"}'::jsonb)
  ON CONFLICT (cnpj) DO UPDATE SET razao_social = EXCLUDED.razao_social
  RETURNING id
)
INSERT INTO configuracoes_marcenaria (empresa_id, custo_hora, margem, impostos, perda_chapa, largura_chapa_padrao, altura_chapa_padrao)
SELECT id, 0, 0, 0, 0.10, 2750, 1840 FROM empresa
ON CONFLICT (empresa_id) DO NOTHING;

INSERT INTO materiais (empresa_id, nome, categoria, unidade, preco, fabricante, cor, espessura, largura_chapa, altura_chapa, ativo)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'MDF Branco 18mm', 'mdf', 'sheet', 0, 'Genérico', 'Branco', 18, 2750, 1840, true),
  ('00000000-0000-0000-0000-000000000001', 'Fita Branco 22mm', 'edge_band', 'meter', 0, 'Genérico', 'Branco', 0.45, NULL, NULL, true),
  ('00000000-0000-0000-0000-000000000001', 'Vidro Incolor 4mm', 'glass', 'square_meter', 0, 'Genérico', 'Incolor', 4, NULL, NULL, true)
ON CONFLICT DO NOTHING;

INSERT INTO ferragens (empresa_id, nome, codigo, unidade, preco)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'Dobradiça caneco 35mm', 'DOB-35', 'unit', 0),
  ('00000000-0000-0000-0000-000000000001', 'Corrediça telescópica 450mm', 'COR-450', 'unit', 0)
ON CONFLICT DO NOTHING;

INSERT INTO operacoes (empresa_id, nome, unidade, tempo_padrao, custo_hora)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'Corte', 'unit', 0, 0),
  ('00000000-0000-0000-0000-000000000001', 'Furação', 'unit', 0, 0),
  ('00000000-0000-0000-0000-000000000001', 'Montagem', 'hour', 0, 0)
ON CONFLICT DO NOTHING;
