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
      title: "Aaron Fabricio Santa Cruz Valdez",
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
        "Founder & CEO en EntityX | Software Engineer & Full Stack Developer",
        "Como Ingeniero de Sistemas con más de 5 años de experiencia, me especializo en el desarrollo Full Stack y el diseño de arquitecturas de software escalables, robustas y seguras. A lo largo de mi trayectoria he liderado e implementado soluciones web complejas, integrando tecnologías clave en el ecosistema de Angular, NestJS, Yii2 y Laravel, así como integraciones avanzadas de geolocalización y APIs de terceros. Mi enfoque combina principios de Clean Code, buenas prácticas de desarrollo y una fuerte visión de producto para resolver problemas reales de negocio de principio a fin.",
        "Esta experiencia técnica y estratégica me llevó a crear EntityX, una plataforma SaaS y ERP orientada a la digitalización de negocios basados en membresías y suscripciones (gimnasios, centros deportivos y academias). Como fundador y arquitecto principal, impulsé una solución integral en la nube que automatiza el control de accesos, el registro de ingresos, la gestión operativa y la comunicación directa con los clientes.",
        "Me apasiona construir tecnología de alto impacto, transformar procesos complejos en experiencias fluidas y colaborar en proyectos desafiantes que demanden innovación, rendimiento y arquitectura de primer nivel.",
      ],
      highlights: [
        "Founder & CEO",
        "EntityX",
        "Software Engineer",
        "Full Stack Developer",
        "Ingeniero de Sistemas",
        "más de 5 años de experiencia",
        "desarrollo Full Stack",
        "arquitecturas de software escalables, robustas y seguras",
        "Angular",
        "NestJS",
        "Yii2",
        "Laravel",
        "geolocalización",
        "APIs de terceros",
        "Clean Code",
        "buenas prácticas de desarrollo",
        "visión de producto",
        "plataforma SaaS y ERP",
        "digitalización de negocios",
        "fundador y arquitecto principal",
        "solución integral en la nube",
        "control de accesos",
        "registro de ingresos",
        "tecnología de alto impacto",
        "arquitectura de primer nivel",
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
          "Desarrollador Fullstack (Angular / NestJS) enfocado en el desarrollo de aplicaciones web interactivas y arquitecturas escalables. Experiencia en la construcción e integración de backends con NestJS, Yii2 y Laravel para proyectos clave como REMBIZ y REMID (incluyendo la integración de diversos proyectos web dentro de REMID). Trabajo tambien con sistemas de geolocalización y mapas, implementando Google Maps API, Leaflet y ArcGIS Online, además de la comunicación cliente-servidor y la integración de servicios web.",
        ],
        tech: [
          "Angular",
          "NestJS",
          "Google Maps API",
          "Laravel",
          "Yii2",
          "REST API",
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
          "Panel Administrativo del Ecosistema BSI & Comunidad Azucarera de Belice",
        image: "/img/projects/administracion.png",
        url: "https://remcommunityadmin-x.wdi.net/",
        description: `Plataforma central de administración para el ecosistema digital de Belize Sugar Industries Limited (BSI) y su red agrícola y financiera en Belice. Actúa como el núcleo operativo para gestionar y configurar múltiples plataformas conectadas, incluyendo Community Sugar Cane PWA, Microcredits, WalletOn y Marketplace.

Su alcance funcional y técnico incluye:
• Gestión de Ecosistema & Usuarios: Control centralizado de granjeros, conductores, agrupaciones, fábricas y configuraciones globales para las aplicaciones móviles y web.
• Fintech & Blockchain: Gestión de solicitudes de créditos y microcréditos en integración con instituciones financieras de Belice, junto con el monitoreo de transacciones de tokens en blockchain.
• Geolocalización & GIS Avanzado: Integración de cartografía interactiva mediante ArcGIS y Google Maps API para la carga de capas cartográficas (GeoJSON), ubicación de fábricas y trazabilidad agrícola.
• Comunicación en Tiempo Real: Motor de envío de notificaciones push segmentadas hacia todo el ecosistema de aplicaciones móviles.`,
        tech: [
          "Angular",
          "Sass",
          "ArcGIS",
          "Google Maps API",
          "Blockchain",
          "JavaScript",
        ],
        status: "Privado",
        type: "Full Stack",
      },
      {
        title: "Community Sugar Cane PWA - Portal Operativo y Financiero BSI",
        image: "/img/projects/pwacom.png",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description: `Portal progresivo multi-rol (PWA) que conecta a todos los actores clave de la cadena de suministro de Belize Sugar Industries Limited (BSI). Integrado de forma nativa en la app móvil REMID mediante WebView, funciona como el punto de acceso centralizado para granjeros, grupos de cosecha (harvestings), conductores, entidades financieras y diversos roles estratégicos del sector azucarero en Belice.

La arquitectura del sistema adapta dinámicamente las funcionalidades, herramientas y la información visible según el perfil y nivel de acceso de cada usuario conectado. Mientras que los agricultores y grupos de cosecha gestionan su producción y logística en campo, los conductores trazan y reportan las entregas de caña a las fábricas, y las instituciones financieras validan datos clave para la tramitación de microcréditos agrícolas, los demás roles especializados del ecosistema acceden igualmente a herramientas operativas y paneles personalizados para desempeñar su labor en la cadena productiva.`,
        tech: [
          "Angular",
          "Sass",
          "PWA",
          "WebView",
          "Google Maps API",
          "JavaScript",
        ],
        status: "Privado",
        type: "Full Stack",
      },
      {
        title: "Microcredit BSI - Billetera Móvil & PWA Financiera",
        image: "/img/projects/microcredit.png",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description: `Aplicación web progresiva (PWA) financiera vinculada directamente al Panel Administrativo del Ecosistema BSI y embebida en la app móvil REMID mediante arquitectura WebView. Opera como una billetera digital interactiva diseñada para la gestión financiera y el control transaccional dentro de la comunidad azucarera de Belice.

Su arquitectura multi-rol permite a los usuarios monitorear en tiempo real su balance, historial de transacciones y estado de cuenta detallado. Dependiendo del perfil conectado, habilita capacidades personalizadas para realizar cobros y pagos, o ejecutar pagos operativos directos. Al momento de pagar, el sistema ofrece flexibilidad financiera dual: utilizar el balance disponible en la billetera o solicitar un microcrédito agrícola inmediato, garantizando trazabilidad total y transparencia en cada movimiento.`,
        tech: ["Angular", "Sass", "PWA", "WebView", "Fintech", "JavaScript"],
        status: "Privado",
        type: "Frontend",
      },
      {
        title: "WalletOn BSI - PWA de Solicitud de Préstamos & Subvenciones",
        image: "/img/projects/walleton.png",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description: `Aplicación web progresiva (PWA) de gestión crediticia embebida directamente en la app móvil REMID mediante arquitectura WebView, orientada a la tramitación financiera y el apoyo económico en la comunidad azucarera de Belice.

La plataforma optimiza el proceso de solicitud crediticia ante instituciones financieras del país mediante formularios dinámicos e intuitivos, donde los agricultores y usuarios del ecosistema registran y validan su información de forma estructurada. El sistema ofrece una modalidad dual de financiamiento adaptada a las necesidades operativas del cliente: tramitación de préstamos tradicionales (Loans) con entidades bancarias o postulación a subvenciones y ayudas económicas agrícolas (Grants), impulsando el desarrollo productivo y la inclusión financiera del sector.`,
        tech: ["Angular", "Sass", "PWA", "WebView", "Fintech", "JavaScript"],
        status: "Privado",
        type: "Frontend",
      },
      {
        title:
          "Sistema KYC Fintech - Verificación de Identidad y Seguridad Digital",
        image: "/img/projects/kyc.jpeg",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description: `Solución PWA de verificación digital de identidad (Know Your Customer) embebida estratégicamente dentro de la aplicación móvil REMID y plataformas corporativas asociadas mediante WebView. Diseñada para agilizar el onboarding digital, prevenir el fraude y garantizar el cumplimiento normativo en servicios financieros.

El sistema permite a los usuarios registrar su información personal y cargar documentos oficiales de forma encriptada y segura. Gracias a su arquitectura progresiva y adaptativa, ofrece una experiencia ágil, robusta y con sensación 100% nativa en entornos móviles.`,
        tech: [
          "Angular",
          "Sass",
          "PWA",
          "WebView",
          "Fintech Security",
          "JavaScript",
        ],
        status: "Privado",
        type: "Frontend",
      },
      {
        title: "Motor Backend & Servicios Core para REMID / REMBIZ (Yii2)",
        image: "/img/projects/remid.jpeg",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description: `Colaboración estratégica en el desarrollo y mantenimiento de la arquitectura backend transaccional y el ecosistema de APIs REST para las plataformas corporativas REMID y REMBIZ utilizando el framework Yii2 y PHP.

El trabajo técnico se centró en la creación de nuevos servicios core, el diseño de endpoints robustos y el desarrollo de funcionalidades avanzadas para optimizar la comunicación cliente-servidor con aplicaciones móviles y portales web. Asimismo, se implementaron mejores prácticas en estructuración de datos y optimización de bases de datos MySQL, garantizando flujos de información seguros, escalables y de alta disponibilidad en todo el ecosistema.`,
        tech: [
          "Yii2",
          "PHP",
          "REST API",
          "MySQL",
          "Backend Architecture",
          "Fintech",
        ],
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
      title: "Aaron Fabricio Santa Cruz Valdez",
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
        "Founder & CEO at EntityX | Software Engineer & Full Stack Developer",
        "As a Systems Engineer with over 5 years of experience, I specialize in Full Stack development and designing scalable, robust, and secure software architectures. Throughout my career, I have engineered complex web applications using Angular, NestJS, Yii2, and Laravel, along with advanced integrations including geolocation and third-party APIs. My approach combines Clean Code principles, software engineering best practices, and strong product vision to solve real-world business challenges end-to-end.",
        "This technical and strategic background drove me to create EntityX, a SaaS ERP platform built to digitize membership and subscription-based businesses (gyms, sports centers, and academies). As founder and lead architect, I built a cloud-based solution that automates access control, revenue tracking, operational management, and customer engagement.",
        "I am passionate about building high-impact technology, streamlining complex workflows into seamless user experiences, and contributing to ambitious projects that require innovation, top performance, and modern architecture.",
      ],
      highlights: [
        "Founder & CEO",
        "EntityX",
        "Software Engineer",
        "Full Stack Developer",
        "Systems Engineer",
        "over 5 years of experience",
        "Full Stack development",
        "scalable, robust, and secure software architectures",
        "Angular",
        "NestJS",
        "Yii2",
        "Laravel",
        "geolocation",
        "third-party APIs",
        "Clean Code principles",
        "software engineering best practices",
        "product vision",
        "SaaS ERP platform",
        "digitize membership and subscription-based businesses",
        "founder and lead architect",
        "cloud-based solution",
        "access control",
        "revenue tracking",
        "high-impact technology",
        "modern architecture",
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
          "Fullstack Developer (Angular / NestJS) focused on building interactive web applications and scalable architectures. Experience in constructing and integrating backends with NestJS, Yii2, and Laravel for key projects such as REMBIZ and REMID (including the integration of various web projects within REMID). I also work with geolocation and mapping systems, implementing Google Maps API, Leaflet, and ArcGIS Online, optimizing client-server communication and web service integrations.",
        ],
        tech: [
          "Angular",
          "NestJS",
          "Google Maps API",
          "Laravel",
          "Yii2",
          "REST API",
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
        title: "BSI Ecosystem & Belize Sugar Cane Community Admin Panel",
        image: "/img/projects/administracion.png",
        url: "https://remcommunityadmin-x.wdi.net/",
        description: `Core management platform powering the digital ecosystem for Belize Sugar Industries Limited (BSI) and its agricultural and financial network in Belize. It serves as the central operational hub to manage and configure multiple connected platforms, including the Community Sugar Cane PWA, Microcredits, WalletOn, and Marketplace.

Its technical and operational scope features:
• Ecosystem & User Management: Centralized administration of farmers, drivers, harvesting groups, factories, and global configurations across web and mobile apps.
• Fintech & Blockchain: Management of credit and microcredit applications integrated with Belizean financial institutions, alongside monitoring of blockchain token transactions.
• Advanced GIS & Mapping: Interactive mapping integration using ArcGIS and Google Maps API for GeoJSON layer processing, factory mapping, and agricultural traceability.
• Real-Time Communication: Centralized engine for dispatching targeted push notifications across the entire mobile application ecosystem.`,
        tech: [
          "Angular",
          "Sass",
          "ArcGIS",
          "Google Maps API",
          "Blockchain",
          "JavaScript",
        ],
        status: "Private",
        type: "Full Stack",
      },
      {
        title: "Community Sugar Cane PWA - BSI Operational & Financial Portal",
        image: "/img/projects/pwacom.png",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description: `Progressive multi-role portal (PWA) connecting all key stakeholders across the Belize Sugar Industries Limited (BSI) supply chain. Natively embedded within the REMID mobile app via WebView, it serves as the centralized access point for farmers, harvesting groups, drivers, financial institutions, and various other strategic roles across Belize's sugar sector.

The platform's architecture dynamically tailors available functionalities, tools, and visible data based on the connected user's specific profile and access level. While farmers and harvesting groups manage field production and logistics, drivers track and report sugar cane deliveries to factories, and financial institutions validate essential data for agricultural microloan processing, other specialized roles within the ecosystem likewise access customized operational workspaces and metrics tailored to their responsibilities in the production chain.`,
        tech: [
          "Angular",
          "Sass",
          "PWA",
          "WebView",
          "Google Maps API",
          "JavaScript",
        ],
        status: "Private",
        type: "Full Stack",
      },
      {
        title: "Microcredit BSI - Mobile Wallet & Financial PWA",
        image: "/img/projects/microcredit.png",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description: `Progressive Web Application (PWA) financial solution directly integrated with the BSI Ecosystem Admin Panel and natively embedded within the REMID mobile app via WebView architecture. It operates as an interactive digital wallet designed for transaction control and financial management across the Belize sugar community.

Its multi-role architecture enables users to monitor their real-time financial balance, account statements, and comprehensive activity history. Depending on the assigned profile, it provides customized capabilities to execute operational collections and payments, or perform direct payments. When completing transactions, the platform offers dual funding flexibility: utilizing available wallet balance or requesting an instant agricultural microloan, ensuring transparency and complete traceability for every movement.`,
        tech: ["Angular", "Sass", "PWA", "WebView", "Fintech", "JavaScript"],
        status: "Private",
        type: "Frontend",
      },
      {
        title: "WalletOn BSI - Agricultural Loans & Grants PWA",
        image: "/img/projects/walleton.png",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description: `Progressive Web Application (PWA) credit management solution natively embedded within the REMID mobile app via WebView architecture, designed to streamline financial applications and economic support across the Belize sugar community.

The platform optimizes the credit application workflow with financial institutions across Belize through dynamic, user-friendly digital forms where farmers and ecosystem members submit and validate structured financial information. The system features a dual funding framework tailored to operational needs: processing standard credit applications (Loans) with banking institutions or applying for agricultural financial aid and non-repayable economic support (Grants), fostering productive development and financial inclusion across the sector.`,
        tech: ["Angular", "Sass", "PWA", "WebView", "Fintech", "JavaScript"],
        status: "Private",
        type: "Frontend",
      },
      {
        title: "Fintech KYC System - Digital Identity Verification & Security",
        image: "/img/projects/kyc.jpeg",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description: `Progressive Web Application (PWA) solution for Know Your Customer (KYC) digital identity verification, strategically embedded within the REMID mobile app and associated corporate platforms via WebView. Designed to streamline digital onboarding, prevent fraud, and ensure regulatory compliance across financial services.

The system enables users to securely submit personal information and upload official identification documents with robust encryption. Built on a progressive and adaptive architecture, it delivers a fast, secure, and 100% native-feeling experience across mobile environments.`,
        tech: [
          "Angular",
          "Sass",
          "PWA",
          "WebView",
          "Fintech Security",
          "JavaScript",
        ],
        status: "Private",
        type: "Frontend",
      },
      {
        title: "Core Backend Engine & API Services for REMID / REMBIZ (Yii2)",
        image: "/img/projects/remid.jpeg",
        url: "https://play.google.com/store/apps/details?id=com.wdtwalleton.rem",
        description: `Strategic collaboration on the development and maintenance of the transactional backend architecture and REST API ecosystem powering the REMID and REMBIZ corporate platforms using Yii2 and PHP.

The technical scope focused on engineering new core backend services, designing secure RESTful endpoints, and developing advanced functionalities to connect mobile applications and web portals seamlessly. Additionally, it involved implementing best practices in data structuring and MySQL database optimization to ensure high performance, scalability, and reliable client-server communication across the entire ecosystem.`,
        tech: [
          "Yii2",
          "PHP",
          "REST API",
          "MySQL",
          "Backend Architecture",
          "Fintech",
        ],
        status: "Public",
        type: "Backend",
      },
    ],
    stack: {
      categories: [
        "Frontend Technologies",
        "Backend Technologies",
        "Tools and DevOps",
      ],
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
  return storedLanguage === "en" || storedLanguage === "es"
    ? storedLanguage
    : "es";
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
