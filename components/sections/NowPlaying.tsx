
import React from 'react';
import { Button } from '../ui/Button';
import { View } from '../../types';
import { Sparkles, Zap, ArrowRight } from 'lucide-react';

interface NowPlayingProps {
  onNavigate: (view: View, context?: any) => void;
}

const NowPlaying: React.FC<NowPlayingProps> = ({ onNavigate }) => {
  // URL GCS Superstar pour l'affiche fixe
  const posterUrl = "https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/affiche__superstars-1-768x1086.webp";
  const videoUrl = "https://storage.googleapis.com/novelec_assets/MF%20PROD/SUPERSTAR-VIDEO-ACCUEIL.mp4";

  // Détection mobile via CSS media query
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const shouldShowVideo = !isMobile;

  return (
    <section className="relative pt-4 pb-12 lg:pt-6 lg:pb-20 bg-brand-light dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-magenta/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 opacity-50" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:opacity-0 lg:translate-y-10 lg:animate-fade-in-up">
          
          {/* Texte - Masqué sur Mobile */}
          <div className="w-full lg:w-2/5 order-2 lg:order-1 hidden lg:block">
            <div className="relative p-8 lg:p-12 bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 rounded-[3.5rem] shadow-2xl transition-all duration-500 hover:border-brand-magenta/30 group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-orange rounded-t-full"></div>
              
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brand-magenta/30 bg-brand-magenta/10 mb-6">
                  <Sparkles size={14} className="text-brand-magenta animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-brand-magenta font-black">Actuellement à l'affiche</span>
                </div>
                
                <h2 className="font-sans font-black text-5xl lg:text-7xl text-brand-dark dark:text-white leading-[0.85] tracking-tighter mb-6 uppercase">
                  SUPER<br/><span className="gradient-text italic">STARS</span>
                </h2>
                
                <p className="text-lg lg:text-xl text-brand-dark/60 dark:text-brand-light/60 font-light leading-relaxed mb-8">
                  Le spectacle événement qui redéfinit les codes de la scène. Une immersion totale rendant hommage aux plus grandes icônes mondiales.
                </p>
                
                <div className="space-y-4 mb-10">
                   <div className="flex items-center gap-4 text-brand-dark/40 dark:text-white/40">
                      <div className="w-8 h-8 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                        <Zap size={16} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest">Performances 100% Live</span>
                   </div>
                   <div className="flex items-center gap-4 text-brand-dark/40 dark:text-white/40">
                      <div className="w-8 h-8 rounded-full bg-brand-magenta/10 flex items-center justify-center text-brand-magenta">
                        <Zap size={16} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest">Scénographie Immersive</span>
                   </div>
                </div>

                <Button 
                  onClick={() => onNavigate(View.PRODUCTION_SPECTACLES, { sectionId: 'superstars' })} 
                  className="w-full justify-between group/btn py-6 shadow-xl"
                >
                  Découvrir le spectacle
                  <ArrowRight size={18} className="transform group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Média : Vidéo (PC Haute Perf) ou Image (Mobile/Basse Perf) */}
          <div className="w-full lg:w-3/5 order-1 lg:order-2">
            <div 
              onClick={() => isMobile && onNavigate(View.PRODUCTION_SPECTACLES, { sectionId: 'superstars' })}
              className="relative rounded-[2rem] lg:rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl aspect-video bg-black cursor-pointer lg:cursor-default"
            >
              {shouldShowVideo ? (
                <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover">
                  <source src={videoUrl} type="video/mp4" />
                </video>
              ) : (
                <img src={posterUrl} className="w-full h-full object-cover" alt="Superstars" loading="eager" />
              )}
              
              <div className="absolute top-4 left-4 lg:top-8 lg:left-8 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-xl bg-brand-dark/30 border border-white/20">
                <div className="relative w-2 h-2 rounded-full bg-brand-magenta animate-pulse"></div>
                <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-white">
                    {shouldShowVideo ? "À l'affiche : SuperStar" : "Focus : SuperStars"}
                </span>
              </div>
              
              {isMobile && (
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-brand-magenta/90 text-white p-3 rounded-xl flex items-center justify-between">
                   <span className="text-[10px] font-black uppercase tracking-widest">En savoir plus</span>
                   <ArrowRight size={14} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowPlaying;
