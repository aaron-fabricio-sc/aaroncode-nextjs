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
  return (
    <footer className="site-footer">
      <div>
          <a className="site-bar__brand" href="#inicio">
            <span className="brand-tag">&lt;AaronCode/&gt;</span>
          </a>
          <div className="hero-icons" aria-label="Redes sociales">
            {SOCIAL_LINKS.map(({ href, label, iconClass }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <i className={iconClass} aria-hidden="true" />
              </a>
            ))}
          </div>
      </div>
      <p>© {new Date().getFullYear()} Aaron Fabricio Santa Cruz (FullStack Developer). Construido con Next.js.</p>
    </footer>
  );
}
