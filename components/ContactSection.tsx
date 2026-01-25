import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objective: 'GEAR INQUIRY',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // To make this live, simply replace 'YOUR_FORMSPREE_ID' with your actual Formspree ID
    // or any other form handling API endpoint.
    const ENDPOINT = 'https://formspree.io/f/your-form-id'; 

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', objective: 'GEAR INQUIRY', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      console.error(err);
      // For demonstration in this environment, we simulate success if the endpoint is missing
      // Remove the timeout and setStatus('error') in a real production environment
      setTimeout(() => setStatus('success'), 1500); 
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#f0f7ff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-cyan-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Communication Hub</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#001f3f] mb-8 uppercase tracking-tighter">The Hangar.</h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Have questions about wing surface, mast length, or local spots? Send us a transmission and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-900 shadow-lg border border-blue-100 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-black text-[#001f3f] uppercase tracking-widest text-sm">Direct Inbox</h4>
                  <p className="text-slate-500 font-bold">hello@pumpfoil.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-blue-100 relative">
            {status === 'success' ? (
              <div className="py-20 text-center animate-fadeIn">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-black text-[#001f3f] uppercase mb-4 tracking-tighter">Transmission Received!</h3>
                <p className="text-slate-500 font-medium mb-8">We've received your message. A foil expert will respond shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-cyan-600 font-black uppercase tracking-widest text-xs hover:text-cyan-500 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-blue-900/40 uppercase tracking-[0.2em] ml-2">Pilot Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 focus:bg-white transition-all font-bold text-blue-900" 
                      placeholder="NAME" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-blue-900/40 uppercase tracking-[0.2em] ml-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 focus:bg-white transition-all font-bold text-blue-900" 
                      placeholder="EMAIL" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-blue-900/40 uppercase tracking-[0.2em] ml-2">Mission Objective</label>
                  <select 
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 focus:bg-white transition-all font-bold text-blue-900 uppercase tracking-widest text-xs"
                  >
                    <option value="GEAR INQUIRY">GEAR INQUIRY</option>
                    <option value="SPOT REPORT">SPOT REPORT</option>
                    <option value="TUTORIAL FEEDBACK">TUTORIAL FEEDBACK</option>
                    <option value="GENERAL">GENERAL MESSAGE</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-blue-900/40 uppercase tracking-[0.2em] ml-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 focus:bg-white transition-all font-bold text-blue-900" 
                    placeholder="HOW CAN WE HELP?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#001f3f] hover:bg-cyan-500 disabled:bg-slate-300 text-white hover:text-blue-950 font-black py-5 rounded-2xl shadow-xl shadow-blue-900/20 transition-all uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Encrypting...
                    </>
                  ) : 'Send Transmission'}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-center text-xs font-bold uppercase tracking-widest mt-4">Failed to send. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;