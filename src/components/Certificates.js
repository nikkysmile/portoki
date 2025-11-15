export default function Certificates() {
  return (
    <section id="certificates" className="w-full py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12 text-center text-black">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* CATEGORY 1 */}
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-indigo-200 to-transparent shadow-xl">
            <div className="rounded-3xl bg-white backdrop-blur-md p-8 border border-gray-200 relative">
              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-b from-white/60 to-transparent opacity-60"></div>

              <h3 className="text-xl font-semibold mb-4 text-black">
                Web Development & Programming
              </h3>

              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li>Responsive Web Design — freeCodeCamp (Oct 2024)</li>
                <li>Front-End Web Dev — Coursera / Meta (Mar 2025)</li>
                <li>Back-End Development & APIs — freeCodeCamp (May 2025)</li>
                <li>Full-Stack Web Dev — Coursera / HKUST (Jun 2025)</li>
              </ul>
            </div>
          </div>

          {/* CATEGORY 2 */}
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-purple-200 to-transparent shadow-xl">
            <div className="rounded-3xl bg-white backdrop-blur-md p-8 border border-gray-200 relative">
              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-t from-white/60 to-transparent opacity-60"></div>

              <h3 className="text-xl font-semibold mb-4 text-black">
                Programming & Cloud Computing
              </h3>

              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li>
                  Memulai Pemrograman Python — Dicoding  
                  <span className="block text-gray-400 text-sm">
                    ID: NVP75GN8WXR0 · Jan 2025
                  </span>
                </li>

                <li>
                  Cloud Practitioner Essentials — Dicoding  
                  <span className="block text-gray-400 text-sm">
                    ID: 1OP82D302PQK · Jan 2025
                  </span>
                </li>

                <li>Microsoft Azure AI Fundamentals — Microsoft (May 2025)</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
