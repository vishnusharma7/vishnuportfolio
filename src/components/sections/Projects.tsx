import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionHead from "../SectionHead";
import { projects } from "../../data/portfolio";

export default function Projects() {
  const [filter,setFilter] = useState("All");
  const filters = ["All","Frontend","Animation","UI/UX"];
  const shown = useMemo(() => filter === "All" ? projects : projects.filter(p => p.tags.includes(filter)), [filter]);
  return <section className="section projects" id="projects">
    <SectionHead eyebrow="05 / Selected work" title={<><span>A few things</span><br/><i>I’ve shipped.</i></>} desc="A mix of live client work and personal experiments. Open a project to visit the live experience."/>
    <div className="filter-row reveal">{filters.map(f=><button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{f}</button>)}</div>
    <div className="project-grid reveal">{shown.map((p,i)=><a className={`project ${p.featured || i===0 ? "featured":""}`} href={p.url} target="_blank" rel="noreferrer" key={p.title}>
      <div className="project-media"><img src={p.image} alt={p.title} loading={i>1?"lazy":"eager"}/><div className="project-overlay"><ExternalLink/></div></div>
      <div className="project-meta"><div><span>{p.client}</span><h3>{p.title}</h3><p>{p.description}</p></div><ArrowUpRight/></div>
      <div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
    </a>)}</div>
  </section>;
}
