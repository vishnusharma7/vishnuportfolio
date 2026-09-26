export default function Ticker() {
  const words = ["REACT", "CREATIVE CODE", "GSAP MOTION", "UI / UX", "RESPONSIVE WEB", "JAVASCRIPT"];
  return <div className="ticker"><div className="marquee-track">{[0,1,2,3].map(copy => words.map((x,i) => <span key={`${copy}-${i}`}>{x}<i>✦</i></span>))}</div></div>;
}
