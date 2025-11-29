import Image from "next/image";
import { SECTION_IDS } from "@/lib/sections";

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

export function HeroSection() {
  return (
    <header id={SECTION_IDS.inicio} className="site-hero">
      <div className="hero-badge">
       

        <div className="hero-description">
         
          <h1 className="hero-title neon-text">Aaron Fabricio Santa Cruz</h1>
          <h2 className="hero-subtitle">Ingeniero en Sistemas · Desarrollador Fullstack</h2>

          <div className="hero-icons" aria-label="Redes sociales">
            {SOCIAL_LINKS.map(({ href, label, iconClass }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <i className={iconClass} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
         <div className="hero-media">
          <Image
            className="img-hero"
            src="/img/avatar2sinbg.png"
            alt="Retrato de Aarón"
            width={360}
            height={420}
            priority
            sizes="(max-width: 768px) 240px, 360px"
          />
        </div>
      </div>
    </header>
  );
}
