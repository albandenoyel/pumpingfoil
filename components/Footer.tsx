
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001f3f] text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <svg className="w-6 h-6 text-blue-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v14" />
                <path d="M4 17c4-2 12-2 16 0" />
                <path d="M8 21c3-1 5-1 8 0" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">PUMPINGFOIL</span>
          </div>
          
          <div className="flex gap-10">
            <a href="#" className="text-blue-200/50 hover:text-cyan-400 transition-colors font-bold uppercase tracking-widest text-xs">Privacy</a>
            <a href="#" className="text-blue-200/50 hover:text-cyan-400 transition-colors font-bold uppercase tracking-widest text-xs">Terms</a>
            <a href="#" className="text-blue-200/50 hover:text-cyan-400 transition-colors font-bold uppercase tracking-widest text-xs">Instagram</a>
          </div>
          
          <p className="text-blue-200/30 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} PUMPINGFOIL NETWORK.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
