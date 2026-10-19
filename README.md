# DataDash

Site público em React e Vite. O cadastro da extensão DC Organizer entra por
`/dc-organizer/signup`, a confirmação por `/dc-organizer/auth/confirmed.html`
e a redefinição de senha por `/dc-organizer/reset-password`.

## Desenvolvimento

Requer Node.js 20.6 ou superior. Instale as dependências com `npm ci`.

- `npm run dev` — servidor local
- `npm test` — valida cadastro e integração de autenticação
- `npm run lint` — lint do projeto
- `npm run build` — gera `dist/` para publicação
- `npm run preview` — inspeciona o build local

O cadastro usa a chave pública do projeto Supabase `wsbqqinzzpcimszdxgtf`.
Os dados de perfil ficam em `auth.users.raw_user_meta_data`; senha e confirmação
de senha não são armazenadas pelo site. A página de redefinição recebe o token
do e-mail no fragmento da URL, remove-o imediatamente do histórico e o usa
somente em memória para atualizar a senha. `auth/bridge.js` transporta o
fragmento da URL do Supabase para a rota correta no navegador.

O Vercel publica o conteúdo de `dist/`. A regra de `vercel.json` mantém a rota
de cadastro sem exigir `/index.html`. Publique este site antes de atualizar a
Edge Function `auth-confirmed`, pois ela redireciona os links de e-mail para
esta página.
