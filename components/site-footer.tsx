"use client"; // 🔥 Esto hace que el componente sea interactivo

import { useLanguage } from "./language-provider";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/aaron-fabricio-sc/",
    label: "GitHub",
    iconClass: "fa-brands fa-github",
  },
  {
    href: "https://www.linkedin.com/in/aaron-fabricio-santa-cruz-valdez/",
    label: "LinkedIn",
    iconClass: "fa-brands fa-linkedin-in",
  },
] as const;

export function SiteFooter() {
  const { t } = useLanguage();

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const user = "aaronfabricio";
    const number = "00";
    const domain = "gmail.com";
    window.location.href = `mailto:${user}${number}@${domain}`;
  };

  return (
    <footer className="site-footer">
      <div>
        <a className="site-bar__brand" href="#inicio">
          <span className="brand-tag">&lt;AaronCode/&gt;</span>
        </a>

        <div className="hero-icons" aria-label={t.actions.socialLinks}>
          {SOCIAL_LINKS.map(({ href, label, iconClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <i className={iconClass} aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="site-footer__contact">
          <a href="#" onClick={handleEmailClick}>
            {t.actions.contactByEmail}
          </a>
        </p>
      </div>

      <p>
        {new Date().getFullYear()} Aaron Fabricio Santa Cruz (FullStack
        Developer). {t.actions.builtWith}
      </p>
    </footer>
  );
}
