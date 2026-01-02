
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { 
  Tv, ArrowLeft, Video, Mic, Zap, PlayCircle, 
  Film, Sparkles, Star, MessageSquare,
  ExternalLink
} from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const AnimationTV: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    const handleBooking = (subject: string = "Demande Interview / Animation") => {
        onNavigate(View.BOOKING, {
            serviceId: View.ANIMATION_TV,
            serviceName: subject,
            type: 'CONTACT'
        });
    };

    const festivals = [
      {
        name: "Festival de Cannes",
        location: "Cannes",
        talents: ["Lambert WILSON", "Blanche GARDIN", "Benjamin BIOLAY", "Valérie LEMERCIER", "Wladimir YORDANOFF", "Sandrine KIBERLAIN", "Olivier DION", "Gustave KERVERN", "Nicolas MAURY", "Paloma MORITZ", "Angélique ATLAND", "Sam KARMANN"]
      },
      { name: "Festival Lumières", location: "Lyon", talents: ["Guillaume JOUHET"] },
      { name: "Festival des Scénaristes", location: "Valence", talents: ["Nathalie BAYE", "Naidra AYADI"] },
      { name: "Festival de l'écrit à l'écran", location: "Montélimar", talents: ["Corinne MASIERO", "Romane BOHRINGER"] },
      { name: "Festival des Humoristes", location: "Tain l'Hermitage", talents: ["Mathieu MADENIAN", "Didier GUSTIN"] },
      { name: "Musique & Scène", location: "Divers", talents: ["Jean-Marie BIGARD", "ZAZ", "Michel SARDOU", "Black M", "Soprano", "Mademoiselle K", "BB Brunes", "Manau"] }
    ];

    const videoReels = [
      { title: "13 COUPS avec Mikael FERREIRA", detail: "Court métrage 2023", icon: Film },
      { title: "Eric TOLEDANO et Olivier NAKACHE", detail: "Avant-Première de Film 2019", icon: PlayCircle },
      { title: "Alexandre FLUBACKER", detail: "Interview Cinéma Pathé 2019", icon: Mic },
      { title: "Guillaume JOUHET", detail: "Festival Lumières Lyon 2019", icon: Video },
      { title: "Nils TAVERNIER et A. FECHNER", detail: "Avant-Première de Film 2018", icon: Film },
      { title: "Nathalie BAYE", detail: "Festival des scénaristes 2018", icon: MessageSquare },
      { title: "Jean Marie BIGARD", detail: "Interview - Tournée Nationale 2018", icon: Mic },
      { title: "ZAZ", detail: "Festival de Crussol 2018", icon: PlayCircle },
      { title: "Emission Patrimoine Valréas", detail: "Mikael Ferreira - Animateur 2017", icon: Tv }
    ];

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                {/* HERO SECTION */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="lg:col-span-8">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 mb-8">
                            <Zap size={14} className="text-brand-orange" />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange font-black">Présence Média & Festivals</span>
                        </div>
                        <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-10 tracking-tighter leading-[0.85] uppercase">
                            ANIMATION <br/><span className="gradient-text italic">TÉLÉVISUELLE</span>
                        </h1>
                        <p className="text-2xl lg:text-3xl font-light text-brand-dark/70 dark:text-brand-light/70 leading-relaxed font-serif italic border-l-4 border-brand-orange/30 pl-8 mb-12">
                            "Établir une connexion authentique avec les stars du cinéma et talents émergents."
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <Button onClick={() => document.getElementById('videos')?.scrollIntoView({behavior: 'smooth'})}>Voir les Interviews</Button>
                            <Button variant="secondary" onClick={() => handleBooking()}>Nous Contacter</Button>
                        </div>
                    </div>
                    <div className="lg:col-span-4 relative">
                        <div className="aspect-[3/4] rounded-[4rem] overflow-hidden border-2 border-black/5 dark:border-white/10 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Mikael Ferreira Plateau" />
                        </div>
                    </div>
                </div>

                {/* REFERENCES SECTION */}
                <section className="mb-48">
                    <div className="flex items-center gap-6 mb-20">
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-brand-orange whitespace-nowrap">Ses Interviews & Festivals</h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-brand-orange/30 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {festivals.map((fest, i) => (
                            <div key={i} className="bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-[3.5rem] p-12 border border-black/5 dark:border-white/10 shadow-2xl">
                                <h3 className="text-xl font-black text-brand-dark dark:text-white uppercase mb-6">{fest.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {fest.talents.map((talent, tidx) => (
                                        <span key={tidx} className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 text-[10px] font-bold text-brand-dark/60 dark:text-brand-light/60 border border-black/5 dark:border-white/5 uppercase">
                                            {talent}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* VIDEOS SECTION */}
                <section id="videos" className="mb-48">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-4">ARCHIVES <span className="gradient-text italic">VIDÉO</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videoReels.map((vid, i) => {
                            const Icon = vid.icon;
                            return (
                                <div key={i} className="group relative bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 rounded-[2.5rem] p-10 hover:border-brand-orange transition-all duration-500 shadow-xl overflow-hidden cursor-pointer">
                                    <div className="absolute -right-8 -bottom-8 opacity-5 text-brand-dark dark:text-white transform rotate-12 group-hover:scale-125 transition-transform">
                                        <Icon size={140} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6">
                                            <PlayCircle size={24} />
                                        </div>
                                        <h4 className="text-xl font-black text-brand-dark dark:text-white uppercase mb-2">{vid.title}</h4>
                                        <p className="text-[10px] font-black uppercase text-brand-orange mb-10">{vid.detail}</p>
                                        <div className="flex items-center gap-3 text-xs font-black uppercase text-brand-dark/40 dark:text-white/40 group-hover:text-brand-orange transition-colors">
                                            Lire la vidéo <ExternalLink size={12} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* FINAL CTA */}
                <div className="p-16 lg:p-24 rounded-[4rem] bg-brand-dark text-white border-2 border-white/10 relative overflow-hidden shadow-2xl text-center">
                    <h3 className="text-4xl lg:text-6xl font-black uppercase mb-10">DÉMARRER UNE <br/><span className="text-brand-orange">COLLABORATION ?</span></h3>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button className="py-8 px-20 text-xl" onClick={() => handleBooking()}>Réserver une Prestation</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimationTV;
