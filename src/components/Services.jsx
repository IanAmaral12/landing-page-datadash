import './Services.css';

const Services = () => {
    const services = [
        {
            icon: '🔄',
            title: 'Agentes de Automação de Fluxo',
            description: 'Integração perfeita entre seus sistemas CRM, ERP e ferramentas de produtividade. Atualizações automáticas e sincronização em tempo real.'
        },
        {
            icon: '📄',
            title: 'Processamento Inteligente de Documentos',
            description: 'Extração automática de dados de faturas, contratos e formulários. IA que aprende e melhora continuamente.'
        },
        {
            icon: '💬',
            title: 'Chatbots e Assistentes Inteligentes',
            description: 'Assistentes virtuais que entendem contexto e executam ações. Suporte interno e atendimento ao cliente 24/7.'
        },
        {
            icon: '📊',
            title: 'Planilhas Integradas',
            description: 'Google Sheets com preenchimento automático e funções personalizadas. Dashboards em tempo real conectados a suas fontes de dados.'
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title fade-in-up">Soluções Especializadas de Automação</h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <div className="service-link">
                                <span>Saiba mais</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
