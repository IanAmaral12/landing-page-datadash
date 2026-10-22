import { useEffect, useRef, useState } from 'react';
import { onceInView, prefersReducedMotion } from '../motion';

const STEPS = [
  ['Entendimento', 'Conversamos sobre a operação, a equipe, as ferramentas atuais e os objetivos do negócio.'],
  ['Mapeamento', 'Identificamos gargalos, tarefas repetitivas e oportunidades de automação ou integração.'],
  ['Implementação', 'Definimos a solução mais adequada ao contexto e colocamos em funcionamento.'],
  ['Validação e evolução', 'Testamos com a equipe, orientamos o uso e evoluímos conforme o escopo contratado.'],
];

export default function Process() {
  const [inView, setInView] = useState(prefersReducedMotion);
  const stepsRef = useRef(null);

  useEffect(() => {
    if (inView) return;
    return onceInView([stepsRef.current], () => setInView(true));
  }, [inView]);

  return (
    <section id="processo" className="section process">
      <div className="container">
        <div className="section-head" data-reveal="">
          <div>
            <div className="eyebrow">02 — Como trabalhamos</div>
            <h2 className="h2">Do diagnóstico à evolução.</h2>
          </div>
          <p className="lead">
            Tudo começa no WhatsApp: a Datinha entende o seu cenário e agenda a reunião de diagnóstico com o Ian. Cada etapa
            seguinte tem entregas claras: você sabe o que está sendo feito, por que e o que vem a seguir.
          </p>
        </div>
        <ol ref={stepsRef} className={`steps${inView ? ' is-in' : ''}`}>
          {STEPS.map(([title, desc], k) => (
            <li key={title} className="step" style={{ '--d': `${k * 380}ms` }}>
              <div className="step__rail" aria-hidden="true">
                <span className="step__dot">0{k + 1}</span>
                <span className="step__line"><i /></span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
