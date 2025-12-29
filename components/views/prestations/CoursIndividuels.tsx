
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { Mic2, ArrowLeft, Calendar as CalendarIcon, Clock, Check } from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const CoursIndividuels: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    const handleBooking = () => {
        onNavigate(View.BOOKING, {
            serviceId: View.COURS_INDIVIDUELS,
            serviceName: "Cours Individuels",
            type: 'APPOINTMENT',
            price: "60 € / Heure"
        });
    };

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 mb-8">
                            <Mic2 size={14} className="text-brand-orange" />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange font-black">Coaching d'Élite</span>
                        </div>
                        <h1 className="font-sans font-black text-6xl lg:text-8xl text-brand-dark dark:text-white mb-8 tracking-tighter leading-none uppercase">
                            COURS <br/><span className="gradient-text italic">INDIVIDUELS</span>
                        </h1>
                        <p className="text-brand-dark/60 dark:text-brand-light/60 text-xl lg:text-2xl font-light mb-12 leading-relaxed">
                            Un suivi hebdomadaire pour sculpter votre voix. Choisissez vos créneaux librement via notre agenda en ligne.
                        </p>
                        
                        <div className="space-y-6">
                            {["Technique vocale", "Posture & Respiration", "Répertoire personnalisé", "Préparation casting"].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white shadow-md dark:shadow-none transition-all"><Check size={20} /></div>
                                    <span className="text-xl font-bold text-brand-dark dark:text-white uppercase tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-brand-dark-soft border-2 border-black/5 dark:border-white/10 rounded-[4rem] p-12 lg:p-16 relative shadow-2xl overflow-hidden group transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black text-brand-dark dark:text-white mb-10 tracking-tight uppercase">RÉSERVATION EN LIGNE</h3>
                            
                            <div className="p-8 bg-brand-light dark:bg-brand-dark rounded-3xl border border-black/5 dark:border-white/5 mb-12 transition-colors">
                                <div className="flex items-center gap-6 mb-8 border-b border-black/5 dark:border-white/5 pb-8">
                                    <CalendarIcon size={32} className="text-brand-orange" />
                                    <div>
                                        <span className="text-[10px] uppercase font-black text-brand-dark/30 dark:text-white/30 block">DISPONIBILITÉ</span>
                                        <span className="text-xl font-black text-brand-dark dark:text-white uppercase">Du Lundi au Vendredi</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <Clock size={32} className="text-brand-orange" />
                                    <div>
                                        <span className="text-[10px] uppercase font-black text-brand-dark/30 dark:text-white/30 block">CRÉNEAUX</span>
                                        <span className="text-xl font-black text-brand-dark dark:text-white uppercase">1H / Séance</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12">
                                <div className="flex justify-between items-center text-lg mb-4">
                                    <span className="text-brand-dark/40 dark:text-brand-light/40 uppercase tracking-widest text-[10px] font-black">Tarif Séance</span>
                                    <span className="text-3xl font-black text-brand-dark dark:text-white tracking-tighter">60 €</span>
                                </div>
                            </div>

                            <Button onClick={handleBooking} className="w-full py-8 text-xl shadow-xl">Ouvrir l'Agenda</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Fixed error: Added missing default export
export default CoursIndividuels;
