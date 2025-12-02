import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

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
        }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <img src="/logo.png" alt="DataDash Solutions" />
                    </div>

                    <nav className="nav">
                        <a onClick={() => scrollToSection('services')} className="nav-link">Soluções</a>
                        <a onClick={() => scrollToSection('problem-solution')} className="nav-link">Abordagem</a>
                        <a onClick={() => scrollToSection('portfolio')} className="nav-link">Clientes</a>
                        <a onClick={() => scrollToSection('cta-footer')} className="nav-link">Contato</a>
                    </nav>

                    <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary header-cta"
                    >
                        Agende uma call agora mesmo
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
