"use client";

import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "es" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (typeof translations)[Language];
};

const STORAGE_KEY = "aaroncode-language";

const nav = {
  es: {
    experience: "Experiencia",
    projects: "Proyectos",
    home: "Inicio",
    about: "Sobre mí",
    stack: "Stack",
    certifications: "Certificaciones",
  },
  en: {
    experience: "Experience",
    projects: "Projects",
    home: "Home",
    about: "About me",
    stack: "Stack",
    certifications: "Certifications",
  },
};

export const translations = {
  es: {
    nav: nav.es,
    actions: {
      quickActions: "Identidad y acciones rápidas",
      mainNavigation: "Navegación principal",
      mobileNavigation: "Navegación principal móvil",
      viewCertifications: "Ver Certificaciones",
      changeLanguage: "Cambiar idioma",
      mainActions: "Acciones principales",
      socialLinks: "Redes sociales",
      contactByEmail: "Contactar por correo",
      builtWith: "Construido con Next.js.",
      viewCertificate: "Ver Certificado",
      backHome: "Volver al Inicio",
    },
    hero: {
      title: "Aaron Fabricio Santa Cruz",
      subtitle:
        "Founder & CEO en EntityX | Ingeniero de Sistemas & Full Stack Developer, transformando la gestión de negocios con soluciones digitales.",
      lead: "Diseño y desarrollo plataformas web, aplicaciones a medida y soluciones digitales orientadas a optimizar procesos y escalar negocios.",
      downloadCv: "Descargar CV",
      contactMe: "Contáctame",
      viewProjects: "Ver Proyectos",
      portraitAlt: "Retrato de Aaron",
    },
    sections: {
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre mí",
      stack: "Stack de herramientas",
      certifications: "Certificaciones",
    },
    about: {
      paragraphs: [
        "Founder y CEO en EntityX | Software Engineer, Full Stack Developer.",
        "Fundador y desarrollador principal de EntityX, el sistema ERP y plataforma SaaS que optimiza la gestión operativa y financiera de negocios basados en membresías y suscripciones (gimnasios, academias, centros deportivos y negocios de servicios).",
        "Digitalizamos la operación integral del negocio: desde el control de ingresos y la verificación de accesos, hasta el seguimiento de asistencia del personal, el registro de pagos y la comunicación directa con el cliente desde la nube.",
        "Como Ingeniero de Software con más de 5 años de experiencia, combino visión de producto, arquitectura de sistemas y desarrollo Full Stack para construir soluciones digitales escalables, seguras y orientadas a resolver problemas reales de administración.",
        "Apasionado por el Clean Code, las arquitecturas robustas y la creación de tecnología que transforma la gestión empresarial.",
      ],
      highlights: [
        "Founder y CEO",
        "EntityX",
        "Software Engineer",
        "Full Stack Developer",
        "ERP",
        "plataforma SaaS",
        "gestión operativa y financiera",
        "control de ingresos",
        "verificación de accesos",
        "nube",
        "Ingeniero de Software",
        "más de 5 años de experiencia",
        "arquitectura de sistemas",
        "desarrollo Full Stack",
        "soluciones digitales escalables",
        "Clean Code",
        "arquitecturas robustas",
        "transforma la gestión empresarial",
      ],
    },
    experience: [
      {
        company: "EntityX",
        role: "CEO-FOUNDER",
        employmentType: "Autónomo",
        timeframe: "ene. 2026 - actualidad",
        duration: "7 meses",
        location: "Bolivia · Híbrido",
        highlights: [
          "Como fundador de EntityX, lidero la visión estratégica y el desarrollo técnico de una plataforma SaaS diseñada para transformar la gestión operativa y financiera de centros deportivos, academias y negocios basados en membresías. Mi enfoque es eliminar las ineficiencias de la gestión tradicional mediante una solución integral en la nube que automatiza el control de accesos, simplifica el registro de ingresos y optimiza la comunicación directa con los clientes.",
        ],
        tech: [
          "Desarrollo Full Stack",
          "SaaS",
          "Cloud",
          "Arquitectura de Software",
          "Automatización",
        ],
      },
      {
        company: "World Data Inc.",
        role: "Desarrollador de software",
        employmentType: "Jornada completa",
        timeframe: "ago. 2023 - actualidad",
        duration: "3 años",
        location: "La Paz, Bolivia · En remoto",
        highlights: [
          "Desarrollador Fullstack (Angular / NestJS) con amplia experiencia en aplicaciones web interactivas, integración de mapas/GPS (Google Maps API) y comunicación cliente-servidor con módulos en Flutter. Especialista en el diseño de arquitectura backend sólida utilizando NestJS y Yii2 para proyectos clave como REMBIZ y REMID, garantizando soluciones escalables tanto en frontend como en backend.",
        ],
        tech: [
          "Angular",
          "NestJS",
          "Google Maps API",
          "Flutter",
          "Yii2",
          "Diseño web adaptable",
          "GitHub",
          "REMBIZ",
          "REMID",
        ],
      },
      {
        company: "DATEC LATAM",
        role: "Desarrollador de software",
        employmentType: "Jornada completa",
        timeframe: "jun. 2022 - sept. 2022",
        duration: "4 meses",
        location: "Bolivia",
        highlights: [
          "Brindé consultoría especializada en desarrollo frontend para la aplicación PROFLEX4 UI, orientada a cajeros automáticos (ATMs). Llevé a cabo la modernización y ajuste de la interfaz de usuario utilizando HTML5, CSS3, JavaScript y estructuración de datos en JSON, optimizando la experiencia visual y la interacción en la plataforma.",
        ],
        tech: [
          "JavaScript",
          "CSS3",
          "HTML5",
          "JSON",
          "Frontend",
          "UI Design",
          "Webpack",
          "REST",
        ],
      },
      {
        company: "GooSistem",
        role: "Desarrollador de software",
        employmentType: "Autónomo",
        timeframe: "oct. 2021 - nov. 2021",
        duration: "2 meses",
        location: "Bolivia · Híbrido",
        highlights: [
          "Diseñé y desarrollé la plataforma web corporativa para GooSistem, orientada a optimizar su presencia digital y posicionar estratégicamente su catálogo de servicios. Implementé una estructura atractiva, intuitiva y optimizada para la conversión y captación de clientes.",
        ],
        tech: ["JavaScript", "CSS3", "HTML5"],
      },
    ],
    projects: [
      {
        title: "EntityX - Sistema ERP & Plataforma SaaS de Gestión",
        image: "/img/projects/entityx-cover.jpeg",
        url: "https://entityx.tech/",
        description: `EntityX es una plataforma en la nube diseñada para automatizar la gestión operativa y financiera de centros deportivos, academias y negocios de membresías.

Elimina los problemas de la administración tradicional optimizando la operación en un solo lugar:

• Control de ingresos: Registro en tiempo real de ventas, cobros y suscripciones.
• Verificación de accesos: Validación instantánea del estado de pago de cada cliente.
• Membresías flexibles: Creación rápida de planes, promociones y paquetes.
• Autogestión para clientes: Portal web para consultar vencimientos y horarios.
• Gestión de equipo: Control de asistencia y usuarios individuales para el personal.

Permite a los negocios digitalizar su administración, evitar fugas de dinero y brindar una experiencia moderna desde cualquier dispositivo.`,
        tech: [
          "SaaS",
          "ERP",
          "Cloud",
          "Full Stack",
          "Gestión",
          "Next.js",
          "Arquitectura",
        ],
        status: "Público",
        type: "Full Stack",
      },
      {
        title:
          "Aplicación Administrativa de la comunidad de caña de azúcar de Belice",
        image: "/img/projects/administracion.png",
        url: "https://remcommunityadmin-x.wdi.net/",
        description:
          "Sistema administrativo para centralizar la informacion de usuarios, miembros, agrupaciones y datos operativos de la comunidad azucarera de Belice. Incluye modulos de configuracion para aplicaciones complementarias, gestion de actividades de granjeros y conductores, ubicaciones de fabricas, carga de archivos GEOJSON y envio de notificaciones push hacia la aplicacion movil.",
        tech: ["Angular", "Sass", "Google Maps", "JavaScript"],
        status: "Privado",
        type: "Frontend",
      },
      {
        title:
          "PWA Para gestionar información y actividades de los trabajadores de la comunidad azucarera de Belice",
        image: "/img/projects/pwacom.png",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description:
          "PWA integrada dentro de la aplicacion movil REMID mediante WebView, disponible desde la seccion de Iniciativas. Permite gestionar informacion y actividades de trabajadores de la comunidad azucarera de Belice, ofreciendo una experiencia rapida y consistente tanto en navegador como dentro de la app movil, sin requerir instalaciones adicionales.",
        tech: ["Angular", "Sass", "Google Maps", "JavaScript", "PWA"],
        status: "Privado",
        type: "Frontend",
      },
      {
        title: "Colaboración en aplicación KYC embebida en WebView",
        image: "/img/projects/kyc.jpeg",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description:
          "Colabore en el desarrollo de una aplicacion web KYC embebible para verificacion digital de identidad dentro de REMID y otras plataformas. La solucion permite capturar informacion personal y documentos oficiales de forma segura, con una experiencia PWA fluida en entornos moviles y procesos orientados a seguridad, usabilidad y confiabilidad.",
        tech: ["Angular", "Sass", "JavaScript", "PWA"],
        status: "Privado",
        type: "Frontend",
      },
      {
        title:
          "Integraciones de servicios backend en la aplicación REMID usando Yii2",
        image: "/img/projects/remid.jpeg",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description: `Colaboré en el desarrollo del backend de REMID y REMBIZ utilizando Yii2, implementando servicios robustos para:
- Integración con la aplicación KYC embebida, permitiendo la verificación de identidad de los usuarios.
- Gestión de suscripciones y pagos en las iniciativas de REMID.
- Exposición de APIs seguras para consumo desde la app móvil REMID y la web de REMBIZ.
Estas integraciones permitieron un flujo eficiente de datos entre aplicaciones web y móviles, garantizando consistencia, seguridad y escalabilidad.`,
        tech: ["Yii2", "PHP", "REST", "MySQL", "JavaScript"],
        status: "Público",
        type: "Backend",
      },
    ],
    stack: {
      categories: [
        "Tecnologías Frontend",
        "Tecnologías Backend",
        "Herramientas y DevOps",
      ],
    },
    certificationsPage: {
      title: "Formación Continua & Certificaciones",
      description:
        "Un recorrido por las acreditaciones técnicas y diplomas obtenidos a lo largo de mi carrera en desarrollo frontend, arquitectura de software, bases de datos y buenas prácticas de ingeniería.",
    },
    certifications: [
      "Arquitecto Frontend",
      "Accesibilidad Web",
      "Asíncronismo en JavaScript",
      "Fundamentos de Bases de Datos",
      "Bootstrap",
      "Manejo de Datos con PHP",
      "Diseño para Programadores",
      "Frontend Developer (Práctico)",
      "Desarrollo Frontend",
      "Git y GitHub",
      "HTML y CSS",
      "Introducción a Laravel 8",
      "Laravel Testing",
      "Materialize CSS",
      "Curso de NPM",
      "Maquetación con CSS (Práctico)",
      "Preprocesadores CSS",
      "Sistemas de Diseño",
      "Tailwind CSS (2020)",
      "Terminal de Comandos",
    ],
  },
  en: {
    nav: nav.en,
    actions: {
      quickActions: "Identity and quick actions",
      mainNavigation: "Main navigation",
      mobileNavigation: "Mobile main navigation",
      viewCertifications: "View Certifications",
      changeLanguage: "Change language",
      mainActions: "Primary actions",
      socialLinks: "Social links",
      contactByEmail: "Contact by email",
      builtWith: "Built with Next.js.",
      viewCertificate: "View Certificate",
      backHome: "Back Home",
    },
    hero: {
      title: "Aaron Fabricio Santa Cruz",
      subtitle:
        "Founder & CEO at EntityX | Systems Engineer & Full Stack Developer, transforming business management through digital solutions.",
      lead: "I design and build web platforms, custom applications, and digital solutions focused on optimizing processes and scaling businesses.",
      downloadCv: "Download CV",
      contactMe: "Contact me",
      viewProjects: "View Projects",
      portraitAlt: "Portrait of Aaron",
    },
    sections: {
      experience: "Experience",
      projects: "Projects",
      about: "About me",
      stack: "Tool stack",
      certifications: "Certifications",
    },
    about: {
      paragraphs: [
        "Founder and CEO at EntityX | Software Engineer, Full Stack Developer.",
        "Founder and lead developer of EntityX, the ERP system and SaaS platform that optimizes operational and financial management for membership and subscription-based businesses, including gyms, academies, sports centers, and service companies.",
        "We digitize the full business operation: from revenue control and access verification to staff attendance tracking, payment records, and direct customer communication from the cloud.",
        "As a Software Engineer with more than 5 years of experience, I combine product vision, systems architecture, and Full Stack development to build scalable, secure digital solutions focused on solving real administration problems.",
        "I am passionate about Clean Code, robust architectures, and creating technology that transforms business management.",
      ],
      highlights: [
        "Founder and CEO",
        "EntityX",
        "Software Engineer",
        "Full Stack Developer",
        "ERP",
        "SaaS platform",
        "operational and financial management",
        "revenue control",
        "access verification",
        "cloud",
        "more than 5 years of experience",
        "systems architecture",
        "Full Stack development",
        "scalable, secure digital solutions",
        "Clean Code",
        "robust architectures",
        "transforms business management",
      ],
    },
    experience: [
      {
        company: "EntityX",
        role: "CEO-FOUNDER",
        employmentType: "Self-employed",
        timeframe: "Jan. 2026 - Present",
        duration: "7 months",
        location: "Bolivia · Hybrid",
        highlights: [
          "As founder of EntityX, I lead the strategic vision and technical development of a SaaS platform designed to transform operational and financial management for sports centers, academies, and membership-based businesses. My focus is to remove the inefficiencies of traditional management through a cloud-based solution that automates access control, simplifies revenue tracking, and improves direct communication with customers.",
        ],
        tech: [
          "Full Stack Development",
          "SaaS",
          "Cloud",
          "Software Architecture",
          "Automation",
        ],
      },
      {
        company: "World Data Inc.",
        role: "Software Developer",
        employmentType: "Full-time",
        timeframe: "Aug. 2023 - Present",
        duration: "3 years",
        location: "La Paz, Bolivia · Remote",
        highlights: [
          "Fullstack Developer (Angular / NestJS) with broad experience in interactive web applications, maps/GPS integration (Google Maps API), and client-server communication with Flutter modules. Specialist in designing solid backend architecture using NestJS and Yii2 for key projects such as REMBIZ and REMID, delivering scalable solutions across frontend and backend.",
        ],
        tech: [
          "Angular",
          "NestJS",
          "Google Maps API",
          "Flutter",
          "Yii2",
          "Responsive Web Design",
          "GitHub",
          "REMBIZ",
          "REMID",
        ],
      },
      {
        company: "DATEC LATAM",
        role: "Software Developer",
        employmentType: "Full-time",
        timeframe: "Jun. 2022 - Sep. 2022",
        duration: "4 months",
        location: "Bolivia",
        highlights: [
          "Provided specialized frontend consulting for the PROFLEX4 UI application, focused on automated teller machines (ATMs). I modernized and adjusted the user interface using HTML5, CSS3, JavaScript, and JSON data structures, improving the visual experience and interaction across the platform.",
        ],
        tech: [
          "JavaScript",
          "CSS3",
          "HTML5",
          "JSON",
          "Frontend",
          "UI Design",
          "Webpack",
          "REST",
        ],
      },
      {
        company: "GooSistem",
        role: "Software Developer",
        employmentType: "Self-employed",
        timeframe: "Oct. 2021 - Nov. 2021",
        duration: "2 months",
        location: "Bolivia · Hybrid",
        highlights: [
          "Designed and developed the corporate website for GooSistem, focused on strengthening its digital presence and strategically positioning its service catalog. I implemented an attractive, intuitive structure optimized for conversion and lead acquisition.",
        ],
        tech: ["JavaScript", "CSS3", "HTML5"],
      },
    ],
    projects: [
      {
        title: "EntityX - ERP System & Management SaaS Platform",
        image: "/img/projects/entityx-cover.jpeg",
        url: "https://entityx.tech/",
        description: `EntityX is a cloud platform designed to automate operational and financial management for sports centers, academies, and membership-based businesses.

It removes the pain points of traditional administration by optimizing operations in one place:

• Revenue control: Real-time recording of sales, collections, and subscriptions.
• Access verification: Instant validation of each customer's payment status.
• Flexible memberships: Fast creation of plans, promotions, and packages.
• Customer self-service: Web portal to check expiration dates and schedules.
• Team management: Attendance control and individual users for staff.

It helps businesses digitize administration, prevent revenue leakage, and deliver a modern experience from any device.`,
        tech: [
          "SaaS",
          "ERP",
          "Cloud",
          "Full Stack",
          "Management",
          "Next.js",
          "Architecture",
        ],
        status: "Public",
        type: "Full Stack",
      },
      {
        title: "Administrative application for the Belize sugar cane community",
        image: "/img/projects/administracion.png",
        url: "https://remcommunityadmin-x.wdi.net/",
        description:
          "Administrative system for centralizing user, member, group, and operational data for the Belize sugar cane community. It includes configuration modules for complementary applications, farmer and driver activity management, factory locations, GEOJSON file uploads, and push notifications delivered through the mobile app.",
        tech: ["Angular", "Sass", "Google Maps", "JavaScript"],
        status: "Private",
        type: "Frontend",
      },
      {
        title:
          "PWA for managing information and activities for Belize sugar community workers",
        image: "/img/projects/pwacom.png",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description:
          "PWA embedded inside the REMID mobile app through WebView and available from the Initiatives section. It manages information and activities for Belize sugar community workers, delivering a fast and consistent experience in both browser and mobile app contexts without requiring additional installation.",
        tech: ["Angular", "Sass", "Google Maps", "JavaScript", "PWA"],
        status: "Private",
        type: "Frontend",
      },
      {
        title: "Collaboration on a KYC application embedded in WebView",
        image: "/img/projects/kyc.jpeg",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description:
          "Collaborated on an embeddable KYC web application for digital identity verification inside REMID and other platforms. The solution securely captures personal information and official documents, with a smooth PWA experience for mobile environments and workflows focused on security, usability, and reliability.",
        tech: ["Angular", "Sass", "JavaScript", "PWA"],
        status: "Private",
        type: "Frontend",
      },
      {
        title: "Backend service integrations in the REMID application using Yii2",
        image: "/img/projects/remid.jpeg",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description: `Collaborated on REMID and REMBIZ backend development using Yii2, implementing robust services for:
- Integration with the embedded KYC application, enabling user identity verification.
- Subscription and payment management for REMID initiatives.
- Secure API exposure for consumption from the REMID mobile app and REMBIZ web platform.
These integrations enabled efficient data flow between web and mobile applications while ensuring consistency, security, and scalability.`,
        tech: ["Yii2", "PHP", "REST", "MySQL", "JavaScript"],
        status: "Public",
        type: "Backend",
      },
    ],
    stack: {
      categories: ["Frontend Technologies", "Backend Technologies", "Tools and DevOps"],
    },
    certificationsPage: {
      title: "Continuous Learning & Certifications",
      description:
        "A journey through the technical credentials and diplomas I have earned throughout my career in frontend development, software architecture, databases, and engineering best practices.",
    },
    certifications: [
      "Frontend Architect",
      "Web Accessibility",
      "Asynchronous JavaScript",
      "Database Fundamentals",
      "Bootstrap",
      "Data Handling with PHP",
      "Design for Programmers",
      "Frontend Developer (Practical)",
      "Frontend Development",
      "Git and GitHub",
      "HTML and CSS",
      "Introduction to Laravel 8",
      "Laravel Testing",
      "Materialize CSS",
      "NPM Course",
      "CSS Layout (Practical)",
      "CSS Preprocessors",
      "Design Systems",
      "Tailwind CSS (2020)",
      "Command Line Terminal",
    ],
  },
} as const;

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "es";
  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  return storedLanguage === "en" || storedLanguage === "es" ? storedLanguage : "es";
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      toggleLanguage: () =>
        setLanguageState((current) => (current === "es" ? "en" : "es")),
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
