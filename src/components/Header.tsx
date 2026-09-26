import { ArrowUpRight, Menu, Palette, X } from "lucide-react";
import type { ThemeMode } from "./ThemePanel";
import ThemePanel from "./ThemePanel";

type Props = {
  menu: boolean;
  setMenu: (value: boolean) => void;
  themeOpen: boolean;
  setThemeOpen: (value: boolean) => void;
  mode: ThemeMode;
  accent: string;
  onMode: (mode: ThemeMode) => void;
  onAccent: (accent: string) => void;
};

export default function Header({ menu, setMenu, themeOpen, setThemeOpen, mode, accent, onMode, onAccent }: Props) {
  const links = ["about", "skills", "experience", "services", "projects", "contact"];
  return (
    <header className="nav-wrap">
      <nav className="nav">
        <a className="brand" href="#home" onClick={() => setMenu(false)}><span>VS</span><b>Vishnu Sharma</b></a>
        <div className={`nav-links ${menu ? "open" : ""}`}>
          {links.map((link) => <a key={link} href={`#${link}`} onClick={() => setMenu(false)}>{link}</a>)}
        </div>
        <div className="nav-actions">
          <button className="theme-trigger" onClick={() => setThemeOpen(!themeOpen)} aria-label="Open appearance settings"><Palette size={15}/><span>Theme</span></button>
          <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
        </div>
      </nav>
      <ThemePanel open={themeOpen} mode={mode} accent={accent} onClose={() => setThemeOpen(false)} onMode={onMode} onAccent={onAccent}/>
    </header>
  );
}
