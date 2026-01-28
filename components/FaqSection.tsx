import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string[];
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "What is a pump foil?",
    answer: [
      "A hydrofoil connected to a compact, rigid board.",
      "Powered entirely by leg movements (pumping) to create lift.",
      "Allows for flight above water without the need for waves or wind.",
      "Provides a unique 'infinite glide' sensation unlike any other board sport."
    ]
  },
  {
    question: "What does it take to learn pump foiling?",
    answer: [
      "High resilience: Consistency is more important than raw strength.",
      "Weekly practice: Aim for at least one session per week to maintain muscle memory.",
      "Learning curve: Typically takes 5-10 sessions of 1-2 hours to reach consistent flight.",
      "Community: Practicing with others or filming yourself is the fastest way to improve."
    ]
  },
  {
    question: "What are the types of start?",
    answer: [
      "Dockstart: Running on a dock and jumping onto the board (most common).",
      "Dropstart: Jumping from a height (60-100cm) onto a foil held above water.",
      "Deadstart: Starting from a standstill in deep water (advanced).",
      "Beachstart: Running from the shore into the water (hardest).",
      "Flat start: Starting from a flat surface or a larger board like a SUP."
    ]
  },
  {
    question: "How long can one pump?",
    answer: [
      "The 'Power Pumper' Milestone: Reaching 1 minute of sustained flight.",
      "Intermediate standard: 2-5 minutes is considered a very solid session.",
      "World Record: 4h 25m (66km) held by Nicolas Iten.",
      "Energy usage: It is an intense cardio workout that scales with efficiency."
    ]
  }
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Knowledge Base</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-4 uppercase tracking-tighter">Everything you need to know</h2>
          <div className="h-1.5 w-20 bg-cyan-500 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-3xl transition-all duration-300 ${activeIndex === index ? 'border-cyan-500 bg-slate-50 shadow-xl' : 'border-slate-100 bg-white hover:border-slate-200'}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-black text-[#001f3f] uppercase tracking-tight leading-tight">
                  {item.question}
                </span>
                <span className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${activeIndex === index ? 'rotate-180 bg-cyan-100 text-cyan-600' : 'text-slate-400'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8">
                  <ul className="space-y-3">
                    {item.answer.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3 text-slate-600 text-lg leading-relaxed font-medium">
                        <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-cyan-500 shadow-sm shadow-cyan-500/50"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;