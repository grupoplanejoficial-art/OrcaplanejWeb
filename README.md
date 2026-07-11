# Orcaplanej ERP

Fundação inicial de um SaaS para gestão técnica e comercial de marcenarias.

## Estrutura

- `src/app`: composição da aplicação e rotas.
- `src/components/layout`: layout principal e sidebar.
- `src/features`: módulos isolados por domínio, cada um com `pages`, `services`, `repositories` e `controllers`.
- `src/types`: tipos TypeScript e enums compartilhados.
- `src/lib`: classes base para serviços, repositórios e controllers.
- `src/docs/database/schema.sql`: modelagem inicial PostgreSQL.

## Scripts

- `npm run dev`: ambiente local.
- `npm run typecheck`: validação TypeScript.
- `npm run build`: build de produção.
