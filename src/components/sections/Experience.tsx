import SectionHead from "../SectionHead";

const jobs = [
  { year: "2023 — NOW", role: "Frontend Developer", company: "Codebell", text: "Designed the Codebell main-page experience with a clean visual system and seamless navigation. Also contributing to Worksetu, improving the frontend and user experience as the product evolves.", tags: ["React","UI/UX","Frontend"] },
  { year: "JAN 2023 — JUN 2023", role: "Web Developer", company: "All About IT Services", text: "Created animated interfaces for Tech Amico and developed a responsive matrimonial website experience with structured forms and user-focused flows.", tags: ["JavaScript","Animation","Responsive"] }
];

export default function Experience() {
  return <section className="section experience" id="experience">
    <SectionHead eyebrow="03 / Experience" title={<><span>A timeline of</span><br/><i>making things.</i></>}/>
    <div className="timeline reveal">{jobs.map(job => <article key={job.company}><span className="year">{job.year}</span><div className="timeline-dot"/><div><span className="role">{job.role}</span><h3>{job.company}</h3><p>{job.text}</p><div className="tags">{job.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}</div>
  </section>;
}
