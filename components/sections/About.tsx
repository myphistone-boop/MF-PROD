
import React from 'react';
import { Quote, Zap, Music, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative bg-brand-dark overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            <div className="lg:col-span-4 relative group">
                <div className="absolute top-10 -left-10 w-full h-full border-2 border-brand-magenta/30 rounded-[3rem] -z-10 transition-transform duration-700 group-hover:top-5 group-hover:-left-5"></div>
                <div className="relative h-[500px] lg:h-[750px] w-full rounded-[3rem] overflow-hidden shadow-2xl filter contrast-125 grayscale hover:grayscale-0 transition-all duration-1000">
                    <img 
                        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s]" 
                        alt="Mikael Ferreira" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-10 left-10 right-10 text-white">
                        <div className="font-sans font-black text-4xl lg:text-5xl tracking-tighter leading-none mb-4">MIKAEL <br/>FERREIRA</div>
                        <div className="text-brand-magenta uppercase tracking-[0.4em] text-xs font-black">Directeur Artistique</div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-8 relative">
                <Quote className="absolute -top-10 -left-10 w-32 h-32 text-white/5 rotate-180" />
                <div className="pl-0 lg:pl-16">
                    <span className="text-brand-cyan uppercase tracking-[0.5em] font-black text-xs block mb-8 flex items-center gap-6">
                        <span className="w-16 h-[2px] bg-brand-cyan"></span>
                        LE FONDATEUR
                    </span>
                    <h2 className="font-sans font-black text-6xl lg:text-9xl text-white mb-10 leading-[0.8] tracking-tighter">
                        L'ART DE LA <br/><span className="gradient-text italic">TRANSMISSION</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                         <p className="text-xl lg:text-2xl text-brand-light/70 font-light leading-relaxed text-justify">
                            Artiste polyvalent, Mikael Ferreira est chanteur, auteur-compositeur et directeur artistique. 
                            Il met son expérience de la scène au service de projets artistiques forts, accessibles et exigeants. 
                            Sa vision : créer des univers qui marquent durablement le public.
                        </p>
                        <p className="text-xl lg:text-2xl text-brand-light/70 font-light leading-relaxed text-justify">
                            À travers MF Prod, il accompagne les talents de demain et produit des spectacles musicaux d'envergure. 
                            Chaque projet est une expérience immersive, mêlant émotion, exigence et modernité pour un résultat d'excellence.
                        </p>
                    </div>
                    <div className="bg-white/5 border-l-8 border-brand-magenta p-10 rounded-r-3xl mb-16 shadow-2xl">
                        <p className="font-sans font-black text-3xl lg:text-4xl text-white italic leading-tight tracking-tight">
                            "Créer, ce n'est pas seulement inventer, c'est surtout savoir transmettre une émotion brute au cœur du public."
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
                        <div className="group"><span className="block text-4xl lg:text-7xl font-sans font-black text-brand-cyan mb-2 group-hover:scale-110 transition-transform origin-left">15+</span><span className="text-[10px] lg:text-xs uppercase tracking-[0.3em] text-brand-light/40 font-black">ANNÉES D'EXPÉRIENCE</span></div>
                        <div className="group"><span className="block text-4xl lg:text-7xl font-sans font-black text-brand-magenta mb-2 group-hover:scale-110 transition-transform origin-left">12</span><span className="text-[10px] lg:text-xs uppercase tracking-[0.3em] text-brand-light/40 font-black">SPECTACLES PRODUITS</span></div>
                        <div className="group"><span className="block text-4xl lg:text-7xl font-sans font-black text-brand-orange mb-2 group-hover:scale-110 transition-transform origin-left">500+</span><span className="text-[10px] lg:text-xs uppercase tracking-[0.3em] text-brand-light/40 font-black">ÉLÈVES COACHÉS</span></div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
};

export default About;
