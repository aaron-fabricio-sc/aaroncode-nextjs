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
  { id: SECTION_IDS.experiencia, label: "Experiencia", iconClass: "fa-solid fa-briefcase" },
  { id: SECTION_IDS.proyectos, label: "Proyectos", iconClass: "fa-solid fa-laptop-code" },
  { id: SECTION_IDS.inicio, label: "Inicio", iconClass: "fa-solid fa-house" },
  { id: SECTION_IDS.sobreMi, label: "Sobre mí", iconClass: "fa-solid fa-user" },
  { id: SECTION_IDS.stack, label: "Stack", iconClass: "fa-solid fa-layer-group" },
] as const;
