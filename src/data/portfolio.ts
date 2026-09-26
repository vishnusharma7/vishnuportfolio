export type Project = {
  title: string;
  client: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  featured?: boolean;
};

const asset = (name: string) => `/assets/img/${name}`;

export const projects: Project[] = [
  { title: "Codebell", client: "Codebell", description: "QR-based video intercom experience with a clean, intuitive product interface.", image: asset("codebell-main-img.png"), url: "https://codebell.io/", tags: ["Frontend", "UI/UX", "Animation"], featured: true },
  { title: "Worksetu", client: "Worksetu", description: "AI-integrated chat application experience built around modern interaction patterns.", image: asset("worksetu.png"), url: "https://vishnusharma7.github.io/intro-page/", tags: ["Frontend", "UI/UX", "AI UI"], featured: true },
  { title: "Tech Amico", client: "All About IT Services", description: "Animated IT-services website with responsive sections and polished visual storytelling.", image: asset("techamico.png"), url: "https://techamico.in/", tags: ["Animation", "UI/UX", "Frontend"] },
  { title: "MicroHR", client: "MicroHR", description: "HR product website focused on simple communication and approachable business UI.", image: asset("microhr.png"), url: "https://microhr.co/", tags: ["Frontend", "UI/UX"] },
  { title: "Agencify", client: "TechCreare Software", description: "IT services and consulting website with a modern agency presentation.", image: asset("agencify.png"), url: "https://agencify-one.vercel.app/", tags: ["Frontend", "UI/UX"] },
  { title: "Divine JS", client: "Open-source concept", description: "A lightweight JavaScript library concept with an interactive documentation-style presentation.", image: asset("divinejs.png"), url: "https://vishnusharma7.github.io/Divine-Script-Library/", tags: ["Frontend", "JavaScript"] },
  { title: "Disney Speedstorm", client: "Concept project", description: "A high-energy animated gaming landing page experiment focused on motion and visual impact.", image: asset("disneyspeed.jpg"), url: "https://disney-speedstorm.netlify.app/", tags: ["Animation", "UI/UX"] },
  { title: "ChatGPT Concept", client: "Concept project", description: "A custom ChatGPT-inspired interface exploring conversational product UI.", image: asset("chatgpt.jpg"), url: "https://client-my-5sbaph5w0-vishnusharma7.vercel.app/", tags: ["Frontend", "UI/UX"] },
  { title: "Weather App", client: "Personal project", description: "Modern weather interface with responsive visual hierarchy.", image: asset("weather.jpg"), url: "https://vishnusharma7.github.io/Weather-App/", tags: ["Frontend", "JavaScript"] },
  { title: "E-commerce UI", client: "Personal project", description: "Online marketplace interface experiment with product-first layouts.", image: asset("ecommerce.jpg"), url: "https://631face4a25d58096e70c171--comfy-sprinkles-07500f.netlify.app/", tags: ["Frontend", "UI/UX"] }
];

export const skills = [
  ["HTML", asset("html-1.svg")],
  ["CSS", asset("css-3.svg")],
  ["JavaScript", asset("logo-javascript.svg")],
  ["React", asset("react-2.svg")],
  ["Git", asset("git-icon.svg")],
  ["Figma", asset("figma-1.svg")],
  ["Canva", asset("canva-1.svg")],
  ["Adobe XD", asset("adobe-xd-1.svg")],
  ["Photoshop", asset("adobe-photoshop-2.svg")],
  ["Sketch", asset("sketch-2.svg")]
];

export const services = [
  ["01", "UI / UX Design", "Interfaces that feel clear, intentional and easy to use."],
  ["02", "Frontend Development", "Responsive React experiences with clean component architecture."],
  ["03", "Motion & Interaction", "GSAP-powered motion that gives products personality without sacrificing usability."]
];
