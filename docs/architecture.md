# Arquitetura

## Entradas e componentes

- `index.html` e `src/main.jsx` montam o site público em `src/App.jsx` e `src/components/`.
- `dc-organizer/signup/index.html` e `src/dc-organizer/signup/` montam o cadastro React. `signupApi.js` valida campos e chama `POST /auth/v1/signup` no Supabase.
- `public/dc-organizer/auth/bridge.js` encaminha o fragmento de autenticação no navegador para confirmação ou recuperação.
- `public/dc-organizer/auth/confirmed.*` mostra confirmação; `public/dc-organizer/reset-password/` consome o token de recuperação em memória e chama `PUT /auth/v1/user`.
- `public/dc-organizer/privacy/index.html` publica a política de privacidade do DC Organizer; o cadastro contém um link para essa rota estática.
- `vite.config.js` cria as duas entradas HTML; `public/` é copiado para o build. `vercel.json` reescreve as rotas amigáveis.

## Limites de confiança

O navegador é público. Formulários, query strings, fragmentos e respostas de rede são entradas não confiáveis. A validação no cliente melhora a experiência, mas a autorização e as regras de dados pertencem ao Supabase e ao projeto da extensão. O repositório não contém servidor, migrações, políticas RLS ou CI.

`index.html` carrega o widget Chatwoot de um serviço externo; `@vercel/analytics` registra a navegação do site. Alterações nesses serviços exigem verificação separada. Nunca registre senhas, tokens de recuperação ou respostas completas de Auth em logs.

## Recuperação e diagnóstico

Os testes em `tests/` usam dados simulados; não demonstram o estado de um banco real. Para falhas de cadastro, confira a validação e a resposta de Auth sem expor dados sensíveis. Para links de e-mail, confira primeiro o tipo e a rota do fragmento, depois a configuração da função externa que gerou o redirecionamento.
