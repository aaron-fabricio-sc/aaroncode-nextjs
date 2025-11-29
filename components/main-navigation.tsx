import { NAV_ITEMS } from "@/lib/sections";

const SOCIAL_LINKS = [
  { href: "https://github.com/", label: "GitHub", iconClass: "fa-brands fa-github" },
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    iconClass: "fa-brands fa-linkedin-in",
  },
] as const;

const ACTION_BUTTONS = [
  { label: "Cambiar tema", iconClass: "fa-solid fa-moon" },
  { label: "Cambiar idioma", iconClass: "fa-solid fa-language" },
] as const;

export function MainNavigation() {
  return (
    <>
      <header className="site-bar" aria-label="Identidad y acciones rápidas">
        <a className="site-bar__brand" href="#inicio">
          <span className="brand-tag">&lt;AaronCode/&gt;</span>
        </a>
        <div className="site-bar__actions">
          {SOCIAL_LINKS.map(({ href, label, iconClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="icon-button"
              aria-label={label}
            >
              <i className={iconClass} aria-hidden="true" />
            </a>
          ))}
          {ACTION_BUTTONS.map(({ label, iconClass }) => (
            <button key={label} type="button" className="icon-button" aria-label={label}>
              <i className={iconClass} aria-hidden="true" />
            </button>
          ))}
        </div>
      </header>

      <nav className="site-nav site-nav--desktop" aria-label="Navegación principal">
        <div className="site-nav__brand">
          <span className="brand-tag">&lt;AaronCode/&gt;</span>
        </div>
        <ul className="site-nav__list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="site-nav__item">
              <a className="site-nav__link" href={`#${item.id}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="site-nav__actions">
          {SOCIAL_LINKS.map(({ href, label, iconClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="icon-button"
              aria-label={label}
            >
              <i className={iconClass} aria-hidden="true" />
            </a>
          ))}
          {ACTION_BUTTONS.map(({ label, iconClass }) => (
            <button key={label} type="button" className="icon-button" aria-label={label}>
              <i className={iconClass} aria-hidden="true" />
            </button>
          ))}
        </div>
      </nav>

      <nav className="site-nav site-nav--mobile" aria-label="Navegación principal móvil">
        <ul className="site-nav__list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="site-nav__item">
              <a className="site-nav__link" href={`#${item.id}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
