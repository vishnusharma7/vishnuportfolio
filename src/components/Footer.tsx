import { AtSign, Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return <footer>
    <div className="footer-top">
      <a className="brand" href="#home"><span>VS</span><b>Vishnu Sharma</b></a>
      <div className="socials">
        <a href="https://github.com/vishnusharma7" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
        <a href="https://www.linkedin.com/in/vishnu-sharma/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
        <a href="https://www.instagram.com/vishnusharmashiyam" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a>
        <a href="mailto:vs510514@gmail.com" aria-label="Email"><AtSign/></a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Vishnu Sharma</span>
      <span>React · TypeScript · GSAP</span>
      <a href="#home">Back to top ↑</a>
    </div>
  </footer>;
}
