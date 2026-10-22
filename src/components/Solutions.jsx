import { goalOf, waMessage, waUrl } from '../whatsapp';
import { Icon } from './ui';

const SOLUTIONS = [
  ['crm', 'square-kanban', 'CRM e atendimento', 'Toda oportunidade tem dono, etapa e histórico. A gestão acompanha o funil inteiro.'],
  ['auto', 'workflow', 'Automações e integrações', 'Menos trabalho manual, menos erros de digitação e processos que seguem o mesmo padrão.'],
  ['ia', 'bot', 'Agentes de IA', 'Atendimento inicial mais rápido, com a equipe dedicada às conversas que exigem atenção humana.'],
  ['dados', 'chart-column', 'Dados e dashboards', 'Clareza sobre vendas, atendimento e gargalos, com dados atualizados.'],
  ['soft', 'code-xml', 'Software sob medida', 'Uma ferramenta feita para o seu fluxo, integrada ao que você já usa.'],
];

function CardCta({ children }) {
  return (
    <span className="card__cta">
      <Icon name="message-circle" size={16} />
      <span>{children}</span>
      <Icon name="arrow-up-right" size={16} />
    </span>
  );
}

export default function Solutions() {
  return (
    <section id="solucoes" className="section solutions">
      <div className="container">
        <div className="section-head" data-reveal="">
          <div>
            <div className="eyebrow">01 — Soluções</div>
            <h2 className="h2">Começamos pelo problema. <span className="muted-span">A ferramenta vem depois.</span></h2>
          </div>
          <p className="lead">Escolha a frente que mais se parece com o seu desafio. O botão abre o WhatsApp com a mensagem pronta.</p>
        </div>
        <div className="cards">
          {SOLUTIONS.map(([id, icon, title, gain], k) => (
            <a key={id} data-reveal="" className="card" href={waUrl(waMessage(goalOf(id)))} target="_blank" rel="noopener noreferrer">
              <div className="card__top">
                <span className="card__icon"><Icon name={icon} size={24} /></span>
                <span className="card__n">0{k + 1}</span>
              </div>
              <div>
                <h3>{title}</h3>
                <p>{gain}</p>
              </div>
              <CardCta>Conversar sobre isso</CardCta>
            </a>
          ))}
          <a data-reveal="" className="card card--dark" href={waUrl(waMessage(goalOf('outro')))} target="_blank" rel="noopener noreferrer">
            <div className="card__kicker">Ainda não sabe?</div>
            <h3>Conte como funciona hoje. A gente indica por onde começar.</h3>
            <CardCta>Abrir conversa</CardCta>
          </a>
        </div>
      </div>
    </section>
  );
}
