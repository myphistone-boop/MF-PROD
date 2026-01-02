
import React from 'react';
import { Button } from '../ui/Button';
import { Star, Music, Zap } from 'lucide-react';
import { View } from '../../types';

interface MenSectionProps {
  onNavigate: (view: View, context?: any) => void;
}

const MenSection: React.FC<MenSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-light dark:bg-brand-dark transition-colors duration-500 overflow-hidden flex flex-col justify-center">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
            <div className="flex flex-col gap-10 lg:gap-16">
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden border-2 border-black/5 dark:border-white/10 shadow-xl dark:shadow-[0_0_80px_rgba(255,0,122,0.15)] group">
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                        alt="Spectacle SUPERSTARS" 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[3s]"
                    />
                    <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 bg-white dark:bg-white text-brand-dark px-10 py-5 rounded-full uppercase tracking-[0.3em] font-black text-xs lg:text-base z-20 shadow-2xl flex items-center gap-4">
                        <Zap size={20} className="text-brand-magenta animate-pulse" />
                        <span>À L'AFFICHE : SUPERSTARS</span>
                    </div>
                </div>

                <div className="w-full">
                    <div className="bg-white dark:bg-brand-dark-soft/90 backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-[3rem] p-10 lg:p-20 shadow-2xl relative overflow-hidden transition-colors duration-500">
                        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-magenta/5 rounded-full blur-[150px] pointer-events-none" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                            <div className="lg:col-span-7">
                                <span className="inline-block py-2 px-6 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan uppercase tracking-[0.4em] font-black text-xs mb-8">Production MF Prod</span>
                                <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl text-brand-dark dark:text-white mb-8 leading-[0.8] tracking-tighter">SUPERSTARS <br/><span className="gradient-text italic">LE SPECTACLE</span></h2>
                                <div className="flex flex-col gap-8">
                                    <p className="text-brand-dark/70 dark:text-brand-light/70 text-xl lg:text-2xl leading-relaxed font-light">Un spectacle musical événement porté par MF Prod, réunissant artistes d'exception, scénographie moderne et performances live à couper le souffle.</p>
                                    <div className="flex items-center gap-6 text-brand-magenta font-serif italic text-2xl lg:text-3xl border-l-4 border-brand-magenta/30 pl-8">"L'immersion totale dans la légende musicale."</div>
                                </div>
                            </div>
                            <div className="lg:col-span-5 flex flex-col gap-6">
                                <div className="grid grid-cols-1 gap-4">
                                     {[
                                        { icon: <Music size={24} />, title: "Live", desc: "Orchestre et voix en direct" },
                                        { icon: <Star size={24} />, title: "Émotion", desc: "Mise en scène immersive" }
                                     ].map((item, i) => (
                                        <div key={i} className="bg-black/5 dark:bg-white/5 px-8 py-6 rounded-[2rem] border border-black/5 dark:border-white/10 hover:border-brand-magenta/50 transition-all flex items-center gap-6 group">
                                            <div className="text-brand-magenta group-hover:scale-110 transition-transform">{item.icon}</div>
                                            <div>
                                                <h4 className="font-sans font-black text-2xl text-brand-dark dark:text-white leading-none mb-1">{item.title}</h4>
                                                <p className="text-[10px] text-brand-dark/40 dark:text-brand-light/40 uppercase tracking-widest font-bold">{item.desc}</p>
                                            </div>
                                        </div>
                                     ))}
                                </div>
                                <div className="mt-4">
                                    <Button onClick={() => onNavigate(View.PRODUCTION_SPECTACLES, { sectionId: 'superstars' })} className="w-full py-6 shadow-xl">Découvrir le Spectacle</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </section>
  );
};

export default MenSection;
