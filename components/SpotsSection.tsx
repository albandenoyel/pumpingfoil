import React from 'react';

const SpotsSection: React.FC = () => {
  return (
    <section id="spots" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-4 uppercase tracking-tighter">Global Pump Network</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Explore the community-curated map of the best dock starting and pumping locations around the world.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-blue-100 aspect-[16/10] md:aspect-[21/9] min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1MKE0DkN8-Qgfu1haEmj1Cp-5UGeSTC0"
              width="100%"
              height="100%"
              className="border-0"
              title="Pump Foil Spots Map"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center gap-6 text-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScoBWZayTg0I_BBVrEmTKAtkTTIpE9lIIPDxPBfq9Z-q6HzaA/viewform?usp=header" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-5 bg-[#001f3f] hover:bg-cyan-500 text-white hover:text-blue-950 font-black rounded-2xl transition-all uppercase tracking-widest text-xs shadow-xl shadow-blue-900/20"
          >
            Submit a spot
          </a>
          <a 
            href="https://www.google.com/maps/d/viewer?mid=1MKE0DkN8-Qgfu1haEmj1Cp-5UGeSTC0&hl=en&usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
          >
            Open in Full Google Maps
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpotsSection;