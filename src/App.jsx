import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import CTAFooter from './components/CTAFooter';
import { Analytics } from '@vercel/analytics/react';


function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Analytics />
      <Header />
      <Hero />
      <TechStack />
      <ProblemSolution />
      <Services />
      <Portfolio />
      <Team />
      <CTAFooter />
    </div>
  );
}

export default App;
