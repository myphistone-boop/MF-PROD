
import React from 'react';
import { View } from '../../types';
import { LOGO_URL } from '../../constants';
import Hero from '../sections/Hero';
import Metamorphosis from '../sections/Metamorphosis';
import Pricing from '../sections/Pricing';
import About from '../sections/About';
import Contact from '../sections/Contact';
import DiscoverSection from '../sections/DiscoverSection';
import MenSection from '../sections/MenSection';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full relative bg-brand-dark">
      <Hero onNavigate={onNavigate} />
      
      <div id="prestations">
        <DiscoverSection onNavigate={onNavigate} />
      </div>

      <Metamorphosis onNavigate={onNavigate} />
      
      <MenSection onNavigate={onNavigate} />

      <div id="about">
        <About />
      </div>
      
      <div id="pricing">
        <Pricing onNavigate={onNavigate} />
      </div>
      
      <div id="contact">
          <Contact onNavigate={onNavigate} />
      </div>

      <footer className="border-t border-white/10 bg-brand-dark py-32 px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
           <div className="flex flex-col items-center lg:items-start gap-4">
             <div className="flex items-center gap-8">
               <img src={LOGO_URL} className="w-16 h-16" alt="logo" />
               <span className="font-sans font-black tracking-tighter text-white text-3xl uppercase">MF <span className="text-brand-cyan">PROD</span></span>
             </div>
             <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black font-sans mt-4">© 2025 MF PROD – TOUS DROITS RÉSERVÉS</span>
           </div>
           
           <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
             <span onClick={() => onNavigate(View.SERVICES)} className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-brand-magenta cursor-pointer transition-colors font-black">Prestations</span>
             <span onClick={() => onNavigate(View.SPECTACLES)} className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-brand-magenta cursor-pointer transition-colors font-black">Spectacles</span>
             <span className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-brand-magenta cursor-pointer transition-colors font-black">Mentions Légales</span>
           </div>

           <div className="text-center lg:text-right">
             <span className="text-[10px] uppercase tracking-widest text-white/20 block mb-2 font-black">WEBDESIGNER</span>
             <span className="text-sm text-brand-cyan/60 font-black tracking-tight">Damien Devaux – devauxdamien@orange.fr</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
