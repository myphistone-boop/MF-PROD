
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { Target, Layers, Send, Quote, Globe, MessageSquare, ArrowLeft } from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const FormationVoix: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    const objectives = [
        "Améliorer la présence vocale",
        "Renforcer la communication orale",
        "Optimiser la voix pour la vente",
        "Maîtriser la prise de parole publique"
    ];

    const handleBooking = () => {
        onNavigate(View.BOOKING, {
            serviceId: View.FORMATION_VOIX,
            serviceName: "Formation Voix & Com",
            type: 'RESERVATION',
            price: "Sur Devis"
        });
    };

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Hub
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
                    <div className={`lg:col-span-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
                            <Target size={14} className="text-brand-cyan" />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Performance B2B / B2C</span>
                        </div>
                        
                        <h1 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-brand-dark dark:text-white mb-12 tracking-tighter leading-[0.85] uppercase">
                            VOIX & <br/><span className="gradient-text italic">COMMUNICATION</span>
                        </h1>
                        
                        <div className="relative rounded-[3rem] overflow-hidden mb-16 group">
                            <img src="https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&w=1200&q=80" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-[3s]" alt="Communication" />
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-light dark:from-brand-dark via-transparent to-transparent opacity-80 dark:opacity-40"></div>
                            <div className="absolute bottom-10 left-10 max-w-lg">
                                <p className="text-brand-dark dark:text-brand-light/80 text-xl lg:text-2xl font-light leading-relaxed">
                                    Optimisez votre outil de travail le plus précieux : votre voix. Des stages intensifs pour une éloquence sans faille.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                            <div className="bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 p-10 rounded-[3rem] hover:border-brand-cyan shadow-xl transition-all group">
                                <Globe size={40} className="text-brand-cyan mb-8 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-black text-brand-dark dark:text-white mb-4">ENTREPRISES</h3>
                                <p className="text-brand-dark/50 dark:text-brand-light/50 font-light leading-relaxed">Formations sur-mesure pour vos équipes commerciales, managers et présentateurs.</p>
                            </div>
                            <div className="bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 p-10 rounded-[3rem] hover:border-brand-magenta shadow-xl transition-all group">
                                <MessageSquare size={40} className="text-brand-magenta mb-8 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-black text-brand-dark dark:text-white mb-4">PARTICULIERS</h3>
                                <p className="text-brand-dark/50 dark:text-brand-light/50 font-light leading-relaxed">Préparez un entretien, un discours ou travaillez votre charisme oral au quotidien.</p>
                            </div>
                        </div>

                        <div className="bg-black/5 dark:bg-white/5 border-l-8 border-brand-cyan p-12 rounded-r-[3rem] shadow-xl max-w-4xl relative overflow-hidden transition-colors">
                             <Quote className="text-brand-cyan/20 w-16 h-16 mb-4 relative z-10" />
                             <p className="text-2xl lg:text-4xl font-black text-brand-dark dark:text-white italic tracking-tight leading-tight relative z-10">
                                "La voix n'est pas seulement un son, c'est l'âme de votre message."
                             </p>
                        </div>
                    </div>

                    <div className="lg:col-span-4 sticky top-40 lg:top-48 z-10">
                        <div className="bg-white dark:bg-brand-dark-soft border-2 border-black/5 dark:border-white/10 p-10 lg:p-14 rounded-[4rem] relative shadow-2xl group overflow-hidden transition-colors duration-500">
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-cyan/10 to-transparent pointer-events-none" />
                            <h3 className="text-2xl lg:text-3xl font-black text-brand-dark dark:text-white mb-8 tracking-tight uppercase">VOTRE STAGE SUR-MESURE</h3>
                            
                            <div className="space-y-6 lg:space-y-8 mb-16">
                                <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-cyan">OBJECTIFS PÉDAGOGIQUES</h4>
                                {objectives.map((obj, i) => (
                                    <div key={i} className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-xl bg-brand-light dark:bg-brand-dark border border-black/10 dark:border-white/10 flex items-center justify-center text-brand-cyan group-hover/item:bg-brand-cyan group-hover/item:text-brand-dark transition-all">
                                            <Layers size={14} />
                                        </div>
                                        <span className="text-base lg:text-lg text-brand-dark/80 dark:text-brand-light/80 font-medium tracking-tight leading-tight">{obj}</span>
                                    </div>
                                ))}
                            </div>

                            <Button onClick={handleBooking} className="w-full py-6 flex items-center justify-center gap-4 shadow-xl">
                                <Send size={20} /> Demander un devis
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Fixed error: Added missing default export
export default FormationVoix;
