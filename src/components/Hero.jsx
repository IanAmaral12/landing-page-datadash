import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const rotatingTexts = [
        'Automação Inteligente.',
        'Dados Estruturados.',
        'Agentes de IA.'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);

            setTimeout(() => {
                setCurrentTextIndex((prevIndex) =>
                    (prevIndex + 1) % rotatingTexts.length
                );
                setIsAnimating(false);
            }, 500); // Half of the transition time for smooth effect

        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-content fade-in-up">
                    <h1 className="hero-title">
                        Chega de Trabalho Manual.<br />
                        Escale sua Operação com<br />
                        <span className={`gradient-text ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                            {rotatingTexts[currentTextIndex]}
                        </span>
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
