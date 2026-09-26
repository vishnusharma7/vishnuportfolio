import { ArrowUpRight } from "lucide-react";
import SectionHead from "../SectionHead";

export default function About() {
  return <section className="section about" id="about">
    <SectionHead eyebrow="01 / About" title={<><span>Code with logic.</span><br/><i>Design with feeling.</i></>} desc="A frontend-focused developer who enjoys the space between engineering, design and motion."/>
    <div className="about-grid reveal">
      <div className="about-number">02<span>+</span><small>years building<br/>for the web</small></div>
      <div className="about-copy">
        <p className="lead">I like taking a blank screen and turning it into something people want to interact with.</p>
        <p>From product interfaces to animated landing pages, I work across React, JavaScript, CSS and modern frontend tooling. My approach is simple: understand the goal, obsess over the details, then make it feel effortless.</p>
        <div className="mini-stats"><div><b>12+</b><span>Projects</span></div><div><b>02+</b><span>Companies</span></div><div><b>∞</b><span>Curiosity</span></div></div>
      </div>
      <div className="about-stamp"><span>VISHNU<br/>SHARMA</span><ArrowUpRight/></div>
    </div>
  </section>;
}
