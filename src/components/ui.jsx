import symbolReverse from '../assets/brand/symbol-reverse.png';
import symbolWhite from '../assets/brand/symbol-white.png';

// Lucide 0.460.0 icon paths (ISC), drawn at the design system's 1.6 stroke.
const ICONS = {
  'message-circle': <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  'badge-check': <><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></>,
  'calendar-check': <><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></>,
  'square-kanban': <><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M8 7v7" /><path d="M12 7v4" /><path d="M16 7v9" /></>,
  workflow: <><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></>,
  bot: <><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></>,
  'chart-column': <><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></>,
  'code-xml': <><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></>,
  'arrow-up-right': <><path d="M7 7h10v10" /><path d="M7 17 17 7" /></>,
  'arrow-right': <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  'settings-2': <><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></>,
  filter: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />,
  github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>,
  plug: <><path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" /></>,
};

export function Icon({ name, size = 20 }) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

const ICON_SIZE = { s: 16, m: 18, l: 18 };

// Every call to action in this page navigates, so buttons render as links.
export function Button({ children, href, variant = 'primary', size = 'm', iconLeft, iconRight, external = false }) {
  const target = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a href={href} className={`btn btn--${size} btn--${variant}`} {...target}>
      {iconLeft && <Icon name={iconLeft} size={ICON_SIZE[size]} />}
      <span>{children}</span>
      {iconRight && <span className="btn__arrow"><Icon name={iconRight} size={ICON_SIZE[size]} /></span>}
    </a>
  );
}

export function Badge({ children, variant = 'outline', icon, dot = false, mono = false }) {
  return (
    <span className={`badge badge--${variant}${mono ? ' badge--mono' : ''}`}>
      {dot && <span className="badge__dot" />}
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  );
}

export function Logo({ height = 24, symbolOnly = false }) {
  if (symbolOnly) return <img src={symbolWhite} alt="DataDash" style={{ height, width: 'auto', display: 'block' }} />;
  return (
    <span className="logo" role="img" aria-label="DataDash" style={{ gap: height * 0.3 }}>
      <img src={symbolReverse} alt="" style={{ height }} />
      <span className="logo__word" aria-hidden="true" style={{ fontSize: height * 1.12 }}>
        <span>data</span>dash.
      </span>
    </span>
  );
}
