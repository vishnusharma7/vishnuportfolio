import { Instagram, Mail, Phone, Send } from "lucide-react";
import SectionHead from "../SectionHead";

export default function Contact() {
  return <section className="contact" id="contact">
    <div className="contact-inner">
      <div className="contact-copy reveal"><SectionHead eyebrow="06 / Contact" title={<><span>Have an idea?</span><br/><i>Let’s make it real.</i></>} desc="Tell me what you’re building, what you want it to feel like, and where you want to take it."/>
        <div className="contact-links"><a href="mailto:vs510514@gmail.com"><Mail/>vs510514@gmail.com</a><a href="tel:+918145764555"><Phone/>+91 81457 64555</a><a href="https://www.instagram.com/vishnusharmashiyam" target="_blank" rel="noreferrer"><Instagram/>@vishnusharmashiyam</a></div>
      </div>
      <form className="contact-form reveal" onSubmit={e=>{e.preventDefault(); const form=e.currentTarget; const name=(form.elements.namedItem("name") as HTMLInputElement).value; const email=(form.elements.namedItem("email") as HTMLInputElement).value; const message=(form.elements.namedItem("message") as HTMLTextAreaElement).value; window.location.href=`mailto:vs510514@gmail.com?subject=${encodeURIComponent("Portfolio enquiry from "+name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;}}>
        <label>Your name<input name="name" required placeholder="Your name"/></label>
        <label>Your email<input name="email" required type="email" placeholder="you@example.com"/></label>
        <label>Tell me about it<textarea name="message" required rows={5} placeholder="A website, product, animation..."/></label>
        <button className="button primary" type="submit">Send enquiry <Send/></button>
      </form>
    </div>
  </section>;
}
