# DataDash

## Produto observado

Este repositório contém o site público da DataDash Solutions e páginas de autenticação da extensão DC Organizer. O site apresenta soluções de automação, CRM e IA e direciona o contato para o WhatsApp com mensagens prontas por assunto; o widget Chatwoot continua carregado em `index.html`. A página de cadastro coleta perfil, dados de contato e credenciais em três etapas para criar uma conta no Supabase Auth. As páginas estáticas tratam confirmação de e-mail e redefinição de senha.

## Público e fluxos

- Visitantes conhecem soluções, processo de trabalho, a parceria DataCrazy e o fundador, e escolhem um assunto para abrir conversa no WhatsApp com a Datinha.
- Usuários da extensão criam conta em `/dc-organizer/signup`, confirmam o e-mail e podem redefinir a senha por link.
- A extensão e o banco de dados que recebem a conta pertencem a outro projeto; este repositório contém somente a interface e as chamadas públicas de Auth.

## Contratos e limites

- Preservar rotas, textos de ação, formato do payload de cadastro e tratamento do fragmento de recuperação.
- A chave Supabase presente no navegador é publishable; nenhuma chave secreta ou token de serviço deve entrar no bundle.
- O token de recuperação deve permanecer no fragmento até a página de destino e ser removido do histórico assim que lido.
- O deploy atual é um build estático Vite para Vercel. Publicação e mudanças no banco ou na extensão exigem trabalho próprio.

## Critérios de aceitação para manutenção

`npm run check` passa, as rotas estáticas continuam no build, os testes de cadastro e recuperação preservam seus contratos e nenhuma credencial privada é adicionada ao repositório.

As necessidades comerciais e métricas de conversão não foram especificadas; não devem ser inferidas como requisitos técnicos.
