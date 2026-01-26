import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GearGrid from './components/GearGrid';
import TutorialsSection from './components/TutorialsSection';
import SpotsSection from './components/SpotsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { FOILS, BOARDS, RESOURCES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-100 selection:text-blue-900 bg-[#f0f7ff]">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <GearGrid 
          id="foils" 
          title="Foils" 
          subtitle="Here are some of the most common foils to get started with pump foiling. Brands usually offer various front wing sizes, which you can pick based on your weight, level and what you want to optimize for, speed or endurance."
          items={FOILS} 
        />

        <GearGrid 
          id="boards" 
          title="Boards" 
          subtitle="Here are some of the most common boards to get started with pump foiling. You want a board that is as rigid as possible, and ideally as light as possible."
          items={BOARDS} 
        />

        <TutorialsSection />
        
        <SpotsSection />

        <GearGrid 
          id="resources" 
          title="Resources" 
          subtitle="A selection of community resources to help in your pump foiling journey"
          items={RESOURCES} 
        />
        
        <FaqSection />
        
        <ContactSection />
      </main>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;