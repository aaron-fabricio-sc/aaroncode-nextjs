import { SectionBlock } from "./section-block";
import { SECTION_IDS } from "@/lib/sections";

type CertificationItem = {
  title: string;
  image: string;
  url: string;

};

const certificationItems: CertificationItem[] = [
    //Español
  {
    title: "Arquitecto Frontend",
    image: "img/certs/arquitecto-frontend_page.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/",
   
  },
  {
    title: "Accesibilidad Web",
    image: "img/certs/diploma-accesibilidad-web.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/1802-accesibilidad-web/diploma/detalle/",
   
  },
  {
    title: "Asíncronismo en JavaScript",
    image: "img/certs/diploma-asincronismo-js.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/3175-asincronismo-js/diploma/detalle/",
   
  },
  {
    title: "Fundamentos de Bases de Datos",
    image: "img/certs/diploma-bd.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/1566-fundamentos-db/diploma/detalle/",
   
  },
   {
    title: "Bootstrap",
    image: "img/certs/diploma-bootstrap.jpg",
    url: "",
   
  },
   {
    title: "Manejo de Datos con PHP",
    image: "img/certs/diploma-datos-php.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/2032-datos-php/diploma/detalle/",
   
  },
   {
    title: "Diseño para Programadores",
    image: "img/certs/diploma-diseno-programadores.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/1906-diseno-programadores/diploma/detalle/",
   
  },
  {
    title: "Frontend Developer (Práctico)",
    image: "img/certs/diploma-frontend-developer-practico.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/2477-frontend-developer-practico/diploma/detalle/",
   
  },
  {
    title: "Desarrollo Frontend",
    image: "img/certs/diploma-frontend-developer.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/2467-frontend-developer/diploma/detalle/",
   
  },
  {
    title: "Git y GitHub",
    image: "img/certs/diploma-git-github.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/1557-git-github/diploma/detalle/",
   
  },
  {
    title: "HTML y CSS",
    image: "img/certs/diploma-html-css.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/2008-html-css-2020/diploma/detalle/",
   
  },
   {
    title: "Introducción a Laravel 8",
    image: "img/certs/diploma-intro-laravel.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/2182-intro-laravel/diploma/detalle/",
   
  },
  {
    title: "Laravel Testing",
    image: "img/certs/diploma-laravel-testing.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/2186-laravel-testing/diploma/detalle/",
  },
     {
    title: "Materialize CSS",
    image: "img/certs/diploma-materialize.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/1805-materialize/diploma/detalle/",
   
  },
  {
    title: "Curso de NPM",
    image: "img/certs/diploma-npm-js.jpg",
    url: "",
  },
   {
    title: "Maquetación con CSS (Práctico)",
    image: "img/certs/diploma-practico-css.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/1744-practico-css/diploma/detalle/",
  },

   {
    title: "Preprocesadores CSS",
    image: "img/certs/diploma-preprocesadores.jpg",
    url: "",
  },

   {
    title: "Sistemas de Diseño",
    image: "img/certs/diploma-sistemas-diseno.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/1420-sistemas-diseno/diploma/detalle/",
  },
   {
    title: "Tailwind CSS (2020)",
    image: "img/certs/diploma-tailwind-css-2020.jpg",
    url: "https://platzi.com/p/aaron-fabricio-santa-cruz-vald/curso/1822-tailwind-css-2020/diploma/detalle/",
  },

   {
    title: "Terminal de Comandos",
    image: "img/certs/diploma-terminal.jpg",
    url: "",
  },
];

export function CertificationsSection() {
  return (
    <SectionBlock id={SECTION_IDS.certifications} title="Certificaciones">
      <div className="certifications-list">
        {certificationItems.map((cert) => (
          <article key={cert.title} className="certification-card">
            <a
              href={cert.url}
              target="_blank"
              className="certification-image-wrapper"
            >
              <img
                className="certification-image"
                src={cert.image}
                alt={cert.title}
              />
              <div className="certification-overlay">
                <span>Ver Certificado</span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}
