# Qualidade e revisão

## Gate local

`npm run check` executa lint, autoavaliação das regras locais, dez testes de Auth e build. `npm run rules` roda o `RuleTester` copiado do toolkit. O limite de 350 linhas vale para código de produção em `src/` e nas páginas públicas do DC Organizer; `quality/no-direct-console` impede logging direto nesses arquivos. Não há etapa de tipos, porque o projeto é JavaScript. Não há CI neste repositório.

Os testes verificam payload e falhas do cadastro, transporte de fragmentos e redefinição com fetch simulado. Não comprovam a configuração real de Supabase, políticas RLS, reescritas Vercel, renderização visual ou acessibilidade no navegador. Mudanças nessas áreas precisam de verificação adicional apropriada.

## Revisão por risco

Defina critérios antes de editar. Revise o diff, os chamadores afetados e os testes. Para Auth, trate fragmentos, tokens, respostas de rede, CSP e limites entre projetos como itens de revisão. Evite imprimir dados pessoais em relatórios. Use uma revisão independente para mudanças não triviais quando houver agente disponível; a revisão permanece somente leitura e retorna cenário, localização e evidência.

Para uma revisão de segurança isolada, execute o bloco **Prompt** de [security-review no toolkit](https://github.com/soumatheusgomes/vibe-coding-toolkit/blob/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/prompts/13-security-review.md) em modo repositório ou com um diff explícito. O relatório fica em local privado fora do repositório. O prompt é referência versionada, não uma autorização para testar produção. `differential-review` só se aplica quando instalado e compatível; revisão manual cobre o caso atual.

## Harness do agente

Use a adaptação nativa de [prompt 15](https://github.com/soumatheusgomes/vibe-coding-toolkit/blob/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/prompts/15-harness-improvement.md): observe um caso reproduzível, mantenha avaliação e entrada fixas, compare no máximo uma alteração candidata quando houver falha, e registre resultado e invalidação em `docs/setup.md`. A referência de casos é [harness evaluation](https://github.com/soumatheusgomes/vibe-coding-toolkit/blob/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/07-harness-evaluation.md). A adaptação não instala nem executa o CLI oficial Harness2.
