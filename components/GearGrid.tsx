
import React from 'react';
import { GearItem } from '../types';

interface GearGridProps {
  title: string;
  items: GearItem[];
  id: string;
}

const GearGrid: React.FC<GearGridProps> = ({ title, items, id }) => {
  return (
    <section id={id} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{title}</h2>
          <div className="h-2 w-32 bg-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full hover:-translate-y-2">
              <div className="relative aspect-[3/4] overflow-hidden bg-white p-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-slate-900/95 text-cyan-400 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg self-start">
                    {item.brand}
                  </span>
                  {item.price && (
                    <span className="bg-cyan-500 text-blue-950 px-3 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider shadow-md self-start">
                      {item.price}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight leading-tight">{item.name}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-lg uppercase tracking-wider border border-slate-200">
                      {feature}
                    </span>
                  ))}
                </div>
                <a 
                  href={item.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-slate-900 text-white text-[11px] font-black rounded-2xl hover:bg-cyan-500 hover:text-blue-950 transition-all uppercase tracking-[0.2em] shadow-lg shadow-slate-900/10"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearGrid;