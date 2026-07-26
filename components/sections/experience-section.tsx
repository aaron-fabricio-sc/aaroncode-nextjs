"use client";

import { SECTION_IDS } from "@/lib/sections";
import { useLanguage } from "../language-provider";
import { SectionBlock } from "./section-block";

type ExperienceItem = {
  company: string;
  role: string;
  employmentType: string;
  timeframe: string;
  duration: string;
  location: string;
  highlights: readonly string[];
  tech: readonly string[];
};

export function ExperienceSection() {
  const { t } = useLanguage();
  const experienceItems: readonly ExperienceItem[] = t.experience;

  return (
    <SectionBlock id={SECTION_IDS.experiencia} title={t.sections.experience}>
      <div className="experience-list">
        {experienceItems.map((item) => (
          <article
            key={`${item.company}-${item.timeframe}`}
            className="experience-card"
          >
            <header className="experience-card__header">
              <div>
                <p className="experience-role">{item.role}</p>
                <h3 className="experience-company">{item.company}</h3>
              </div>
              <span className="experience-employment">
                {item.employmentType}
              </span>
            </header>

            <div className="experience-meta">
              <p>{item.timeframe}</p>
              <p>{item.duration}</p>
              <p>{item.location}</p>
            </div>

            <ul className="experience-highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="experience-tags">
              {item.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}
