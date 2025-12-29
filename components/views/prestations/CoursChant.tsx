
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { Mic2, Check, ArrowLeft, Clock, MapPin } from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const CoursChant: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    const offerings = [
        {
            id: 'chant_particulier',
            title: "Cours Particuliers",
            badge: "Expertise Profonde",
            image: "https://images.unsplash.com/photo-1559519529-bb3963102c4b?auto=format&fit=crop&w=800&q=80",
            desc: "Accompagnement personnalisé pour libérer votre plein potentiel vocal.",
            features: ["Diagnostic Vocal", "Technique & Respiration", "Interprétation", "Support audio offert"],
            bookingType: 'APPOINTMENT' as const,
            pricing: [
                { qty: "2H / mois", price: "570 €" },
                { qty: "3H / mois", price: "850 €" },
                { qty: "4H / mois", price: "960 €" }
            ],
            color: "brand-cyan"
        },
        {
            id: 'chant_collectif',
            title: "Cours Collectifs",
            badge: "Dynamique de Groupe",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
            desc: "Chanter ensemble et progresser dans la convivialité du groupe.",
            features: ["Bases techniques", "Harmonie & Polyphonie", "Répertoire varié", "Convivialité"],
            bookingType: 'RESERVATION' as const,
            schedule: "Mardi & Mercredi (1H)",
            location: "L'Atelier – Cornas",
            price: "310 €",
            spots: { total: 15, taken: 12 },
            color: "brand-magenta"
        },
        {
            id: 'chant_chorale',
            title: "Chorale",
            badge: "Puissance Collective",
            image: "https://images.unsplash.com/photo-1514525253344-f814d074e03b?auto=format&fit=crop&w=800&q=80",
            desc: "Vivez l'harmonie vocale au sein d'un ensemble passionné.",
            features: ["Écoute & Harmonie", "Technique collective", "Répertoire diversifié", "Aventure humaine"],
            bookingType: 'RESERVATION' as const,
            schedule: "Mercredi à 20H30 (1H30)",
            location: "L'Atelier – Cornas",
            price: "280 €",
            spots: { total: 30, taken: 26 },
            color: "brand-orange"
        }
    ];

    const handleBooking = (item: typeof offerings[0]) => {
        onNavigate(View.BOOKING, {
            serviceId: View.COURS_CHANT,
            serviceName: item.title,
            type: item.bookingType,
            price: item.price || (item.pricing ? item.pricing[0].price : undefined),
            spotsTotal: item.spots?.total,
            spotsTaken: item.spots?.taken
        });
    };

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                <div className={`mb-24 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="font-sans font-black text-5xl md:text-7xl lg:text-9xl text-brand-dark dark:text-white mb-8 tracking-tighter leading-none uppercase">
                        COURS DE <br/><span className="gradient-text italic">CHANT & VOIX</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {offerings.map((item, i) => (
                        <div key={i} className="flex flex-col bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 rounded-[3rem] overflow-hidden hover:border-brand-magenta/40 transition-all duration-500 shadow-xl dark:shadow-2xl group">
                            <div className="relative h-64 overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-dark-soft to-transparent opacity-60"></div>
                            </div>

                            <div className="p-10 lg:p-12 flex flex-col flex-grow">
                                <div className="mb-10">
                                    <span className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-magenta block mb-4">{item.badge}</span>
                                    <h3 className="text-3xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-4">{item.title}</h3>
                                    <p className="text-brand-dark/50 dark:text-brand-light/50 text-base font-light mb-8">{item.desc}</p>
                                    <div className="space-y-4 mb-10">
                                        {item.features.map((f, idx) => (
                                            <div key={idx} className="flex items-center gap-4">
                                                <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan"><Check size={12} /></div>
                                                <span className="text-sm text-brand-dark/80 dark:text-brand-light/80">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto space-y-6 pt-10 border-t border-black/5 dark:border-white/5">
                                    {item.pricing ? (
                                        <div className="grid grid-cols-1 gap-3">
                                            {item.pricing.map((p, idx) => (
                                                <div key={idx} className="flex justify-between items-center py-3 px-6 rounded-2xl bg-black/5 dark:bg-brand-dark/40 border border-black/5 dark:border-white/5">
                                                    <span className="text-xs uppercase font-black text-brand-dark/40 dark:text-brand-light/40">{p.qty}</span>
                                                    <span className="text-xl font-black text-brand-dark dark:text-white tracking-tight">{p.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-brand-dark/60 dark:text-brand-light/60 text-xs uppercase font-black tracking-widest">
                                                <Clock size={14} className="text-brand-magenta" /> {item.schedule}
                                            </div>
                                            <div className="flex items-center gap-3 text-brand-dark/60 dark:text-brand-light/60 text-xs uppercase font-black tracking-widest">
                                                <MapPin size={14} className="text-brand-magenta" /> {item.location}
                                            </div>
                                            <div className="text-4xl font-black text-brand-dark dark:text-white tracking-tighter pt-4">{item.price}<span className="text-xs text-brand-dark/20 dark:text-white/20 ml-2">/ AN</span></div>
                                        </div>
                                    )}
                                    <Button onClick={() => handleBooking(item as any)} className="w-full shadow-lg">
                                        {item.bookingType === 'APPOINTMENT' ? 'Prendre RDV' : 'Réserver ma place'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Fixed error: Added missing default export
export default CoursChant;
