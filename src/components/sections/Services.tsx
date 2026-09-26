import { ArrowUpRight } from "lucide-react";
import SectionHead from "../SectionHead";
import { services } from "../../data/portfolio";

export default function Services() {
  return <section className="section services" id="services">
    <SectionHead eyebrow="04 / What I do" title={<><span>From first frame</span><br/><i>to final polish.</i> </>}/>
    <div className="service-grid reveal">{services.map(([n,t,d])=><article className="service-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight/></article>)}</div>
  </section>;
}
