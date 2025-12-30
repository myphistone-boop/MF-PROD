
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { 
  Tv, ArrowLeft, Video, Mic, Zap, PlayCircle, 
  Film, Sparkles, Star, Users, MessageSquare,
  ChevronRight, ExternalLink, Calendar
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

    const qualities = [
      {
        text: "Crée un environnement chaleureux et authentique permettant aux artistes de se livrer et de partager leurs expériences les plus profondes."
      },
      {
        text: "Transcende les clichés, plonge au cœur des personnalités et des créations artistiques, permettant d'extraire des anecdotes uniques et de mettre en lumière l'âme des films."
      },
      {
        text: "Passionné de cinéma, conteur de l'art cinématographique, son expertise cinéphile combinée à sa voix crée une association captivante lors de ses interviews."
      },
      {
        text: "Présence à l'écran magnétique, et sa profonde compréhension des films offre une perspective unique sur les films classiques et contemporains."
      }
    ];

    const festivals = [
      {
        name: "Festival de Cannes",
        location: "Cannes",
        talents: ["Lambert WILSON", "Blanche GARDIN", "Benjamin BIOLAY", "Valérie LEMERCIER", "Wladimir YORDANOFF", "Sandrine KIBERLAIN", "Olivier DION", "Gustave KERVERN", "Nicolas MAURY", "Paloma MORITZ", "Angélique ATLAND", "Sam KARMANN"]
      },
      {
        name: "Festival Lumières",
        location: "Lyon",
        talents: ["Guillaume JOUHET"]
      },
      {
        name: "Festival des Scénaristes",
        location: "Valence",
        talents: ["Nathalie BAYE", "Naidra AYADI"]
      },
      {
        name: "Festival de l'écrit à l'écran",
        location: "Montélimar",
        talents: ["Corinne MASIERO", "Romane BOHRINGER"]
      },
      {
        name: "Festival des Humoristes",
        location: "Tain l'Hermitage",
        talents: ["Mathieu MADENIAN", "Didier GUSTIN"]
      },
      {
        name: "Musique & Scène",
        location: "Divers",
        talents: ["Jean-Marie BIGARD", "ZAZ", "Michel SARDOU", "Black M", "Soprano", "Mademoiselle K", "BB Brunes", "Manau"]
      }
    ];

    const videoReels = [
      { title: "13 COUPS avec Mikael FERREIRA", detail: "Court métrage 2023", icon: <Film /> },
      { title: "Eric TOLEDANO et Olivier NAKACHE", detail: "Avant-Première de Film 2019", icon: <PlayCircle /> },
      { title: "Alexandre FLUBACKER", detail: "Interview Cinéma Pathé 2019", icon: <Mic /> },
      { title: "Guillaume JOUHET", detail: "Festival Lumières Lyon 2019", icon: <Video /> },
      { title: "Nils TAVERNIER et A. FECHNER", detail: "Avant-Première de Film 2018", icon: <Film /> },
      { title: "Nathalie BAYE", detail: "Festival des scénaristes 2018", icon: <MessageSquare /> },
      { title: "Jean Marie BIGARD", detail: "Interview - Tournée Nationale 2018", icon: <Mic /> },
      { title: "ZAZ", detail: "Festival de Crussol 2018", icon: <PlayCircle /> },
      { title: "Emission Patrimoine Valréas", detail: "Mikael Ferreira - Animateur 2017", icon: <Tv /> }
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
                            "Établir une connexion authentique avec les stars du cinéma, metteurs en scène et talents émergents."
                        </p>
                        <p className="text-lg lg:text-xl text-brand-dark/60 dark:text-brand-light/60 font-light leading-relaxed max-w-4xl mb-12">
                            Où chaque interview devient une exploration artistique, offrant aux téléspectateurs un accès privilégié à l'univers des célébrités et des créateurs. Révélé au fil des festivals de renom, spécialisé dans le monde du cinéma, <span className="text-brand-orange font-black uppercase">Mikaël Ferreira</span> est un animateur qui transforme chaque émission en une expérience inédite.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <Button onClick={() => document.getElementById('videos')?.scrollIntoView({behavior: 'smooth'})} className="shadow-xl">Voir les Interviews</Button>
                            <Button variant="secondary" onClick={() => handleBooking("Demande d'Animation / Interview")}>Nous Contacter</Button>
                        </div>
                    </div>
                    <div className="lg:col-span-4 relative">
                        <div className="aspect-[3/4] rounded-[4rem] overflow-hidden border-2 border-black/5 dark:border-white/10 shadow-2xl group">
                            <img src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" alt="Mikael Ferreira Plateau" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/40 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white dark:bg-brand-dark-soft p-8 rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-2xl z-20 max-w-[240px]">
                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange mb-2">Statut</p>
                            <p className="text-sm font-bold text-brand-dark dark:text-white leading-tight">Accréditation dans tous les Festivals Internationaux</p>
                        </div>
                    </div>
                </div>

                {/* QUALITIES SECTION */}
                <section className="mb-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {qualities.map((q, i) => (
                        <div key={i} className="p-10 rounded-[3rem] bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 shadow-xl relative group hover:border-brand-orange/40 transition-all">
                            <div className="text-brand-orange mb-8 group-hover:scale-110 transition-transform"><Sparkles size={32} /></div>
                            <p className="text-base font-light text-brand-dark/70 dark:text-brand-light/80 leading-relaxed font-sans italic">
                                "{q.text}"
                            </p>
                        </div>
                    ))}
                </section>

                {/* REFERENCES SECTION */}
                <section className="mb-48">
                    <div className="flex items-center gap-6 mb-20">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-orange/30"></div>
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-brand-orange whitespace-nowrap">Ses Interviews & Festivals</h2>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-orange/30"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {festivals.map((fest, i) => (
                            <div key={i} className="bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-[3.5rem] p-12 border border-black/5 dark:border-white/10 shadow-2xl">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center"><Star size={20} /></div>
                                    <div>
                                        <h3 className="text-xl font-black text-brand-dark dark:text-white uppercase leading-none">{fest.name}</h3>
                                        <span className="text-[10px] uppercase font-black tracking-widest text-brand-orange/60">{fest.location}</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {fest.talents.map((talent, tidx) => (
                                        <span key={tidx} className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 text-[10px] font-bold text-brand-dark/60 dark:text-brand-light/60 border border-black/5 dark:border-white/5 uppercase tracking-tight">
                                            {talent}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ANIMATIONS & FILMS SECTION */}
                <section className="mb-48 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-brand-dark-soft rounded-[4rem] p-12 lg:p-20 border border-white/10 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px]"></div>
                        <span className="text-brand-orange font-black text-[10px] tracking-[0.5em] uppercase block mb-8">EXPÉRIENCE ANIMATION</span>
                        <h3 className="text-5xl font-black uppercase tracking-tighter mb-12">SES <br/><span className="italic text-brand-orange">ANIMATIONS</span></h3>
                        
                        <div className="space-y-8">
                            {[
                                { title: "Festival Effets Stars", year: "2016 - Montpellier", desc: "Animateur Officiel" },
                                { title: "Festival Les Belles Journées", year: "2019 - Montpellier", desc: "Animateur Scène" },
                                { title: "Émissions Patrimoine", year: "2017 - Mistral TV", desc: "Série de 4 émissions tournées" },
                                { title: "Court-métrage '13 COUPS'", year: "2023 - Victor Gential", desc: "Acteur Principal (Rôle de Mikael)" }
                            ].map((anim, idx) => (
                                <div key={idx} className="flex gap-6 items-start group/item">
                                    <div className="w-px h-full bg-white/10 group-hover/item:bg-brand-orange transition-colors"></div>
                                    <div>
                                        <h4 className="text-xl font-black uppercase tracking-tight group-hover/item:text-brand-orange transition-colors">{anim.title}</h4>
                                        <p className="text-sm font-light text-white/40">{anim.year} • {anim.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-brand-dark-soft rounded-[4rem] p-12 lg:p-20 border border-black/5 dark:border-white/10 shadow-2xl relative">
                        <h3 className="text-4xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-8 leading-tight">TOURNÉES & <br/>EXCLUSIVITÉS</h3>
                        <p className="text-lg font-light text-brand-dark/60 dark:text-brand-light/60 mb-12">De la tournée nationale avec Jean-Marie Bigard au Montélimar Agglo Festival, Mikael Ferreira s'impose sur les plus grandes scènes françaises.</p>
                        
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Tournée Nat. 2018", value: "J-M BIGARD" },
                                { label: "Festival Crussol", value: "ZAZ" },
                                { label: "Montélimar Agglo", value: "SOPRANO" },
                                { label: "Open Markal", value: "TSONGA" }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                                    <span className="text-[10px] font-black text-brand-orange uppercase mb-1 block">{stat.label}</span>
                                    <span className="text-lg font-black text-brand-dark dark:text-white uppercase tracking-tight">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-12 flex justify-center">
                            <Button onClick={() => handleBooking("Demande Collaboration Média")} className="w-full">Réserver une Prestation</Button>
                        </div>
                    </div>
                </section>

                {/* VIDEOS SECTION */}
                <section id="videos" className="mb-48">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-4">ARCHIVES <span className="gradient-text italic">VIDÉO</span></h2>
                        <p className="text-brand-dark/40 dark:text-brand-light/40 font-black uppercase text-xs tracking-[0.3em]">Explorez ses interviews et analyses exclusives</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videoReels.map((vid, i) => (
                            <div key={i} className="group relative bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 rounded-[2.5rem] p-10 hover:border-brand-orange hover:-translate-y-2 transition-all duration-500 shadow-xl overflow-hidden cursor-pointer">
                                <div className="absolute -right-8 -bottom-8 opacity-5 text-brand-dark dark:text-white transform rotate-12 group-hover:scale-125 transition-transform">
                                    {/* Fix: Casting icon to any to avoid TypeScript error on 'size' prop in cloneElement */}
                                    {React.cloneElement(vid.icon as any, { size: 140 })}
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <PlayCircle size={24} />
                                    </div>
                                    <h4 className="text-xl font-black text-brand-dark dark:text-white uppercase tracking-tight leading-none mb-4">{vid.title}</h4>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange mb-10">{vid.detail}</p>
                                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-brand-dark/40 dark:text-white/40 group-hover:text-brand-orange transition-colors">
                                        Lire la vidéo <ExternalLink size={12} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FINAL CTA */}
                <div className="p-16 lg:p-24 rounded-[4rem] bg-brand-dark text-white border-2 border-white/10 relative overflow-hidden shadow-2xl text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-brand-magenta/10 pointer-events-none" />
                    <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-10 leading-tight">DÉMARRER UNE <br/><span className="text-brand-orange">COLLABORATION ?</span></h3>
                    <p className="text-xl font-light text-white/60 max-w-4xl mx-auto mb-16 leading-relaxed">
                        Vous avez une question, une demande d’interview ou d’animation ? <br/>Contactez-nous dès maintenant pour toute demande spéciale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button className="py-8 px-20 text-xl" onClick={() => handleBooking("Demande Interview Exclusive")}>Demander une Interview</Button>
                        <Button variant="secondary" className="bg-white/10 border-white/20 text-white py-8 px-20 text-xl" onClick={() => handleBooking("Animation Événementiel")}>Réserver pour Animation</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimationTV;
