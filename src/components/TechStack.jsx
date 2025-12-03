import './TechStack.css';

const TechStack = () => {
    // Lista de ferramentas com URLs dos logos oficiais
    const tools = [
        {
            name: 'n8n',
            logo: '/logos/n8n.svg'
        },
        {
            name: 'Chatwoot',
            logo: '/logos/chatwoot.svg'
        },
        {
            name: 'ElevenLabs',
            logo: '/logos/elevenlabs.svg'
        },
        {
            name: 'PostgreSQL',
            logo: '/logos/postgres.png'
        },
        {
            name: 'OpenAI',
            logo: '/logos/openai.svg'
        },
        {
            name: 'Gemini',
            logo: '/logos/gemini.svg'
        },
        {
            name: 'Docker',
            logo: '/logos/docker.svg'
        },
        {
            name: 'Meta',
            logo: '/logos/meta.jpg'
        },
        {
            name: 'Twilio',
            logo: '/logos/twilio.svg'
        },
        {
            name: 'Vercel',
            logo: '/logos/vercel.png'
        },
    ];

    // Duplica o array para criar o efeito de loop infinito
    const duplicatedTools = [...tools, ...tools];

    return (
        <section className="tech-stack">
            <div className="tech-stack-wrapper">
                <p className="tech-stack-title">Tecnologias que utilizamos</p>
                <div className="tech-stack-container">
                    <ul className="tech-stack-scroll">
                        {duplicatedTools.map((tool, index) => (
                            <li key={index} className="tech-item">
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="tech-logo"
                                    loading="lazy"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
