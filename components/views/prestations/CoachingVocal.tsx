
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { ASSETS } from '../../../assets';
import { 
  Check, ArrowLeft, Clock, MapPin, Sparkles, 
  User, Guitar, GraduationCap, Target, Calendar,
  Phone, Mail, History, ChevronRight, Star, Compass,
  Music, Mic2, ChevronLeft, ChevronDown
} from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const CoachingVocal: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => { 
        setMounted(true); 
        window.scrollTo(0, 0); 
    }, []);

    const MIKAEL_PHOTO = "https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/_coaching-vocal-drome-ardeche__MIKAEL-e1697395475189%20-%20Copy.webp";

    const handleBooking = (serviceName: string, price?: string, type: 'APPOINTMENT' | 'RESERVATION' | 'CONTACT' = 'RESERVATION') => {
        onNavigate(View.BOOKING, {
            serviceId: View.COACHING_VOCAL,
            serviceName: serviceName,
            type: type,
            price: price
        });
    };

    const scrollTo = (id: string) => {
        setIsMenuOpen(false);
        const el = document.getElementById(id);
        if (!el) return;

        if (window.innerWidth < 1024 && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            container.scrollTo({
                left: el.offsetLeft - container.offsetLeft,
                behavior: 'smooth'
            });
        } else {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollManual = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth * 0.85;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const SectionTag = ({ label, color }: { label: string, color: string }) => (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-${color}/30 bg-${color}/5 mb-6`}>
            <Sparkles size={12} className={`text-${color}`} />
            <span className={`text-[9px] uppercase tracking-[0.3em] text-${color} font-black`}>{label}</span>
        </div>
    );

    const DetailItem = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string }) => (
        <div className="flex items-start gap-4">
            <div className="mt-1 w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-brand-magenta shrink-0">
                <Icon size={16} />
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-0.5">{label}</p>
                <p className="text-sm font-bold text-brand-dark dark:text-white leading-tight">{value}</p>
            </div>
        </div>
    );

    const PRESTATIONS_LINKS = [
        { id: 'particuliers', label: 'Particuliers', color: 'brand-cyan' },
        { id: 'collectifs', label: 'Collectifs', color: 'brand-magenta' },
        { id: 'chorale', label: 'Chorale', color: 'brand-cyan' },
        { id: 'atelier', label: 'Atelier Spectacle', color: 'brand-orange' },
        { id: 'danse', label: 'Danse', color: 'brand-magenta' },
        { id: 'instruments', label: 'Instruments', color: 'brand-cyan' },
        { id: 'formations', label: 'Formations', color: 'brand-orange' },
    ];

    const ActivityTitle = ({ prefix, suffix, color }: { prefix: string, suffix: string, color: string }) => (
        <div className="flex items-center justify-between lg:block mb-8 lg:mb-10 w-full">
            <button 
                onClick={() => scrollManual('left')}
                className="lg:hidden p-2 -ml-2 text-brand-magenta active:scale-90 transition-transform"
                aria-label="Activité précédente"
            >
                <ChevronLeft size={32} strokeWidth={3} />
            </button>
            
            <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter leading-tight text-center lg:text-left flex-1 lg:flex-none">
                {prefix} <br/><span className={`text-${color} italic`}>{suffix}</span>
            </h2>

            <button 
                onClick={() => scrollManual('right')}
                className="lg:hidden p-2 -mr-2 text-brand-magenta active:scale-90 transition-transform"
                aria-label="Activité suivante"
            >
                <ChevronRight size={32} strokeWidth={3} />
            </button>
        </div>
    );

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen selection:bg-brand-magenta selection:text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                
                <button 
                    onClick={() => onNavigate(View.SERVICES)} 
                    className="group flex items-center gap-4 text-brand-dark/40 dark:text-white/40 hover:text-brand-magenta transition-all mb-12 lg:mb-16 uppercase text-xs font-black tracking-[0.3em]"
                >
                    <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-brand-magenta group-hover:bg-brand-magenta group-hover:text-white transition-all">
                        <ArrowLeft size={16} />
                    </div>
                    Toutes les prestations
                </button>

                <header className={`mb-12 lg:mb-48 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="font-sans font-black text-4xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-6 lg:mb-10 tracking-tighter leading-tight lg:leading-[0.85] uppercase">
                        COURS & <br/><span className="gradient-text italic">FORMATIONS</span>
                    </h1>
                    
                    <p className="hidden lg:block text-2xl lg:text-4xl font-light text-brand-dark/70 dark:text-brand-light/70 max-w-4xl leading-tight mb-16">
                        De l'éveil à la performance professionnelle, développez votre identité vocale et scénique avec l'expertise MF Prod.
                    </p>
                    
                    <div className="lg:hidden relative mb-12">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest shadow-xl active:scale-[0.98] transition-all"
                        >
                            <span>Choisir son activité</span>
                            <ChevronDown className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} size={18} />
                        </button>
                        
                        {isMenuOpen && (
                            <div className="absolute top-full left-0 w-full mt-2 p-4 rounded-3xl bg-brand-dark-soft/95 backdrop-blur-2xl border border-white/10 z-50 shadow-2xl flex flex-col gap-2 animate-fade-in-up">
                                {PRESTATIONS_LINKS.map(link => (
                                    <button 
                                        key={link.id}
                                        onClick={() => scrollTo(link.id)}
                                        className="text-left w-full px-6 py-4 rounded-xl hover:bg-white/10 text-white font-bold uppercase text-[10px] tracking-widest border-b border-white/5 last:border-0 transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="hidden lg:flex overflow-x-auto gap-4 pb-4 no-scrollbar lg:flex-wrap">
                        {PRESTATIONS_LINKS.map(link => (
                            <button 
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className={`flex-shrink-0 px-6 py-3 rounded-full border-2 border-${link.color}/20 text-brand-dark/60 dark:text-white/60 text-[10px] font-black uppercase tracking-widest hover:border-${link.color} hover:text-brand-dark dark:hover:text-white transition-all`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </header>

                <div className="relative group">
                    <div 
                        ref={scrollContainerRef}
                        className="flex lg:flex-col overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none no-scrollbar gap-12 lg:gap-64 pb-12"
                    >
                        {/* --- SECTION 1: COURS PARTICULIERS --- */}
                        <section id="particuliers" className="min-w-full lg:min-w-0 snap-center scroll-mt-48 px-2 lg:px-0 flex flex-col">
                            <div className="lg:hidden flex flex-col items-center mb-6">
                                <ActivityTitle prefix="COURS" suffix="PARTICULIERS" color="brand-cyan" />
                                <div className="-mt-4"><SectionTag label="Pour tous niveaux" color="brand-cyan" /></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                                <div className="lg:col-span-6 order-2 lg:order-1">
                                    <div className="lg:block hidden">
                                        <SectionTag label="Pour tous niveaux" color="brand-cyan" />
                                        <ActivityTitle prefix="COURS" suffix="PARTICULIERS" color="brand-cyan" />
                                    </div>
                                    
                                    <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed text-center lg:text-left">
                                        Imaginez-vous avec une attention personnalisée, offrant un accompagnement sur mesure pour perfectionner votre voix.
                                    </p>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                        <DetailItem icon={Clock} label="Format" value="Cours Mensuels (2H à 4H)" />
                                        <DetailItem icon={User} label="Professeur" value="Mikaël FERREIRA" />
                                    </div>

                                    <div className="p-10 rounded-[3rem] bg-brand-cyan/5 border border-brand-cyan/20 mb-12">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-brand-cyan mb-6">Tarif Annuel</h4>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center border-b border-brand-cyan/10 pb-3">
                                                <span className="text-sm font-bold opacity-60 uppercase">2 H par mois</span>
                                                <span className="text-2xl font-black">570 €</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-bold opacity-60 uppercase">4 H par mois</span>
                                                <span className="text-2xl font-black">960 €</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="w-full sm:w-auto" onClick={() => handleBooking("Cours Particulier", "À partir de 570€/an", "APPOINTMENT")}>S'inscrire</Button>
                                </div>
                                <div className="lg:col-span-6 order-1 lg:order-2">
                                    <div className="relative aspect-square rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                        <img src="https://storage.googleapis.com/novelec_assets/MF%20PROD/Photo%20a%20propos%20Mikael.webp" className="w-full h-full object-cover" alt="Cours Particulier" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- SECTION 2: COURS COLLECTIFS --- */}
                        <section id="collectifs" className="min-w-full lg:min-w-0 snap-center scroll-mt-48 px-2 lg:px-0 flex flex-col">
                            <div className="lg:hidden flex flex-col items-center mb-6">
                                <ActivityTitle prefix="COURS" suffix="COLLECTIFS" color="brand-magenta" />
                                <div className="-mt-4"><SectionTag label="Pour tous niveaux" color="brand-magenta" /></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                                <div className="lg:col-span-6 order-2 lg:order-2">
                                    <div className="lg:block hidden">
                                        <SectionTag label="Pour tous niveaux" color="brand-magenta" />
                                        <ActivityTitle prefix="COURS" suffix="COLLECTIFS" color="brand-magenta" />
                                    </div>
                                    
                                    <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed text-center lg:text-left">
                                        Conçus pour créer une expérience immersive, ces cours permettent de développer votre voix en groupe.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                        <DetailItem icon={Calendar} label="Jours" value="Mardis ou Mercredis" />
                                        <DetailItem icon={Clock} label="Durée" value="1H00 Hebdomadaire" />
                                    </div>

                                    <div className="flex items-center justify-between p-8 rounded-[2.5rem] bg-brand-magenta/5 border border-brand-magenta/20 mb-12">
                                        <span className="text-xs font-black uppercase tracking-widest text-brand-magenta">Tarif Annuel</span>
                                        <span className="text-4xl font-black text-brand-dark dark:text-white">310 €</span>
                                    </div>
                                    <Button variant="secondary" className="w-full sm:w-auto" onClick={() => handleBooking("Cours Collectifs", "310 € / an")}>Rejoindre un groupe</Button>
                                </div>
                                <div className="lg:col-span-6 order-1 lg:order-1">
                                    <div className="relative aspect-square rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                        <img src="https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/_spectacles__groupe-fever-mf-prod-avril-2024-5-1-scaled-e1715108864951-1024x688.webp" className="w-full h-full object-cover" alt="Cours Collectifs" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- SECTION 3: CHORALE --- */}
                        <section id="chorale" className="min-w-full lg:min-w-0 snap-center scroll-mt-48 px-2 lg:px-0 flex flex-col">
                            <div className="lg:hidden flex flex-col items-center mb-6">
                                <ActivityTitle prefix="LA" suffix="CHORALE" color="brand-cyan" />
                                <div className="-mt-4"><SectionTag label="Puissance Collective" color="brand-cyan" /></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                                <div className="lg:col-span-6 order-2 lg:order-1">
                                    <div className="lg:block hidden">
                                        <SectionTag label="Puissance Collective" color="brand-cyan" />
                                        <ActivityTitle prefix="LA" suffix="CHORALE" color="brand-cyan" />
                                    </div>
                                    
                                    <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed text-center lg:text-left">
                                        Rejoignez notre ensemble vocal pour une année riche en harmonies et en émotions.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                        <DetailItem icon={Calendar} label="Rendez-vous" value="Mercredis à 20H30" />
                                        <DetailItem icon={MapPin} label="Lieu" value="L'Atelier – CORNAS (07)" />
                                    </div>

                                    <div className="flex items-center justify-between p-8 rounded-[2.5rem] bg-brand-cyan/5 border border-brand-cyan/20 mb-12">
                                        <span className="text-xs font-black uppercase tracking-widest text-brand-cyan">Tarif Annuel</span>
                                        <span className="text-4xl font-black text-brand-dark dark:text-white">280 €</span>
                                    </div>
                                    <Button className="w-full sm:w-auto" onClick={() => handleBooking("Chorale MF Prod", "280 € / an")}>S'inscrire</Button>
                                </div>
                                <div className="lg:col-span-6 order-1 lg:order-2">
                                    <div className="relative aspect-square rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                        <img src="https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/_spectacles__photo-musique-je-vous-aime-1-et-2-photo-2-1024x542.webp" className="w-full h-full object-cover" alt="Chorale" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- SECTION 4: ATELIER SPECTACLE --- */}
                        <section id="atelier" className="min-w-full lg:min-w-0 snap-center scroll-mt-48 px-2 lg:px-0 flex flex-col">
                            <div className="lg:hidden flex flex-col items-center mb-6">
                                <ActivityTitle prefix="ATELIER" suffix="SPECTACLE" color="brand-orange" />
                                <div className="-mt-4"><SectionTag label="Adultes & Enfants" color="brand-orange" /></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                                <div className="lg:col-span-7 order-2 lg:order-1">
                                    <div className="lg:block hidden">
                                        <SectionTag label="Adultes & Enfants" color="brand-orange" />
                                        <ActivityTitle prefix="ATELIER" suffix="SPECTACLE" color="brand-orange" />
                                    </div>
                                    
                                    <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed text-center lg:text-left">
                                        Montez sur scène dans le cadre d'une création sur mesure. Chanter, danser et jouer.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-black text-brand-orange uppercase tracking-widest">Adultes (1H15)</h4>
                                            <p className="text-sm font-bold opacity-70 leading-relaxed">Jeudis ou Vendredis</p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-black text-brand-cyan uppercase tracking-widest">Enfants (1H30)</h4>
                                            <p className="text-sm font-bold opacity-70 leading-relaxed">Samedis matin</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                                        <div className="flex-1 w-full flex items-center justify-between p-8 rounded-[2.5rem] bg-brand-orange/5 border border-brand-orange/20">
                                            <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Tarif Annuel</span>
                                            <span className="text-4xl font-black text-brand-dark dark:text-white">360 €</span>
                                        </div>
                                        <Button className="w-full sm:w-auto px-12" onClick={() => handleBooking("Atelier Spectacle", "360 € / an")}>S'inscrire</Button>
                                    </div>
                                </div>
                                <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-48">
                                    <div className="relative aspect-square rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                        <img src="https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/_creation-spectacle__creation-spectacle-1024x768.webp" className="w-full h-full object-cover" alt="Atelier" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- SECTION 5: DANSE --- */}
                        <section id="danse" className="min-w-full lg:min-w-0 snap-center scroll-mt-48 px-2 lg:px-0 flex flex-col">
                            <div className="lg:hidden flex flex-col items-center mb-6">
                                <ActivityTitle prefix="COURS DE" suffix="DANSE" color="brand-magenta" />
                                <div className="-mt-4"><SectionTag label="Tous niveaux" color="brand-magenta" /></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                                <div className="lg:col-span-6 order-2 lg:order-2">
                                    <div className="lg:block hidden">
                                        <SectionTag label="Tous niveaux" color="brand-magenta" />
                                        <ActivityTitle prefix="COURS DE" suffix="DANSE" color="brand-magenta" />
                                    </div>
                                    
                                    <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed text-center lg:text-left">
                                        Plongez dans un univers de rythmes envoûtants et de mouvements fluides.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                        <DetailItem icon={Calendar} label="Rendez-vous" value="Mardis à 20H00" />
                                        <DetailItem icon={Clock} label="Durée" value="1H30 Hebdomadaire" />
                                    </div>
                                    
                                    <div className="flex items-center justify-between p-8 rounded-[2.5rem] bg-brand-magenta/5 border border-brand-magenta/20 mb-12">
                                        <span className="text-xs font-black uppercase tracking-widest text-brand-magenta">Tarif Annuel</span>
                                        <span className="text-4xl font-black text-brand-dark dark:text-white">250 €</span>
                                    </div>
                                    
                                    <Button variant="secondary" className="w-full sm:w-auto" onClick={() => handleBooking("Cours de Danse", "250 € / an")}>Rejoindre le cours</Button>
                                </div>
                                <div className="lg:col-span-6 order-1 lg:order-1">
                                    <div className="relative aspect-square rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Danse" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- SECTION 6: INSTRUMENTS --- */}
                        <section id="instruments" className="min-w-full lg:min-w-0 snap-center scroll-mt-48 px-2 lg:px-0 flex flex-col">
                            <div className="lg:hidden flex flex-col items-center mb-6">
                                <ActivityTitle prefix="PIANO OU" suffix="GUITARE" color="brand-cyan" />
                                <div className="-mt-4"><SectionTag label="Tous âges" color="brand-cyan" /></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                                <div className="lg:col-span-6 order-2 lg:order-1">
                                    <div className="lg:block hidden">
                                        <SectionTag label="Tous âges" color="brand-cyan" />
                                        <ActivityTitle prefix="PIANO OU" suffix="GUITARE" color="brand-cyan" />
                                    </div>
                                    
                                    <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed text-center lg:text-left">
                                        Maitrisez votre instrument avec plaisir et confiance grâce à un accompagnement expert.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                        <DetailItem icon={Calendar} label="Disponibilité" value="Les Lundis" />
                                        <DetailItem icon={User} label="Professeur" value="David SOUCLIER" />
                                    </div>
                                    <div className="p-8 rounded-[2.5rem] bg-brand-cyan/5 border border-brand-cyan/20 mb-8">
                                        <span className="text-4xl font-black">30 € <span className="text-xs opacity-40">/ HEURE</span></span>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 order-1 lg:order-2">
                                    <div className="relative aspect-square rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Instruments" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- SECTION 7: FORMATION & STAGE --- */}
                        <section id="formations" className="min-w-full lg:min-w-0 snap-center scroll-mt-48 pb-20 px-2 lg:px-0 flex flex-col">
                            <div className="lg:hidden flex flex-col items-center mb-6">
                                <ActivityTitle prefix="VOIX &" suffix="COMMUNICATION" color="brand-orange" />
                                <div className="-mt-4"><SectionTag label="Entreprise & Particulier" color="brand-orange" /></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                                <div className="lg:col-span-6 order-2 lg:order-2">
                                    <div className="lg:block hidden">
                                        <SectionTag label="Entreprise & Particulier" color="brand-orange" />
                                        <ActivityTitle prefix="VOIX &" suffix="COMMUNICATION" color="brand-orange" />
                                    </div>
                                    
                                    <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed text-center lg:text-left">
                                        Une formation alliant théorie et pratique pour booster votre impact à l'oral.
                                    </p>
                                    <div className="mb-12"><Button className="w-full sm:w-auto px-12" onClick={() => handleBooking("Formation Voix & Com", "Sur Devis", "RESERVATION")}>Réserver sa place</Button></div>
                                </div>
                                <div className="lg:col-span-6 order-1 lg:order-1">
                                    <div className="relative aspect-square rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Communication" />
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

                <div className="hidden lg:flex mt-24 lg:mt-48 p-12 lg:p-20 rounded-[3rem] lg:rounded-[4rem] bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-magenta/5 rounded-full blur-3xl" />
                    <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden border-4 border-brand-magenta shadow-xl flex-shrink-0">
                        <img src={MIKAEL_PHOTO} className="w-full h-full object-cover" alt="Mikaël Ferreira" />
                    </div>
                    <div>
                        <div className="lg:block hidden"><SectionTag label="Fondateur & Coach" color="brand-magenta" /></div>
                        <div className="lg:hidden flex justify-center"><SectionTag label="Fondateur & Coach" color="brand-magenta" /></div>
                        <h3 className="text-4xl lg:text-5xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-4 leading-none text-center lg:text-left">MIKAËL <br/><span className="text-brand-magenta italic">FERREIRA</span></h3>
                        <p className="text-lg lg:text-xl font-light text-brand-dark/60 dark:text-brand-light/60 max-w-2xl leading-relaxed italic border-l-4 border-brand-magenta/30 pl-8">
                            "La voix est le miroir de l'âme. Mon rôle est de vous donner les clés techniques pour que votre émotion s'exprime enfin librement."
                        </p>
                    </div>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </div>
    );
};

export default CoachingVocal;
