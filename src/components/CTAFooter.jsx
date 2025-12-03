import './CTAFooter.css';

const CTAFooter = () => {
    return (
        <section id="cta-footer" className="cta-footer">
            <div className="container">
                <div className="cta-content fade-in-up">
                    <h2 className="cta-title">
                        Pronto para preparar sua<br />empresa para o futuro?
                    </h2>

                    <p className="cta-subtitle">
                        Agende uma consultoria gratuita e descubra como a automação
                        inteligente pode transformar sua operação.
                    </p>

                    <a
                        href="https://wa.me/5514936181105?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Datadash."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark"
                    >
                        Agende Sua Consultoria Agora
                    </a>

                    <div className="footer-info">
                        <div className="footer-links">
                            <a href="#services">Soluções</a>
                            <a href="#problem-solution">Abordagem</a>
                            <a href="#portfolio">Clientes</a>
                        </div>

                        <div className="footer-contact">
                            <p>contato@datadashapp.com</p>
                            <p>(14) 93618-1105</p>
                            <p>© 2025 DataDash Solutions. Todos os direitos reservados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTAFooter;
