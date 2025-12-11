import './Services.css';

const Services = () => {
    const services = [
        {
            title: 'Agentes de Automação de Fluxo',
            gifUrl: '/automation-flow.gif',
            description: 'Integração perfeita entre seus sistemas CRM, ERP e ferramentas de produtividade. Atualizações automáticas e sincronização em tempo real.',
            url: 'https://wa.me/5514936181105?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20agentes%20de%20automação%20de%20fluxo%20da%20DataDash.'
        },
        {
            gifUrl: '/web-development.gif', // Adicione o GIF aqui
            title: 'Desenvolvimento de aplicações web',
            description: 'Landing Pages, E-commerce, Dashboards, entre outros. Tudo isso impulsionado pela IA.',
            url: 'https://wa.me/5514936181105?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20desenvolvimento%20de%20aplicações%20web%20da%20DataDash.'
        },
        {
            gifUrl: '/chatbot.gif', // Adicione o GIF aqui
            title: 'Chatbots e Assistentes Inteligentes',
            description: 'Assistentes virtuais que entendem contexto e executam ações. Suporte interno e atendimento ao cliente 24/7.',
            url: 'https://wa.me/5514936181105?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20chatbots%20e%20assistentes%20inteligentes%20da%20DataDash.'
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title fade-in-up">Soluções Especializadas de Automação</h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <a
                            key={index}
                            href={service.url}
                            className="service-card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s`, textDecoration: 'none', color: 'inherit' }}
                        >
                            <h3 className="service-title">{service.title}</h3>
                            <div className="service-icon">
                                <img src={service.gifUrl} alt={service.title} />
                            </div>
                            <p className="service-description">{service.description}</p>
                            <div className="service-link">
                                <span>Saiba mais</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
