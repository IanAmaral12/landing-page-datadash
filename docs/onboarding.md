# Desenvolvimento local

1. Use Node.js `^20.19.0 || >=22.12.0` e npm. Rode `npm ci` na raiz.
2. Rode `npm run dev` e abra o endereço local exibido pelo Vite.
3. Rode `npm run check` antes de entregar. Para conferir o build, use `npm run preview` em uma porta livre.

Não é preciso uma conexão real com Supabase para lint, testes e build. Os testes substituem chamadas de rede por respostas controladas. Enviar um cadastro real criaria uma conta: faça isso somente em ambiente descartável autorizado.

O build publica `dist/`; confira `dist/index.html`, `dist/dc-organizer/signup/index.html` e as páginas copiadas de `public/dc-organizer/`. As reescritas em `vercel.json` são específicas do Vercel e não são reproduzidas automaticamente pelo servidor Vite.

Se um check falhar, execute seu script isoladamente (`npm run lint`, `npm run rules`, `npm test`, `npm run build`), leia a primeira falha e compare com `docs/setup.md`. O arquivo `docs/quality.md` explica o alcance dos testes. `docs/setup.md` também registra integrações do agente e como repetir o setup.
