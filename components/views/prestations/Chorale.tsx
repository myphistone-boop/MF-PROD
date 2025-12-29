
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { Users, ArrowLeft, Clock, MapPin, Sparkles } from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const Chorale: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    const choraleData = {
        title: "Chorale MF Prod",
        schedule: "Mercredi : 20H30 - 22H00",
        price: "280 €",
        spots: { total: 30, taken: 26 },
        location: "L'Atelier – Cornas"
    };

    const handleBooking = () => {
        onNavigate(View.BOOKING, {
            serviceId: View.CHORALE,
            serviceName: "Chorale (Annuelle)",
            type: 'RESERVATION',
            price: choraleData.price,
            spotsTotal: choraleData.spots.total,
            spotsTaken: choraleData.spots.taken
        });
    };

    const remaining = choraleData.spots.total - choraleData.spots.taken;

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
                            <Users size={14} className="text-brand-cyan" />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Aventure Collective</span>
                        </div>
                        <h1 className="font-sans font-black text-6xl lg:text-8xl text-brand-dark dark:text-white mb-8 tracking-tighter leading-none uppercase">
                            CHORALE <br/><span className="gradient-text italic">MF PROD</span>
                        </h1>
                        <p className="text-brand-dark/60 dark:text-brand-light/60 text-xl lg:text-2xl font-light mb-12 leading-relaxed">
                            Rejoignez notre ensemble vocal pour une année riche en harmonies. Un répertoire varié, des concerts et une ambiance unique à Cornas.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-brand-dark-soft border-2 border-black/5 dark:border-white/10 rounded-[4rem] p-12 lg:p-16 relative shadow-2xl transition-colors duration-500">
                        <div className="flex justify-between items-start mb-12">
                            <div className="p-6 rounded-3xl bg-brand-light dark:bg-brand-dark border border-black/5 dark:border-white/10 text-brand-cyan shadow-xl"><Sparkles size={40} /></div>
                            <div className="text-right">
                                <span className="text-[10px] uppercase font-black tracking-widest text-brand-dark/20 dark:text-white/20 mb-1 block">COTISATION ANNUELLE</span>
                                <span className="text-5xl font-black text-brand-dark dark:text-white tracking-tighter">{choraleData.price}</span>
                            </div>
                        </div>

                        <div className="space-y-8 mb-16">
                            <div className="flex items-center gap-6">
                                <Clock size={24} className="text-brand-cyan" />
                                <span className="text-xl font-black text-brand-dark dark:text-white uppercase">{choraleData.schedule}</span>
                            </div>
                            <div className="flex items-center gap-6">
                                <MapPin size={24} className="text-brand-cyan" />
                                <span className="text-xl font-black text-brand-dark dark:text-white uppercase">{choraleData.location}</span>
                            </div>
                        </div>

                        <div className="bg-brand-light dark:bg-brand-dark rounded-3xl p-8 border border-black/5 dark:border-white/5 mb-12 transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-black text-brand-dark/50 dark:text-white/50 uppercase tracking-widest">Places disponibles</span>
                                <span className={`text-xl font-black ${remaining < 5 ? 'text-brand-orange' : 'text-brand-cyan'}`}>{remaining} / {choraleData.spots.total}</span>
                            </div>
                            <div className="h-3 bg-black/10 dark:bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-cyan" style={{ width: `${(choraleData.spots.taken / choraleData.spots.total) * 100}%` }} />
                            </div>
                            {remaining < 5 && <p className="text-[10px] font-black uppercase text-brand-orange mt-4 animate-pulse">Plus que {remaining} places !</p>}
                        </div>

                        <Button onClick={handleBooking} className="w-full py-8 text-xl shadow-xl">Bloquer ma place</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chorale;
