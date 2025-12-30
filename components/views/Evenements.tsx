
import React, { useEffect, useState } from 'react';
import { View } from '../../types';
import { Button } from '../ui/Button';
import { Calendar, Star, Zap, ArrowLeft, ArrowRight, History, MapPin, Sparkles } from 'lucide-react';

interface EvenementsProps {
    onNavigate: (view: View) => void;
}

const Evenements: React.FC<EvenementsProps> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        window.scrollTo(0, 0);
    }, []);

    const upcomingEvents = [
        {
            title: "Tournée SUPERSTARS",
            date: "Janvier - Juin 2026",
            location: "Tournée Nationale",
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80",
            tag: "Production",
            desc: "Le nouveau spectacle événement de MF PROD arrive dans les plus grandes salles."
        },
        {
            title: "Ateliers Spectacles 2026",
            date: "Saison 25/26",
            location: "Cornas - L'Atelier",
            image: "https://images.unsplash.com/photo-1514525253361-bee8a4874aad?auto=format&fit=crop&w=1200&q=80",
            tag: "Formation",
            desc: "Inscriptions ouvertes pour les nouvelles troupes de création scénique."
        }
    ];

    const pastHighlights = [
        {
            year: "2024",
            title: "Festival de Cannes",
            role: "Interviews & Animation",
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80",
            color: "brand-orange"
        },
        {
            year: "2023",
            title: "13 COUPS",
            role: "Production & Acteur",
            image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1000&q=80",
            color: "brand-magenta"
        },
        {
            year: "2022",
            title: "Lumières Lyon",
            role: "Couverture Média",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=80",
            color: "brand-cyan"
        },
        {
            year: "2019",
            title: "Montélimar Agglo Festival",
            role: "Animation Scène",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
            color: "brand-magenta"
        }
    ];

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                
                {/* HERO SECTION */}
                <div className={`mb-32 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-magenta/30 bg-brand-magenta/10 mb-8">
                        <Calendar size={14} className="text-brand-magenta" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-magenta font-black">MF Prod Timeline</span>
                    </div>
                    <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-8 tracking-tighter leading-none uppercase">
                        NOS <br/><span className="gradient-text italic">ÉVÉNEMENTS</span>
                    </h1>
                    <p className="text-brand-dark/50 dark:text-brand-light/50 text-xl lg:text-2xl font-light max-w-4xl leading-relaxed">
                        Des festivals prestigieux aux nouvelles créations MF Prod, découvrez les moments qui forgent notre identité.
                    </p>
                </div>

                {/* PROCHAINS ÉVÉNEMENTS */}
                <section className="mb-48">
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-xs font-black uppercase tracking-[0.6em] text-brand-cyan">FUTURS RENDEZ-VOUS</h2>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-cyan/30 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {upcomingEvents.map((event, i) => (
                            <div key={i} className="group relative bg-white dark:bg-brand-dark-soft rounded-[4rem] border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:border-brand-cyan/40">
                                <div className="relative h-80 overflow-hidden">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2s]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="absolute top-8 right-8 px-6 py-2 rounded-full bg-brand-cyan text-brand-dark text-[10px] font-black uppercase tracking-widest shadow-xl">{event.tag}</div>
                                </div>
                                
                                <div className="p-12">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-4xl font-black text-brand-dark dark:text-white uppercase tracking-tighter leading-none">{event.title}</h3>
                                        <Zap size={24} className="text-brand-cyan" />
                                    </div>
                                    <p className="text-brand-dark/60 dark:text-brand-light/60 font-light text-lg mb-10 leading-relaxed">{event.desc}</p>
                                    
                                    <div className="flex flex-col sm:flex-row gap-8 py-8 border-y border-black/5 dark:border-white/5 mb-10">
                                        <div className="flex items-center gap-4 text-brand-dark/40 dark:text-white/40">
                                            <Calendar size={18} className="text-brand-magenta" />
                                            <span className="text-sm font-black uppercase tracking-widest">{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-brand-dark/40 dark:text-white/40">
                                            <MapPin size={18} className="text-brand-magenta" />
                                            <span className="text-sm font-black uppercase tracking-widest">{event.location}</span>
                                        </div>
                                    </div>

                                    <Button onClick={() => onNavigate(View.PRODUCTION_SPECTACLES)} className="w-full">En savoir plus</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ARCHIVES / RÉTROSPECTIVE */}
                <section className="mb-24">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-brand-magenta/30 to-transparent"></div>
                        <h2 className="text-xs font-black uppercase tracking-[0.6em] text-brand-magenta">RÉTROSPECTIVE</h2>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-magenta/30 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pastHighlights.map((highlight, i) => (
                            <div key={i} className="group relative bg-white dark:bg-brand-dark-soft rounded-[3.5rem] p-8 border border-black/5 dark:border-white/10 shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                                <div className="absolute -right-10 -top-10 text-[8rem] font-black opacity-[0.03] group-hover:opacity-[0.08] transition-opacity dark:text-white">{highlight.year}</div>
                                
                                <div className="relative z-10">
                                    <div className="aspect-video w-full rounded-3xl overflow-hidden mb-8 shadow-lg">
                                        <img src={highlight.image} alt={highlight.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    </div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-2 h-2 rounded-full bg-${highlight.color}`}></div>
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{highlight.year}</span>
                                    </div>
                                    <h4 className="text-xl font-black text-brand-dark dark:text-white uppercase tracking-tight mb-2">{highlight.title}</h4>
                                    <p className="text-xs font-light text-brand-dark/50 dark:text-brand-light/50 uppercase tracking-widest">{highlight.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FINAL CTA */}
                <div className="p-16 lg:p-24 rounded-[4rem] bg-brand-dark text-white border-2 border-white/10 relative overflow-hidden shadow-2xl text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-magenta/10 pointer-events-none" />
                    <Sparkles className="mx-auto mb-10 text-brand-cyan" size={48} />
                    <h3 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-10 leading-tight">VOTRE ÉVÉNEMENT <br/><span className="text-brand-magenta italic">AVEC MF PROD</span></h3>
                    <p className="text-xl font-light text-white/60 max-w-4xl mx-auto mb-16 leading-relaxed">
                        Vous souhaitez faire appel à MF PROD pour l'animation, la création ou la couverture médiatique de votre événement ?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button className="py-8 px-20 text-xl" onClick={() => onNavigate(View.BOOKING)}>Collaborer avec nous</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Evenements;
