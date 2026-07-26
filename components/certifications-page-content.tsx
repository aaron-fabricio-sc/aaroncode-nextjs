"use client";

import Link from "next/link";
import { MainNavigation } from "@/components/main-navigation";
import { SiteFooter } from "@/components/site-footer";
import { CertificationsSection } from "@/components/sections/certifications";
import { useLanguage } from "./language-provider";

export function CertificationsPageContent() {
  const { t } = useLanguage();

  return (
    <div className="page-shell">
      <MainNavigation />

      <header
        className="site-hero"
        style={{
          marginBottom: "1rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            color: "var(--color-highlight)",
            marginBottom: "0.8rem",
          }}
        >
          {t.certificationsPage.title}
        </h1>
        <p
          style={{
            color: "var(--color-text)",
            maxWidth: "750px",
            margin: "0 auto 1.5rem",
            lineHeight: "1.6",
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
          }}
        >
          {t.certificationsPage.description}
        </p>
        <Link
          href="/"
          className="hero-btn hero-btn--secondary"
          style={{ textDecoration: "none" }}
        >
          <i
            className="fa-solid fa-arrow-left"
            style={{ marginRight: "0.5rem" }}
            aria-hidden="true"
          />{" "}
          {t.actions.backHome}
        </Link>
      </header>

      <main className="page-content">
        <CertificationsSection />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2.5rem 0 1rem",
          }}
        >
          <Link
            href="/"
            className="hero-btn hero-btn--secondary"
            style={{ textDecoration: "none" }}
          >
            <i
              className="fa-solid fa-arrow-left"
              style={{ marginRight: "0.5rem" }}
              aria-hidden="true"
            />{" "}
            {t.actions.backHome}
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
