import { useEffect, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Process from './components/Process';
import Partner from './components/Partner';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { revealOnScroll } from './motion';

function App() {
  const rootRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [floatingCta, setFloatingCta] = useState(false);

  useEffect(() => revealOnScroll(rootRef.current), []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const hero = document.getElementById('top');
      const contact = document.getElementById('contato');
      setScrolled(y > 24);
      // The floating CTA appears after the hero and hides once the contact section is in view.
      setFloatingCta(y > hero.offsetHeight - 200 && contact.getBoundingClientRect().top >= window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={rootRef}>
      <Analytics />
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Solutions />
        <Process />
        <Partner />
        <About />
        <Contact />
      </main>
      <Footer showFloatingCta={floatingCta} />
    </div>
  );
}

export default App;
