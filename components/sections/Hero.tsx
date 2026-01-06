
import React, { useEffect, useState } from 'react';
import Orrery from '../Orrery';
import { Button } from '../ui/Button';
import { Star, Zap } from 'lucide-react';
import { View } from '../../types';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToPrestations = () => {
    const element = document.getElementById('prestations');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[60vh] lg:min-h-[75vh] w-full flex flex-col lg:flex-row items-center relative overflow-hidden pt-0 pb-0 lg:pt-10 lg:pb-0 px-6 md:px-12 lg:px-24">
        
        {/* Text Content */}
        <div className={`
            flex-1 w-full flex flex-col justify-center items-start z-20 
            order-2 lg:order-1 mt-[-30px] lg:mt-0
            transition-all duration-1000 ease-out transform
            ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
          
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-3 lg:mb-6 shadow-xl">
            <Zap size={12} className="text-brand-cyan animate-pulse" />
            <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.3em] text-brand-dark dark:text-brand-light font-bold">MF Prod - Creative Studio</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl md:text-7xl lg:text-8xl xl:text-9xl text-brand-dark dark:text-white leading-[0.9] tracking-tighter mb-3 lg:mb-6">
            L'ART DE <br />
            <span className="gradient-text">CRÉER</span>
          </h1>

          <p className="font-sans text-brand-dark/70 dark:text-brand-light/70 text-xs md:text-lg lg:text-xl leading-relaxed mb-5 lg:mb-8 max-w-xl font-light">
            De la scène à l'écran, nous donnons vie à vos visions. Spectacles immersifs et coaching vocal d'élite.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 w-full sm:w-auto pb-12 lg:pb-0">
            <Button onClick={scrollToPrestations} className="py-3 lg:py-4 shadow-[0_15px_30px_rgba(0,210,255,0.2)] text-[9px] lg:text-xs">
              Explorer nos Prestations
            </Button>
            <Button variant="secondary" onClick={() => onNavigate(View.SPECTACLES)} className="py-3 lg:py-4 bg-black/5 dark:bg-brand-dark-soft border-black/10 dark:border-white/10 text-[9px] lg:text-xs">
              Voir les Spectacles
            </Button>
          </div>
        </div>

        {/* Visual Content (Orrery) - Slight zoom and margin adjustment on mobile */}
        <div className={`
            flex-none h-[25vh] lg:h-auto lg:flex-1 w-full flex items-center justify-center relative z-10 
            order-1 lg:order-2 mt-8 lg:mt-0
            transition-all duration-1000 delay-300 ease-out transform
            ${mounted ? 'opacity-100 scale-100' : 'opacity-0 lg:scale-95'}
          `}>
          <div className="transform scale-[0.22] lg:scale-[0.8] xl:scale-[0.9] transition-transform duration-[2s] lg:hover:scale-95 flex items-center justify-center pointer-events-none">
             <Orrery />
          </div>
        </div>
      </section>
  );
};

export default Hero;
