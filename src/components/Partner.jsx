import { waMessage, waUrl } from '../whatsapp';
import { Button, Icon, Logo } from './ui';

const ITEMS = [
  ['settings-2', 'Implantação', 'Configuração da conta, usuários, permissões e canais de atendimento.'],
  ['filter', 'Funis', 'Etapas desenhadas a partir do processo comercial real da empresa.'],
  ['workflow', 'Automações', 'Mensagens, tarefas e mudanças de etapa disparadas automaticamente.'],
  ['plug', 'Integrações', 'Conexão do CRM com site, formulários, ERP e outras ferramentas.'],
];

const PARTNER_URL = waUrl(waMessage('agendar um diagnóstico sobre a implantação do CRM DataCrazy'));

export default function Partner() {
  return (
    <section id="datacrazy" className="section partner">
      <div className="container partner__grid">
        <div data-reveal="">
          <div className="eyebrow">03 — Parceria</div>
          <div className="partner__brand">
            <Logo height={28} symbolOnly />
            <span className="sep" />
            <strong>DataCrazy</strong>
          </div>
          <h2 className="h2">Parceiro homologado DataCrazy.</h2>
          <p className="lead">
            Implantamos e personalizamos o CRM DataCrazy para que atendimento e vendas funcionem no mesmo lugar, do primeiro
            contato no WhatsApp ao fechamento.
          </p>
          <div className="partner__actions">
            <Button variant="inverse" size="l" iconLeft="message-circle" href={PARTNER_URL} external>
              Conversar sobre implantação
            </Button>
            <Button variant="secondary" size="l" iconRight="arrow-up-right" external
              href="https://partners.datacrazy.io/partners/ian-felipe-amaral-oliveira-silva-b2f10b">
              Ver perfil oficial
            </Button>
          </div>
          <p className="partner__note">A DataDash Solutions é uma empresa independente, parceira homologada da DataCrazy.</p>
        </div>
        <div className="partner__list">
          {ITEMS.map(([icon, title, desc]) => (
            <div key={title} data-reveal="x" className="partner__item">
              <Icon name={icon} size={18} />
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
