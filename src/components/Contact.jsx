import { useState } from 'react';
import datinhaOk from '../assets/brand/datinha-dark-ok.svg';
import { NUMBER_LABEL, TOPICS, goalOf, waMessage, waUrl } from '../whatsapp';
import { Button } from './ui';

export default function Contact() {
  const [topic, setTopic] = useState('crm');
  const message = `${waMessage(goalOf(topic))} Gostaria de agendar um diagnóstico com o Ian.`;

  return (
    <section id="contato" className="section contact">
      <div className="dark-grid" aria-hidden="true" />
      <div className="contact__glow" aria-hidden="true" />
      <div className="container contact__inner">
        <div data-reveal="" className="contact__avatar"><img src={datinhaOk} alt="Datinha" /></div>
        <div data-reveal="" className="eyebrow">05 — Contato</div>
        <h2 data-reveal="">Agende um diagnóstico <span className="muted-span">com o Ian Amaral.</span></h2>
        <p data-reveal="" className="lead">
          Escolha o assunto e envie a mensagem. A Datinha, nossa IA no WhatsApp, faz algumas perguntas sobre a sua operação
          e marca o melhor horário para a reunião.
        </p>

        <div data-reveal="" className="topics" role="group" aria-label="Assunto da conversa">
          {TOPICS.map(({ id, label }) => (
            <button key={id} type="button" className="topic" aria-pressed={id === topic} onClick={() => setTopic(id)}>
              {label}
            </button>
          ))}
        </div>

        <div data-reveal="" className="preview">
          <div className="preview__head">
            <span>Sua mensagem para a Datinha</span><span>{NUMBER_LABEL}</span>
          </div>
          <div className="preview__row" aria-live="polite">
            <div key={topic} className="msg msg--out">{message}</div>
          </div>
        </div>

        <div data-reveal="" className="contact__cta">
          <Button size="l" iconLeft="message-circle" iconRight="arrow-right" href={waUrl(message)} external>
            Entrar em contato
          </Button>
        </div>
      </div>
    </section>
  );
}
