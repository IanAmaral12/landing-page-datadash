import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false); // Close menu after clicking
        }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    {/* Logo - Left */}
                    <div className="logo">
                        <img src="/logo.png" alt="DataDash Solutions" />
                    </div>

                    {/* Navigation - Center */}
                    <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
                        <a onClick={() => scrollToSection('services')} className="nav-link">Soluções</a>
                        <a onClick={() => scrollToSection('problem-solution')} className="nav-link">Abordagem</a>
                        <a onClick={() => scrollToSection('portfolio')} className="nav-link">Clientes</a>
                        <a onClick={() => scrollToSection('cta-footer')} className="nav-link">Contato</a>
                    </nav>

                    {/* CTA Button - Right (hidden on mobile) */}
                    <a
                        href="https://wa.me/5514936181105?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Datadash."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary header-cta"
                    >
                        Fale conosco
                    </a>

                    {/* Hamburger Menu - Mobile Only */}
                    <button
                        className="hamburger"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={mobileMenuOpen ? 'active' : ''}></span>
                        <span className={mobileMenuOpen ? 'active' : ''}></span>
                        <span className={mobileMenuOpen ? 'active' : ''}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
