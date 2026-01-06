
import React, { useEffect, useState } from 'react';
import Orrery from '../Orrery';
import { Button } from '../ui/Button';
import { Zap } from 'lucide-react';
import { View } from '../../types';
import { usePerformanceMode } from '../../hooks/usePerformanceMode';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [mounted, setMounted] = useState(false);
  const { isMobile } = usePerformanceMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToPrestations = () => {
    const element = document.getElementById('prestations');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const visibilityClass = (isMobile || mounted) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10';

  return (
    <section className="min-h-[50vh] lg:min-h-[75vh] w-full flex flex-col lg:flex-row items-center relative overflow-hidden pt-24 lg:pt-10 pb-12 lg:pb-0 px-6 md:px-12 lg:px-24">
        
        {/* Text Content */}
        <div className={`
            flex-1 w-full flex flex-col justify-start lg:justify-center items-start z-20 
            transition-all duration-1000 ease-out transform
            ${visibilityClass}
          `}>
          
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-3 lg:mb-6 shadow-xl">
            <Zap size={12} className="text-brand-cyan animate-pulse" />
            <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.3em] text-brand-dark dark:text-brand-light font-bold">MF Prod - Creative Studio</span>
          </div>

          <h1 className="mt-4 lg:mt-0 font-sans font-extrabold text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-brand-dark dark:text-white leading-[0.9] tracking-tighter mb-3 lg:mb-6 uppercase">
            L'ART DE <br />
            <span className="gradient-text">CRÉER</span>
          </h1>

          <p className="font-sans text-brand-dark/70 dark:text-brand-light/70 text-sm md:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-8 max-w-xl font-light">
            De la scène à l'écran, nous donnons vie à vos visions. Spectacles immersifs et coaching vocal d'élite.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 w-full sm:w-auto">
            <Button onClick={scrollToPrestations} className="py-3 lg:py-4 shadow-[0_15px_30px_rgba(0,210,255,0.2)] text-[10px] lg:text-xs">
              Explorer nos Prestations
            </Button>
            <Button variant="secondary" onClick={() => onNavigate(View.SPECTACLES)} className="py-3 lg:py-4 bg-black/5 dark:bg-brand-dark-soft border-black/10 dark:border-white/10 text-[10px] lg:text-xs">
              Voir les Spectacles
            </Button>
          </div>
        </div>

        {/* Visual Content (Orrery) - Hidden on Mobile */}
        <div className={`
            hidden lg:flex lg:flex-1 w-full items-center justify-center relative z-10 
            lg:order-2
            transition-all duration-1000 delay-300 ease-out transform
            ${(isMobile || mounted) ? 'opacity-100 scale-100' : 'opacity-0 lg:scale-95'}
          `}>
          <div className="transform lg:scale-[0.8] xl:scale-[0.9] transition-transform duration-[2s] lg:hover:scale-95 flex items-center justify-center pointer-events-none">
             <Orrery />
          </div>
        </div>
      </section>
  );
};

export default Hero;
