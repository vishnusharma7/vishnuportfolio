import SectionHead from "../SectionHead";
import { skills } from "../../data/portfolio";

export default function Skills() {
  return <section className="section skills" id="skills">
    <SectionHead eyebrow="02 / Toolkit" title={<><span>The tools behind</span><br/><i>the pixels.</i></>} desc="A practical stack for building polished, performant interfaces."/>
    <div className="skill-cloud reveal">{skills.map(([name,img],i) => <article className="skill-card" key={name}><span className="skill-index">{String(i+1).padStart(2,"0")}</span><div className="skill-icon"><img src={img} alt={name} onError={(e) => { e.currentTarget.style.display="none"; }}/></div><b>{name}</b><span>Frontend</span></article>)}</div>
  </section>;
}
