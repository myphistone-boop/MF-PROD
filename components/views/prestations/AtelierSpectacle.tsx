
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { Star, ArrowLeft, Clock, MapPin } from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const AtelierSpectacle: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    const groups = [
        {
            id: 'atelier_adulte',
            title: "Adultes",
            subtitle: "3 Groupes Disponibles",
            image: "https://images.unsplash.com/photo-1503095396549-807039045349?auto=format&fit=crop&w=1000&q=80",
            desc: "Créez et interprétez un spectacle pro. Chant, danse et jeu scénique.",
            schedules: ["Jeudi : 19H00 - 20H15 / 20H30 - 21H45", "Vendredi : 18H30 - 19H45"],
            price: "360 €",
            spots: { total: 45, taken: 42 },
            productions: ["COCO", "Marie Curie", "Boogie Wonderland"],
            color: "brand-magenta"
        },
        {
            id: 'atelier_enfant',
            title: "Enfants",
            subtitle: "Éveil Artistique",
            image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1000&q=80",
            desc: "Découvrez l'art de la scène dès le plus jeune âge dans une ambiance ludique.",
            schedules: ["Samedi : 10H30 - 12H00"],
            price: "360 €",
            spots: { total: 20, taken: 15 },
            productions: ["Création en cours"],
            color: "brand-cyan"
        }
    ];

    const handleBooking = (group: typeof groups[0]) => {
        onNavigate(View.BOOKING, {
            serviceId: View.ATELIER_SPECTACLE,
            serviceName: `Atelier Spectacle ${group.title}`,
            type: 'RESERVATION',
            price: group.price,
            spotsTotal: group.spots.total,
            spotsTaken: group.spots.taken
        });
    };

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                <div className={`mb-24 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="font-sans font-black text-5xl md:text-7xl lg:text-9xl text-brand-dark dark:text-white mb-8 tracking-tighter leading-none uppercase">
                        ATELIER <br/><span className="gradient-text italic">SPECTACLE</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {groups.map((group, i) => (
                        <div key={i} className="bg-white dark:bg-brand-dark-soft border-2 border-black/5 dark:border-white/5 rounded-[4rem] overflow-hidden hover:border-brand-magenta/40 transition-all duration-700 shadow-xl dark:shadow-2xl relative group/card">
                            <div className="relative h-80 overflow-hidden">
                                <img src={group.image} alt={group.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-dark-soft via-transparent to-transparent"></div>
                                <div className="absolute top-8 left-8 p-5 rounded-3xl bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md border border-black/5 dark:border-white/10 text-brand-magenta shadow-xl"><Star size={32} /></div>
                            </div>

                            <div className="p-12 lg:p-16 relative">
                                <div className="absolute top-0 right-12 -translate-y-1/2 text-right">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-brand-cyan mb-1 block">SAISON 25/26</span>
                                    <span className="text-4xl font-black text-brand-dark dark:text-white">{group.price}</span>
                                </div>

                                <h3 className="text-5xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-4">{group.title}</h3>
                                
                                <div className="space-y-6 mb-16">
                                    <h4 className="text-xs uppercase font-black tracking-widest text-brand-dark/20 dark:text-white/20 mb-6">HORAIRES & LIEU</h4>
                                    {group.schedules.map((s, idx) => (
                                        <div key={idx} className="flex items-center gap-4 text-brand-dark/80 dark:text-brand-light/80">
                                            <Clock size={16} className="text-brand-magenta" />
                                            <span className="text-sm font-medium">{s}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-4 text-brand-dark/80 dark:text-brand-light/80">
                                        <MapPin size={16} className="text-brand-magenta" />
                                        <span className="text-sm font-medium">L'Atelier – Cornas (07130)</span>
                                    </div>
                                </div>

                                <Button onClick={() => handleBooking(group)} className="w-full py-6 text-lg shadow-xl">Réserver ma place</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Fixed error: Added missing default export
export default AtelierSpectacle;
