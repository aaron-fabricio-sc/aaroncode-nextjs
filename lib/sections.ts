export const SECTION_IDS = {
  inicio: "inicio",
  experiencia: "experiencia",
  proyectos: "proyectos",
  sobreMi: "sobre-mi",
  stack: "stack",
  certifications: "certificaciones",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_ITEMS = [
  { id: SECTION_IDS.inicio, label: "Inicio" },
  { id: SECTION_IDS.experiencia, label: "Experiencia" },
  { id: SECTION_IDS.proyectos, label: "Proyectos" },
  { id: SECTION_IDS.sobreMi, label: "Sobre mí" },
  { id: SECTION_IDS.stack, label: "Stack" },
  { id: SECTION_IDS.certifications, label: "Certificaciones" },
] as const;
