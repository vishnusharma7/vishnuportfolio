import { ArrowDownRight, Code2, MoveRight, Sparkles } from "lucide-react";

export default function Hero() {
  return <section className="hero" id="home">
    <div className="hero-grid">
      <div className="hero-left">
        <p className="hero-kicker"><span className="pulse"/> Available for selected projects · Kolkata / India</p>
        <h1 className="hero-title"><span className="line">Digital experiences</span><span className="line accent-line">with <em>character.</em></span></h1>
        <p className="hero-copy">I’m Vishnu Sharma — a frontend developer and creative web developer turning ideas into responsive, animated and memorable digital experiences.</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">Explore work <ArrowDownRight/></a>
          <a className="text-link" href="#contact">Start a project <MoveRight/></a>
        </div>
      </div>
      <div className="hero-art">
        <div className="hero-orb">
          <div className="orb-ring ring-a"/><div className="orb-ring ring-b"/>
          <div className="orb-core"><span>VS</span></div>
          <div className="orb-label l1">REACT</div><div className="orb-label l2">GSAP</div><div className="orb-label l3">UI/UX</div>
        </div>
        <div className="floating-card card-a"><Code2 size={18}/><span>Frontend<br/><b>Developer</b></span></div>
        <div className="floating-card card-b"><Sparkles size={18}/><span>Motion<br/><b>Driven</b></span></div>
      </div>
    </div>
    <div className="hero-bottom"><span>Scroll to explore</span><div className="scroll-line"/><span>01 / 08</span></div>
  </section>;
}
