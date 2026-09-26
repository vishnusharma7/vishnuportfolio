import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Ticker from "./components/sections/Ticker";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import type { ThemeMode } from "./components/ThemePanel";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const root = useRef<HTMLDivElement>(null);
  const [menu,setMenu] = useState(false);
  const [themeOpen,setThemeOpen] = useState(false);
  const [mode,setMode] = useState<ThemeMode>(() => (localStorage.getItem("vs-mode") as ThemeMode) || "dark");
  const [accent,setAccent] = useState(() => localStorage.getItem("vs-accent") || "lime");

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("vs-mode", mode);
  }, [mode]);

  useEffect(() => {
    document.documentElement.dataset.accent = accent;
    localStorage.setItem("vs-accent", accent);
  }, [accent]);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-kicker",{y:25,opacity:0,duration:.7,ease:"power3.out"});
        gsap.from(".hero-title .line",{y:95,opacity:0,stagger:.1,duration:1.05,ease:"power4.out",delay:.1});
        gsap.from(".hero-copy,.hero-actions",{y:25,opacity:0,duration:.75,stagger:.08,delay:.4});
        gsap.from(".hero-orb",{scale:.55,opacity:0,duration:1.25,ease:"expo.out",delay:.15});
        gsap.utils.toArray<HTMLElement>(".reveal").forEach(el => gsap.from(el,{y:55,opacity:0,duration:.85,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 84%",once:true}}));
        gsap.to(".orb-core",{rotate:360,duration:22,repeat:-1,ease:"none"});
        gsap.to(".marquee-track",{xPercent:-50,duration:28,repeat:-1,ease:"none"});
        gsap.to(".hero-orb",{y:-12,duration:3.5,repeat:-1,yoyo:true,ease:"sine.inOut"});
      });
      const cursor = document.querySelector<HTMLElement>(".cursor");
      const move = (e: MouseEvent) => { if(cursor) gsap.to(cursor,{x:e.clientX,y:e.clientY,duration:.12,overwrite:true}); };
      window.addEventListener("mousemove",move);
      return () => window.removeEventListener("mousemove",move);
    }, root);
    return () => ctx.revert();
  }, []);

  return <div ref={root} className="site">
    <div className="cursor" aria-hidden="true"/>
    <div className="noise" aria-hidden="true"/>
    <Header menu={menu} setMenu={setMenu} themeOpen={themeOpen} setThemeOpen={setThemeOpen} mode={mode} accent={accent} onMode={setMode} onAccent={setAccent}/>
    <main><Hero/><Ticker/><About/><Skills/><Experience/><Services/><Projects/><Contact/></main>
    <Footer/>
  </div>;
}

createRoot(document.getElementById("root")!).render(<App/>);
