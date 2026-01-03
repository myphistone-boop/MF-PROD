
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { 
  Mic, ArrowLeft, Radio, Volume2, Sparkles, 
  Zap, Award, PlayCircle, PauseCircle, ExternalLink, 
  MessageSquare, Star, AudioLines, Youtube, ArrowRight
} from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const VoixOff: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

    useEffect(() => { 
        setMounted(true); 
        window.scrollTo(0, 0); 
    }, []);

    const handleBooking = (subject: string = "Projet Voix Off") => {
        onNavigate(View.BOOKING, {
            serviceId: View.VOIX_OFF,
            serviceName: subject,
            type: 'CONTACT'
        });
    };

    const toggleAudio = (index: number) => {
        if (playingIndex === index) {
            audioRefs.current[index]?.pause();
            setPlayingIndex(null);
        } else {
            // Stop previous
            if (playingIndex !== null) {
                audioRefs.current[playingIndex]?.pause();
            }
            audioRefs.current[index]?.play();
            setPlayingIndex(index);
        }
    };

    const knowHow = [
        {
            title: "Voix Polyvalente",
            icon: <Mic className="text-brand-magenta" />,
            desc: "Voix s'adaptant à une gamme de styles, du narratif au publicitaire, du sérieux au ludique en ajustant la bonne tonalité pour faire passer votre message de la manière la plus percutante qui soit."
        },
        {
            title: "Qualité du son",
            icon: <Radio className="text-brand-cyan" />,
            desc: "Equipement professionnel adapté pour vous offrir un son professionnel, clair et de haute qualité (Broadcast ready)."
        },
        {
            title: "Expérience diversifiée",
            icon: <Award className="text-brand-orange" />,
            desc: "Variété de projets réalisés : publicités radio, livres audio, vidéos d'entreprise et présentations. Une adaptabilité totale à vos besoins."
        },
        {
            title: "Livraison rapide",
            icon: <Zap className="text-brand-magenta" />,
            desc: "Enregistrement de haute qualité livré dans des délais records pour que votre projet puisse avancer sans aucune difficulté."
        }
    ];

    const audioClips = [
        { 
            title: "Annonce promotionnelle", 
            detail: "Radio du cinéma", 
            url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/Voix%20off/seule-radio-qui-diffuse-2424.wav",
            cover: "https://storage.googleapis.com/novelec_assets/MF%20PROD/Voix%20off/index_la-radio-du-cinema-768x447.webp"
        },
        { 
            title: "Annonce promotionnelle", 
            detail: "Radio du cinéma", 
            url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/Voix%20off/CE-TITRE-EST-1-1.wav",
            cover: "https://storage.googleapis.com/novelec_assets/MF%20PROD/Voix%20off/index_la-radio-du-cinema-768x447.webp"
        }
    ];

    const references = [
        { 
            name: "France Bleu", 
            detail: "Lancement Foire du Dauphiné - Voix d'annonce nationale", 
            link: "https://www.francebleu.fr/emissions/le-grand-invite/drome-ardeche/le-grand-invite-de-ca-vaut-l-detour-60"
        },
        { 
            name: "Disneyland Paris", 
            detail: "Voix de lancement officielle pour le parc sous la direction d'Olivier Klementieff", 
        },
        { 
            name: "Folimage", 
            detail: "Doublage du Film d’animation primé « Mon papi s’est caché » d'Anne HUYN", 
            link: "https://www.folimage.fr/fr/films/mon-papi-s-est-cache-169.htm",
            youtube: "https://www.youtube.com/watch?v=Cik7WkLwCsw"
        },
        { 
            name: "Amazon", 
            detail: "Campagne de Publicité Radio Nationale et supports digitaux", 
        },
        { 
            name: "Studio Pierre Benite", 
            detail: "Voix d’accompagnement et narration pour reportage animalier", 
        },
        { 
            name: "Radio BLV", 
            detail: "Chronique cinéma hebdomadaire et habillage complet d'antenne", 
            link: "https://www.radioblv.com/radio-blv/"
        }
    ];

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                {/* --- NAVIGATION --- */}
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                {/* --- SECTION 1: PRESENTATION --- */}
                <div className={`mb-32 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
                        <AudioLines size={14} className="text-brand-cyan" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Narration & Signature Vocale</span>
                    </div>
                    
                    <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-12 tracking-tighter leading-[0.85] uppercase">
                        VOIX <br/><span className="gradient-text italic text-brand-cyan">OFF</span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        <div className="lg:col-span-7">
                            <p className="text-2xl lg:text-3xl font-light text-brand-dark/80 dark:text-brand-light/90 leading-relaxed italic font-serif border-l-4 border-brand-cyan/30 pl-8 mb-12">
                                "Donner vie à votre projet audio ou vidéo avec une voix off professionnelle captivante, Mikael Ferreira."
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                                {knowHow.map((item, i) => (
                                    <div key={i} className="group flex flex-col gap-4 p-8 rounded-3xl bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 hover:border-brand-cyan/50 transition-all duration-500">
                                        <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-black text-brand-dark dark:text-white uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-sm font-light text-brand-dark/50 dark:text-brand-light/50 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 flex flex-col sm:flex-row gap-6">
                                <Button onClick={() => handleBooking()} className="shadow-xl px-16 py-6 text-lg">Démarrer un projet</Button>
                                <Button variant="secondary" onClick={() => {
                                    const el = document.getElementById('audios');
                                    el?.scrollIntoView({ behavior: 'smooth' });
                                }} className="px-12 py-6">Écouter les démos</Button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative group">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                                        <img src="https://storage.googleapis.com/novelec_assets/MF%20PROD/Voix%20off/_voix-off__voix-off-illustration.webp" className="w-full h-full object-cover" alt="Studio 1" />
                                    </div>
                                    <div className="aspect-square rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-xl">
                                        <img src="https://storage.googleapis.com/novelec_assets/MF%20PROD/Voix%20off/_voix-off__voix-off-22.webp" className="w-full h-full object-cover" alt="Studio 2" />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-12">
                                    <div className="aspect-square rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-xl">
                                        <img src="https://storage.googleapis.com/novelec_assets/MF%20PROD/Voix%20off/_voix-off__voix-off-aaa.webp" className="w-full h-full object-cover" alt="Studio 3" />
                                    </div>
                                    <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                                        <img src="https://storage.googleapis.com/novelec_assets/MF%20PROD/Voix%20off/_voix-off__IMG_2961-768x1051.webp" className="w-full h-full object-cover" alt="Portrait Mikael" />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative background orb */}
                            <div className="absolute inset-0 bg-brand-cyan/10 blur-[120px] -z-10 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* --- SECTION 2: EXTRAITS AUDIOS --- */}
                <section id="audios" className="mb-48 scroll-mt-40">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 mb-8">
                            <Volume2 size={14} className="text-brand-orange" />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange font-black">Audio Showcase</span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-4">EXTRAITS <span className="gradient-text italic">AUDIOS</span></h2>
                        <p className="text-brand-dark/40 dark:text-brand-light/40 font-black uppercase text-[10px] tracking-[0.4em]">Annonces Voix Off réalisées par Mikael Ferreira</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {audioClips.map((clip, i) => (
                            <div key={i} className="group relative flex flex-col bg-white dark:bg-brand-dark-soft rounded-[3.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl hover:border-brand-orange/40 transition-all duration-500">
                                <div className="relative aspect-video overflow-hidden cursor-pointer bg-white" onClick={() => toggleAudio(i)}>
                                    <img src={clip.cover} alt={clip.title} className="w-full h-full object-contain transform scale-100 group-hover:scale-110 transition-transform duration-[2s]" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                                            {playingIndex === i ? <PauseCircle size={48} /> : <PlayCircle size={48} />}
                                        </div>
                                    </div>
                                    <audio 
                                        ref={el => { audioRefs.current[i] = el; }} 
                                        src={clip.url} 
                                        onEnded={() => setPlayingIndex(null)}
                                    />
                                </div>
                                <div className="p-10 text-center">
                                    <h4 className="text-2xl font-black text-brand-dark dark:text-white uppercase leading-tight mb-2 group-hover:text-brand-orange transition-colors">{clip.title}</h4>
                                    <p className="text-[10px] font-black uppercase text-brand-dark/30 dark:text-white/30 tracking-[0.3em]">{clip.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SECTION 3: REFERENCES --- */}
                <section className="mb-48">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-magenta/30 bg-brand-magenta/10 mb-8">
                            <Star size={14} className="text-brand-magenta" />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-magenta font-black">Prestige & Confiance</span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-4">NOS <span className="gradient-text italic text-brand-magenta">RÉFÉRENCES</span></h2>
                        <p className="text-brand-dark/40 dark:text-brand-light/40 font-black uppercase text-[10px] tracking-[0.4em]">Ils ont fait confiance à la voix de Mikael Ferreira</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {references.map((ref, i) => (
                            <div key={i} className="flex flex-col p-12 lg:p-14 rounded-[4rem] bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 shadow-xl group hover:border-brand-magenta/40 transition-all duration-500 relative overflow-hidden h-full">
                                {/* Watermark icon to fill the void */}
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-magenta/5 rounded-full blur-3xl group-hover:bg-brand-magenta/10 transition-colors pointer-events-none" />
                                <Mic size={120} className="absolute -top-10 -left-10 text-brand-dark/5 dark:text-white/5 -rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-magenta/10 flex items-center justify-center text-brand-magenta group-hover:scale-110 transition-transform mb-10">
                                        <Volume2 size={28} />
                                    </div>

                                    <h4 className="text-3xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-6 group-hover:text-brand-magenta transition-colors">{ref.name}</h4>
                                    
                                    <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/90 leading-relaxed mb-12 flex-grow">
                                        {ref.detail}
                                    </p>

                                    {/* Action links made evident */}
                                    {(ref.link || ref.youtube) && (
                                        <div className="flex flex-col gap-4 pt-8 border-t border-black/5 dark:border-white/10 mt-auto">
                                            {ref.youtube && (
                                                <a 
                                                    href={ref.youtube} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="flex items-center justify-between w-full px-6 py-4 rounded-2xl bg-red-600 text-white font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg group/link"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <Youtube size={20} />
                                                        Voir la vidéo
                                                    </div>
                                                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                                </a>
                                            )}
                                            {ref.link && (
                                                <a 
                                                    href={ref.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="flex items-center justify-between w-full px-6 py-4 rounded-2xl bg-brand-dark dark:bg-white/5 border border-black/10 dark:border-white/10 text-brand-dark dark:text-white font-black text-xs uppercase tracking-widest hover:border-brand-magenta hover:text-brand-magenta transition-all group/link"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <ExternalLink size={20} />
                                                        Consulter le projet
                                                    </div>
                                                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FINAL CTA --- */}
                <div className="p-16 lg:p-24 rounded-[5rem] bg-brand-dark text-white border-2 border-white/10 relative overflow-hidden shadow-2xl text-center group">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-transparent to-brand-magenta/10 pointer-events-none opacity-50" />
                    <Sparkles className="mx-auto mb-10 text-brand-cyan animate-pulse" size={56} />
                    <h3 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-10 leading-tight">VOTRE IDENTITÉ <br/><span className="text-brand-cyan italic underline decoration-brand-cyan/30 underline-offset-8">A UNE VOIX</span></h3>
                    <p className="text-xl font-light text-white/50 max-w-3xl mx-auto mb-16 leading-relaxed">
                        Prêt à donner une dimension unique à votre projet ? Contactez-nous pour un devis personnalisé ou une session d'enregistrement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button className="py-8 px-20 text-xl shadow-[0_30px_60px_-15px_rgba(0,210,255,0.3)]" onClick={() => handleBooking()}>Contacter Mikaël</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoixOff;
