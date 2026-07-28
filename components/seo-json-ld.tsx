import { SITE_URL } from "@/lib/site";

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Aaron Fabricio Santa Cruz Valdez",
      url: SITE_URL,
      image: `${SITE_URL}/img/imgoptimizadas/aaron-avatar-comic.png`,
      jobTitle: [
        "Software Engineer",
        "Full Stack Developer",
        "Founder",
        "CEO",
      ],
      worksFor: {
        "@type": "Organization",
        name: "EntityX",
        url: "https://entityx.tech/",
      },
      sameAs: [
        "https://github.com/aaron-fabricio-sc",
        "https://www.linkedin.com/in/aaron-fabricio-santa-cruz-valdez/",
      ],
      knowsAbout: [
        "Software Engineering",
        "Full Stack Development",
        "SaaS",
        "ERP",
        "Next.js",
        "React",
        "Angular",
        "NestJS",
        "Node.js",
        "Yii2",
        "Laravel",
        "PHP",
        "JavaScript",
        "TypeScript",
        "MySQL",
        "Google Maps API",
        "Progressive Web Apps",
        "REST APIs",
        "Software Architecture",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "BO",
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: "Aaron Fabricio Santa Cruz Valdez",
      url: SITE_URL,
      inLanguage: ["es", "en"],
      description:
        "Portafolio de Aaron Fabricio Santa Cruz Valdez, Software Engineer, Full Stack Developer y Founder de EntityX.",
      publisher: {
        "@id": personId,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile-page`,
      url: SITE_URL,
      name: "Portafolio de Aaron Fabricio Santa Cruz Valdez",
      description:
        "Experiencia, proyectos, stack tecnico y certificaciones de Aaron Fabricio Santa Cruz Valdez.",
      inLanguage: "es",
      mainEntity: {
        "@id": personId,
      },
      isPartOf: {
        "@id": websiteId,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#projects`,
      name: "Proyectos destacados de Aaron Fabricio Santa Cruz Valdez",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            name: "EntityX - Sistema ERP & Plataforma SaaS de Gestion",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://entityx.tech/",
            creator: {
              "@id": personId,
            },
            description:
              "Plataforma SaaS y ERP para automatizar la gestion operativa y financiera de centros deportivos, academias y negocios de membresias.",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: "Aplicacion administrativa para la comunidad de cana de azucar de Belice",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://remcommunityadmin-x.wdi.net/",
            creator: {
              "@id": personId,
            },
            description:
              "Sistema administrativo para centralizar informacion operativa, ubicaciones, archivos GEOJSON y notificaciones para la comunidad azucarera de Belice.",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "SoftwareApplication",
            name: "PWA integrada en REMID",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android, iOS",
            url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
            creator: {
              "@id": personId,
            },
            description:
              "PWA embebida mediante WebView para gestionar informacion y actividades de trabajadores de la comunidad azucarera de Belice.",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "SoftwareApplication",
            name: "Aplicacion KYC embebida en WebView",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android, iOS",
            url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
            creator: {
              "@id": personId,
            },
            description:
              "Aplicacion web KYC embebible para verificacion digital de identidad, captura segura de datos personales y documentos oficiales.",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "SoftwareApplication",
            name: "Integraciones backend REMID y REMBIZ",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android, iOS",
            url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
            creator: {
              "@id": personId,
            },
            description:
              "Servicios backend con Yii2, PHP, REST y MySQL para integraciones KYC, suscripciones, pagos y APIs seguras.",
          },
        },
      ],
    },
  ],
};

export function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
