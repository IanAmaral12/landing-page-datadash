export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Calls onEnter once per element when it scrolls into view; returns a cleanup function.
export function onceInView(elements, onEnter, options = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      onEnter(entry.target);
    });
  }, options);
  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

// Hides [data-reveal] elements below the fold and fades them in, staggered by sibling order.
export function revealOnScroll(root) {
  if (prefersReducedMotion()) return () => {};
  const hidden = [...root.querySelectorAll('[data-reveal]')].filter((el) => {
    const rect = el.getBoundingClientRect();
    return !(rect.top < window.innerHeight * 0.95 && rect.bottom > 0);
  });
  hidden.forEach((el) => el.classList.add('reveal-hidden'));
  return onceInView(hidden, (el) => {
    const siblings = [...el.parentElement.children].filter((child) => child.hasAttribute('data-reveal'));
    el.style.transitionDelay = `${siblings.indexOf(el) * 70}ms`;
    el.addEventListener('transitionend', () => { el.style.transitionDelay = ''; }, { once: true });
    el.classList.remove('reveal-hidden');
  });
}
