import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#f0f7ff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-cyan-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#001f3f] mb-8 uppercase tracking-tighter">The Hangar.</h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Whether you're struggling with your first launch or looking for a custom carbon setup, our community is here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-900 shadow-lg border border-blue-100 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-black text-[#001f3f] uppercase tracking-widest text-sm">Direct Line</h4>
                  <p className="text-slate-500 font-bold">fly@pumpfoilhub.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-900 shadow-lg border border-blue-100 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-black text-[#001f3f] uppercase tracking-widest text-sm">HQ Base</h4>
                  <p className="text-slate-500 font-bold">Lake Zurich, Switzerland</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-blue-100 relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-400 rounded-3xl -z-10 rotate-12"></div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-blue-900/40 uppercase tracking-[0.2em] ml-2">Name</label>
                  <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-400 focus:bg-white transition-all font-bold text-blue-900" placeholder="AVIATOR NAME" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-blue-900/40 uppercase tracking-[0.2em] ml-2">Email</label>
                  <input type="email" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-400 focus:bg-white transition-all font-bold text-blue-900" placeholder="PILOT@HUB.COM" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-blue-900/40 uppercase tracking-[0.2em] ml-2">Objective</label>
                <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-400 focus:bg-white transition-all font-bold text-blue-900 uppercase tracking-widest text-xs">
                  <option>GEAR INQUIRY</option>
                  <option>SPOT REPORT</option>
                  <option>TECH SUPPORT</option>
                  <option>GENERAL</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-blue-900/40 uppercase tracking-[0.2em] ml-2">Transmission</label>
                <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-400 focus:bg-white transition-all font-bold text-blue-900" placeholder="MESSAGE..."></textarea>
              </div>
              <button className="w-full bg-[#001f3f] hover:bg-cyan-500 text-white hover:text-blue-950 font-black py-5 rounded-2xl shadow-xl shadow-blue-900/20 transition-all uppercase tracking-[0.3em] text-xs">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;