import React, { useState } from 'react';

const FAQ_DATA = [
  {
    question: "What is a pump foil?",
    answer: "A pump foil is a hydrofoil connected to a board, powered just by your legs, which lets you fly above water. The feeling of glide is absolutely unique. You can practice this magical sport every day of the year, and anywhere there is water."
  },
  {
    question: "What does it take to learn pump foiling?",
    answer: "One of the most important aspects of learning pump foiling is resilience and consistency. Once you get started, try to go at least once a week. It will typically take 5 to 10 sessions of 1 to 2 hours to get your first consistant take offs. Just don't give up! And try to practice with others or film yourself and share to get feedback on what to improve."
  },
  {
    question: "What are the types of start?",
    answer: "Dockstart is the most common: you run on a dock until jumping on the board. Dropstart: you start with the foil above water and jump on it, so you need to have a jumping point that is typically between 60 and 100cm high. Deadstart: you start with the foil in water, and with no runing space, by just pushing the foil to get initial speed. Beachstart: you start from the beach, the hardest start. Flat start: you start from the water, you typically need a larger SUP board."
  },
  {
    question: "How long can one pump?",
    answer: "The first significant milestone in your pumping journey is reaching 1 minute, which will earn you your power pumper hat. The world record is 4h25 and 66km held by Nicolas Iten."
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
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8 text-slate-600 text-lg leading-relaxed font-medium">
                  {item.answer}
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