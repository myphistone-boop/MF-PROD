
import React from 'react';
import { LOGO_URL } from '../constants';
import { Music, Music2, Music3, Music4, Mic2, Star } from 'lucide-react';

const Orrery: React.FC = () => {
  // Détection mobile simple pour le rendu conditionnel d'éléments lourds
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Anneau 2 : Optimisé pour mobile (moins d'items)
  const ring2Items = [
    { icon: <Music size={isMobile ? 24 : 36} className="text-brand-cyan" />, angle: 0 },
    { icon: <Music2 size={isMobile ? 20 : 30} className="text-white" />, angle: 45 },
    { icon: <Music3 size={isMobile ? 24 : 40} className="text-brand-magenta" />, angle: 100 },
    { icon: <Music4 size={isMobile ? 20 : 32} className="text-brand-cyan" />, angle: 180 },
    { icon: <Mic2 size={isMobile ? 20 : 32} className="text-brand-orange" />, angle: 230 },
  ];

  // Anneau 3 : Désactivé sur mobile car trop gourmand
  const ring3Items = isMobile ? [] : [
    { icon: <Music3 size={32} className="text-brand-magenta" />, angle: 20 },
    { icon: <Music4 size={38} className="text-brand-orange" />, angle: 60 },
    { icon: <Music size={56} strokeWidth={1.5} className="text-brand-cyan" />, angle: 110 },
    { icon: <Music2 size={42} className="text-brand-orange" />, angle: 200 },
    { icon: <Star size={28} className="text-white" />, angle: 250 },
    { icon: <Music3 size={64} strokeWidth={1.5} className="text-brand-magenta" />, angle: 310 },
  ];

  return (
    <div className="relative w-[450px] h-[450px] lg:w-[1100px] lg:h-[1100px] flex items-center justify-center pointer-events-none select-none">
      
      {/* Halo central : Réduit sur mobile */}
      <div className={`absolute rounded-full bg-brand-magenta opacity-10 dark:opacity-20 animate-pulse-glow
        ${isMobile ? 'w-[200px] h-[200px] blur-[40px]' : 'w-[500px] h-[500px] blur-[150px]'}
      `} />

      {/* Conteneur Logo Central : Adaptatif */}
      <div className={`
          relative z-20 rounded-full bg-white dark:bg-brand-dark border border-black/5 dark:border-white/5 flex items-center justify-center shadow-xl animate-float will-change-transform
          ${isMobile ? 'w-[180px] h-[180px]' : 'w-[420px] h-[420px]'}
        `}>
        <div className="absolute inset-2 lg:inset-4 rounded-full border border-brand-cyan/20 animate-spin-slow will-change-transform"></div>
        <img 
            src={LOGO_URL} 
            alt="MF Prod" 
            className={`${isMobile ? 'w-[120px] h-[120px]' : 'w-[300px] h-[300px]'} object-contain relative z-30`} 
        />
      </div>

      {/* Orbite 1 (Intérieure) */}
      <div className={`
          absolute border border-black/5 dark:border-white/5 rounded-full animate-spin-slow will-change-transform
          ${isMobile ? 'w-[250px] h-[250px]' : 'w-[550px] h-[550px]'}
        `}>
         {[
           <Music size={isMobile ? 24 : 44} />, 
           <Music2 size={isMobile ? 22 : 40} />, 
           <Music3 size={isMobile ? 24 : 42} />, 
           <Music4 size={isMobile ? 22 : 40} />
         ].map((icon, i) => (
             <div 
                key={i} 
                className="absolute top-1/2 left-1/2 flex items-center justify-center text-brand-cyan opacity-80"
                style={{ 
                    transform: `rotate(${(i * 90)}deg) translate(${isMobile ? 125 : 275}px) rotate(-${(i * 90)}deg)` 
                }}
             >
                 {icon}
             </div>
         ))}
      </div>

      {/* Orbite 2 (Milieu) */}
      <div className={`
          absolute border border-black/10 dark:border-white/10 rounded-full animate-spin-reverse-slow will-change-transform
          ${isMobile ? 'w-[380px] h-[380px]' : 'w-[800px] h-[800px]'}
        `}>
        {ring2Items.map((item, i) => (
             <div 
                key={i} 
                className="absolute top-1/2 left-1/2 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `rotate(${item.angle}deg) translate(${isMobile ? 190 : 400}px) rotate(-${item.angle}deg)` }}
             >
                 {item.icon}
             </div>
        ))}
      </div>

      {/* Orbite 3 (Extérieure - Désactivée sur mobile) */}
      {!isMobile && (
        <div className="absolute border border-black/5 dark:border-white/5 w-[1050px] h-[1050px] rounded-full animate-spin-super-slow will-change-transform">
           {ring3Items.map((item, i) => (
               <div 
                  key={i} 
                  className="absolute top-1/2 left-1/2 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `rotate(${item.angle}deg) translate(525px) rotate(-${item.angle}deg)` }}
               >
                   <div className="relative">
                      {item.icon}
                      <div className="absolute inset-0 bg-brand-magenta/5 blur-xl rounded-full -z-10 scale-[2]"></div>
                   </div>
               </div>
           ))}
        </div>
      )}
      
      {/* Anneau de structure passif (PC uniquement) */}
      {!isMobile && <div className="absolute border border-black/5 dark:border-white/5 w-[1150px] h-[1150px] rounded-full opacity-20" />}
    </div>
  );
};

export default Orrery;
