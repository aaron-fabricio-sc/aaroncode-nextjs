import { type PropsWithChildren } from "react";

type SectionBlockProps = PropsWithChildren<{
  id: string;
  title: string;
}>;

export function SectionBlock({ id, title, children }: SectionBlockProps) {
  return (
    <section id={id} className="page-section" aria-labelledby={`${id}-title`}>
      <div className="section-inner">
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
