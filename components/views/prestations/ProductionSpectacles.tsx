
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { Zap, ArrowLeft, Phone, Mail, Star, Quote } from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const ProductionSpectacles: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
                    <div className={`lg:col-span-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-magenta/30 bg-brand-magenta/10 mb-8">
                            <Zap size={14} className="text-brand-magenta" />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-magenta font-black">Direction Artistique</span>
                        </div>
                        
                        <h1 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-brand-dark dark:text-white mb-12 tracking-tighter leading-[0.85] uppercase">
                            PRODUCTION <br/><span className="gradient-text italic">DE SPECTACLES</span>
                        </h1>
                        
                        <div className="relative rounded-[3rem] overflow-hidden mb-16 group aspect-video border-2 border-black/5 dark:border-white/10 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1501281668745-f74dea327912?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" alt="Production" />
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-light/60 dark:from-brand-dark/60 via-transparent to-transparent"></div>
                        </div>

                        <p className="text-brand-dark/70 dark:text-brand-light/70 text-2xl lg:text-3xl font-light leading-relaxed mb-16">
                            Mikael Ferreira assure la création complète de shows immersifs : casting, direction musicale, mise en scène et régie. Donnez une dimension professionnelle à vos événements.
                        </p>

                        <div className="bg-white dark:bg-white/5 border-l-8 border-brand-magenta p-12 rounded-r-[3rem] shadow-xl max-w-4xl relative overflow-hidden border border-black/5 dark:border-white/5 transition-colors duration-500">
                             <Quote className="text-brand-magenta/20 w-16 h-16 mb-4 relative z-10" />
                             <p className="text-2xl lg:text-4xl font-black text-brand-dark dark:text-white italic tracking-tight leading-tight relative z-10">
                                "Chaque spectacle est une histoire unique que nous écrivons ensemble."
                             </p>
                        </div>
                    </div>

                    <div className="lg:col-span-4 sticky top-40 lg:top-48 z-10">
                        <div className="bg-white dark:bg-brand-dark-soft border-2 border-black/5 dark:border-white/10 p-10 lg:p-14 rounded-[4rem] relative shadow-2xl overflow-hidden transition-colors duration-500">
                            <h3 className="text-2xl lg:text-3xl font-black text-brand-dark dark:text-white mb-8 tracking-tight uppercase">PARLONS DE VOTRE PROJET</h3>
                            
                            <div className="space-y-8 mb-16">
                                <a href="tel:0606578951" className="flex items-center gap-6 p-6 rounded-3xl bg-brand-light dark:bg-brand-dark border border-black/5 dark:border-white/5 hover:border-brand-magenta transition-all group shadow-sm">
                                    <div className="p-4 rounded-2xl bg-brand-magenta/10 text-brand-magenta group-hover:scale-110 transition-transform"><Phone size={24} /></div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-brand-dark/40 dark:text-white/40 block mb-1">Direct Mikael</span>
                                        <span className="text-xl font-black text-brand-dark dark:text-white">06 06 57 89 51</span>
                                    </div>
                                </a>
                                <a href="mailto:mikmarc@hotmail.fr" className="flex items-center gap-6 p-6 rounded-3xl bg-brand-light dark:bg-brand-dark border border-black/5 dark:border-white/5 hover:border-brand-magenta transition-all group shadow-sm">
                                    <div className="p-4 rounded-2xl bg-brand-magenta/10 text-brand-magenta group-hover:scale-110 transition-transform"><Mail size={24} /></div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-brand-dark/40 dark:text-white/40 block mb-1">Email</span>
                                        <span className="text-xl font-black text-brand-dark dark:text-white">mikmarc@hotmail.fr</span>
                                    </div>
                                </a>
                            </div>

                            <Button onClick={() => onNavigate(View.BOOKING, { serviceId: View.PRODUCTION_SPECTACLES, serviceName: "Production de Spectacles", type: 'CONTACT' })} className="w-full py-6 shadow-xl">
                                Demander un Devis
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductionSpectacles;
