import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-content fade-in-up">
                    <h1 className="hero-title">
                        Chega de Trabalho Manual.<br />
                        Escale sua Operação com<br />
                        <span className="gradient-text">Automação Inteligente.</span>
                    </h1>

                    <p className="hero-subtitle">
                        A DataDash Solutions cria agentes de IA personalizados que automatizam
                        seus fluxos de trabalho complexos, cortando custos e liberando sua equipe.
                    </p>

                    <div className="hero-cta">
                        <a
                            href="https://wa.me/5514936181105?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Datadash."
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agende uma Consultoria
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
