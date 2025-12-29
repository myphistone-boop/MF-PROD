
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View } from '../../../types';
import { Compass, Music, ArrowLeft, Clock, MapPin, User, Mail, Phone } from 'lucide-react';

interface Props { onNavigate: (view: View) => void; }

const DanseInstruments: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                <div className={`mb-24 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="font-sans font-black text-5xl md:text-7xl lg:text-9xl text-brand-dark dark:text-white mb-8 tracking-tighter leading-none uppercase">
                        DANSE & <br/><span className="gradient-text italic">INSTRUMENTS</span>
                    </h1>
                    <p className="text-brand-dark/60 dark:text-brand-light/60 text-xl lg:text-3xl font-light max-w-4xl leading-relaxed">
                        Des disciplines complémentaires pour un épanouissement artistique complet. Travail du corps et maîtrise musicale.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* DANSE */}
                    <div className="flex flex-col bg-white dark:bg-brand-dark-soft border-2 border-black/5 dark:border-white/10 rounded-[4rem] overflow-hidden hover:border-brand-cyan/40 transition-all duration-500 shadow-xl dark:shadow-2xl group/dance">
                        <div className="relative h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover transform transition-transform duration-700 group-hover/dance:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-dark-soft to-transparent opacity-60"></div>
                        </div>
                        
                        <div className="p-12 lg:p-16 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-12">
                                <div className="p-5 rounded-3xl bg-brand-light dark:bg-brand-dark border border-black/5 dark:border-white/10 text-brand-cyan shadow-xl"><Compass size={32} /></div>
                                <div className="text-right">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-brand-dark/20 dark:text-white/20 mb-1 block">TARIF ANNUEL</span>
                                    <span className="text-4xl font-black text-brand-dark dark:text-white">250 €</span>
                                </div>
                            </div>

                            <h3 className="text-5xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-8 group-hover/dance:text-brand-cyan transition-colors">COURS DE <br/>DANSE</h3>
                            <p className="text-lg text-brand-dark/60 dark:text-brand-light/60 font-light leading-relaxed mb-12">
                                Libérez votre énergie, développez votre technique et exprimez votre créativité dans un cadre bienveillant.
                            </p>

                            <div className="space-y-6 mb-16 bg-black/5 dark:bg-white/5 p-8 rounded-[2.5rem] transition-colors duration-500">
                                <div className="flex items-center gap-4 text-brand-dark/80 dark:text-brand-light/80">
                                    <Clock size={16} className="text-brand-cyan" />
                                    <span className="text-sm font-black uppercase tracking-widest">Mardi à 20H00 (1H30)</span>
                                </div>
                                <div className="flex items-center gap-4 text-brand-dark/80 dark:text-brand-light/80">
                                    <MapPin size={16} className="text-brand-cyan" />
                                    <span className="text-sm font-black uppercase tracking-widest">L'Atelier – Cornas</span>
                                </div>
                                <div className="flex items-center gap-4 text-brand-dark/80 dark:text-brand-light/80 border-t border-black/5 dark:border-white/10 pt-6">
                                    <User size={16} className="text-brand-magenta" />
                                    <span className="text-sm font-black uppercase tracking-widest">Alexandra Garcia Alvarez</span>
                                </div>
                            </div>

                            <Button onClick={() => onNavigate(View.BOOKING)} className="w-full shadow-lg">S'inscrire</Button>
                        </div>
                    </div>

                    {/* INSTRUMENTS */}
                    <div className="flex flex-col bg-white dark:bg-brand-dark-soft border-2 border-black/5 dark:border-white/10 rounded-[4rem] overflow-hidden hover:border-brand-orange/40 transition-all duration-500 shadow-xl dark:shadow-2xl group/music">
                        <div className="relative h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1520529688554-539066601f0a?auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover transform transition-transform duration-700 group-hover/music:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-dark-soft to-transparent opacity-60"></div>
                        </div>

                        <div className="p-12 lg:p-16 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-12">
                                <div className="p-5 rounded-3xl bg-brand-light dark:bg-brand-dark border border-black/5 dark:border-white/10 text-brand-orange shadow-xl"><Music size={32} /></div>
                                <div className="text-right">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-brand-dark/20 dark:text-white/20 mb-1 block">TARIF</span>
                                    <span className="text-4xl font-black text-brand-dark dark:text-white">30 € <span className="text-xs text-brand-dark/20 dark:text-white/20 ml-2">/ H</span></span>
                                </div>
                            </div>

                            <h3 className="text-5xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-8 group-hover/music:text-brand-orange transition-colors">PIANO & <br/>GUITARE</h3>
                            <p className="text-lg text-brand-dark/60 dark:text-brand-light/60 font-light leading-relaxed mb-12">
                                Apprenez à vous accompagner seul ou explorez le répertoire de vos rêves avec David Souclier.
                            </p>

                            <div className="space-y-6 mb-16 bg-black/5 dark:bg-white/5 p-8 rounded-[2.5rem] transition-colors duration-500">
                                <div className="flex items-center gap-4 text-brand-dark/80 dark:text-brand-light/80">
                                    <Clock size={16} className="text-brand-orange" />
                                    <span className="text-sm font-black uppercase tracking-widest">Lundi (Cours 1H)</span>
                                </div>
                                <div className="flex items-center gap-4 text-brand-dark/80 dark:text-brand-light/80">
                                    <MapPin size={16} className="text-brand-orange" />
                                    <span className="text-sm font-black uppercase tracking-widest">L'Atelier – Cornas</span>
                                </div>
                                <div className="flex items-center gap-4 text-brand-dark/80 dark:text-brand-light/80 border-t border-black/5 dark:border-white/10 pt-6">
                                    <User size={16} className="text-brand-magenta" />
                                    <span className="text-sm font-black uppercase tracking-widest">David Souclier</span>
                                </div>
                            </div>

                            <div className="mt-auto grid grid-cols-2 gap-4">
                                <a href="tel:0668302177" className="flex items-center justify-center gap-3 py-4 rounded-full border border-black/10 dark:border-white/10 hover:border-brand-orange text-xs font-black tracking-widest transition-all shadow-md bg-white dark:bg-transparent">
                                    <Phone size={14} /> APPELER
                                </a>
                                <a href="mailto:dsouclier@aol.com" className="flex items-center justify-center gap-3 py-4 rounded-full border border-black/10 dark:border-white/10 hover:border-brand-orange text-xs font-black tracking-widest transition-all shadow-md bg-white dark:bg-transparent">
                                    <Mail size={14} /> EMAIL
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DanseInstruments;
