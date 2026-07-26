"use client";

import Image from "next/image";
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

const projectImageDimensions: Record<
  string,
  { width: number; height: number }
> = {
  "/img/projects/entityx-cover.jpeg": { width: 1376, height: 768 },
  "/img/projects/administracion.png": { width: 1907, height: 958 },
  "/img/projects/pwacom.png": { width: 378, height: 867 },
  "/img/projects/kyc.jpeg": { width: 610, height: 1356 },
  "/img/projects/remid.jpeg": { width: 610, height: 1356 },
};

export function ProjectsSection() {
  const { t } = useLanguage();
  const projectItems: readonly ProjectItem[] = t.projects;

  return (
    <SectionBlock id={SECTION_IDS.proyectos} title={t.sections.projects}>
      <div className="projects-list">
        {projectItems.map((project) => {
          const dimensions = projectImageDimensions[project.image] ?? {
            width: 1200,
            height: 675,
          };

          return (
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
                <Image
                  className="projects-image"
                  src={project.image}
                  alt={`Vista previa del proyecto ${project.title}`}
                  width={dimensions.width}
                  height={dimensions.height}
                  sizes="(max-width: 768px) 326px, (max-width: 1200px) 42vw, 520px"
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
          );
        })}
      </div>
    </SectionBlock>
  );
}
