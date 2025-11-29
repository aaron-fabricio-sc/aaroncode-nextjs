import { SECTION_IDS } from "@/lib/sections";
import { SectionBlock } from "./section-block";

const aboutParagraphs = [
  "Soy Ingeniero en Sistemas con más de 5 años de experiencia en el desarrollo web, especializado tanto en frontend como backend. He creado, diseñado, actualizado y mantenido no solo sitios web completos, sino también aplicaciones web complejas que requieren integración de múltiples tecnologías, lógica de negocio avanzada y una experiencia de usuario bien optimizada.",
  "Tengo un dominio sólido del desarrollo del lado del cliente (HTML, CSS, JavaScript, frameworks como Angular y React) y un conocimiento intermedio del lado del servidor, trabajando con tecnologías como Node.js, PHP, Laravel y bases de datos relacionales/no relacionales como MySQL y MongoDB.",
  "Además, he comenzado a incorporar soluciones de inteligencia artificial en proyectos web, como procesamiento de lenguaje natural, análisis de datos y asistentes inteligentes. También he trabajado con herramientas de mapas como Google Maps API, y adquirido conocimientos en arquitectura de software, lo cual me permite diseñar y estructurar sistemas más escalables, mantenibles y eficientes.",
  "Vivo en La Paz, Bolivia, y me encuentro en constante formación, aprendiendo nuevas tecnologías, herramientas y buenas prácticas para mantenerme actualizado y seguir desarrollando soluciones web modernas e innovadoras.",
];

const highlightedTerms = [
  "Ingeniero en Sistemas",
  "frontend",
  "backend",
  "HTML",
  "CSS",
  "JavaScript",
  "Angular",
  "React",
  "Node.js",
  "PHP",
  "Laravel",
  "MySQL",
  "MongoDB",
  "inteligencia artificial",
  "procesamiento de lenguaje natural",
  "análisis de datos",
  "asistentes inteligentes",
  "Google Maps API",
  "arquitectura de software",
  "La Paz, Bolivia",
];

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
  return (
    <SectionBlock id={SECTION_IDS.sobreMi} title="Sobre mí">
      <div className="about-grid">
        {aboutParagraphs.map((paragraph, idx) => (
          <p key={idx} className="about-text">
            {emphasizeText(paragraph, highlightedTerms)}
          </p>
        ))}
      </div>
    </SectionBlock>
  );
}
