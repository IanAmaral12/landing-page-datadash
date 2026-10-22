import { Button } from './ui';

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <div className="about__body" data-reveal="">
          <div className="eyebrow">04 — Sobre</div>
          <div className="about__title">
            <img src="/ian-amaral.png" alt="Foto de Ian Amaral" width="88" height="88" loading="lazy" />
            <h2 className="h2">Ian Amaral</h2>
          </div>
          <p className="about__meta">Ian Felipe Amaral Oliveira Silva · Fundador da DataDash Solutions</p>
          <p className="about__text">
            Desenvolvedor Full Stack e fundador da DataDash Solutions. Atua com automação de processos, integrações, análise
            de dados e software sob medida, ajudando empresas a ganhar eficiência no atendimento e nas vendas.
          </p>
          <p className="about__text">
            A Datinha faz o primeiro atendimento no WhatsApp. A reunião de diagnóstico é com o Ian, que desenha e implementa a
            solução.
          </p>
          <div className="about__links">
            <Button variant="outline" iconLeft="github" href="https://github.com/ianamaral12" external>GitHub</Button>
            <Button variant="ghost" iconLeft="linkedin" href="https://www.linkedin.com/in/ian-felipe-silva/" external>LinkedIn</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
