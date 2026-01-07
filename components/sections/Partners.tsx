
import React, { useEffect, useState } from 'react';
import { ASSETS } from '../../assets';
import { Handshake } from 'lucide-react';
import { usePerformanceMode } from '../../hooks/usePerformanceMode';

const Partners: React.FC = () => {
  const { isMobile } = usePerformanceMode();
  // Sur mobile, affichage instantané. Sur desktop, animation après montage.
  const [mounted, setMounted] = useState(isMobile);

  useEffect(() => {
    // Sur desktop uniquement, déclencher l'animation
    if (!isMobile) {
      setMounted(true);
    }
  }, [isMobile]);

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden bg-brand-light dark:bg-brand-dark transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className={`text-center mb-10 lg:mb-16 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-6">
            <Handshake size={14} className="text-brand-cyan" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Réseau & Confiance</span>
          </div>
          <h2 className="font-sans font-black text-3xl lg:text-6xl text-brand-dark dark:text-white tracking-tighter uppercase mb-4">
            NOS <span className="gradient-text italic">PARTENAIRES</span>
          </h2>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid grid-cols-7 gap-8 items-center justify-items-center">
          {ASSETS.PARTNERS.map((logoUrl, index) => (
            <div key={index} className="group relative w-full aspect-square max-w-[140px] flex items-center justify-center bg-white border-2 border-white rounded-[2.5rem] p-6 shadow-xl hover:shadow-2xl transition-all">
              <img src={logoUrl} alt="Partenaire" className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Mobile: Marquee */}
        <div className="lg:hidden relative w-full overflow-hidden">
           <div className="flex w-max animate-marquee gap-6 py-4">
              {[...ASSETS.PARTNERS, ...ASSETS.PARTNERS].map((logoUrl, index) => (
                <div key={index} className="w-20 h-20 flex-shrink-0 bg-white rounded-2xl p-4 flex items-center justify-center shadow-lg">
                  <img src={logoUrl} alt="Partenaire" className="max-w-full max-h-full object-contain" />
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
