import Image from "next/image";
import { SECTION_IDS } from "@/lib/sections";
import { SectionBlock } from "./section-block";

type StackItem = {
  label: string;
  icon: string;
 
};

type StackCategory = {
  title: string;
  items: StackItem[];
};

const stackCategories: StackCategory[] = [
  {
    title: "Tecnologías Frontend",
    items: [
      {
        label: "HTML5",
        icon: "/img/imgoptimizadas/front/html.png"
      },
      {
        label: "CSS",
        icon: "/img/imgoptimizadas/front/css.png"
      },{
        label: "JavaScript",
        icon: "/img/imgoptimizadas/front/js.png"
      },
      {
        label: "Angular",
        icon: "/img/imgoptimizadas/front/angular.png"
      },
      {
        label: "React",
        icon: "/img/imgoptimizadas/front/react.png"
      },
      {
        label: "Next.js",
        icon: "/img/imgoptimizadas/front/nextjsl.png"
      },
      {
        label: "Sass",
        icon: "/img/imgoptimizadas/front/sass.png"
      },
       {
        label: "Stylus.js",
        icon: "/img/imgoptimizadas/front/stylus.png"
      },
      {
        label: "Materialize",
        icon: "/img/imgoptimizadas/front/materialize.svg"
      },
       {
        label: "Less",
        icon: "/img/imgoptimizadas/front/less.png"
      },
      {
        label: "Tailwind CSS",
        icon: "/img/imgoptimizadas/front/tailwind.svg"
      },
    ],
  },
  {
    title: "Tecnologías Backend",
    items: [
      {
        label: "PHP",
        icon: "/img/imgoptimizadas/back/php.png"
      },
      {
        label: "Node.js",
        icon: "/img/imgoptimizadas/back/nodejs.png"
      },{
        label: "MySQL",
        icon: "/img/imgoptimizadas/back/mysql.png"
      },{
        label: "MongoDB",
        icon: "/img/imgoptimizadas/back/mongodb-logo.png"
      },{
        label: "Laravel",
        icon: "/img/imgoptimizadas/back/laravel.png"
      },
      {
        label: "Express.js",
        icon: "/img/imgoptimizadas/back/express.png"
      },
      {
        label: "Yii2",
        icon: "/img/imgoptimizadas/back/yii2.png"
      }
    
    ],
  },
  {
    title: "Herramientas y DevOps",
    items: [
      {
        label: "Babel",
        icon: "/img/imgoptimizadas/tools/babel-logo.png"
      },
       {
        label: "Git",
        icon: "/img/imgoptimizadas/tools/git.png"
      }, {
        label: "GitHub",
        icon: "/img/imgoptimizadas/tools/Octocat.jpg"
      }, {
        label: "Webpack",
        icon: "/img/imgoptimizadas/tools/webpack.png"
      },
      {
        label: "WordPress",
        icon: "/img/imgoptimizadas/tools/wordpress.png"
      },
       {
        label: "Bitbucket",
        icon: "/img/imgoptimizadas/tools/bitbucket.png"
      },

     
    ],
  },
];

export function StackSection() {
  return (
    <SectionBlock id={SECTION_IDS.stack} title="Stack de herramientas">
      <div className="stack-grid">
        {stackCategories.map((category) => (
          <div key={category.title} className="stack-category">
            <h3 className="stack-category__title">{category.title}</h3>
            <div className="stack-items">
              {category.items.map((item) => (
                <article key={item.label} className="stack-item">
                  <div className="stack-item__icon">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                  </div>
                  <div className="stack-item__body">
                    <span className="stack-item__label">{item.label}</span>
                    
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
