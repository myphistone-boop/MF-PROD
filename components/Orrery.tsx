
import React from 'react';
import { LOGO_URL } from '../constants';
import { Music, Music2, Music3, Music4, Mic2, Star } from 'lucide-react';

const Orrery: React.FC = () => {
  // Anneau 2 : Notes moyennes et éléments de studio (Taille augmentée)
  const ring2Items = [
    { icon: <Music size={36} className="text-brand-cyan" />, angle: 0 },
    { icon: <Music2 size={30} className="text-brand-dark dark:text-white" />, angle: 45 },
    { icon: <Music3 size={40} className="text-brand-magenta" />, angle: 100 },
    { icon: <Music4 size={32} className="text-brand-cyan" />, angle: 180 },
    { icon: <Mic2 size={32} className="text-brand-orange" />, angle: 230 },
    { icon: <Music2 size={28} className="text-brand-dark dark:text-white" />, angle: 300 },
  ];

  // Anneau 3 : Grandes notes et accents colorés (Taille augmentée)
  const ring3Items = [
    { icon: <Music3 size={32} className="text-brand-magenta" />, angle: 20 },
    { icon: <Music4 size={38} className="text-brand-orange" />, angle: 60 },
    { icon: <Music size={56} strokeWidth={1.5} className="text-brand-cyan" />, angle: 110 },
    { icon: <Music2 size={42} className="text-brand-orange" />, angle: 200 },
    { icon: <Star size={28} className="text-brand-dark dark:text-white" />, angle: 250 },
    { icon: <Music3 size={64} strokeWidth={1.5} className="text-brand-magenta" />, angle: 310 },
  ];

  return (
    <div className="relative w-[1100px] h-[1100px] flex items-center justify-center pointer-events-none select-none">
      
      {/* Halo central dynamique */}
      <div className="absolute w-[500px] h-[500px] bg-brand-magenta rounded-full blur-[150px] opacity-10 dark:opacity-20 animate-pulse-glow" />

      {/* Conteneur Logo Central */}
      <div className="relative z-20 w-[420px] h-[420px] rounded-full bg-white dark:bg-brand-dark border-2 border-black/5 dark:border-white/5 flex items-center justify-center shadow-xl dark:shadow-[0_0_100px_rgba(255,0,122,0.15)] animate-float">
        <div className="absolute inset-4 rounded-full border border-brand-cyan/20 animate-spin-slow"></div>
        <img src={LOGO_URL} alt="MF Prod" className="w-[300px] h-[300px] object-contain relative z-30" />
      </div>

      {/* Orbite 1 (Intérieure) : Notes rapides (Taille augmentée) */}
      <div className="absolute border border-black/5 dark:border-white/5 w-[550px] h-[550px] rounded-full animate-spin-slow duration-[40s]">
         {[
           <Music size={44} />, 
           <Music2 size={40} />, 
           <Music3 size={42} />, 
           <Music4 size={40} />
         ].map((icon, i) => (
             <div 
                key={i} 
                className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 flex items-center justify-center text-brand-cyan opacity-80"
                style={{ transform: `rotate(${(i * 90)}deg) translate(275px) rotate(-${(i * 90)}deg)` }}
             >
                 {icon}
             </div>
         ))}
      </div>

      {/* Orbite 2 (Milieu) */}
      <div className="absolute border border-black/10 dark:border-white/10 w-[800px] h-[800px] rounded-full animate-spin-reverse-slow duration-[80s]">
        {ring2Items.map((item, i) => (
             <div 
                key={i} 
                className="absolute top-1/2 left-1/2 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `rotate(${item.angle}deg) translate(400px) rotate(-${item.angle}deg)` }}
             >
                 {item.icon}
             </div>
        ))}
      </div>

      {/* Orbite 3 (Extérieure) */}
      <div className="absolute border border-black/5 dark:border-white/5 w-[1050px] h-[1050px] rounded-full animate-spin-super-slow duration-[160s]">
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
      
      {/* Accents Esthétiques Statiques */}
      <div className="absolute border border-black/5 dark:border-white/5 w-[1150px] h-[1150px] rounded-full opacity-20" />
    </div>
  );
};

export default Orrery;
