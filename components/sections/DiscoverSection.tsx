
import React, { useEffect, useState } from 'react';
import { View } from '../../types';
import { Mic2, Music, Star, ChevronRight, Zap } from 'lucide-react';

interface DiscoverSectionProps {
    onNavigate: (view: View) => void;
}

const DiscoverSection: React.FC<DiscoverSectionProps> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const approaches = [
        {
            id: View.PRODUCTION_SPECTACLES,
            icon: <Zap className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1514525253344-f814d074e03b?auto=format&fit=crop&w=800&q=80",
            title: "Spectacles",
            subtitle: "Production & Contact",
            desc: "Direction artistique et création complète. Contact direct Mikael."
        },
        {
            id: View.STAGES_PERFECTIONNEMENT,
            icon: <Music className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
            title: "Stages",
            subtitle: "1 Semaine / Places Limitées",
            desc: "Perfectionnement intensif avec décompte de places disponibles."
        },
        {
            id: View.COURS_INDIVIDUELS,
            icon: <Mic2 className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1559519529-bb3963102c4b?auto=format&fit=crop&w=800&q=80",
            title: "Cours",
            subtitle: "Agenda / Individuel",
            desc: "Coaching vocal hebdomadaire sur réservation en ligne."
        },
        {
            id: View.CHORALE,
            icon: <Star className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
            title: "Chorale",
            subtitle: "Annuel / Collectif",
            desc: "Vivez l'harmonie vocale. Décompte des inscriptions annuelles."
        }
    ];

    return (
        <section id="prestations" className="w-full py-24 lg:py-32 px-6 lg:px-12 relative dark:bg-brand-dark transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto">
                <div className={`text-center mb-16 lg:mb-24 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl text-brand-dark dark:text-white mb-6 tracking-tighter">NOS <span className="gradient-text uppercase">PRESTATIONS</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {approaches.map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => onNavigate(item.id)}
                            className={`group relative h-[500px] cursor-pointer rounded-[2.5rem] overflow-hidden transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} hover:shadow-[0_40px_80px_-20px_rgba(255,0,122,0.3)] hover:-translate-y-4 shadow-xl dark:shadow-none`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2s] grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-white/20 dark:from-brand-dark dark:via-brand-dark/40 dark:to-brand-dark/20 group-hover:via-white/20 dark:group-hover:via-brand-dark/40 transition-colors duration-500"></div>

                            <div className="relative h-full p-10 flex flex-col items-start justify-end z-10">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 text-brand-dark dark:text-white group-hover:bg-brand-magenta group-hover:text-white transition-all duration-500 shadow-xl">
                                    {item.icon}
                                </div>
                                <h3 className="font-sans font-black text-2xl text-brand-dark dark:text-white mb-2 leading-tight uppercase">{item.title}</h3>
                                <span className="uppercase tracking-[0.3em] text-[9px] font-bold mb-6 block text-brand-cyan group-hover:text-brand-magenta transition-colors">{item.subtitle}</span>
                                <p className="font-sans text-xs text-brand-dark/70 dark:text-brand-light/50 leading-relaxed font-light mb-8">
                                    {item.desc}
                                </p>
                                <div className="w-full flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-brand-cyan group-hover:text-brand-magenta transition-colors">
                                    <span>Découvrir</span>
                                    <ChevronRight size={14} className="transform group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
