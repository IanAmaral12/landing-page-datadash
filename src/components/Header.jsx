import { DIAGNOSIS_URL } from '../whatsapp';
import { Button, Logo } from './ui';

const LINKS = [
  ['#solucoes', 'Soluções'],
  ['#processo', 'Como trabalhamos'],
  ['#datacrazy', 'DataCrazy'],
  ['#sobre', 'Sobre'],
];

export default function Header({ scrolled }) {
  return (
    <header className={`header intro intro--down${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__home" aria-label="DataDash, início">
          <Logo height={24} />
        </a>
        <nav className="nav" aria-label="Principal">
          {LINKS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <Button size="s" iconLeft="message-circle" href={DIAGNOSIS_URL} external>Entrar em contato</Button>
      </div>
    </header>
  );
}
