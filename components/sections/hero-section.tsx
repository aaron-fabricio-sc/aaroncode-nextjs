"use client";

import Image from "next/image";
import { SECTION_IDS } from "@/lib/sections";
import { useLanguage } from "../language-provider";

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
  const { t } = useLanguage();

  return (
    <header id={SECTION_IDS.inicio} className="site-hero">
      <div className="hero-badge">
        <div className="hero-description">
          <h1 className="hero-title neon-text">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <p className="hero-lead">{t.hero.lead}</p>

          <div className="hero-ctas" aria-label={t.actions.mainActions}>
            <a
              href="/cv/profile-es.pdf"
              download="aaron-fabricio-santa-cruz-cv.pdf"
              className="hero-btn hero-btn--primary"
            >
              <i className="fa-solid fa-file-arrow-down" aria-hidden="true" />
              <span>{t.hero.downloadCv}</span>
            </a>
            <a
              href="mailto:aaronfabricio00@gmail.com"
              className="hero-btn hero-btn--secondary"
            >
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              <span>{t.hero.contactMe}</span>
            </a>
            <a
              href={`#${SECTION_IDS.proyectos}`}
              className="hero-btn hero-btn--tertiary"
            >
              <i className="fa-solid fa-folder-open" aria-hidden="true" />
              <span>{t.hero.viewProjects}</span>
            </a>
          </div>

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
        </div>
        <div className="hero-media">
          <Image
            className="img-hero"
            src="/img/imgoptimizadas/aaron-avatar-comic.png"
            alt={t.hero.portraitAlt}
            width={360}
            height={420}
            priority
            sizes="(max-width: 768px) 180px, 360px"
          />
        </div>
      </div>
    </header>
  );
}
