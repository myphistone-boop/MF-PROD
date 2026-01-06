
import React from 'react';
import { View } from '../../types';
import { LOGO_URL } from '../../constants';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Contact from '../sections/Contact';
import DiscoverSection from '../sections/DiscoverSection';
import UpcomingShows from '../sections/UpcomingShows';
import Partners from '../sections/Partners';
import NowPlaying from '../sections/NowPlaying';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full relative bg-brand-light dark:bg-brand-dark transition-colors duration-500">
      <Hero onNavigate={onNavigate} />
      
      {/* Section À l'affiche - Vidéo & Focus Superstar */}
      <NowPlaying onNavigate={onNavigate} />

      {/* Productions 2026 */}
      <UpcomingShows />
      
      <div id="prestations">
        <DiscoverSection onNavigate={onNavigate} />
      </div>

      <div id="about">
        <About />
      </div>

      {/* Partenaires juste avant le contact */}
      <Partners />
      
      <div id="contact">
          <Contact onNavigate={onNavigate} />
      </div>

      <footer className="border-t border-black/5 dark:border-white/10 bg-white dark:bg-brand-dark py-16 px-12 transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
           <div className="flex flex-col items-center lg:items-start gap-4">
             <div className="flex items-center gap-8">
               <img src={LOGO_URL} className="w-16 h-16" alt="logo" />
               <span className="font-sans font-black tracking-tighter text-brand-dark dark:text-white text-3xl uppercase">MF <span className="text-brand-cyan">PROD</span></span>
             </div>
             <span className="text-[10px] text-brand-dark/30 dark:text-white/30 uppercase tracking-[0.3em] font-black font-sans mt-4">© 2025 MF PROD – TOUS DROITS RÉSERVÉS</span>
           </div>
           
           <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
             <span onClick={() => onNavigate(View.SERVICES)} className="text-xs uppercase tracking-[0.3em] text-brand-dark/50 dark:text-white/50 hover:text-brand-magenta cursor-pointer transition-colors font-black">Prestations</span>
             <span onClick={() => onNavigate(View.SPECTACLES)} className="text-xs uppercase tracking-[0.3em] text-brand-dark/50 dark:text-white/50 hover:text-brand-magenta cursor-pointer transition-colors font-black">Spectacles</span>
             <span className="text-xs uppercase tracking-[0.3em] text-brand-dark/50 dark:text-white/50 hover:text-brand-magenta cursor-pointer transition-colors font-black">Mentions Légales</span>
           </div>

           <div className="text-center lg:text-right">
             <span className="text-[10px] uppercase tracking-widest text-brand-dark/20 dark:text-white/20 block mb-2 font-black">WEBDESIGNER</span>
             <span className="text-sm text-brand-cyan/60 font-black tracking-tight">Damien Devaux – devauxdamien@orange.fr</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
