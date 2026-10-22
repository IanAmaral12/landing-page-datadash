# Setup do Vibe Coding Toolkit

Verificado em **22/10/2026** no projeto DataDash, com Codex em Windows/PowerShell. A fonte única é o [toolkit na revisão `790a895304e0c08b70a5b215c9d334f1c86b816c`](https://github.com/soumatheusgomes/vibe-coding-toolkit/tree/790a895304e0c08b70a5b215c9d334f1c86b816c). Foram consultados o README, visão geral, instalação, playbook, catálogo de ferramentas e prompts, templates, manifesto de nove documentos, defaults de projeto e guias relevantes dessa mesma revisão. A cópia do toolkit e o backup das configurações anteriores ficaram fora deste repositório em diretórios temporários; o histórico Git também permite recuperar o estado anterior. Nenhuma credencial foi copiada.

## Diagnóstico e decisão

**Observado:** aplicação estática React/Vite com site público, cadastro DC Organizer e páginas de Auth; npm e `package-lock.json`; nenhuma workspace, servidor, CI, migração ou instrução de agente local. O Git estava limpo em `e3e8d6236672842791fcec0bc74054f6d5965d41`. O fluxo do Supabase e a publicação Vercel são contratos externos. **Suposição limitada:** a documentação existente descreve corretamente as políticas RLS do projeto da extensão; elas não foram consultadas aqui.

O desenho aprovado pelo pedido foi uma adaptação delimitada: manter arquitetura e rotas, criar contexto curto e comandos verificáveis, adicionar regras de lint compatíveis com JavaScript, instalar skills locais pertinentes e atualizar pacotes apenas dentro das faixas existentes. Critério: checks locais passam, contratos de Auth testados permanecem, fontes e limites ficam rastreáveis, e a reaplicação não duplica configuração. Superpowers não estava carregado; foi usado o seu fluxo proporcional de entender, definir critérios, implementar e revisar, sem afirmar uso da skill. Ponytail e Caveman também não estavam carregados; suas ideias de escopo pequeno e comunicação concisa foram aplicadas sem instalar plugins globais.

## Ambiente e versões

Node.js 24.6.0, npm 11.11.0, React/React DOM 19.3.1, Vite 7.3.7, plugin React 5.2.0 e ESLint 9.39.5. `@vercel/analytics` permanece em 1.6.1, pois 2.x é uma versão principal incompatível sem decisão própria. O aviso de descontinuação do ESLint 9 apareceu na instalação; migrar para 10 exige revisão de compatibilidade separada. Não há perfil de TypeScript ou teste de tipos.

Skills locais instaladas com `skills` em modo `--copy` para Codex e Claude Code no Windows: `brainstorming`, `writing-plans`, `verification-before-completion`, `requesting-code-review`, `ponytail`, `caveman`, `vercel-react-best-practices`, `vercel-composition-patterns`, `web-design-guidelines`, `writing-guidelines` e `find-skills`. `skills-lock.json` registra origem e hash, e o `name` do frontmatter coincide com cada nome instalado. A listagem do CLI detectou as skills em escopo de projeto para ambos os clientes. Isto comprova arquivos e descoberta pelo CLI; carregamento em uma nova sessão e execução da skill pelo agente ainda exigem observação. Atualização intencional: `npx --yes skills@latest update --project --yes`, seguida de revisão do diff, licenças e lockfile.

Os arquivos `SKILL.md` instalados de `vercel-labs/agent-skills` coincidiram com a revisão upstream `063bee94c3f4df8453406c830b0a7df0f2860278`. O `SKILL.md` de `find-skills` coincidiu, após normalização de fim de linha, com `vercel-labs/skills` na revisão `a80e4c9d12d607631249d4d7d059f835d4b2f13a`. O lockfile contém hashes do conteúdo instalado, mas não fixa commits upstream; esses commits são a referência verificada nesta data, não uma garantia sobre futuras execuções do CLI. Avisos de licença e proveniência dos arquivos copiados estão em `third-party-notices/`.

As skills instaladas de Superpowers coincidiram com `obra/superpowers` em `2ce8aa15d05bd57213e6f746f953aafb7ded7a8b`; `ponytail` com `DietrichGebert/ponytail` em `09c434ab73ca43761c5d8b0c5d341926c2fba710`; `caveman` com `JuliusBrussee/caveman` em `bad48a0e1df55e05e3f52249afa35ecc1909ee76`. Foi verificado o conteúdo de `SKILL.md`, não cada recurso auxiliar. Estas são instalações locais de skills, não instalações dos plugins completos nem prova de hooks ativos.

## Matriz de cobertura do catálogo

Estados: **validado** = executado aqui; **configurado** = arquivo instalado, sem execução no novo cliente; **reutilizado** = equivalente já disponível; **inaplicável** = não corresponde ao stack/necessidade; **pendente** = precisa de ação externa ou pré-requisito. O escopo e a validação de cada linha aparecem abaixo.

| Guia | Necessidade, ação e escopo | Estado, risco e critério de validação |
|---|---|---|
| 01 Superpowers | Quatro skills locais de design, plano, revisão e verificação; plugin completo ausente. | Configurado: CLI lista as skills, carregamento em nova sessão pendente. O processo desta execução foi aplicado manualmente antes da instalação. |
| 02 Subagents | Delegação sob demanda; pesquisa do catálogo foi isolada e somente leitura. | Validado nesta sessão: revisão do resultado e revisão final pelo coordenador; sem modelo alternativo configurado. |
| 03 RTK | CLI 1.0.1 instalado no perfil Windows; integração global de Codex e Claude criada após backup. | CLI validado com `rtk git status` e `rtk gain --history` (55,1% de redução nessa amostra). O hook Codex reescreveu o comando, mas o sandbox padrão recusou executar o binário do WinGet; foi desativado no painel `/hooks` para preservar comandos normais. Claude requer login para teste ao vivo. |
| 04 Ponytail | Skill local `ponytail` com modo full padrão; plugin/hook não instalado. | Configurado: descoberta no CLI, uso em nova sessão pendente; abordagem aplicada manualmente aqui. |
| 05 Caveman | Skill local `caveman` para comunicação concisa; sem ativação automática. | Configurado: descoberta no CLI, uso em nova sessão pendente; convenção aplicada manualmente aqui. |
| 06 ESLint/Biome | ESLint existente preservado; regras locais copiadas da revisão, sem Biome redundante. | Validado: `npm run lint` e `npm run rules`; risco de novas regras controlado por 0 violações. |
| 07 Graphify | CLI 0.9.93 e skills globais instalados para Codex e Claude; `.graphifyignore` exclui artefatos locais. | Validado: extração local `--code-only --no-cluster` produziu 126 nós e 201 relações; consulta de dependentes de `signupApi.js` funcionou. `graphify-out/` é ignorado pelo Git. Nenhum hook Git ou envio externo. |
| 08 Obsidian | Memória externa sem necessidade ou destino autorizado. | Inaplicável; docs versionados são a fonte. |
| 09 Claude memory | Índice curto em `AGENTS.md` e docs detalhados sob demanda. | Configurado; recuperação em sessão Claude limpa não observada. Sem vault ou memória duplicada. |
| 10 Hooks | Um hook RTK Codex e um Claude foram instalados no perfil do usuário; nenhum hook Git foi instalado. | O hook Codex está desativado após falha de execução sob sandbox Windows. O hook Claude não foi executado porque o cliente está sem login. Sem interceptores duplicados. |
| 11 agent-browser | Seria útil para fluxos visuais, mas runtime/CLI não disponível. | Pendente pré-requisito de máquina; validação visual real não realizada. |
| 12 Context7 | Consulta de APIs atuais; `.codex/config.toml` e `.mcp.json` registram o mesmo servidor remoto em escopo de projeto para clientes diferentes. | Configurado: `codex mcp list` mostra `context7` ativo, `Not logged in`; `claude mcp list` mostra `Connected`. O conector Context7 desta sessão resolveu Vite e consultou documentação de múltiplas entradas HTML, mas isso não valida o servidor MCP registrado no projeto. Essa validação ainda depende de login/confiança e nova sessão. |
| 13 Anthropic Skills | Skills de artefato/criação sem necessidade específica. | Inaplicável; skills locais relevantes foram instaladas pelo CLI próprio. |
| 14 Chrome DevTools MCP | Diagnóstico de console/rede/performance em navegador. | Pendente integração de cliente e sessão local; sem medição de performance. |
| 15 Codex | `AGENTS.md`, skills locais, comandos e fontes sob demanda. | Configurado; esta sessão leu as instruções novas, mas nova sessão ainda não testada. |
| 16 Vercel skills | Cinco skills locais pertinentes a React, composição, UI, texto e descoberta. | CLI validou descoberta; aplicação em sessão nova não observada. Mobile, transições, deploy e otimização ficam fora do escopo atual. |
| 17 Next runtime/bundle | Requer Next.js/Turbopack. | Inaplicável à aplicação Vite; não trocar framework ou bundler. |
| 18 PostgreSQL | Banco pertence à extensão; skill `supabase-postgres-best-practices` já disponível neste host. | Reutilizável para trabalho futuro de SQL; nenhuma consulta ou migração executada aqui. |
| 19 gh-fix-ci | Exige PR com falha no GitHub Actions; não há workflow neste repo. | Inaplicável agora; `gh` instalado não prova acesso a PR. |
| 20 Security review | Fluxos de token justificam revisão por escopo; prompt 13 fixado em `docs/quality.md`. | Configurado como procedimento read-only; revisão manual do diff atual, sem alegação de auditoria completa ou skill `differential-review` carregada. |
| 21 shadcn/ui | Não adotado no projeto. | Inaplicável; não introduzir UI system para preencher catálogo. |
| 22 Sentry MCP | Nenhum projeto/organização Sentry escolhido. | Pendente decisão e OAuth; nenhum SDK ou token instalado. |
| 23 Harness2 | Adaptação nativa de prompt 15 em `docs/quality.md`. | Configurado; smoke checks abaixo. CLI oficial, benchmark e custos não selecionados. |

Extras do catálogo: o `find-skills` local cobre descoberta quando houver uma lacuna concreta; `aia-harness`, plugins adicionais, automações e skills de deploy não trazem uma necessidade atual demonstrada. O projeto não recebeu hooks Git, branch obrigatória, serviço externo ou alteração de permissões.

## Evidência antes e depois

| Verificação | Antes | Depois |
|---|---|---|
| `npm run lint` | Passou com 1 aviso `react-hooks/exhaustive-deps` em `Hero.jsx` | Passou com 0 avisos; constante estável e timer limpo no desmontar |
| `npm test` | 10/10 | 10/10 |
| `npm run build` | Passou com Vite 7.2.6 | Passou com Vite 7.3.7; duas entradas HTML presentes |
| `npm audit` | 15 avisos: 1 baixo, 3 moderados, 11 altos | 0 após `npm update` dentro das faixas existentes |
| `npm run rules` | Não existia | `RuleTester`: 3/3 regras passaram |
| `npm run check` | Não existia | Lint, regras, testes e build passaram |
| `npm ci` seguido de `npm run check` | Não executado | Instalação limpa passou; 0 avisos de auditoria e gate completo passou novamente |
| Preview HTTP local | Não executado | Cinco páginas principais responderam 200 em `127.0.0.1`; o processo local foi encerrado |

Os testes de Auth usam rede simulada. Nenhum cadastro, alteração de senha, banco, Vercel ou Chatwoot real foi acionado. O backup anterior foi criado antes das alterações de configuração. `git diff --check` passou; a listagem das skills confirmou os nomes sem duplicação. O rerun completo do setup não foi executado; configuração e lockfile foram revisados estaticamente.

Uma revisão independente somente leitura localizou o comando canônico e seus documentos relacionados e apontou dois ajustes: o requisito Node.js foi corrigido para `^20.19.0 || >=22.12.0`, e as revisões upstream das skills foram registradas acima. Não foram relatadas regressões no código alterado. Essa revisão não executou navegador nem serviços externos.

## Harness e manutenção

A adaptação nativa usa [prompt 15 desta revisão](https://github.com/soumatheusgomes/vibe-coding-toolkit/blob/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/prompts/15-harness-improvement.md), sem CLI Harness2. Smoke inicial: comandos foram localizados no índice `AGENTS.md`; os comandos de aplicação e regras foram executados; o catálogo foi conferido por agente de pesquisa somente leitura. Uma sessão Codex nova leu as instruções e executou `git status`; Context7 foi consultado pelo conector desta sessão, mas o MCP do projeto e a seleção de skill em sessão limpa ainda não foram observados. O smoke revelou uma falha reproduzível do hook RTK sob sandbox Windows, documentada abaixo. O CLI expôs modelo e nível de esforço no smoke; não houve medição confiável de consumo/custo de tokens ou teste de autenticação Claude. Mudanças materiais em instruções, cliente ou skills devem repetir os casos relevantes.

Para repetir: confirme Git e instruções, compare a revisão atual do toolkit com esta, leia os guias alterados, rode `npm ci` e `npm run check`, revise `npm audit`, confirme os nomes com `npx --yes skills@latest list --agent codex claude-code`, e atualize apenas componentes necessários. Preserve customizações. Ao retomar trabalho entre sessões, valide o checkout e os checks em vez de confiar num relato anterior.

## Pendências e próxima validação

- **Máquina/cliente:** RTK, uv e Graphify estão instalados no perfil Windows com autorização específica. O hook RTK para Codex foi registrado e revisado, mas falhou ao executar o binário do WinGet sob sandbox; permanece desativado em `/hooks`. O CLI RTK funciona fora desse sandbox. O hook Claude foi registrado, porém `claude auth status` informou `loggedIn: false`; seu teste funcional depende de login. Os plugins completos Superpowers e Ponytail não foram instalados; as skills locais cobrem os fluxos pertinentes. Consulte os [guias 01–12](https://github.com/soumatheusgomes/vibe-coding-toolkit/tree/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/tools). Context7 permanece sem validação pelo MCP do projeto.
- **Navegador:** validar os fluxos visuais com runtime de navegador local e dados descartáveis. O build e os testes de rede simulada não substituem esse check.
- **Serviços externos:** confirmar RLS e gatilho no projeto da extensão apenas em tarefa autorizada; Sentry depende de organização/projeto escolhidos. Uma revisão de segurança completa do repositório pode usar o prompt 13 read-only sem tocar produção.
- **Dependências:** avaliar ESLint 10 e Analytics 2 somente com compatibilidade e decisão próprias; o upgrade feito permaneceu nas versões principais atuais.

### Integrações do perfil Windows

Após autorização explícita, as configurações anteriores do Codex e Claude foram copiadas para `%TEMP%\datadash-agent-config-backup-20261022-115219`. Foram instalados `rtk-ai.rtk` 1.0.1 e `astral-sh.uv` 0.13.5 com `winget`, e `graphifyy` 0.9.93 com `uv tool install`. Processos PowerShell abertos antes da instalação precisam receber o novo `PATH` do usuário ou ser reiniciados para localizar `rtk`, `uv` e `graphify`.

`rtk init --global --codex --no-trust-filters` criou `~/.codex/RTK.md`, referência em `AGENTS.md` e um `PreToolUse` em `hooks.json`. `rtk init --global --auto-patch --no-trust-filters` criou os equivalentes Claude. Nova execução dry-run não propôs duplicação. O CLI filtrou `git status` manualmente. O Codex inicialmente ignorou o hook por falta de confiança; após revisão em `/hooks`, passou a reescrever `git status` para `rtk git status`. Em sessões CLI com sandbox `workspace-write` ou `read-only`, a execução do `rtk.exe` do diretório WinGet retornou “Acesso negado”. O hook Codex foi então desativado no mesmo painel; uma correção futura precisa demonstrar execução em sessão nova com sandbox normal antes de reativá-lo. Não foi usado `--dangerously-bypass-hook-trust` nem desabilitado o sandbox.

`graphify install --platform codex` e `graphify install --platform claude` registraram as skills globais. `graphify extract . --code-only --no-cluster --max-workers 2` gerou `graphify-out/graph.json` apenas localmente; `graphify query 'What depends on signupApi.js?'` retornou `SignupPage` e testes. `graphify hook status` confirmou ausência de hooks Git. Atualize o grafo após mudanças no código repetindo a extração, caso vá usá-lo.

Para Context7, os arquivos do projeto já estão prontos. Codex poderá exigir login OAuth e confiança no projeto; a primeira consulta pelo MCP do projeto deve resolver a biblioteca e consultar um conceito da versão instalada. Nenhum token pertence ao repositório.
