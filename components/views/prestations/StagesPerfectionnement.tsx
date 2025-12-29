
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { Music, ArrowLeft, Clock, MapPin, Star, Sparkles, Check } from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const StagesPerfectionnement: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    const stageData = {
        title: "Stage Intensif",
        duration: "1 Semaine",
        price: "450 €",
        spots: { total: 12, taken: 9 },
        program: ["Technique Vocale", "Interprétation Scénique", "Gestion du Stress", "Enregistrement Studio"],
        location: "L'Atelier – Cornas"
    };

    const handleBooking = () => {
        onNavigate(View.BOOKING, {
            serviceId: View.STAGES_PERFECTIONNEMENT,
            serviceName: "Stage de Perfectionnement",
            type: 'RESERVATION',
            price: stageData.price,
            spotsTotal: stageData.spots.total,
            spotsTaken: stageData.spots.taken,
            duration: stageData.duration
        });
    };

    const remaining = stageData.spots.total - stageData.spots.taken;

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
                            <Sparkles size={14} className="text-brand-cyan" />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Immersion Totale</span>
                        </div>
                        <h1 className="font-sans font-black text-6xl lg:text-8xl text-brand-dark dark:text-white mb-8 tracking-tighter leading-none uppercase">
                            STAGES DE <br/><span className="gradient-text italic">PERFECTIONNEMENT</span>
                        </h1>
                        <p className="text-brand-dark/60 dark:text-brand-light/60 text-xl lg:text-2xl font-light mb-12 leading-relaxed">
                            Une semaine pour transformer votre pratique. Un accompagnement d'élite limité à 12 participants pour garantir un suivi ultra-personnalisé.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {stageData.program.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-md dark:shadow-none">
                                    <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan"><Check size={16} /></div>
                                    <span className="text-brand-dark dark:text-white font-black text-sm uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="bg-white dark:bg-brand-dark-soft border-2 border-black/5 dark:border-white/10 rounded-[4rem] p-12 lg:p-16 relative shadow-2xl transition-colors duration-500">
                            <div className="flex justify-between items-start mb-12">
                                <div className="p-6 rounded-3xl bg-brand-light dark:bg-brand-dark border border-black/5 dark:border-white/10 text-brand-cyan shadow-xl"><Music size={40} /></div>
                                <div className="text-right">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-brand-dark/20 dark:text-white/20 mb-1 block">TARIF SESSION</span>
                                    <span className="text-5xl font-black text-brand-dark dark:text-white tracking-tighter">{stageData.price}</span>
                                </div>
                            </div>

                            <div className="space-y-8 mb-16">
                                <div className="flex items-center gap-6">
                                    <Clock size={24} className="text-brand-cyan" />
                                    <div>
                                        <span className="text-[10px] uppercase font-black text-brand-dark/30 dark:text-white/30 block">DURÉE</span>
                                        <span className="text-xl font-black text-brand-dark dark:text-white uppercase">{stageData.duration}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <MapPin size={24} className="text-brand-cyan" />
                                    <div>
                                        <span className="text-[10px] uppercase font-black text-brand-dark/30 dark:text-white/30 block">LIEU</span>
                                        <span className="text-xl font-black text-brand-dark dark:text-white uppercase">{stageData.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-brand-light dark:bg-brand-dark rounded-3xl p-8 border border-black/5 dark:border-white/5 mb-12">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-black text-brand-dark/50 dark:text-white/50 uppercase tracking-widest">Places restantes</span>
                                    <span className={`text-xl font-black ${remaining < 5 ? 'text-brand-orange' : 'text-brand-cyan'}`}>{remaining} / {stageData.spots.total}</span>
                                </div>
                                <div className="h-3 bg-black/10 dark:bg-white/5 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full transition-all duration-1000 ${remaining < 5 ? 'bg-brand-orange' : 'bg-brand-cyan'}`} 
                                        style={{ width: `${(stageData.spots.taken / stageData.spots.total) * 100}%` }}
                                    />
                                </div>
                            </div>

                            <Button onClick={handleBooking} className="w-full py-8 text-xl shadow-xl">Réserver ma participation</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Fixed error: Added missing default export
export default StagesPerfectionnement;
