import type { ReactNode } from "react";

type Props = { eyebrow: string; title: ReactNode; desc?: string };

export default function SectionHead({ eyebrow, title, desc }: Props) {
  return (
    <div className="section-head reveal">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {desc && <p>{desc}</p>}
    </div>
  );
}
