const NUMBER = '5511936248373';
export const NUMBER_LABEL = '(11) 93624-8373';

const GREETING = 'Olá, Datinha! Vim pelo site da DataDash';

export const TOPICS = [
  { id: 'crm', label: 'CRM e atendimento', goal: 'organizar o atendimento e as vendas com CRM' },
  { id: 'auto', label: 'Automações', goal: 'automatizar processos e integrar as ferramentas que usamos' },
  { id: 'ia', label: 'Agentes de IA', goal: 'usar agentes de IA no atendimento e na qualificação de contatos' },
  { id: 'dados', label: 'Dashboards', goal: 'acompanhar os números da empresa em dashboards' },
  { id: 'soft', label: 'Software sob medida', goal: 'desenvolver um sistema sob medida para o nosso processo' },
  { id: 'outro', label: 'Ainda não sei', goal: 'entender por onde começar a organizar a operação' },
];

export const goalOf = (id) => TOPICS.find((topic) => topic.id === id).goal;

export const waMessage = (goal) => (goal ? `${GREETING} e quero ${goal}.` : `${GREETING}.`);

export const waUrl = (text) => `https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`;

export const DIAGNOSIS_URL = waUrl(waMessage('agendar um diagnóstico com o Ian'));
