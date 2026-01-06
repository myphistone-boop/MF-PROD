
import React, { useState } from 'react';
import { Quote, Zap, Music, Star, Tv, Headphones, Mic2, ChevronDown, Award, Sparkles } from 'lucide-react';
import { ASSETS } from '../../assets';

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 lg:py-24 px-6 lg:px-12 relative dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 lg:mb-32">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-6 lg:mb-8">
              <Zap size={14} className="text-brand-cyan" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">L'Esprit MF Prod</span>
            </div>
            <h2 className="font-sans font-black text-4xl lg:text-8xl text-brand-dark dark:text-white mb-10 tracking-tighter leading-none uppercase">
              BIENVENUE DANS <br/><span className="gradient-text italic">NOTRE UNIVERS</span>
            </h2>
            
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 p-8 lg:p-12 rounded-[2rem] lg:rounded-[4rem] shadow-2xl relative overflow-hidden text-left lg:text-center">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-cyan via-brand-magenta to-brand-orange"></div>
              
              <div className={`${!isExpanded && 'max-h-[140px] lg:max-h-none'} overflow-hidden relative transition-all duration-700`}>
                <p className="text-lg lg:text-2xl font-light text-brand-dark/80 dark:text-brand-light/90 leading-relaxed italic font-serif">
                  "Chez MF Prod, nous sommes plus qu’une entreprise, nous sommes des créateurs de rêves et des maîtres de l’art de divertir. Avec une expérience unique dans le domaine de la création de spectacles, de la voix off, du coaching vocal et de l’animation télévisuelle, nous donnons vie à vos idées avec passion, innovation et excellence."
                </p>
                <p className="mt-6 lg:mt-10 text-sm lg:text-xl text-brand-dark/60 dark:text-brand-light/60 font-light leading-relaxed max-w-4xl mx-auto">
                  Nous croyons que chaque instant est une opportunité pour une expérience inoubliable. Notre vision est de repousser les limites de la créativité et de donner vie à vos rêves les plus fous.
                </p>
                {!isExpanded && <div className="lg:hidden absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-brand-dark to-transparent z-10" />}
              </div>

              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="lg:hidden mt-4 flex items-center gap-2 text-brand-magenta text-[10px] font-black uppercase tracking-widest"
              >
                {isExpanded ? 'Réduire' : 'En savoir plus'}
                <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] w-full rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-2xl bg-brand-dark">
              <img src={ASSETS.BIO.MIKAEL_PORTRAIT} className="w-full h-full object-cover" alt="Mikaël Ferreira" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 text-white">
                <div className="font-sans font-black text-2xl lg:text-5xl tracking-tighter uppercase leading-none mb-2">MIKAËL <br/>FERREIRA</div>
                <div className="text-brand-magenta uppercase tracking-[0.4em] text-[8px] lg:text-[10px] font-black">Fondateur MF Prod</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-12 lg:space-y-16">
              <h3 className="text-3xl lg:text-6xl font-black text-brand-dark dark:text-white tracking-tighter uppercase mb-6 leading-tight">
                L'EXCELLENCE AU SERVICE <br/>DE VOTRE <span className="gradient-text italic">VISION</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
                <div className="group border-l-2 border-brand-cyan/20 pl-8 transition-all hover:border-brand-cyan">
                  <div className="flex items-center gap-3 mb-4">
                    <Mic2 size={18} className="text-brand-cyan" />
                    <h4 className="text-lg lg:text-2xl font-black text-brand-dark dark:text-white uppercase tracking-tight">Artiste Musical</h4>
                  </div>
                  <p className="text-sm lg:text-lg text-brand-dark/60 dark:text-brand-light/60 font-light leading-relaxed">
                    Auteur-Compositeur accompli avec <strong className="text-brand-cyan font-bold">4 albums studio</strong> à son actif. Son expertise vocale et sa direction de chœur fusionnent pour offrir une pédagogie de haut niveau, mêlant technique pure et sensibilité artistique.
                  </p>
                </div>

                <div className="group border-l-2 border-brand-magenta/20 pl-8 transition-all hover:border-brand-magenta">
                  <div className="flex items-center gap-3 mb-4">
                    <Star size={18} className="text-brand-magenta" />
                    <h4 className="text-lg lg:text-2xl font-black text-brand-dark dark:text-white uppercase tracking-tight">Direction Artistique</h4>
                  </div>
                  <p className="text-sm lg:text-lg text-brand-dark/60 dark:text-brand-light/60 font-light leading-relaxed">
                    Architecte de l'imaginaire fort de plus de <strong className="text-brand-magenta font-bold">20 spectacles originaux</strong>. Son savoir-faire a rayonné auprès d'institutions mondiales telles que <strong className="text-white">Disneyland Paris</strong> et le <strong className="text-white">Club Med</strong>, garantissant des productions immersives d'exception.
                  </p>
                </div>
              </div>

              {/* Accents pour PC uniquement */}
              <div className="hidden lg:flex gap-10 pt-8 border-t border-black/5 dark:border-white/5">
                <div className="flex items-center gap-4">
                   <Award className="text-brand-orange" size={24} />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Qualité Premium</span>
                </div>
                <div className="flex items-center gap-4">
                   <Sparkles className="text-brand-cyan" size={24} />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Innovation Scénique</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
