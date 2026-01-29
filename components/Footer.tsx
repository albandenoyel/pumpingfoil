import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001f3f] text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-2xl shadow-cyan-500/20 overflow-hidden">
                <img 
                  src="logo.png" 
                  alt="Pump Foil Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">Pump foil.com</span>
            </div>
            <p className="text-blue-200/50 text-sm leading-relaxed max-w-xs">
              The ultimate digital hangar for the pump foiling community. Explore gear, master the dockstart, and find your next flight spot.
            </p>
          </div>

          {/* Sitemap: Gear */}
          <div>
            <h4 className="text-cyan-400 font-black uppercase tracking-widest text-xs mb-6">Equipment Guide</h4>
            <ul className="space-y-4">
              <li><a href="#foils" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Best Pump Foils 2026</a></li>
              <li><a href="#boards" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Dockstart Board Reviews</a></li>
              <li><a href="#foils" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">High Aspect Front Wings</a></li>
              <li><a href="#boards" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Carbon vs Wood Boards</a></li>
            </ul>
          </div>

          {/* Sitemap: Learning */}
          <div>
            <h4 className="text-cyan-400 font-black uppercase tracking-widest text-xs mb-6">Foil School</h4>
            <ul className="space-y-4">
              <li><a href="#tutorials" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">How to Dockstart Tutorial</a></li>
              <li><a href="#tutorials" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Pumping Technique Tips</a></li>
              <li><a href="#faq" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Beginner FAQ</a></li>
              <li><a href="#tutorials" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Advanced Pumping Drills</a></li>
            </ul>
          </div>

          {/* Sitemap: Community */}
          <div>
            <h4 className="text-cyan-400 font-black uppercase tracking-widest text-xs mb-6">Global Network</h4>
            <ul className="space-y-4">
              <li><a href="#spots" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Pump Foil Spots Map</a></li>
              <li><a href="#news" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Community News & Feed</a></li>
              <li><a href="#resources" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Facebook Groups</a></li>
              <li><a href="#contact" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Submit a Local Spot</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10">
            <a href="#" className="text-blue-200/30 hover:text-cyan-400 transition-colors font-bold uppercase tracking-widest text-[10px]">Privacy Policy</a>
            <a href="#" className="text-blue-200/30 hover:text-cyan-400 transition-colors font-bold uppercase tracking-widest text-[10px]">Terms of Service</a>
            <a href="https://www.instagram.com/pumpfoilnews" target="_blank" className="text-blue-200/30 hover:text-cyan-400 transition-colors font-bold uppercase tracking-widest text-[10px]">Instagram</a>
          </div>
          
          <p className="text-blue-200/20 text-[10px] font-black uppercase tracking-[0.4em]">
            © 2026 pumpfoil.com // Satellite Transmission Stable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;