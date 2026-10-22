# DataDash: instruções para agentes

Leia `PRODUCT.md` e o documento relevante em `docs/` antes de editar. Confirme o estado do Git e preserve mudanças locais. Este projeto usa React 19, Vite 7, JavaScript e npm; não migre o stack para seguir exemplos do toolkit.

## Comandos

- Instalar: `npm ci`
- Desenvolver: `npm run dev`
- Verificar tudo: `npm run check` (lint, regras locais, testes e build)
- Diagnosticar dependências: `npm audit` e `npm outdated`

Defina o comportamento esperado antes de alterar código. Para correções, reproduza o defeito quando viável e execute os testes relevantes. Não use credenciais reais ou serviços de produção para validar. Não publique nem altere Supabase ou Vercel por consequência de um teste local.

Para decisões de produto, use `brainstorming` de forma proporcional à tarefa; `ponytail` em modo full ajuda a manter a mudança mínima completa. Use `verification-before-completion` antes de afirmar que uma entrega passou. `caveman` é opcional para respostas concisas. Instruções explícitas do usuário prevalecem sobre defaults das skills; não crie exigência de branch, worktree ou nova aprovação quando o trabalho já estiver autorizado.

## Mapa de contexto

- `PRODUCT.md`: produto e fluxos observados.
- `docs/architecture.md`: entradas, limites e serviços externos.
- `docs/design.md`: interface e decisões visuais.
- `docs/onboarding.md`: execução local e diagnóstico.
- `docs/quality.md`: critérios, testes, revisão e segurança.
- `docs/setup.md`: toolkit, integrações, evidências e pendências.
- `skills-lock.json` e `.agents/skills/`: skills locais; consulte a skill correspondente somente quando a tarefa exigir.
- `.codex/config.toml` e `.mcp.json`: Context7 em escopo de projeto para Codex e Claude; para APIs atuais, confirme conexão e consulte um conceito por vez, sem enviar código privado.

Atualize o documento responsável junto com mudanças de contrato, comando ou limite. Use delegação apenas quando a investigação ou revisão independente compensar; um arquivo deve ter um único autor por vez. Revise o diff e execute `npm run check` antes de entregar alterações relevantes.
