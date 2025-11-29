import { SECTION_IDS } from "@/lib/sections";
import { SectionBlock } from "./section-block";

type ExperienceItem = {
  company: string;
  role: string;
  employmentType: string;
  timeframe: string;
  duration: string;
  location: string;
  highlights: string[];
  tech: string[];
};

const experienceItems: ExperienceItem[] = [
  {
    company: "World Data Inc.",
    role: "Desarrollador de software",
    employmentType: "Jornada completa",
    timeframe: "ago. 2023 - actualidad",
    duration: "2 años 4 meses",
    location: "La Paz, Bolivia · En remoto",
    highlights: [
      "Frontend principal para aplicaciones Angular con integraciones basadas en GPS y Google Maps API.",
      "Integración entre Angular y Flutter para sincronizar funcionalidades entre plataformas web y mobile.",
      "Gestión de backend para las apps REMBIZ y REMID (Mobile) construidas con  Yii2.",
    ],
    tech: ["Angular", "Google Maps API", "Flutter", "Yii2", "REMBIZ", "REMID"],
  },
  {
    company: "Aaron Code",
    role: "Desarrollador Frontend",
    employmentType: "Profesional independiente",
    timeframe: "ene. 2022 - jun. 2023",
    duration: "1 año 6 meses",
    location: "Bolivia",
    highlights: [
      "Construcción de soluciones a medida para RRHH, gestión de gimnasios y servicios de parqueo.",
      "Exploración de stacks modernos para fortalecer habilidades en TypeScript, React, Angular, Nestjs, Express, Laravel y diseño UI.",
    ],
    tech: ["React", "TypeScript", "UI Design", "SEO", "Git", "Nestjs", "Express", "Angular", "Laravel"],
  },
  {
    company: "DATEC LATAM",
    role: "Desarrollador de software",
    employmentType: "Jornada completa",
    timeframe: "jun. 2022 - sept. 2022",
    duration: "4 meses",
    location: "Bolivia",
    highlights: [
      "Consultorías para la aplicación PROFLEX4 UI enfocadas en modernizar la interfaz usada en ATMs.",
      "Implementación de cambios en HTML, CSS, JavaScript y archivos JSON manteniendo estándares de accesibilidad.",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "Webpack", "REST"],
  },
  {
    company: "GooSistem",
    role: "Desarrollador de software",
    employmentType: "Autónomo",
    timeframe: "oct. 2021 - nov. 2021",
    duration: "2 meses",
    location: "Bolivia · Híbrido",
    highlights: [
      "Diseño y desarrollo de un sitio informativo para potenciar la presencia digital de la empresa.",
    ],
    tech: ["JavaScript", "CSS3", "HTML5"],
    
  },
  
];

export function ExperienceSection() {
  return (
    <SectionBlock id={SECTION_IDS.experiencia} title="Experiencia">
      <div className="experience-list">
        {experienceItems.map((item) => (
          <article key={`${item.company}-${item.timeframe}`} className="experience-card">
            <header className="experience-card__header">
              <div>
                <p className="experience-role">{item.role}</p>
                <h3 className="experience-company">{item.company}</h3>
              </div>
              <span className="experience-employment">{item.employmentType}</span>
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
