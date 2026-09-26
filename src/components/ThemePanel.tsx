import { Check, Moon, Palette, Sun, X } from "lucide-react";

export type ThemeMode = "dark" | "light";

const accents = [
  { id: "lime", label: "Lime", value: "#d9ff43" },
  { id: "cyan", label: "Cyan", value: "#4de7ff" },
  { id: "violet", label: "Violet", value: "#a78bfa" },
  { id: "coral", label: "Coral", value: "#ff7a6e" },
  { id: "pink", label: "Pink", value: "#ff6ea8" },
];

type Props = {
  open: boolean;
  mode: ThemeMode;
  accent: string;
  onClose: () => void;
  onMode: (mode: ThemeMode) => void;
  onAccent: (accent: string) => void;
};

export default function ThemePanel({ open, mode, accent, onClose, onMode, onAccent }: Props) {
  if (!open) return null;
  return (
    <aside className="theme-panel" aria-label="Appearance settings">
      <div className="theme-panel-head">
        <span><Palette size={15} /> Appearance</span>
        <button className="icon-btn" onClick={onClose} aria-label="Close appearance panel"><X size={17}/></button>
      </div>
      <p>Change the website mood and primary colour.</p>
      <div className="theme-label">Mode</div>
      <div className="mode-switch">
        <button className={mode === "dark" ? "selected" : ""} onClick={() => onMode("dark")}><Moon size={15}/> Dark</button>
        <button className={mode === "light" ? "selected" : ""} onClick={() => onMode("light")}><Sun size={15}/> Light</button>
      </div>
      <div className="theme-label">Primary colour</div>
      <div className="accent-grid">
        {accents.map((item) => (
          <button key={item.id} className={accent === item.id ? "accent selected" : "accent"} onClick={() => onAccent(item.id)} title={item.label}>
            <span style={{ background: item.value }} />
            {accent === item.id && <Check size={13}/>}
            <b>{item.label}</b>
          </button>
        ))}
      </div>
    </aside>
  );
}
