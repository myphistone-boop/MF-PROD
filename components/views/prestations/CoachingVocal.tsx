
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { ASSETS } from '../../../assets';
import { 
  Check, ArrowLeft, Clock, MapPin, Sparkles, 
  User, Guitar, GraduationCap, Target, Calendar,
  Phone, Mail, History, ChevronRight, Star, Compass,
  Music, Mic2
} from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const CoachingVocal: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

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
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen selection:bg-brand-magenta selection:text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                
                {/* --- NAVIGATION --- */}
                <button 
                    onClick={() => onNavigate(View.SERVICES)} 
                    className="group flex items-center gap-4 text-brand-dark/40 dark:text-white/40 hover:text-brand-magenta transition-all mb-16 uppercase text-xs font-black tracking-[0.3em]"
                >
                    <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-brand-magenta group-hover:bg-brand-magenta group-hover:text-white transition-all">
                        <ArrowLeft size={16} />
                    </div>
                    Toutes les prestations
                </button>

                {/* --- HERO --- */}
                <header className={`mb-48 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-10 tracking-tighter leading-[0.85] uppercase">
                        COURS & <br/><span className="gradient-text italic">FORMATIONS</span>
                    </h1>
                    <p className="text-2xl lg:text-4xl font-light text-brand-dark/70 dark:text-brand-light/70 max-w-4xl leading-tight mb-16">
                        De l'éveil à la performance professionnelle, développez votre identité vocale et scénique avec l'expertise MF Prod.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        {[
                            { id: 'particuliers', label: 'Particuliers', color: 'brand-cyan' },
                            { id: 'collectifs', label: 'Collectifs', color: 'brand-magenta' },
                            { id: 'chorale', label: 'Chorale', color: 'brand-cyan' },
                            { id: 'atelier', label: 'Atelier Spectacle', color: 'brand-orange' },
                            { id: 'danse', label: 'Danse', color: 'brand-magenta' },
                            { id: 'instruments', label: 'Instruments', color: 'brand-cyan' },
                            { id: 'formations', label: 'Formations', color: 'brand-orange' },
                        ].map(link => (
                            <button 
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className={`px-6 py-3 rounded-full border-2 border-${link.color}/20 text-brand-dark/60 dark:text-white/60 text-[10px] font-black uppercase tracking-widest hover:border-${link.color} hover:text-brand-dark dark:hover:text-white transition-all`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </header>

                <div className="space-y-64">
                    
                    {/* --- SECTION 1: COURS PARTICULIERS --- */}
                    <section id="particuliers" className="scroll-mt-48">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-6">
                                <SectionTag label="Pour tous niveaux" color="brand-cyan" />
                                <h2 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-8 leading-none">
                                    COURS <br/><span className="text-brand-cyan italic">PARTICULIERS</span>
                                </h2>
                                <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed">
                                    Imaginez-vous avec une attention personnalisée, offrant un accompagnement sur mesure pour perfectionner votre voix en mettant l'accent sur vos besoins spécifiques.
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
                                        <div className="flex justify-between items-center border-b border-brand-cyan/10 pb-3">
                                            <span className="text-sm font-bold opacity-60 uppercase">3 H par mois</span>
                                            <span className="text-2xl font-black">850 €</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-bold opacity-60 uppercase">4 H par mois</span>
                                            <span className="text-2xl font-black">960 €</span>
                                        </div>
                                    </div>
                                </div>
                                <Button className="w-full sm:w-auto" onClick={() => handleBooking("Cours Particulier", "À partir de 570€/an", "APPOINTMENT")}>S'inscrire aux cours particuliers</Button>
                            </div>
                            <div className="lg:col-span-6">
                                <div className="relative aspect-square rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                    <img src="https://storage.googleapis.com/novelec_assets/MF%20PROD/Photo%20a%20propos%20Mikael.webp" className="w-full h-full object-cover" alt="Cours Particulier Mikaël Ferreira" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 2: COURS COLLECTIFS --- */}
                    <section id="collectifs" className="scroll-mt-48">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-6 lg:order-2">
                                <SectionTag label="Pour tous niveaux" color="brand-magenta" />
                                <h2 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-8 leading-none">
                                    COURS <br/><span className="text-brand-magenta italic">COLLECTIFS</span>
                                </h2>
                                <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed">
                                    Imaginez-vous entouré d'autres passionnés. Conçus pour créer une expérience immersive, ces cours permettent de développer votre voix tout en tissant des liens avec d'autres artistes.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                    <DetailItem icon={Calendar} label="Jours" value="Les Mardis ou Mercredis" />
                                    <DetailItem icon={Clock} label="Durée" value="1H00 Hebdomadaire" />
                                    <DetailItem icon={MapPin} label="Lieu" value="L'Atelier – CORNAS (07)" />
                                    <DetailItem icon={User} label="Professeur" value="Mikaël FERREIRA" />
                                </div>

                                <div className="flex items-center justify-between p-8 rounded-[2.5rem] bg-brand-magenta/5 border border-brand-magenta/20 mb-12">
                                    <span className="text-xs font-black uppercase tracking-widest text-brand-magenta">Tarif Annuel</span>
                                    <span className="text-4xl font-black text-brand-dark dark:text-white">310 €</span>
                                </div>
                                <Button variant="secondary" className="w-full sm:w-auto" onClick={() => handleBooking("Cours Collectifs", "310 € / an")}>Rejoindre un groupe</Button>
                            </div>
                            <div className="lg:col-span-6 lg:order-1">
                                <div className="relative aspect-square rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                    <img src="https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/_spectacles__groupe-fever-mf-prod-avril-2024-5-1-scaled-e1715108864951-1024x688.webp" className="w-full h-full object-cover" alt="Cours Collectifs Groupe Fever" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 3: CHORALE --- */}
                    <section id="chorale" className="scroll-mt-48">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-6">
                                <SectionTag label="Puissance Collective" color="brand-cyan" />
                                <h2 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-8 leading-none">
                                    LA <br/><span className="text-brand-cyan italic">CHORALE</span>
                                </h2>
                                <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed">
                                    La puissance de la voix collective est inégalée. Rejoignez une harmonie incroyable pour explorer des répertoires variés et ressentir la magie de chanter ensemble.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                    <DetailItem icon={Calendar} label="Rendez-vous" value="Mercredis à 20H30" />
                                    <DetailItem icon={Clock} label="Durée" value="1H30 Hebdomadaire" />
                                    <DetailItem icon={MapPin} label="Lieu" value="L'Atelier – CORNAS (07)" />
                                    <DetailItem icon={User} label="Professeur" value="Mikaël FERREIRA" />
                                </div>

                                <div className="flex items-center justify-between p-8 rounded-[2.5rem] bg-brand-cyan/5 border border-brand-cyan/20 mb-12">
                                    <span className="text-xs font-black uppercase tracking-widest text-brand-cyan">Tarif Annuel</span>
                                    <span className="text-4xl font-black text-brand-dark dark:text-white">280 €</span>
                                </div>
                                <Button className="w-full sm:w-auto" onClick={() => handleBooking("Chorale MF Prod", "280 € / an")}>S'inscrire à la Chorale</Button>
                            </div>
                            <div className="lg:col-span-6">
                                <div className="relative aspect-square rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                    <img src="https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/_spectacles__photo-musique-je-vous-aime-1-et-2-photo-2-1024x542.webp" className="w-full h-full object-cover" alt="Chorale MF Prod" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 4: ATELIER SPECTACLE --- */}
                    <section id="atelier" className="scroll-mt-48">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            <div className="lg:col-span-7">
                                <SectionTag label="Adultes & Enfants" color="brand-orange" />
                                <h2 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-8 leading-none">
                                    ATELIER <br/><span className="text-brand-orange italic">SPECTACLE</span>
                                </h2>
                                <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed">
                                    Imaginez-vous monter sur scène dans le cadre d'une création de spectacle sur mesure. Chanter, danser et jouer la comédie avec une configuration pro (son, lumières, costumes).
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
                                    <div className="space-y-6">
                                        <h4 className="text-sm font-black text-brand-orange uppercase tracking-widest">Adultes (1H15)</h4>
                                        <div className="space-y-3 opacity-70">
                                            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">Jeudis</p>
                                            <p className="text-sm">G1 : 19H00 - 20H15 | G2 : 20H30 - 21H45</p>
                                            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">Vendredis</p>
                                            <p className="text-sm">G3 : 18H30 - 19H45</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-sm font-black text-brand-cyan uppercase tracking-widest">Enfants (1H30)</h4>
                                        <div className="space-y-3 opacity-70">
                                            <p className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Samedis</p>
                                            <p className="text-sm">10H30 à 12H00</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-brand-dark-soft p-10 rounded-[3rem] border border-black/5 dark:border-white/10 mb-12 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Star size={80} /></div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-6 flex items-center gap-2"><History size={14} /> Réalisations</h4>
                                    <p className="text-sm font-light leading-relaxed mb-6">L'atelier a donné naissance au spectacle <strong>« Groupe Fever »</strong> présenté devant plus de 940 spectateurs cumulés à Saint-Péray et Guilherand-Granges.</p>
                                    <button onClick={() => onNavigate(View.PRODUCTION_SPECTACLES)} className="text-xs font-black uppercase text-brand-magenta flex items-center gap-2 hover:gap-4 transition-all">Voir l'historique <ChevronRight size={14} /></button>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                                    <div className="flex-1 w-full flex items-center justify-between p-8 rounded-[2.5rem] bg-brand-orange/5 border border-brand-orange/20">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Tarif Annuel</span>
                                            <span className="text-[9px] uppercase font-bold opacity-30 tracking-widest">Places Limitées</span>
                                        </div>
                                        <span className="text-4xl font-black text-brand-dark dark:text-white">360 €</span>
                                    </div>
                                    <Button className="w-full sm:w-auto px-12" onClick={() => handleBooking("Atelier Spectacle", "360 € / an")}>S'inscrire</Button>
                                </div>
                            </div>
                            
                            <div className="lg:col-span-5 lg:sticky lg:top-48">
                                <div className="bg-brand-dark-soft rounded-[3rem] p-10 border border-white/10 shadow-2xl">
                                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange mb-8">Saison 2025 – 2026</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { id: 'coco', title: 'COCO', url: ASSETS.SHOWS_2026.find(s=>s.id==='coco')?.url },
                                            { id: 'boogie', title: 'Boogie Wonderland', url: ASSETS.SHOWS_2026.find(s=>s.id==='boogie')?.url },
                                            { id: 'curie', title: 'Marie Curie', url: ASSETS.SHOWS_2026.find(s=>s.id==='curie')?.url }
                                        ].map((show, i) => (
                                            <div key={i} className="aspect-[2/3] rounded-2xl overflow-hidden border border-white/5 relative group cursor-pointer" onClick={() => onNavigate(View.PRODUCTION_SPECTACLES)}>
                                                <img src={show.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={show.title} />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                                                    <span className="text-[8px] font-black uppercase text-white tracking-widest">{show.title}</span>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer" onClick={() => onNavigate(View.PRODUCTION_SPECTACLES)}>
                                            <img 
                                                src="https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/_creation-spectacle__creation-spectacle-1024x768.webp" 
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                                alt="Création Spectacle Atelier" 
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                                                <span className="text-[8px] font-black uppercase text-white tracking-widest">Nouvelle Création</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 5: COURS DE DANSE --- */}
                    <section id="danse" className="scroll-mt-48">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-6 lg:order-2">
                                <SectionTag label="Pour tous niveaux" color="brand-magenta" />
                                <h2 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-8 leading-none">
                                    COURS DE <br/><span className="text-brand-magenta italic">DANSE</span>
                                </h2>
                                <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed">
                                    Êtes-vous prêt à révéler votre talent ? Plongez dans un univers de rythmes envoûtants et de mouvements fluides avec notre professeur Alexandra.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                    <DetailItem icon={Calendar} label="Rendez-vous" value="Les Mardis à 20H00" />
                                    <DetailItem icon={Clock} label="Durée" value="1H30 Hebdomadaire" />
                                    <DetailItem icon={User} label="Professeur" value="Alexandra GARCIA ALVAREZ" />
                                    <DetailItem icon={Star} label="Bonus" value="Spectacle exclusif en fin de session" />
                                </div>

                                <div className="flex items-center justify-between p-8 rounded-[2.5rem] bg-brand-magenta/5 border border-brand-magenta/20 mb-12">
                                    <span className="text-xs font-black uppercase tracking-widest text-brand-magenta">Tarif Annuel</span>
                                    <span className="text-4xl font-black text-brand-dark dark:text-white">250 €</span>
                                </div>
                                <Button variant="secondary" className="w-full sm:w-auto" onClick={() => handleBooking("Cours de Danse", "250 € / an")}>Rejoindre le cours</Button>
                            </div>
                            <div className="lg:col-span-6 lg:order-1">
                                <div className="relative aspect-square rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Danse Moderne Alexandra Garcia" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 6: COURS INSTRUMENTS --- */}
                    <section id="instruments" className="scroll-mt-48">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-6">
                                <SectionTag label="Tous niveaux & âges" color="brand-cyan" />
                                <h2 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-8 leading-none">
                                    PIANO OU <br/><span className="text-brand-cyan italic">GUITARE</span>
                                </h2>
                                <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed">
                                    Transformez votre passion en talent. David vous accompagne pas à pas pour maîtriser votre instrument avec plaisir et confiance.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                    <DetailItem icon={Calendar} label="Disponibilité" value="Les Lundis" />
                                    <DetailItem icon={Clock} label="Format" value="Cours de 1H00" />
                                    <DetailItem icon={MapPin} label="Lieu" value="L'Atelier – CORNAS (07)" />
                                    <DetailItem icon={User} label="Professeur" value="David SOUCLIER" />
                                </div>

                                <div className="flex items-center justify-between p-8 rounded-[2.5rem] bg-brand-cyan/5 border border-brand-cyan/20 mb-12">
                                    <span className="text-xs font-black uppercase tracking-widest text-brand-cyan">Tarif</span>
                                    <span className="text-4xl font-black text-brand-dark dark:text-white">30 € <span className="text-xs opacity-40">/ HEURE</span></span>
                                </div>

                                <div className="p-8 bg-white dark:bg-brand-dark-soft rounded-3xl border border-black/5 dark:border-white/10">
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-6">Contact Inscription Directe</p>
                                    <div className="flex flex-col gap-4">
                                        <a href="tel:0668302177" className="flex items-center gap-4 text-brand-magenta font-bold hover:scale-105 transition-transform"><Phone size={18} /> 06.68.30.21.77</a>
                                        <a href="mailto:dsouclier@aol.com" className="flex items-center gap-4 text-brand-cyan font-bold hover:scale-105 transition-transform"><Mail size={18} /> dsouclier@aol.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-6">
                                <div className="grid grid-cols-2 gap-6 h-full">
                                    <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Cours de Guitare" />
                                    </div>
                                    <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl mt-12">
                                        <img src="https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Cours de Piano" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 7: FORMATION & STAGE --- */}
                    <section id="formations" className="scroll-mt-48 pb-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-6 lg:order-2">
                                <SectionTag label="Entreprise & Particulier" color="brand-orange" />
                                <h2 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-8 leading-none">
                                    VOIX & <br/><span className="text-brand-orange italic">COMMUNICATION</span>
                                </h2>
                                <p className="text-xl lg:text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed">
                                    Cultivons la puissance de votre voice pour atteindre des sommets d'impact. Une formation enrichissante alliant théorie, ateliers pratiques et mises en situation.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                    <DetailItem icon={Clock} label="Durée" value="4H00 à Plusieurs Jours" />
                                    <DetailItem icon={GraduationCap} label="Format" value="Sous forme de Stage" />
                                    <DetailItem icon={Target} label="Domaine" value="Pros du phoning, Commerciaux..." />
                                    <DetailItem icon={User} label="Professeur" value="Mikaël FERREIRA" />
                                </div>

                                <div className="flex items-center justify-between p-8 rounded-[2.5rem] bg-brand-orange/5 border border-brand-orange/20 mb-12">
                                    <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Tarifs</span>
                                    <span className="text-2xl font-black text-brand-dark dark:text-white uppercase tracking-tighter">En fonction des besoins</span>
                                </div>
                                <Button className="w-full sm:w-auto px-12" onClick={() => handleBooking("Formation Voix & Com", "Sur Devis", "CONTACT")}>Demander un devis personnalisé</Button>
                            </div>
                            <div className="lg:col-span-6 lg:order-1">
                                <div className="relative aspect-square rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Formation Vocale & Communication Professionnelle" />
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* --- MIKAEL FERREIRA BADGE --- */}
                <div className="mt-48 p-12 lg:p-20 rounded-[4rem] bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-magenta/5 rounded-full blur-3xl" />
                    <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden border-4 border-brand-magenta shadow-xl flex-shrink-0">
                        <img src={MIKAEL_PHOTO} className="w-full h-full object-cover" alt="Mikaël Ferreira" />
                    </div>
                    <div>
                        <SectionTag label="Fondateur & Coach" color="brand-magenta" />
                        <h3 className="text-4xl lg:text-5xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-4 leading-none">MIKAËL <br/><span className="text-brand-magenta italic">FERREIRA</span></h3>
                        <p className="text-xl font-light text-brand-dark/60 dark:text-brand-light/60 max-w-2xl leading-relaxed italic border-l-4 border-brand-magenta/30 pl-8">
                            "La voix est un muscle, mais c'est surtout le miroir de l'âme. Mon rôle est de vous donner les clés techniques pour que votre émotion puisse enfin s'exprimer sans entrave."
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoachingVocal;
