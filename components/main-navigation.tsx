"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_ITEMS, SECTION_IDS } from "@/lib/sections";
import { useLanguage } from "./language-provider";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/aaron-fabricio-sc",
    label: "GitHub",
    iconClass: "fa-brands fa-github",
  },
  {
    href: "https://www.linkedin.com/in/aaron-fabricio-santa-cruz-valdez/",
    label: "LinkedIn",
    iconClass: "fa-brands fa-linkedin-in",
  },
] as const;

function getNavHref(itemId: string, pathname: string) {
  if (itemId === SECTION_IDS.certifications) {
    return "/certificaciones";
  }
  if (pathname === "/" || pathname === "") {
    return `#${itemId}`;
  }
  return `/#${itemId}`;
}

export function MainNavigation() {
  const pathname = usePathname();
  const { language, t, toggleLanguage } = useLanguage();

  const getNavLabel = (itemId: string) => {
    if (itemId === SECTION_IDS.experiencia) return t.nav.experience;
    if (itemId === SECTION_IDS.proyectos) return t.nav.projects;
    if (itemId === SECTION_IDS.inicio) return t.nav.home;
    if (itemId === SECTION_IDS.sobreMi) return t.nav.about;
    if (itemId === SECTION_IDS.stack) return t.nav.stack;
    return t.nav.certifications;
  };

  const nextLanguageLabel = language === "es" ? "EN" : "ES";

  return (
    <>
      <header className="site-bar" aria-label={t.actions.quickActions}>
        <Link
          className="site-bar__brand"
          href={pathname === "/" ? "#inicio" : "/#inicio"}
        >
          <span className="brand-tag">&lt;AaronCode/&gt;</span>
        </Link>
        <div className="site-bar__actions">
          <Link
            href="/certificaciones"
            className="icon-button"
            aria-label={t.actions.viewCertifications}
            title={t.actions.viewCertifications}
          >
            <i className="fa-solid fa-award" aria-hidden="true" />
          </Link>
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
          <button
            type="button"
            className="icon-button"
            aria-label={t.actions.changeLanguage}
            title={t.actions.changeLanguage}
            onClick={toggleLanguage}
          >
            <i className="fa-solid fa-language" aria-hidden="true" />
            <span className="sr-only">{nextLanguageLabel}</span>
          </button>
        </div>
      </header>

      <nav
        className="site-nav site-nav--desktop"
        aria-label={t.actions.mainNavigation}
      >
        <Link
          className="site-nav__brand"
          href={pathname === "/" ? "#inicio" : "/#inicio"}
          style={{ textDecoration: "none" }}
        >
          <span className="brand-tag">&lt;AaronCode/&gt;</span>
        </Link>
        <ul className="site-nav__list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="site-nav__item">
              <Link
                className="site-nav__link"
                href={getNavHref(item.id, pathname)}
                title={getNavLabel(item.id)}
              >
                <i className={item.iconClass} aria-hidden="true" />
                <span className="site-nav__label">{getNavLabel(item.id)}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="site-nav__actions">
          <Link
            href="/certificaciones"
            className="icon-button"
            aria-label={t.actions.viewCertifications}
            title={t.actions.viewCertifications}
          >
            <i className="fa-solid fa-award" aria-hidden="true" />
          </Link>
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
          <button
            type="button"
            className="icon-button"
            aria-label={t.actions.changeLanguage}
            title={t.actions.changeLanguage}
            onClick={toggleLanguage}
          >
            <i className="fa-solid fa-language" aria-hidden="true" />
            <span className="sr-only">{nextLanguageLabel}</span>
          </button>
        </div>
      </nav>

      <nav
        className="site-nav site-nav--mobile"
        aria-label={t.actions.mobileNavigation}
      >
        <ul className="site-nav__list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="site-nav__item">
              <Link
                className="site-nav__link"
                href={getNavHref(item.id, pathname)}
                title={getNavLabel(item.id)}
              >
                <i className={item.iconClass} aria-hidden="true" />
                <span className="site-nav__label">{getNavLabel(item.id)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
