
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { ASSETS } from '../../../assets';
import { 
  Zap, ArrowLeft, Star, Users, Clock, Youtube, Tv, 
  Camera, Instagram, Newspaper, Mic, PlayCircle, 
  Sparkles, ChevronRight, UserPlus, MapPin,
  ExternalLink, MousePointer2, ChevronLeft, Calendar, 
  Ticket, Info, History, Video, Image as ImageIcon
} from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const ProductionSpectacles: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    const SHOW_ASSET_BASE = "https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/";
    const getShowAsset = (name: string) => `${SHOW_ASSET_BASE}${encodeURIComponent(name)}`;

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleContact = (service: string) => {
        onNavigate(View.BOOKING, {
            serviceId: View.PRODUCTION_SPECTACLES,
            serviceName: service,
            type: 'CONTACT'
        });
    };

    const handleArtistApplication = () => {
        onNavigate(View.BOOKING, {
            serviceId: View.PRODUCTION_SPECTACLES,
            serviceName: "Candidature Casting",
            type: 'ARTIST_APPLICATION'
        });
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' 
                ? scrollLeft - clientWidth * 0.6 
                : scrollLeft + clientWidth * 0.6;
            
            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    };

    // --- DATA : SAISON 2026 ---
    const upcomingShows = [
        {
            id: "pop",
            title: "LES ROIS ET REINES DE LA POP",
            year: "2026",
            duration: "2 H",
            artists: "Troupe Pop MF",
            desc: "Un hommage flamboyant aux icônes mondiales. De Michael Jackson à Madonna, une explosion de tubes intergénérationnels portée par une mise en scène ultra-moderne.",
            details: "Scénographie LED immersive, 12 danseurs et 4 chanteurs lead. Une production qui repousse les limites du show live.",
            image: ASSETS.SHOWS_2026.find(s => s.id === "pop")?.url || "",
            tag: "PRODUCTION 2026",
            color: "brand-cyan"
        },
        {
            id: "girls",
            title: "MUSIC'S GIRLS",
            year: "2026",
            duration: "1 H 45",
            artists: "Ensemble Féminin",
            desc: "Le pouvoir au féminin. Une célébration des plus grandes voix de femmes à travers les décennies. De la soul au R'n'B moderne.",
            details: "Un spectacle puissant, élégant et engagé, mettant en lumière l'excellence vocale féminine de notre troupe.",
            image: ASSETS.SHOWS_2026.find(s => s.id === "girls")?.url || "",
            tag: "PRODUCTION 2026",
            color: "brand-magenta"
        },
        {
            id: "coco",
            title: "COCO",
            year: "2026",
            duration: "1 H 30",
            artists: "Troupe Scénique",
            desc: "Un voyage coloré et émouvant inspiré des traditions et de la magie des souvenirs. Une épopée musicale pour toute la famille.",
            details: "Costumes traditionnels revisités, décors enchanteurs et une partition musicale qui touche le cœur.",
            image: ASSETS.SHOWS_2026.find(s => s.id === "coco")?.url || "",
            tag: "PRODUCTION 2026",
            color: "brand-orange"
        },
        {
            id: "curie",
            title: "MARIE CURIE",
            year: "2026",
            duration: "2 H",
            artists: "Comédie Musicale",
            desc: "L'histoire épique d'une femme qui a changé la science. Un spectacle biographique intense, poétique et visuellement époustouflant.",
            details: "Une narration théâtrale rythmée par des compositions originales. Le destin d'une pionnière raconté avec force.",
            image: ASSETS.SHOWS_2026.find(s => s.id === "curie")?.url || "",
            tag: "PRODUCTION 2026",
            color: "brand-cyan"
        },
        {
            id: "boogie",
            title: "BOOGIE WONDERLAND",
            year: "2026",
            duration: "2 H 15",
            artists: "Troupe Disco MF",
            desc: "Le retour du Disco. Boules à facettes, pattes d'éph' et rythmes endiablés pour une soirée 100% paillettes et énergie communicative.",
            details: "Interactivité maximale avec le public. Les plus grands hits Earth, Wind & Fire, Chic et bien d'autres.",
            image: ASSETS.SHOWS_2026.find(s => s.id === "boogie")?.url || "",
            tag: "PRODUCTION 2026",
            color: "brand-magenta"
        },
        {
            id: "exploratrices",
            title: "LES NOUVELLES EXPLORATRICES",
            year: "2026",
            duration: "1 H 30",
            artists: "Aventure & Chant",
            desc: "Partez à la découverte de contrées imaginaires avec ces pionnières de l'aventure moderne. Un voyage onirique et musical.",
            details: "Mise en scène intégrant du mapping vidéo pour des décors changeant au gré des explorations de la troupe.",
            image: ASSETS.SHOWS_2026.find(s => s.id === "exploratrices")?.url || "",
            tag: "PRODUCTION 2026",
            color: "brand-orange"
        }
    ];

    // --- DATA : HISTORIQUE (MF PROD ANTHOLOGY) ---
    const historicalShows = [
        {
            id: "fever",
            title: "GROUPE FEVER",
            year: "2024",
            producer: "MF PROD",
            duration: "2 H",
            artists: "12 ARTISTES",
            desc: "Plongez dans l’histoire des plus grands groupes anglo-saxons et français de la pop mais également du rock.",
            details: "Spectacle vivant et dynamique qui aborde les plus grands tubes des années 80 à nos jours.",
            stats: "SUCCÈS RÉGIONAL 2024",
            locations: "Bourg-lès-Valence / Saint-Péray / Guilherand-Granges",
            image: getShowAsset("_spectacles__groupe-fever-mf-prod-avril-2024-1-1024x683.webp"),
            gallery: [
                getShowAsset("_spectacles__groupe-fever-mf-prod-avril-2024-2-scaled-e1715109352682-1024x696.webp"),
                getShowAsset("_spectacles__groupe-fever-mf-prod-avril-2024-3-scaled-e1715109260242-1024x668.webp"),
                getShowAsset("_spectacles__groupe-fever-mf-prod-avril-2024-4-scaled-e1715108546748-1024x851.webp"),
                getShowAsset("_spectacles__groupe-fever-mf-prod-avril-2024-5-1-scaled-e1715108864951-1024x688.webp"),
                getShowAsset("_spectacles__groupe-fever-mf-prod-avril-2024-6-1024x683.webp")
            ],
            medias: ['photo', 'tv'],
            tag: "TOURNEE 2024"
        },
        {
            id: "super60",
            title: "SUPER 60 & TOP 90",
            year: "2024",
            producer: "MF PROD",
            duration: "1 H 30",
            artists: "TROUPE MF PROD",
            desc: "Concept innovant : deux spectacles format court dans la même soirée. L'histoire d'un diner américain à Paris en 1962, suivi du meilleur des années 90.",
            details: "10 serveuses hautes en couleur et des chorégraphies endiablées pour un voyage temporel musical.",
            stats: "EXCLUSIVITÉ MF PROD",
            locations: "Sud-Est France",
            image: getShowAsset("_spectacles__Affiche_spectacle_super_60_TOP_90_MF_PROD-e1745354500563.webp"),
            medias: ['photo'],
            tag: "CONCEPT DOUBLE"
        },
        {
            id: "superstars",
            title: "SUPERSTARS",
            year: "2022 - 2023",
            producer: "MF PROD",
            duration: "2 H 30",
            artists: "28 ARTISTES",
            desc: "Show conçu à l’américaine qui rend hommage à 11 superstars d’hier et aujourd’hui allant d’Edith PIAF à Lady GAGA.",
            details: "Une production monumentale en association avec Accord D’Voix réunissant 28 artistes sur scène.",
            stats: "PLUS DE 20 000 SPECTATEURS",
            locations: "France Entière",
            image: getShowAsset("_spectacles__photo-superstars-site.webp"),
            gallery: [
                getShowAsset("SUPERSTAR IMAGE 1.webp"),
                getShowAsset("SUPERSTAR IMAGE 2.webp"),
                getShowAsset("SUPERSTAR IMAGE 3.webp"),
                getShowAsset("_spectacles__photo-superstars-1-1024x712.webp"),
                getShowAsset("_spectacles__superstars-1.webp")
            ],
            medias: ['tv', 'mic', 'youtube'],
            tag: "PRODUCTION PHARE"
        },
        {
            id: "lola-disco",
            title: "LOLA DISCO",
            year: "2024",
            producer: "MF PROD",
            duration: "2 H",
            artists: "25 ARTISTES",
            desc: "Voyage de découverte de soi au cœur de la vibrante scène New-Yorkaise des années 1970.",
            details: "À travers des chansons emblématiques, Lola Disco célèbre la résilience humaine.",
            stats: "ÉNERGIE COMMUNICATIVE",
            locations: "National",
            image: getShowAsset("_spectacles__Affiche-lola-disco-724x1024.webp"),
            gallery: [
                getShowAsset("_spectacles__lola-disco-1.webp"),
                getShowAsset("_spectacles__lola-disco-2-e1738226995116.webp"),
                getShowAsset("_spectacles__lola-disco-3-e1745355392788.webp"),
                getShowAsset("_spectacles__lola-disco-4-e1738227070337.webp"),
                getShowAsset("_spectacles__lola-disco-5-e1738226747622.webp"),
                getShowAsset("_spectacles__lola-disco-7-e1738226856837.webp")
            ],
            medias: ['instagram', 'news'],
            tag: "DISCO SHOW"
        },
        {
            id: "livre-brise",
            title: "LE LIVRE BRISÉ DE NOËL",
            year: "2023",
            producer: "MF PROD",
            duration: "1 H",
            artists: "16 ARTISTES",
            desc: "Comédie musicale où le Père Noël casse le livre magique des contes.",
            details: "Cendrillon, Raiponce et Blanche Neige s'unissent pour sauver la fête de Noël.",
            stats: "JEUNE PUBLIC - SUCCÈS",
            locations: "Régional",
            image: getShowAsset("_spectacles__Affiche-livre-brise-de-noel-724x1024.webp"),
            gallery: [
                getShowAsset("_spectacles__le-livre-brise-de-Noel-photo-10.webp"),
                getShowAsset("_spectacles__le-livre-brise-de-Noel-photo-11.webp"),
                getShowAsset("_spectacles__le-livre-brise-de-Noel-photo-5-1024x910.webp"),
                getShowAsset("_spectacles__le-livre-brise-de-Noel-photo-6.webp"),
                getShowAsset("_spectacles__le-livre-brise-de-Noel-photo-7.webp"),
                getShowAsset("_spectacles__le-livre-brise-de-Noel-photo-9.webp")
            ],
            medias: ['photo', 'news'],
            tag: "MAGIE DE NOËL"
        },
        {
            id: "magic-cabaret",
            title: "MAGIC CABARET",
            year: "2023",
            producer: "MF PROD",
            duration: "2 H",
            artists: "17 ARTISTES",
            desc: "Comédie musicale située dans un cirque itinérant des années 30.",
            details: "Une immersion poétique dans l'univers forain d'autrefois avec une romance centrale touchante.",
            stats: "AMBIANCE FORAINE",
            locations: "Bourg-lès-Valence / Saint-Péray",
            image: getShowAsset("_spectacles__Magic-cabaret-photo-8-1-1024x843.webp"),
            gallery: [
                getShowAsset("_spectacles__magic-cabaret-photo-1.webp"),
                getShowAsset("_spectacles__magic-cabaret-photo-2.webp"),
                getShowAsset("_spectacles__magic-cabaret-photo-4.webp"),
                getShowAsset("_spectacles__magic-cabaret-photo-5.webp"),
                getShowAsset("_spectacles__magic-cabaret-photo-6.webp")
            ],
            medias: ['tv', 'photo'],
            tag: "CABARET"
        },
        {
            id: "super-heroines",
            title: "LES SUPERS HÉROÏNES",
            year: "2023",
            producer: "MF PROD",
            duration: "45 MIN",
            artists: "4 ARTISTES + NARRATEUR",
            desc: "Spectacle interactif (3-10 ans). Mélodia, Etoile, Super Glace et la Gardienne des rêves partent en quête des ingrédients magiques.",
            details: "Un moment joyeux et totalement divertissant pour les parents et les enfants.",
            stats: "TOTALEMENT INTERACTIF",
            locations: "Région Auvergne-Rhône-Alpes",
            image: getShowAsset("_spectacles__Affiche-les-supers-heroines-et-la-potion-de-noel-1-731x1024.webp"),
            gallery: [
                getShowAsset("_spectacles__photo-les-supers-heroines-et-la-potion-de-noel-1.webp"),
                getShowAsset("_spectacles__photo-les-supers-heroines-et-la-potion-de-noel-2.webp"),
                getShowAsset("_spectacles__super-heroine-et-la-potion-de-noel-3.webp")
            ],
            medias: ['instagram', 'news'],
            tag: "JEUNE PUBLIC"
        },
        {
            id: "magiciennes",
            title: "LES MAGICIENNES DE NOËL",
            year: "2024",
            producer: "MF PROD",
            duration: "1 H",
            artists: "6 ARTISTES",
            desc: "Comment les 5 magiciennes de Noël préparent la potion qui assure la magie des fêtes.",
            details: "Un spectacle chanté et dansé, ludique et interactif pour clôturer l'année en beauté.",
            stats: "NOUVEAUTÉ NOËL 2024",
            locations: "Régional",
            image: getShowAsset("_spectacles__Les-magiciennes-de-Noel-decembre2024.webp"),
            medias: ['instagram', 'tv'],
            tag: "MAGIE DE NOËL"
        },
        {
            id: "musique-aime",
            title: "MUSIQUE JE VOUS AIME",
            year: "2023",
            producer: "MF PROD",
            duration: "1 H 45",
            artists: "ENSEMBLE MF",
            desc: "Une déclaration d'amour à la chanson française et internationale.",
            details: "Une succession de tableaux thématiques portés par des arrangements vocaux originaux.",
            stats: "ÉMOTION PURE",
            locations: "Sud-Est",
            image: getShowAsset("_spectacles__photo-musique-je-vous-aime-1-et-2-photo-1.webp"),
            gallery: [
                getShowAsset("_spectacles__photo-musique-je-vous-aime-1-et-2-photo-2-1024x542.webp"),
                getShowAsset("_spectacles__photo-musique-je-vous-aime-1-et-2-photo-3-1024x669.webp")
            ],
            medias: ['photo'],
            tag: "RÉTRO-POP"
        },
        {
            id: "enfants-hier",
            title: "LES ENFANTS D'HIER ET AUJOURD'HUI",
            year: "2024",
            producer: "ATELIER SPECTACLE",
            duration: "1 H 30",
            artists: "TROUPE ATELIER",
            desc: "Spectacle de fin d'année de l'Atelier Spectacle MF Prod.",
            details: "Mise en scène dynamique explorant les liens entre les générations à travers la musique.",
            stats: "CRÉATION ATELIER",
            locations: "Cornas / Saint-Péray",
            image: getShowAsset("_spectacles__atelier-spectacle-les-enfants-dhier-et-aujourdhui-MF-Prod-2024-724x1024.webp"),
            medias: ['photo'],
            tag: "CRÉATION LOCALE"
        },
        {
            id: "schtroumphs",
            title: "LES SCHTROUMPFS",
            year: "2022",
            producer: "MF PROD",
            duration: "50 MIN",
            artists: "MASCOTTES & CHANT",
            desc: "Spectacle officiel sous licence, avec mascottes géantes et chansons cultes.",
            details: "Une aventure bleue inoubliable pour les plus petits avec une forte dose d'interactivité.",
            stats: "LICENCE OFFICIELLE",
            locations: "Festivals / Arbres de Noël",
            image: getShowAsset("SCHTROUMPH%20AFFICHE.webp"),
            medias: ['photo', 'tv'],
            tag: "OFFICIEL"
        }
    ];

    const MediaIcon = ({ type }: { type: string }) => {
        switch(type) {
            case 'youtube': return <div className="flex flex-col items-center gap-1"><Youtube size={16} /><span className="text-[8px] font-black uppercase">Youtube</span></div>;
            case 'tv': return <div className="flex flex-col items-center gap-1"><Tv size={16} /><span className="text-[8px] font-black uppercase">TV</span></div>;
            case 'photo': return <div className="flex flex-col items-center gap-1"><Camera size={16} /><span className="text-[8px] font-black uppercase">Photos</span></div>;
            case 'instagram': return <div className="flex flex-col items-center gap-1"><Instagram size={16} /><span className="text-[8px] font-black uppercase">Insta</span></div>;
            case 'news': return <div className="flex flex-col items-center gap-1"><Newspaper size={16} /><span className="text-[8px] font-black uppercase">Presse</span></div>;
            case 'mic': return <div className="flex flex-col items-center gap-1"><Mic size={16} /><span className="text-[8px] font-black uppercase">Micro</span></div>;
            default: return <PlayCircle size={16} />;
        }
    };

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                {/* --- HEADER --- */}
                <div className={`mb-32 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 mb-8">
                        <Zap size={14} className="text-brand-orange" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange font-black">Production & Direction Artistique</span>
                    </div>
                    
                    <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-12 tracking-tighter leading-[0.85] uppercase">
                        RÉALISATIONS <br/><span className="gradient-text italic">MF PROD</span>
                    </h1>
                </div>

                {/* --- SECTION 1: LE CARROUSSEL 2026 --- */}
                <section className="mb-48">
                    <div className="flex items-center justify-between mb-16 px-4">
                        <div className="flex items-center gap-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.6em] text-brand-cyan">SAISON 2026 - LES PROCHAINES PRODUCTIONS</h2>
                            <div className="h-px w-32 bg-brand-cyan/30 hidden md:block"></div>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center hover:bg-brand-magenta hover:text-white transition-all shadow-lg"><ChevronLeft size={20} /></button>
                            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center hover:bg-brand-magenta hover:text-white transition-all shadow-lg"><ChevronRight size={20} /></button>
                        </div>
                    </div>

                    <div 
                        ref={scrollRef}
                        className="flex overflow-x-auto pb-12 pt-4 gap-8 lg:gap-10 no-scrollbar snap-x snap-mandatory scroll-smooth"
                    >
                        {upcomingShows.map((show, i) => (
                            <div 
                                key={i}
                                onClick={() => scrollToSection(show.id)}
                                className="flex-shrink-0 w-[280px] lg:w-[380px] snap-start flex flex-col items-center group cursor-pointer"
                            >
                                <div className="mb-6 flex items-center gap-3 px-4 py-2 rounded-full border border-brand-magenta/30 bg-brand-magenta/5 dark:bg-brand-magenta/10 shadow-lg animate-breathe">
                                   <Sparkles size={12} className="text-brand-magenta" />
                                   <span className="text-[10px] font-black text-brand-dark dark:text-white uppercase tracking-[0.2em]">Saison 2026</span>
                                </div>

                                <div className="relative w-full aspect-[2/3] rounded-[3rem] overflow-hidden border-2 border-black/5 dark:border-white/10 bg-white dark:bg-brand-dark-soft transition-all duration-500 hover:border-brand-magenta/50 shadow-xl group-hover:shadow-[0_30px_60px_-15px_rgba(255,0,122,0.3)]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-60"></div>
                                    <img src={show.image} alt={show.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out" />
                                    <div className="absolute bottom-8 left-8 right-8 text-white z-20">
                                        <h4 className="text-xl font-black uppercase tracking-tighter leading-tight mb-2 drop-shadow-lg">{show.title}</h4>
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[8px] font-black uppercase tracking-widest text-brand-cyan">Cliquer pour détails</span>
                                            <MousePointer2 size={10} className="text-brand-cyan" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SECTION 2: LE CATALOGUE COMPLET --- */}
                <section className="mb-48 space-y-24">
                    {/* Index 2026 */}
                    <div>
                        <div className="flex items-center gap-6 mb-16 px-4">
                            <h2 className="text-xs font-black uppercase tracking-[0.6em] text-brand-cyan whitespace-nowrap">INDEX SAISON 2026</h2>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-cyan/30 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {upcomingShows.map((show, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => scrollToSection(show.id)}
                                    className="group cursor-pointer relative aspect-square rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-lg hover:-translate-y-2 transition-all duration-500"
                                >
                                    <img src={show.image} alt={show.title} className="w-full h-full object-cover transition-all duration-700" />
                                    <div className="absolute inset-0 bg-brand-cyan/10 opacity-30 group-hover:opacity-0 transition-opacity"></div>
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <h4 className="text-[9px] font-black uppercase tracking-widest leading-tight drop-shadow-lg">{show.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Index Historique */}
                    <div>
                        <div className="flex items-center gap-6 mb-16 px-4">
                            <h2 className="text-xs font-black uppercase tracking-[0.6em] text-brand-magenta whitespace-nowrap">HISTORIQUE DES PRODUCTIONS</h2>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-magenta/30 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
                            {historicalShows.map((show, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => scrollToSection(show.id)}
                                    className="group cursor-pointer relative aspect-square rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-4 hover:border-brand-magenta/50"
                                >
                                    <img src={show.image} alt={show.title} className="w-full h-full object-cover transition-all duration-700" />
                                    <div className="absolute inset-0 bg-brand-dark/30 opacity-40 group-hover:opacity-10 transition-opacity"></div>
                                    <div className="absolute bottom-6 left-6 right-6 text-white transform group-hover:-translate-y-2 transition-transform">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-brand-magenta mb-1 block">{show.year}</span>
                                        <h4 className="text-xs font-black uppercase tracking-tighter leading-none">{show.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3: FOCUS SAISON 2026 --- */}
                <div className="space-y-64 mb-64">
                    <div className="flex flex-col items-center gap-4 mb-32">
                        <div className="h-20 w-px bg-gradient-to-b from-transparent to-brand-cyan"></div>
                        <h2 className="text-xs font-black uppercase tracking-[1em] text-brand-cyan">FOCUS SAISON 2026</h2>
                    </div>

                    {upcomingShows.map((show, i) => (
                        <div key={i} id={show.id} className="relative scroll-mt-48 group">
                            <div className="flex items-center gap-6 mb-16">
                                <span className="text-8xl lg:text-9xl font-black opacity-5 dark:opacity-10 select-none">0{i + 1}</span>
                                <div className="h-px flex-1 bg-brand-cyan/20"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-cyan">{show.tag}</span>
                            </div>

                            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                    <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white dark:border-brand-dark-soft group-hover:scale-105 transition-transform duration-700">
                                        <img src={show.image} alt={show.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
                                    </div>
                                </div>

                                <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                    <div className="flex flex-wrap gap-4 mb-10">
                                        <div className="px-5 py-2 rounded-full bg-brand-cyan text-brand-dark text-[9px] font-black uppercase tracking-widest">EXCLUSIVITÉ 2026</div>
                                        <div className="px-5 py-2 rounded-full bg-black/5 dark:bg-white/10 text-brand-dark dark:text-white text-[9px] font-black uppercase tracking-widest">DURÉE {show.duration}</div>
                                        <div className="px-5 py-2 rounded-full bg-black/5 dark:bg-white/10 text-brand-dark dark:text-white text-[9px] font-black uppercase tracking-widest">{show.artists}</div>
                                    </div>

                                    <h3 className="text-5xl lg:text-8xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-10 leading-none">
                                        {show.title}
                                    </h3>

                                    <div className="p-10 lg:p-14 bg-white dark:bg-brand-dark-soft rounded-[3.5rem] border border-black/5 dark:border-white/10 shadow-2xl mb-12">
                                        <p className="text-xl lg:text-3xl font-light text-brand-dark/70 dark:text-brand-light/80 leading-relaxed mb-8 italic font-serif">
                                            "{show.desc}"
                                        </p>
                                        <p className="text-brand-dark/40 dark:text-brand-light/40 font-light leading-relaxed">
                                            {show.details}
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <Button onClick={() => handleContact(show.title)} className="py-7 px-14 text-sm shadow-xl">Pré-réserver pour ma commune</Button>
                                        <Button variant="outline" onClick={() => handleArtistApplication()} className="py-7">Postuler au Casting</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- SECTION 4: MF PROD ANTHOLOGY --- */}
                <div className="space-y-64">
                    <div className="flex flex-col items-center gap-4 mb-32">
                        <div className="h-20 w-px bg-gradient-to-b from-transparent to-brand-magenta"></div>
                        <h2 className="text-xs font-black uppercase tracking-[1em] text-brand-magenta text-center">MF PROD ANTHOLOGY<br/><span className="text-[10px] opacity-40">HISTORIQUE DES RÉALISATIONS</span></h2>
                    </div>

                    {historicalShows.map((show, i) => (
                        <div key={i} id={show.id} className="relative scroll-mt-48 group">
                            <div className="flex items-center gap-6 mb-16">
                                <span className="text-8xl lg:text-9xl font-black opacity-5 dark:opacity-10 select-none">{String(upcomingShows.length + i + 1).padStart(2, '0')}</span>
                                <div className="h-px flex-1 bg-brand-magenta/20"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-magenta">{show.tag}</span>
                            </div>

                            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-brand-dark-soft transition-transform duration-700">
                                        <img src={show.image} alt={show.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
                                        <div className="absolute top-8 left-8 bg-brand-magenta text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">{show.year}</div>
                                    </div>
                                    
                                    {/* --- MEDIA ICONS --- */}
                                    <div className="mt-12 flex gap-4 justify-center lg:justify-start">
                                        {show.medias?.map((m, idx) => (
                                            <div key={idx} className="w-14 h-14 rounded-2xl bg-white dark:bg-brand-dark border border-black/5 dark:border-white/10 flex items-center justify-center text-brand-dark/40 dark:text-white/40 hover:bg-brand-magenta hover:text-white transition-all cursor-pointer shadow-md">
                                                <MediaIcon type={m} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                    <div className="flex flex-wrap gap-4 mb-10">
                                        <div className="px-5 py-2 rounded-full bg-brand-magenta text-white text-[9px] font-black uppercase tracking-widest">{show.producer}</div>
                                        <div className="px-5 py-2 rounded-full bg-black/5 dark:bg-white/10 text-brand-dark dark:text-white text-[9px] font-black uppercase tracking-widest">DURÉE {show.duration}</div>
                                        <div className="px-5 py-2 rounded-full bg-black/5 dark:bg-white/10 text-brand-dark dark:text-white text-[9px] font-black uppercase tracking-widest">{show.artists}</div>
                                    </div>

                                    <h3 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-10 leading-none">
                                        {show.title}
                                    </h3>

                                    <div className="p-10 lg:p-14 bg-white dark:bg-brand-dark-soft rounded-[3.5rem] border border-black/5 dark:border-white/10 shadow-2xl mb-12">
                                        <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/80 leading-relaxed mb-8 italic font-serif">
                                            "{show.desc}"
                                        </p>
                                        <p className="text-brand-dark/40 dark:text-brand-light/40 font-light leading-relaxed text-sm mb-12">
                                            {show.details}
                                        </p>
                                        
                                        {/* --- GALERIE D'IMAGES ASSOCIÉES --- */}
                                        {show.gallery && show.gallery.length > 0 && (
                                            <div className="mt-12">
                                                <div className="flex items-center gap-3 mb-6 text-brand-cyan uppercase tracking-[0.2em] text-[10px] font-black">
                                                    <ImageIcon size={14} /> Photos de scène
                                                </div>
                                                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                                    {show.gallery.map((imgUrl, gIdx) => (
                                                        <div 
                                                            key={gIdx} 
                                                            className="aspect-square rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 group/img cursor-zoom-in"
                                                        >
                                                            <img 
                                                                src={imgUrl} 
                                                                alt={`${show.title} - photo ${gIdx + 1}`} 
                                                                className="w-full h-full object-cover transform scale-100 group-hover/img:scale-110 transition-transform duration-500" 
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {show.stats && (
                                            <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/10 flex flex-col gap-4">
                                                <div className="flex items-center gap-4 text-brand-orange">
                                                    <Star size={20} className="animate-pulse" />
                                                    <span className="text-xs font-black uppercase tracking-widest">{show.stats}</span>
                                                </div>
                                                <div className="flex items-center gap-4 text-brand-dark/40 dark:text-white/40">
                                                    <MapPin size={16} className="text-brand-magenta" />
                                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{show.locations}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <Button onClick={() => handleContact(show.title)} className="py-7 px-10 text-xs shadow-xl">Commander pour ma commune</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- ARTISTE CASTING CTA --- */}
                <section className="mt-64">
                    <div className="p-16 lg:p-24 rounded-[5rem] bg-brand-dark text-white border-2 border-white/10 relative overflow-hidden shadow-2xl text-center group">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-brand-magenta/10 pointer-events-none" />
                        <Sparkles className="mx-auto mb-10 text-brand-cyan animate-pulse" size={56} />
                        <h3 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-12 leading-tight">VOTRE TALENT <br/><span className="text-brand-magenta italic underline decoration-brand-magenta/30 underline-offset-8">AU COEUR DU SHOW</span></h3>
                        <p className="text-xl font-light text-white/60 max-w-4xl mx-auto mb-16 leading-relaxed">
                            Nous recherchons en permanence de nouveaux profils pour enrichir notre historique. Serez-vous le prochain visage de MF Prod ?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button className="py-8 px-20 text-xl shadow-[0_20px_40px_rgba(255,0,122,0.3)]" onClick={handleArtistApplication}>
                                <UserPlus size={24} className="mr-3" /> Postuler au Casting
                            </Button>
                        </div>
                    </div>
                </section>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </div>
    );
};

export default ProductionSpectacles;
