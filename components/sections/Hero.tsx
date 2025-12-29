
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
    <section className="min-h-screen w-full flex flex-col lg:flex-row items-center relative overflow-hidden pt-24 pb-20 lg:pb-0 px-6 md:px-12 lg:px-24">
        
        {/* Text Content */}
        <div className={`
            flex-1 w-full flex flex-col justify-center items-start z-20 
            order-2 lg:order-1
            transition-all duration-1000 ease-out transform
            ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-8 shadow-xl">
            <Zap size={14} className="text-brand-cyan animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-dark dark:text-brand-light font-bold">MF Prod - Creative Studio</span>
          </div>

          <h1 className="font-sans font-extrabold text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-brand-dark dark:text-white leading-[0.9] tracking-tighter mb-8">
            L'ART DE <br />
            <span className="gradient-text">CRÉER</span>
          </h1>

          <p className="font-sans text-brand-dark/70 dark:text-brand-light/70 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-xl font-light">
            De la scène à l'écran, nous donnons vie à vos visions. Spectacles immersifs, coaching vocal d'élite et production média.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button onClick={scrollToPrestations} className="shadow-[0_20px_40px_rgba(0,210,255,0.2)] dark:shadow-[0_20px_40px_rgba(0,210,255,0.4)]">
              Explorer nos Prestations
            </Button>
            <Button variant="secondary" onClick={() => onNavigate(View.SPECTACLES)} className="bg-black/5 dark:bg-brand-dark-soft border-black/10 dark:border-white/10">
              Voir les Spectacles
            </Button>
          </div>
        </div>

        {/* Visual Content (Orrery) */}
        <div className={`
            flex-1 w-full flex items-center justify-center relative z-10 
            order-1 lg:order-2 mb-10 lg:mb-0
            transition-all duration-1000 delay-300 ease-out transform
            ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
          <div className="transform scale-[0.4] sm:scale-[0.5] md:scale-[0.7] lg:scale-[0.9] xl:scale-[1.0] transition-transform duration-[2s] hover:scale-110">
             <Orrery />
          </div>
        </div>
      </section>
  );
};

export default Hero;
