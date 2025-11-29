import { SectionBlock } from "./section-block";
import { SECTION_IDS } from "@/lib/sections";

type ProjectItem = {
  title: string;
  image: string;
  url: string;
  description: string;
  tech: string[];
  status:string;
  Type:string;
  language:string;
};

const projectItems: ProjectItem[] = [
  {
    title: "Aplicación Administrativa de la comunidad de caña de azúcar de Belice",
    image: "img/projects/administracion.png",
    url: "https://remcommunityadmin-x.wdi.net/",
    description:
      "Es un sistema completo donde se gestiona la toda la información de todos los usuario, miembros, agrupaciones y demás datos relevantes de la comunidad azucarera de Belice. También cuenta con la parte de configuración para otras aplicaciones complementarias que gestionan las actividades de los granjeros los conductores que llevan la caña de azúcar como ser ubicaciones de fabricas subida de archivos GEOJSON etc. Y también cuenta con su apartado de notificaciones  que llega a los usuarios por push notifications a la app mobile.",
    tech: ["Angular", "Sass", "Google Maps", "JavaScript"],
    status:"Privado",
    Type:"Frontend",
    language:"es",
  },
  {
    title: "PWA Para gestionar información y actividades de los trabajadores de la comunidad azucarera de Belice",
    image: "img/projects/pwacom.png",
    url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
    description:
      "Esta es una aplicación web embebida dentro de la aplicación móvil REMID, disponible en Google Play Store y App Store. La app móvil utiliza un WebView para cargar esta PWA directamente desde su sección de “Iniciativas”, permitiendo que los usuarios accedan a la plataforma sin necesidad de instalar nada adicional. La aplicación está diseñada para gestionar la información y las actividades de los trabajadores de la comunidad azucarera de Belice, ofreciendo una experiencia optimizada tanto dentro del navegador como dentro de REMID. Gracias a su integración como PWA, mantiene una interfaz rápida, moderna y consistente incluso cuando se ejecuta dentro de la app móvil.",
    tech: ["Angular", "Sass", "Google Maps", "JavaScript", "PWA"],
    status:"Privado",
    Type:"Frontend",
    language:"es",
  },
  {
    title: "Colaboración en aplicación KYC embebida en WebView",
     image: "img/projects/kyc.jpeg",
    url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",

    description:
      "Colaboré en el desarrollo de una aplicación web KYC (Know Your Customer) que puede ser embebida dentro de otras aplicaciones también puede ser usada dentro de la Aplicación REMID. Esta app permite a los usuarios verificar su identidad de manera digital, capturando información personal y documentos oficiales de forma segura y confiable. La integración como PWA embebida asegura que la app funcione de manera fluida dentro de la plataforma móvil, ofreciendo experiencia consistente y rápida sin requerir instalaciones adicionales, y cumpliendo con los estándares de seguridad y usabilidad para procesos de verificación de identidad.",
     tech: ["Angular", "Sass", "JavaScript", "PWA"],
    status:"Privado",
    Type:"Frontend",
    language:"es",
  },
  {
    title: "Integraciones de servicios backend en la aplicación REMID usando Yii2",
    image: "img/projects/remid.jpeg",
    url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
    description: `Colaboré en el desarrollo del backend de REMID y REMBIZ utilizando Yii2, implementando servicios robustos para:
    - Integración con la aplicación KYC embebida, permitiendo la verificación de identidad de los usuarios.
    - Gestión de suscripciones y pagos en las iniciativas de REMID.
    - Exposición de APIs seguras para consumo desde la app móvil REMID y la web de REMBIZ.
    Estas integraciones permitieron un flujo eficiente de datos entre aplicaciones web y móviles, garantizando consistencia, seguridad y escalabilidad.`,
    tech: ["Yii2", "PHP", "REST", "MySQL","JavaScript"],
    status: "Publico",
    Type: "Backend",
    language: "es",
  },
 
];

export function ProjectsSection() {
  return (
    <SectionBlock id={SECTION_IDS.proyectos} title="Proyectos">
      <div className="projects-list">
        {projectItems.map((project) => (
          <article key={project.title} className="projects-card">
            <div className="projects-badge">
              <p>{project.status}</p>  <p>{project.Type}</p> 
            </div>
            <a href={project.url} target="_blank" className="projects-image-wrapper">
              <img className="projects-image" src={project.image} alt={project.title} />
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
