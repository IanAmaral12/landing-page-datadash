import './Team.css';

const Team = () => {
    const teamMembers = [
        {
            name: 'Ian Amaral',
            role: 'Fundador & CEO',
            image: '/ian-amaral.png',
            bio: 'Cientista da computação com mais de 4 anos de experiência no mercado de tecnologia e desenvolvimento de software, já atuando em projetos grandes para empresas como Petrobras e Claro.',
            linkedin: 'https://www.linkedin.com/in/ian-felipe-silva/',
            github: '#',
            email: 'mailto:contato@datadashapp.com.br'
        }
    ];

    return (
        <section id="team" className="team">
            <div className="container">
                <div className="team-header fade-in-up">
                    <h2 className="section-title">Nosso time</h2>
                    <p className="section-subtitle">
                        Conheça a liderança por trás das soluções inovadoras da Datadash Solutions.
                    </p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="team-member-card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="member-content">
                                <div className="member-info">
                                    <div className="member-header">
                                        <div className="member-text">
                                            <h3 className="member-name">{member.name}</h3>
                                            <p className="member-role">{member.role}</p>
                                        </div>
                                        <div className="member-image-container">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="member-image"
                                            />
                                        </div>
                                    </div>

                                    <p className="member-bio">{member.bio}</p>

                                    <div className="member-stats">
                                        <div className="stat-item">
                                            <span className="stat-number">4+</span>
                                            <span className="stat-label">Anos de Experiência</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-number">20+</span>
                                            <span className="stat-label">Projetos de Automação</span>
                                        </div>
                                    </div>

                                    <div className="member-social-links">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                            aria-label="LinkedIn"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" fill="currentColor" />
                                                <circle cx="4" cy="4" r="2" fill="currentColor" />
                                            </svg>
                                            <span>LinkedIn</span>
                                        </a>
                                        <a
                                            href={member.email}
                                            className="social-link"
                                            aria-label="Email"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Email</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
