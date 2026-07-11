# ERD simplificado — Orcaplanej ERP

```text
Empresa (1) ──< Users
Empresa (1) ──< Clientes
Empresa (1) ──< Projetos
Empresa (1) ──< Materiais
Empresa (1) ──< Ferragens
Empresa (1) ──< Operações
Empresa (1) ── ConfiguraçãoMarcenaria (1)
Empresa (1) ──< Integrações
Empresa (1) ──< Importações XML Promob
Empresa (1) ──< Aprovações
Empresa (1) ──< PDFs Gerados

Cliente (1) ──< Projetos
Projeto (1) ──< Ambientes
Projeto (1) ──< Orçamentos
Projeto (1) ──< Aprovações
Projeto (1) ──< PDFs Gerados
Projeto (1) ──< Importações XML Promob

Ambiente (1) ──< Módulos
Módulo (1) ──< Peças
Módulo (1) ──< Vidros
Módulo (1) ──< Alumínios

Material (1) ──< Peças
Material (1) ──< SugestõesPreço

Peça (N) >──< (N) Ferragem via ItemFerragem
Orçamento (1) ──< ItemOrçamento
```

## Cardinalidades principais

- Uma empresa possui vários clientes, projetos, materiais, ferragens, operações e integrações.
- Um cliente possui vários projetos.
- Um projeto pertence a uma empresa e a um cliente, e possui vários ambientes e orçamentos.
- Um ambiente possui vários módulos.
- Um módulo possui várias peças, vidros e perfis de alumínio.
- Uma peça pode usar um material e pode ter várias ferragens por meio de `item_ferragens`.
- Um orçamento possui vários itens de orçamento.
- Um material pode receber várias sugestões de preço.
