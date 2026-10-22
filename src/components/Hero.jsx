import { useEffect, useRef, useState } from 'react';
import neutro from '../assets/brand/datinha-light-neutro.svg';
import digitando from '../assets/brand/datinha-light-digitando.svg';
import ok from '../assets/brand/datinha-light-ok.svg';
import { prefersReducedMotion } from '../motion';
import { Badge, Button, Icon } from './ui';

// Demo cycle: 1 client message, 2 typing, 3 reply, 4-8 meeting booked, 0 reset.
const STEPS = 9;

export default function Hero() {
  const [step, setStep] = useState(() => (prefersReducedMotion() ? 6 : 0));
  const cardRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let timer;
    const start = setTimeout(() => {
      setStep(1);
      timer = setInterval(() => setStep((s) => (s + 1) % STEPS), 1300);
    }, 1200);
    const onScroll = () => {
      cardRef.current.style.transform = `translateY(${(Math.min(window.scrollY, 900) * -0.08).toFixed(1)}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(start);
      clearInterval(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const typing = step === 2;
  const booked = step >= 4;
  const on = (n, extra = '') => `${step >= n ? ' is-on' : ''}${extra}`;

  return (
    <section id="top" className="hero">
      <div className="dark-grid intro intro--fade" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <a href="#datacrazy" className="hero__badge intro" style={{ '--d': '120ms' }}>
            <Badge icon="badge-check">Parceiro homologado DataCrazy</Badge>
          </a>
          <h1>
            <span className="intro" style={{ '--d': '220ms' }}>Conecte seus processos.</span>{' '}
            <span className="intro accent" style={{ '--d': '360ms' }}>Simplifique sua operação.</span>
          </h1>
          <p className="hero__lead intro" style={{ '--d': '500ms' }}>
            Automação, CRM, inteligência artificial e software sob medida para organizar o atendimento, reduzir tarefas
            manuais e transformar dados em decisões.
          </p>
          <div className="hero__actions intro" style={{ '--d': '620ms' }}>
            <Button size="l" variant="secondary" href="#solucoes">Conhecer as soluções</Button>
          </div>
          <div className="hero__meta intro" style={{ '--d': '740ms' }}>
            <span className="live-dot" />
            <span>A Datinha atende · reunião com Ian Amaral · sem compromisso</span>
          </div>
        </div>

        <div ref={cardRef}>
          <div className="chat intro intro--card" style={{ '--d': '420ms' }} aria-label="Exemplo de atendimento no WhatsApp com dados ilustrativos" role="img">
            <div className="chat__head">
              <div className="chat__who">
                <span className="avatar">
                  <img src={neutro} alt="" className={!typing && !booked ? 'is-on' : ''} />
                  <img src={digitando} alt="" className={typing ? 'is-on' : ''} />
                  <img src={ok} alt="" className={booked ? 'is-on' : ''} />
                </span>
                <div>
                  <div className="chat__name">Datinha · DataDash</div>
                  <div className="chat__status">WhatsApp · {typing ? 'digitando…' : 'online'}</div>
                </div>
              </div>
              <Badge mono>Dados ilustrativos</Badge>
            </div>

            <div className="chat__body">
              <div className={`msg msg--in${on(1)}`}>
                Oi! Os contatos da minha loja chegam pelo WhatsApp e se perdem. Vocês ajudam a organizar?
              </div>
              <div className={`typing${typing ? ' is-on' : ''}`}><i /><i /><i /></div>
              <div className={`msg msg--out${on(3)}`}>
                Ajudamos sim. Sou a Datinha, IA da DataDash. Que tal uma reunião de diagnóstico com o Ian? Tenho quinta, 10h.
              </div>
            </div>

            <div className="connector"><b /></div>

            <div className="chat__foot">
              <div className={`crm${on(4, step === 4 || step === 5 ? ' is-hot' : '')}`}>
                <div className="crm__info">
                  <span className="crm__icon"><Icon name="calendar-check" size={16} /></span>
                  <div>
                    <div className="crm__title">Diagnóstico com Ian Amaral</div>
                    <div className="meta-mono">Quinta · 10:00 · 30 min · online</div>
                  </div>
                </div>
                <Badge variant="signal" dot mono>agendado</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
