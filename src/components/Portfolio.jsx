import './Portfolio.css';

const Portfolio = () => {
    const cases = [
        {
            client: 'Wellington Martins',
            metric: '+2 mil vendas/mês',
            solution: 'Planilha integrada',
            testimonial: 'Antes do Ian fazer a nossa planilha de controle automática, eu não tinha uma visão fácil do meu negócio de afiliados, eu dependia de preenchimento manual, o trabalho foi muito bom pra nós...',
            results: ['Automação completa', 'Visão em tempo real', 'Zero trabalho manual']
        },
        {
            client: 'Aryel Livinalli',
            metric: '+100 cobranças/dia',
            solution: 'Automação de WhatsApp para cobranças',
            testimonial: 'Automatizou todo o trabalho de acompanhamento do pedido do cliente no whatsapp, reduzindo muito nosso volume de pedidos frustrados...',
            results: ['Redução de pedidos frustrados', 'Acompanhamento automático', 'Eficiência operacional']
        },
        {
            client: 'Wenderson Bertoldo',
            metric: '+300 pedidos/mês',
            solution: 'Automação de WhatsApp e planilha integrada',
            testimonial: 'Resolveu todos os problemas de quem roda pagamento pós entrega, desde o controle a cobrança...',
            results: ['Controle total', 'Cobrança automatizada', 'Gestão simplificada']
        }
    ];

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <h2 className="section-title fade-in-up">Histórias de Sucesso</h2>

                <div className="cases-grid">
                    {cases.map((caseStudy, index) => (
                        <div
                            key={index}
                            className="case-card fade-in-up"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="case-header">
                                <div className="case-metric">{caseStudy.metric}</div>
                                <div className="case-solution">{caseStudy.solution}</div>
                            </div>

                            <blockquote className="case-testimonial">
                                "{caseStudy.testimonial}"
                            </blockquote>

                            <div className="case-client">
                                <div className="client-avatar">
                                    {caseStudy.client.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="client-info">
                                    <div className="client-name">{caseStudy.client}</div>
                                </div>
                            </div>

                            <div className="case-results">
                                {caseStudy.results.map((result, idx) => (
                                    <span key={idx} className="result-tag">✓ {result}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
