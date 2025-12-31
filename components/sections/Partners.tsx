
import React, { useEffect, useState } from 'react';
import { ASSETS } from '../../assets';
import { Handshake } from 'lucide-react';

const Partners: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-brand-light dark:bg-brand-dark transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
            <Handshake size={14} className="text-brand-cyan" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Réseau & Confiance</span>
          </div>
          <h2 className="font-sans font-black text-4xl lg:text-6xl text-brand-dark dark:text-white tracking-tighter uppercase mb-6">
            NOS <span className="gradient-text italic">PARTENAIRES</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-orange mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-12 items-center justify-items-center">
          {ASSETS.PARTNERS.map((logoUrl, index) => (
            <div 
              key={index} 
              className={`
                group relative w-full aspect-square max-w-[160px] flex items-center justify-center 
                bg-white border border-black/10
                rounded-[2.5rem] p-6 transition-all duration-700 hover:border-brand-magenta/40 
                hover:shadow-2xl dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)] 
                transform hover:-translate-y-2
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={logoUrl} 
                alt={`Partenaire ${index + 1}`} 
                className="max-w-full max-h-full object-contain opacity-100 transition-all duration-500 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
