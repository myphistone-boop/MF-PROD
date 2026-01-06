
import React, { useEffect, useState, useRef } from 'react';
import { ASSETS } from '../../assets';
import { Calendar, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

const UpcomingShows: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shows = ASSETS.SHOWS_2026;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // On ajuste le pas de scroll pour correspondre approximativement à la largeur d'un item + gap
      const step = window.innerWidth < 1024 ? 284 : clientWidth * 0.6;
      const scrollTo = direction === 'left' 
        ? scrollLeft - step
        : scrollLeft + step;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 relative dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-magenta/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className={`text-center mb-10 lg:mb-12 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-brand-orange/50 bg-brand-orange/5 dark:bg-gradient-to-r dark:from-brand-magenta/20 dark:to-brand-orange/20 mb-8 shadow-xl dark:shadow-[0_0_30px_rgba(255,138,0,0.2)] animate-breathe">
            <Calendar size={18} className="text-brand-orange" />
            <span className="text-xs lg:text-sm uppercase tracking-[0.4em] text-brand-dark dark:text-white font-black">Saison 2026</span>
          </div>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-7xl text-brand-dark dark:text-white mb-6 tracking-tighter uppercase leading-none">
            LES PROCHAINES <br />
            <span className="gradient-text italic">PRODUCTIONS</span>
          </h2>
        </div>

        {/* Slider Navigation & Container */}
        <div className="relative group/slider">
          
          {/* Custom Arrows - Visible on mobile to guide user */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 md:left-4 top-[40%] -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/80 dark:bg-brand-dark-soft/80 border border-black/10 dark:border-white/20 text-brand-dark dark:text-white flex items-center justify-center backdrop-blur-xl transition-all duration-300 hover:bg-brand-magenta hover:text-white hover:border-brand-magenta hover:scale-110 shadow-2xl flex"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="md:w-7 md:h-7" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 md:right-4 top-[40%] -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/80 dark:bg-brand-dark-soft/80 border border-black/10 dark:border-white/20 text-brand-dark dark:text-white flex items-center justify-center backdrop-blur-xl transition-all duration-300 hover:bg-brand-magenta hover:text-white hover:border-brand-magenta hover:scale-110 shadow-2xl flex"
            aria-label="Next"
          >
            <ChevronRight size={24} className="md:w-7 md:h-7" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 pt-4 gap-6 lg:gap-10 no-scrollbar snap-x snap-mandatory items-start px-[calc(50%-130px)] lg:px-12 scroll-px-[calc(50%-130px)] lg:scroll-px-12"
          >
            {shows.map((show, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[340px] snap-center flex flex-col items-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* 1. TOP BADGE - OUTSIDE IMAGE */}
                <div className="mb-6 flex items-center gap-3 px-4 py-2 rounded-full border border-brand-magenta/30 bg-brand-magenta/5 dark:bg-brand-magenta/10 shadow-lg dark:shadow-[0_0_15px_rgba(255,0,122,0.1)]">
                   <Sparkles size={12} className="text-brand-magenta animate-pulse" />
                   <span className="text-[10px] font-black text-brand-dark dark:text-white uppercase tracking-[0.2em]">Saison 2026</span>
                </div>

                {/* 2. IMAGE CARD */}
                <div className="relative w-full aspect-[2/3] rounded-[2.5rem] overflow-hidden border-2 border-black/5 dark:border-white/10 bg-white dark:bg-brand-dark-soft group/card transition-all duration-500 hover:border-brand-magenta/50 shadow-xl hover:shadow-[0_25px_50px_-12px_rgba(255,0,122,0.4)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                  
                  <img 
                    src={show.url} 
                    alt={show.title} 
                    className="w-full h-full object-cover transform scale-100 group-hover/card:scale-110 transition-transform duration-[2s] ease-out"
                  />
                </div>

                {/* 3. BOTTOM LABELS - OUTSIDE IMAGE */}
                <div className="mt-8 text-center w-full">
                   <div className="h-[2px] w-12 bg-brand-magenta mx-auto mb-5 shadow-[0_0_10px_#FF007A]"></div>
                   
                   <h4 className="text-brand-dark dark:text-white font-black text-2xl lg:text-3xl uppercase tracking-tighter leading-none mb-2 drop-shadow-md">
                     MF PROD <span className="text-brand-magenta">PRODUCTION</span>
                   </h4>
                   
                   <p className="text-brand-cyan font-black text-sm lg:text-lg uppercase tracking-[0.3em] drop-shadow-[0_0_10px_rgba(0,210,255,0.4)]">
                     EXCLUSIVITÉ
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default UpcomingShows;
