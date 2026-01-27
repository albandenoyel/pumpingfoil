import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-cyan-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-blue-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-cyan-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Field Intelligence</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Updates</span>
            </h2>
            <p className="text-blue-100/60 text-lg leading-relaxed">
              Real-time insights and session highlights from the community.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/albandenoyel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 transition-all flex items-center gap-3 font-black text-xs uppercase tracking-widest group"
            >
              <svg className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @albandenoyel
            </a>
          </div>
        </div>

        <div className="relative group bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 p-4 max-w-[1000px] mx-auto">
          <iframe 
            src="https://www.juicer.io/api/feeds/pumpfoilnews-849b1993-5d1f-458f-9863-d683515fa6db/iframe" 
            frameBorder="0" 
            width="1000" 
            height="1000" 
            style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
            title="Pump Foil News Feed"
          ></iframe>
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-300/40 text-[10px] font-black uppercase tracking-[0.4em]">
            Curated Stream // Satellite Transmission
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;