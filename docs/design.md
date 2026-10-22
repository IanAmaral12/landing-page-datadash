# Interface

O site público segue o export "Landing page para WhatsApp" do design system DataDash: header fixo, hero com demonstração de atendimento, soluções, processo, parceria DataCrazy, contato com seleção de assunto, sobre o fundador (foto em `public/ian-amaral.png`), rodapé e CTA flutuante. Tokens e estilos ficam em `src/landing.css`; primitivas (Icon, Button, Badge, Logo) em `src/components/ui.jsx`; número e mensagens do WhatsApp em `src/whatsapp.js`. Fontes: Host Grotesk, Geist Mono e Lexend via Google Fonts. O cadastro da extensão usa três etapas com indicação de progresso; confirmação e recuperação usam páginas dedicadas.

Ao editar a interface, preserve a linguagem em português, rótulos de campos, navegação por teclado, foco visível, estados de erro e sucesso, e feedback durante operações de rede. Verifique tamanhos de tela estreitos e largos no navegador local. O cadastro do DC Organizer mantém `src/index.css` e não usa os tokens da landing. Não há shadcn/ui configurado.

Use `web-design-guidelines` para revisão de mudanças de UI e `vercel-react-best-practices` para alterações em componentes React. A presença dessas skills no disco não substitui uma revisão visual executada.
