# Orcaplanej ERP

Fundação de um SaaS para gestão técnica e comercial de marcenarias.

## Estrutura

- `src/app`: composição da aplicação e rotas.
- `src/components/layout`: layout principal e sidebar.
- `src/features`: módulos isolados por domínio, cada um com `pages`, `services`, `repositories` e `controllers`.
- `src/types`: tipos TypeScript, interfaces de entidades e enums compartilhados.
- `src/lib`: classes base para serviços, repositórios e controllers.
- `src/data/migrations`: migrations PostgreSQL da camada de persistência.
- `src/data/seeds`: seed inicial para catálogo/configuração base.
- `src/data/repositories`: repositories tipados por entidade, prontos para conexão com adaptador de banco/Base44.
- `src/docs/database/schema.sql`: snapshot da modelagem PostgreSQL atual.
- `src/docs/database/ERD.md`: diagrama textual simplificado dos relacionamentos.

## Camada de dados

A modelagem inclui empresas, clientes, projetos, ambientes, módulos, peças, materiais, ferragens, itens de ferragem, vidros, alumínios, operações, orçamentos, itens de orçamento, sugestões de preço e configuração de marcenaria.

## Scripts

- `npm run dev`: ambiente local.
- `npm run typecheck`: validação TypeScript.
- `npm run build`: build de produção.
