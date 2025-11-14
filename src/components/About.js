import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <Reveal>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Profile</h2>

          <p className="text-white/70 leading-relaxed text-lg">
           As a professional IT developer, I possess skills in front-end and back-end development, as well as cybersecurity. I have developed various public service and government governance applications in various regions.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
