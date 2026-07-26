"use client";

import { SECTION_IDS } from "@/lib/sections";
import { useLanguage } from "../language-provider";
import { SectionBlock } from "./section-block";

type ProjectItem = {
  title: string;
  image: string;
  url: string;
  description: string;
  tech: readonly string[];
  status: string;
  type: string;
};

export function ProjectsSection() {
  const { t } = useLanguage();
  const projectItems: readonly ProjectItem[] = t.projects;

  return (
    <SectionBlock id={SECTION_IDS.proyectos} title={t.sections.projects}>
      <div className="projects-list">
        {projectItems.map((project) => (
          <article key={project.title} className="projects-card">
            <div className="projects-badge">
              <p>{project.status}</p>
              <p>{project.type}</p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="projects-image-wrapper"
            >
              <img
                className="projects-image"
                src={project.image}
                alt={project.title}
              />
            </a>

            <div className="projects-content">
              <h3 className="projects-title">{project.title}</h3>
              <p className="projects-description">{project.description}</p>

              <div className="projects-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}
