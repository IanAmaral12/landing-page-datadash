import datinhaNeutro from '../assets/brand/datinha-dark-neutro.svg';
import { DIAGNOSIS_URL, NUMBER_LABEL, waMessage, waUrl } from '../whatsapp';
import { Logo } from './ui';

export default function Footer({ showFloatingCta }) {
  return (
    <>
      <footer className="footer">
        <div className="container footer__inner">
          <Logo height={22} />
          <div className="footer__links">
            <a href={waUrl(waMessage())} target="_blank" rel="noopener noreferrer">WhatsApp: {NUMBER_LABEL}</a>
            <a href="mailto:contato@datadashapp.com">contato@datadashapp.com</a>
            <a href="https://www.linkedin.com/in/ian-felipe-silva/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
          <span className="footer__copy">© 2026 DataDash Solutions</span>
        </div>
      </footer>

      <a href={DIAGNOSIS_URL} target="_blank" rel="noopener noreferrer" aria-label="Entrar em contato pelo WhatsApp"
        className={`float-cta${showFloatingCta ? ' is-on' : ''}`}>
        <span className="float-cta__avatar">
          <img src={datinhaNeutro} alt="" />
          <span className="live-dot" />
        </span>
        <span className="float-cta__long">Entrar em contato</span>
        <span className="float-cta__short">Contato</span>
      </a>
    </>
  );
}
