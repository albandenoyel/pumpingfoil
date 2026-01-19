
import React, { useState } from 'react';
import { getGearAdvice } from '../services/geminiService';

interface GearAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GearAdvisorModal: React.FC<GearAdvisorModalProps> = ({ isOpen, onClose }) => {
  const [experience, setExperience] = useState('Beginner');
  const [weight, setWeight] = useState('75kg');
  const [goal, setGoal] = useState('Learning to dock start');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState('');

  const handleConsult = async () => {
    setLoading(true);
    const result = await getGearAdvice(experience, weight, goal);
    setRecommendation(result);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-scaleIn">
        <div className="bg-blue-600 p-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
            <h3 className="text-xl font-bold">AI Gear Expert</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <div className="p-8 max-h-[80vh] overflow-y-auto">
          {!recommendation ? (
            <div className="space-y-6">
              <p className="text-slate-600">Enter your details and our AI will recommend the perfect setup from current high-performance brands.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Experience</label>
                  <select 
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option>Beginner (Never foilt)</option>
                    <option>Intermediate (Some foiling exp)</option>
                    <option>Advanced (Already pumping)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Weight</label>
                  <input 
                    type="text" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 85kg" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Goal</label>
                <textarea 
                  rows={3} 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. I want to learn dock starts and pump for over 2 minutes."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>
              
              <button 
                onClick={handleConsult}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                ) : null}
                {loading ? 'Consulting Experts...' : 'Generate Recommendation'}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl text-slate-800 leading-relaxed">
                <div className="prose prose-blue max-w-none">
                   {recommendation.split('\n').map((line, i) => (
                      <p key={i} className="mb-2">{line}</p>
                   ))}
                </div>
              </div>
              <button 
                onClick={() => setRecommendation('')}
                className="text-blue-600 font-bold hover:underline"
              >
                Try different details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GearAdvisorModal;
