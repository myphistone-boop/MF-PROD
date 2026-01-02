
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { 
  Music, ArrowLeft, Clock, MapPin, Star, Sparkles, 
  Check, Target, Briefcase, Users, Zap, TrendingUp, 
  Presentation, User, Phone, Mic
} from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const StagesPerfectionnement: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    const methodology = [
        {
            title: "Théorie Interactive",
            desc: "Comprendre les mécanismes de la voix et de la communication non-verbale.",
            icon: Zap,
            color: "text-brand-orange"
        },
        {
            title: "Ateliers Pratiques",
            desc: "Exercices de souffle, de timbre et de modulation pour muscler votre présence.",
            icon: Mic,
            color: "text-brand-cyan"
        },
        {
            title: "Mises en Situation",
            desc: "Simulations réalistes (appels, rdv, pitch) pour ancrer les réflexes.",
            icon: Target,
            color: "text-brand-magenta"
        }
    ];

    const handleBooking = () => {
        onNavigate(View.BOOKING, {
            serviceId: View.STAGES_PERFECTIONNEMENT,
            serviceName: "Formation Voix & Communication Impactante",
            type: 'CONTACT',
            price: "Sur Devis",
            duration: "De 4H à plusieurs jours"
        });
    };

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                {/* HERO SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 items-center">
                    <div className={`lg:col-span-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10">
                                <Briefcase size={14} className="text-brand-orange" />
                                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange font-black">Entreprise</span>
                            </div>
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10">
                                <User size={14} className="text-brand-cyan" />
                                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Particulier</span>
                            </div>
                        </div>

                        <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-10 tracking-tighter leading-[0.85] uppercase">
                            VOIX & <br/><span className="gradient-text italic text-brand-orange">PERFORMANCE</span>
                        </h1>
                        
                        <p className="text-2xl lg:text-4xl font-light text-brand-dark/80 dark:text-brand-light/80 leading-tight mb-12 italic font-serif border-l-4 border-brand-orange/30 pl-8">
                            "Ensemble, cultivons la puissance de votre voix pour atteindre des sommets de communication impactante !"
                        </p>

                        <p className="text-lg lg:text-xl text-brand-dark/50 dark:text-brand-light/50 font-light leading-relaxed max-w-3xl">
                            Que vous soyez un professionnel du phoning, un commercial ou simplement quelqu'un cherchant à améliorer sa présence vocale, cette formation est un atout puissant.
                        </p>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="bg-white dark:bg-brand-dark-soft border-2 border-black/5 dark:border-white/10 p-10 lg:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl" />
                            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brand-orange mb-8">Format & Durée</h4>
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange"><Clock size={24} /></div>
                                <span className="text-2xl font-black text-brand-dark dark:text-white">4H à Plusieurs Jours</span>
                            </div>
                            <div className="space-y-4 mb-12">
                                <div className="flex justify-between items-center text-sm font-bold opacity-60"><span>Type</span><span className="uppercase tracking-widest">Stage Intensif</span></div>
                                <div className="flex justify-between items-center text-sm font-bold opacity-60"><span>Lieu</span><span className="uppercase tracking-widest">L'Atelier ou Sur Site</span></div>
                                <div className="flex justify-between items-center pt-6 border-t border-black/5 dark:border-white/10 mt-6">
                                    <span className="text-xs font-black uppercase opacity-30">Tarification</span>
                                    <span className="text-xl font-black text-brand-orange uppercase">Sur Devis</span>
                                </div>
                            </div>
                            <Button onClick={handleBooking} className="w-full shadow-xl">Demander un Devis</Button>
                        </div>
                    </div>
                </div>

                {/* METHODOLOGY SECTION */}
                <section className="mb-48">
                    <div className="flex items-center gap-4 mb-20">
                        <h3 className="text-xs font-black uppercase tracking-[0.5em] text-brand-orange">Une Formation Dynamique & Adaptable</h3>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-brand-orange/30 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {methodology.map((m, i) => {
                            const Icon = m.icon;
                            return (
                                <div key={i} className="p-12 rounded-[3.5rem] bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 shadow-xl group hover:border-brand-orange/40 transition-all duration-500">
                                    <div className="w-16 h-16 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                        <Icon className={m.color} size={32} />
                                    </div>
                                    <h4 className="text-2xl font-black text-brand-dark dark:text-white uppercase tracking-tight mb-4">{m.title}</h4>
                                    <p className="text-sm font-light text-brand-dark/50 dark:text-brand-light/50 leading-relaxed">
                                        {m.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* TARGETS & INSTRUCTOR */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-48">
                    <div className="bg-brand-dark-soft rounded-[4rem] p-12 lg:p-20 border border-white/10 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px]"></div>
                        <span className="text-brand-orange font-black text-[10px] tracking-[0.5em] uppercase block mb-8">PUBLIC CIBLE</span>
                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-12">ATOUT <span className="text-brand-orange italic">PUISSANT</span> <br/>DANS VOTRE VIE</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                "Technique de com'",
                                "Compétences vocales",
                                "Parole & Mélodie",
                                "Présence scénique",
                                "Maitrise du phoning",
                                "Éloquence pro"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-white/70 group/item">
                                    <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover/item:bg-brand-orange group-hover/item:text-white transition-all">
                                        <Check size={12} />
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PROFESSEUR */}
                    <div className="bg-white dark:bg-brand-dark-soft rounded-[4rem] p-12 lg:p-20 border border-black/5 dark:border-white/10 shadow-2xl relative flex flex-col md:flex-row items-center gap-12 group">
                        <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden border-2 border-brand-orange flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                            <img src="https://storage.googleapis.com/novelec_assets/Mickael.webp" className="w-full h-full object-cover" alt="Mikael Ferreira" />
                        </div>
                        <div>
                            <span className="text-[10px] font-black text-brand-orange uppercase tracking-[0.4em] mb-4 block">Votre Formateur</span>
                            <h3 className="text-4xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-2 leading-none">MIKAËL <br/><span className="text-brand-orange">FERREIRA</span></h3>
                            <p className="text-xs font-black uppercase tracking-widest text-brand-dark/40 dark:text-white/40 mb-6">Directeur Artistique MF PROD</p>
                            <p className="text-sm font-light text-brand-dark/60 dark:text-brand-light/60 leading-relaxed italic border-l-2 border-brand-orange/30 pl-4">
                                "La voix devient un outil au service de votre réussite. Mon rôle est de vous donner les clés."
                            </p>
                        </div>
                    </div>
                </div>

                {/* FINAL CTA */}
                <div className="p-16 lg:p-24 rounded-[4rem] bg-brand-orange text-brand-dark relative overflow-hidden shadow-2xl text-center group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                    <h3 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-10 leading-tight">ATTEIGNEZ DES <br/><span className="italic underline decoration-brand-dark/20 underline-offset-8">SOMMETS D'IMPACT</span></h3>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button className="py-8 px-20 text-xl bg-brand-dark text-white hover:bg-white hover:text-brand-dark border-transparent shadow-[0_20px_40px_rgba(2,6,23,0.3)]" onClick={handleBooking}>Demander un Devis Perso</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StagesPerfectionnement;
