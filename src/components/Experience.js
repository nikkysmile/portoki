import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <Reveal>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-6 text-center">PROFESSIONAL EXPERIENCE</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Spasial */}
          <div>
            <h2 className="text-2xl font-semibold">Web Developer — Spasial</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Specialized in full-stack development with strong cybersecurity 
              awareness. Developed public service and e-government applications 
              across various regions.
            </p>
          </div>

          {/* Freelance */}
          <div>
            <h2 className="text-2xl font-semibold">Freelance Web Developer</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Built and deployed web applications for clients, including e-commerce 
              sites, dashboards, and automation scripts. Improved performance and 
              reduced manual workloads through optimized, efficient solutions.
            </p>
          </div>

        </div>
        </div>
      </Reveal>
    </section>
  );
}
