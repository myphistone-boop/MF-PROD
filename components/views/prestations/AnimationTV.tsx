
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { 
  Tv, ArrowLeft, Video, Mic, Zap, PlayCircle, 
  Film, Sparkles, Star, MessageSquare,
  ExternalLink, X, Quote, Camera, Globe, Award,
  ChevronRight, Clapperboard
} from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const AnimationTV: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    useEffect(() => { 
        setMounted(true); 
        window.scrollTo(0, 0); 
    }, []);

    const handleBooking = (subject: string = "Demande Interview / Animation") => {
        onNavigate(View.BOOKING, {
            serviceId: View.ANIMATION_TV,
            serviceName: subject,
            type: 'CONTACT'
        });
    };

    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const openVideo = (url: string) => {
        const id = getYoutubeId(url);
        if (id) setActiveVideo(id);
    };

    const partnerLogos = [
        { name: "Festival de Cannes", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__logo-festival-de-cannes.webp" },
        { name: "Festival de Marrakech", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__Logo-festival-de-marakech.webp" },
        { name: "Mistral TV", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/index_logo-mistral-tv.webp" },
        { name: "La Radio du Cinéma", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__la-radio-du-cinema.webp" },
        { name: "uRFOL", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__logo-uRFOL.webp" }
    ];

    const signaturePoints = [
        {
            title: "Immersion Artistique",
            desc: "Créer un environnement authentique permettant aux artistes de se livrer.",
            icon: <MessageSquare className="w-5 h-5 lg:w-6 lg:h-6" />
        },
        {
            title: "Récits Exclusifs",
            desc: "Transcender les clichés pour mettre en lumière l'âme des œuvres.",
            icon: <Sparkles className="w-5 h-5 lg:w-6 lg:h-6" />
        },
        {
            title: "Expertise Cinéphile",
            desc: "Un conteur passionné offrant une perspective unique sur le 7ème art.",
            icon: <Mic className="w-5 h-5 lg:w-6 lg:h-6" />
        },
        {
            title: "Magnétisme Écran",
            desc: "Une présence magnétique et une profonde compréhension de l'image.",
            icon: <Tv className="w-5 h-5 lg:w-6 lg:h-6" />
        }
    ];

    const references = [
        {
            name: "Festival de Cannes",
            location: "Cannes",
            talents: ["Lambert WILSON", "Blanche GARDIN", "Benjamin BIOLAY", "Valérie LEMERCIER", "Wladimir YORDANOFF", "Sandrine KIBERLAIN", "Olivier DION", "Sam KARMANN"]
        },
        { name: "Festival Lumières", location: "Lyon", talents: ["Guillaume JOUHET", "Direction OCS"] },
        { name: "Festival des Scénaristes", location: "Valence", talents: ["Nathalye BAYE", "Naidra AYADI"] },
        { name: "Festival de l'écrit à l'écran", location: "Montélimar", talents: ["Corinne MASIERO", "Romane BORHINGER"] },
        { name: "Festival des Humoristes", location: "Tain l'Hermitage", talents: ["Mathieu MADENIAN", "Didier GUSTIN"] },
        { name: "Festival Effets Stars", location: "Montpellier", talents: ["Charles CHOREIN", "VFX Expert"] },
        { name: "Tournée Nationale 2018", location: "France", talents: ["Jean-Marie BIGARD"] },
        { name: "Avant-Première « Hors Normes »", location: "Valence", talents: ["Eric TOLEDANO", "Olivier NAKACHE"] },
        { name: "Avant-Première « Facteur Cheval »", location: "Valence", talents: ["Alexandra FECHNER", "Nils TAVERNIER"] },
        { name: "Festival Musique Montivert", location: "Drôme", talents: ["Mademoiselle K", "BB Brunes", "Manau"] },
        { name: "Festival de Crussol", location: "Saint-Péray", talents: ["ZAZ"] },
        { name: "Montélimar Agglo Festival", location: "Montélimar", talents: ["Michel SARDOU", "Black M", "Soprano"] },
        { name: "Lancement Romans « Outrage »", location: "National", talents: ["Rachel MARYSSA"] },
        { name: "Open Markal", location: "Bourg-de-Péage", talents: ["Jo-Wilfried TSONGA", "Gilles SIMON"] }
    ];

    const animations = [
        { title: "Festival Effets Stars", role: "Animateur Officiel", loc: "Montpellier" },
        { title: "Festival Les Belles Journées", role: "Maître de Cérémonie", loc: "Montpellier" },
        { title: "Émissions Patrimoine", role: "Présentateur (4 épisodes)", loc: "Mistral TV" }
    ];

    const videoReels = [
        { 
            title: "13 COUPS avec Mikael FERREIRA", 
            detail: "Court métrage 2023", 
            url: "https://youtu.be/GEvL4rdlQD8",
            img: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__13-Coups-Film-court-metrage-sur-Violence-conjugale-photo-1.webp" 
        },
        { 
            title: "Eric TOLEDANO et Olivier NAKACHE", 
            detail: "Avant-Première de Film 2019", 
            url: "https://youtu.be/6UC7rMYRsKc",
            img: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__Eric-toledano-avant-premiere-interview.webp" 
        },
        { 
            title: "Alexandre FLUBACKER", 
            detail: "Interview Cinéma Pathé 2019", 
            url: "https://youtu.be/TJdjF99KXvs",
            img: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__photo-interview-directeur-cinema-pathe-valence.webp" 
        },
        { 
            title: "Guillaume JOUHET", 
            detail: "Festival Lumières Lyon 2019", 
            url: "https://youtu.be/eFuzecUALLc",
            img: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__photo-interview-directeurgeneral-OCS.webp" 
        },
        { 
            title: "Nils TAVERNIER et A. FECHNER", 
            detail: "Avant-Première de Film 2018", 
            url: "https://youtu.be/3-jhFvBkecg",
            img: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__nils-et-alexandra-interview.webp" 
        },
        { 
            title: "Nathalie BAYE", 
            detail: "Festival des scénaristes 2018", 
            url: "https://youtu.be/3-jhFvBkecg",
            img: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__nathalie-baye-interview-1.webp" 
        },
        { 
            title: "Jean-Marie BIGARD", 
            detail: "Interview – Tournée Nationale 2018", 
            url: "https://youtu.be/_twAE82K2dk",
            img: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__photo-interview-bigard.webp" 
        },
        { 
            title: "ZAZ", 
            detail: "Festival de Crussol 2018", 
            url: "https://youtu.be/3RFC2JvsZao",
            img: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__zaz-interview.webp" 
        },
        { 
            title: "Émission Patrimoine Valréas", 
            detail: "Mikael Ferreira – Animateur 2017", 
            url: "https://youtu.be/bUPfJVplIIM",
            img: "https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__emmision-patrimoine.webp" 
        }
    ];

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen relative overflow-x-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[150px] -z-10" />
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-magenta/5 rounded-full blur-[150px] -z-10" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                {/* --- HEADER --- */}
                <div className={`mb-16 lg:mb-48 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 mb-8">
                        <Zap size={14} className="text-brand-orange animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange font-black">Présence & Média</span>
                    </div>
                    
                    <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-12 tracking-tighter leading-[0.85] uppercase">
                        ANIMATION <br/><span className="gradient-text italic">TÉLÉVISUELLE</span>
                    </h1>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch">
                        {/* LEFT COLUMN: CITATION + CARDS (PC ONLY) */}
                        <div className="flex flex-col justify-center gap-10 lg:gap-14">
                            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-brand-dark/70 dark:text-brand-light/90 leading-relaxed font-serif italic border-l-4 border-brand-orange/30 pl-8">
                                "L'art de l'interview réside dans la capacité à créer un lien invisible, où la star s'efface pour laisser place à l'humain."
                            </p>
                            
                            {/* PC ONLY: SIGNATURE CARDS IN HEADER */}
                            <div className="hidden lg:grid grid-cols-2 gap-4">
                                {signaturePoints.map((point, i) => (
                                    <div key={i} className="p-6 rounded-[2rem] bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 shadow-xl group hover:border-brand-orange/40 transition-all duration-500">
                                        <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            {point.icon}
                                        </div>
                                        <h3 className="text-sm font-black text-brand-dark dark:text-white uppercase mb-2 leading-tight">{point.title}</h3>
                                        <p className="text-[10px] font-light text-brand-dark/50 dark:text-brand-light/50 leading-relaxed">
                                            {point.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* RIGHT COLUMN: IMAGE */}
                        <div className="relative aspect-video lg:aspect-auto rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-brand-dark transition-transform hover:scale-[1.01] duration-700">
                            <img 
                                src="https://storage.googleapis.com/novelec_assets/MF%20PROD/TV/_animation-televisuelle__IMG_1976-scaled-e1704277729368.webp" 
                                className="w-full h-full object-cover" 
                                alt="Mikaël Ferreira Animation Télévisuelle"
                            />
                        </div>
                    </div>
                </div>

                {/* --- SECTION PARTENAIRES --- */}
                <section className="mb-24 lg:mb-48">
                    <div className="text-center mb-16 lg:mb-20 px-6">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="h-px w-12 bg-brand-cyan"></div>
                            <span className="text-xs font-black uppercase tracking-[0.5em] text-brand-cyan">Partenaires de Diffusion</span>
                            <div className="h-px w-12 bg-brand-cyan"></div>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-12">NOS <span className="gradient-text italic">PARTENAIRES</span></h2>
                    </div>

                    <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-[3rem] lg:rounded-[4rem] p-8 lg:p-20 border border-black/5 dark:border-white/10 shadow-2xl">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center">
                            {partnerLogos.map((logo, i) => (
                                <div key={i} className="group relative flex flex-col items-center gap-4 lg:gap-6">
                                    <div className="relative w-full aspect-square max-w-[100px] lg:max-w-[140px] flex items-center justify-center bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 border-2 border-white shadow-lg group-hover:shadow-brand-cyan/20 transition-all duration-500 group-hover:-translate-y-2 transform overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <img 
                                            src={logo.url} 
                                            alt={logo.name} 
                                            className="max-w-full max-h-full object-contain transition-all duration-700"
                                        />
                                    </div>
                                    <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-brand-dark/30 dark:text-white/30 group-hover:text-brand-cyan transition-colors">{logo.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION REFERENCES --- */}
                <section className="mb-32 lg:mb-48">
                    <div className="text-center mb-16 lg:mb-24">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 mb-6">
                            <Award size={14} className="text-brand-orange" />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange font-black">Seal of Excellence</span>
                        </div>
                        <h2 className="text-4xl lg:text-8xl font-black text-brand-dark dark:text-white uppercase tracking-tighter leading-none">
                            TOUTES LES <span className="gradient-text italic">REFERENCES</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {references.map((fest, i) => (
                            <div 
                                key={i} 
                                className="bg-white/50 dark:bg-brand-dark-soft/50 backdrop-blur-xl rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-12 border border-black/5 dark:border-white/10 group hover:border-brand-orange/40 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="flex justify-between items-start mb-6 lg:mb-8">
                                    <div className="space-y-2">
                                        <h3 className="text-xl lg:text-3xl font-black text-brand-dark dark:text-white uppercase leading-tight tracking-tighter">
                                            {fest.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-brand-orange text-[9px] lg:text-[10px] font-bold uppercase tracking-widest">
                                            <Globe size={12} /> {fest.location}
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-brand-orange/40 group-hover:text-brand-orange transition-colors">
                                        <Star size={18} />
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-6 border-t border-black/5 dark:border-white/5">
                                    {fest.talents.map((talent, tidx) => (
                                        <div key={tidx} className="flex items-center gap-2">
                                            <span className="text-[10px] lg:text-[11px] font-serif italic font-medium text-brand-dark/70 dark:text-brand-light/70">
                                                {talent}
                                            </span>
                                            {tidx < fest.talents.length - 1 && <span className="text-brand-orange/30 font-black">/</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        <div className="bg-brand-dark-soft p-10 lg:p-16 rounded-[3rem] lg:rounded-[4rem] border border-white/10 relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-magenta/10 rounded-full blur-[100px]" />
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-black text-white uppercase mb-8 lg:mb-12 flex items-center gap-4 lg:gap-6">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-brand-magenta/20 flex items-center justify-center text-brand-magenta">
                                        <Tv size={24} />
                                    </div>
                                    MAÎTRISE DE CÉRÉMONIE
                                </h3>
                                <div className="space-y-6 lg:space-y-8">
                                    {animations.map((anim, i) => (
                                        <div key={i} className="group border-l-2 border-white/5 hover:border-brand-magenta pl-6 lg:pl-8 transition-all">
                                            <h4 className="text-white font-black text-lg lg:text-xl uppercase tracking-tighter">{anim.title}</h4>
                                            <p className="text-brand-magenta text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] mt-1">{anim.role}</p>
                                            <p className="text-white/30 text-[8px] lg:text-[9px] uppercase font-bold mt-2">{anim.loc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-brand-magenta/20 via-brand-dark-soft to-brand-dark-soft p-10 lg:p-16 rounded-[3rem] lg:rounded-[4rem] border border-brand-magenta/20 relative overflow-hidden flex flex-col justify-between group">
                            <div className="absolute top-6 right-6 lg:top-8 lg:right-8 text-brand-magenta/20">
                                <Clapperboard size={60} strokeWidth={1} />
                            </div>
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-black text-white uppercase mb-4">PRODUCTION FOCUS</h3>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange text-[8px] lg:text-[9px] font-black text-brand-dark uppercase tracking-widest mb-8 lg:mb-10">
                                    Court Métrage Engagement
                                </div>
                                <h4 className="text-4xl lg:text-6xl font-black text-white uppercase leading-none mb-6 lg:mb-8 tracking-tighter">« 13 COUPS »</h4>
                                <p className="text-white/60 text-base lg:text-lg font-light mb-10 lg:mb-12 italic font-serif leading-relaxed">
                                    "Une exploration viscérale du silence face à la violence. Un film produit pour dénoncer et sensibiliser."
                                </p>
                            </div>
                            <div className="flex items-center justify-between border-t border-white/10 pt-8 lg:pt-10">
                                <div className="space-y-1">
                                    <p className="text-[9px] lg:text-[10px] font-black uppercase text-white/40 tracking-widest">Rôle Principal</p>
                                    <p className="text-lg lg:text-xl font-black text-white uppercase">Mikaël FERREIRA</p>
                                </div>
                                <div className="text-right space-y-1">
                                    <p className="text-[9px] lg:text-[10px] font-black uppercase text-white/40 tracking-widest">Réalisation</p>
                                    <p className="text-lg lg:text-xl font-black text-white uppercase">V. GENTIAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION SHOWREELS --- */}
                <section id="videos" className="mb-32 lg:mb-48">
                    <div className="text-center mb-16 lg:mb-24">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-6">
                            <Camera size={14} className="text-brand-cyan" />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Média Center</span>
                        </div>
                        <h2 className="text-4xl lg:text-8xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-4 leading-none">
                            SHOWREELS & <br/><span className="gradient-text italic">EXTRAITS</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-12 lg:gap-y-16">
                        {videoReels.map((vid, i) => (
                            <div 
                                key={i} 
                                className="group flex flex-col animate-fade-in-up" 
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <div 
                                    className="relative aspect-video rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border-2 border-black/5 dark:border-white/10 bg-black cursor-pointer shadow-xl transition-all duration-500 hover:border-brand-orange hover:shadow-[0_30px_60px_-15px_rgba(255,138,0,0.3)]"
                                    onClick={() => openVideo(vid.url)}
                                >
                                    <img src={vid.img} alt={vid.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s]" loading="lazy" />
                                    <div className="absolute inset-0 bg-brand-dark/30 group-hover:bg-brand-dark/10 transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                                            <PlayCircle size={28} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="px-3 py-1 rounded-full bg-brand-orange/80 backdrop-blur-md text-[7px] lg:text-[8px] font-black text-white uppercase tracking-widest">Visionner</div>
                                    </div>
                                </div>
                                <div className="mt-6 px-4 text-center">
                                    <h4 className="text-lg lg:text-xl font-black text-brand-dark dark:text-white uppercase leading-tight mb-2 group-hover:text-brand-orange transition-colors">{vid.title}</h4>
                                    <p className="text-[9px] lg:text-[10px] font-black uppercase text-brand-dark/30 dark:text-white/30 tracking-[0.2em]">{vid.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FINAL CONTACT --- */}
                <div className="relative p-12 lg:p-24 rounded-[3.5rem] lg:rounded-[5rem] bg-brand-dark text-white border-2 border-white/10 overflow-hidden shadow-2xl text-center group">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-brand-magenta/10 pointer-events-none opacity-50" />
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-[4s]" />
                    
                    <h3 className="text-3xl lg:text-7xl font-black uppercase tracking-tighter mb-8 lg:mb-10 leading-tight">
                        VOTRE PROJET <br/><span className="text-brand-orange italic underline decoration-brand-orange/30 underline-offset-8">COMMENCE ICI</span>
                    </h3>
                    <p className="text-lg lg:text-xl font-light text-white/50 max-w-3xl mx-auto mb-12 lg:mb-16 leading-relaxed">
                        Besoin d'un animateur chevronné pour votre média, festival ou avant-première ?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button className="py-2 lg:py-8 px-6 lg:px-20 text-[10px] lg:text-lg shadow-[0_30px_60px_-15px_rgba(255,138,0,0.3)] text-white" onClick={() => handleBooking()}>Engager</Button>
                    </div>
                </div>
            </div>

            {/* --- VIDEO MODAL --- */}
            {activeVideo && (
                <div 
                    className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-2xl flex items-center justify-center p-4 lg:p-12 animate-fade-in-up"
                    onClick={() => setActiveVideo(null)}
                >
                    <button 
                        className="absolute top-6 right-6 lg:top-8 lg:right-8 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-orange transition-colors z-50 shadow-2xl"
                        onClick={() => setActiveVideo(null)}
                    >
                        <X size={28} />
                    </button>

                    <div className="relative w-full max-w-6xl aspect-video rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(255,138,0,0.3)] bg-black" onClick={e => e.stopPropagation()}>
                        <iframe
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{ __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </div>
    );
};

export default AnimationTV;
