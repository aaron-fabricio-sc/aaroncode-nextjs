"use client";

import { SECTION_IDS } from "@/lib/sections";
import { useLanguage } from "../language-provider";
import { SectionBlock } from "./section-block";

function emphasizeText(text: string, highlights: string[]) {
  const escapedTerms = highlights.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escapedTerms.join("|")})`, "gi");
  return text.split(pattern).map((fragment, index) => {
    const isTerm = highlights.some(
      (term) => term.toLowerCase() === fragment.toLowerCase(),
    );
    if (!isTerm) return fragment;
    return (
      <mark key={`${fragment}-${index}`} className="text-highlight">
        {fragment}
      </mark>
    );
  });
}

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <SectionBlock id={SECTION_IDS.sobreMi} title={t.sections.about}>
      <div className="about-grid">
        {t.about.paragraphs.map((paragraph, idx) => (
          <p key={idx} className="about-text">
            {emphasizeText(paragraph, [...t.about.highlights])}
          </p>
        ))}
      </div>
    </SectionBlock>
  );
}
