
import React, { useEffect, useState } from 'react';
import { View } from '../../types';
import { Button } from '../ui/Button';
import { Star, Music, Users, Tv, Mic2, Zap } from 'lucide-react';

interface MenProps {
    onNavigate: (view: View) => void;
}

const Men: React.FC<MenProps> = ({ onNavigate }) => {
     const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen pt-32 lg:pt-40 relative bg-brand-dark">
            <div className="fixed top-0 left-0 w-full h-[80vh] -z-10 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark" />
                <img 
                    src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                    className="w-full h-full object-cover filter contrast-125 brightness-75"
                    alt="Scène de spectacle"
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                <div className={`lg:col-span-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="text-brand-magenta uppercase tracking-[0.5em] text-xs font-black mb-6 block">PRODUCTION MF PROD</span>
                    <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-white mb-16 leading-[0.85] tracking-tighter">
                        LE SHOW <br/><span className="gradient-text uppercase italic">SUPERSTARS</span>
                    </h1>

                    <div className="space-y-12 lg:space-y-20 text-brand-light/80 font-sans">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
                            <span className="text-6xl md:text-8xl font-black text-brand-magenta mr-4 float-left mt-[-10px]">S</span>
                            UPERSTARS est l'événement musical de l'année. Une fresque musicale grandiose qui rend hommage aux icônes qui ont façonné l'histoire de la musique. Plus qu'un concert, c'est une immersion sensorielle absolue.
                        </p>
                        
                        <blockquote className="border-l-8 border-brand-magenta pl-10 lg:pl-16 py-8 my-16 bg-white/5 rounded-r-3xl text-white font-sans font-black text-3xl lg:text-5xl italic tracking-tight shadow-2xl">
                            "Une explosion de talents au service des plus grandes légendes."
                        </blockquote>

                        <h3 className="font-sans font-black text-4xl lg:text-6xl text-white pt-10 mb-12 tracking-tight">LES PILIERS DU SPECTACLE</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: <Mic2 size={40} />, title: "Voix", text: "Un casting d'exception sélectionné pour leur signature vocale unique." },
                                { icon: <Music size={40} />, title: "Live", text: "Aucune bande son. Tout est joué en direct pour une émotion pure." },
                                { icon: <Tv size={40} />, title: "Image", text: "Une scénographie vidéo moderne et totalement immersive." },
                                { icon: <Star size={40} />, title: "Émotion", text: "Une direction artistique centrée sur le partage avec le public." },
                            ].map((val, i) => (
                                <div key={i} className="bg-brand-dark-soft/80 backdrop-blur-3xl p-10 rounded-[3rem] border-2 border-white/10 hover:border-brand-magenta/40 transition-all h-full flex flex-col shadow-2xl group">
                                    <div className="text-brand-cyan mb-8 group-hover:scale-110 transition-transform">{val.icon}</div>
                                    <h4 className="font-sans font-black text-3xl text-white mb-4 tracking-tight">{val.title}</h4>
                                    <p className="text-lg lg:text-xl text-brand-light/60 leading-relaxed font-light">{val.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 relative">
                    <div className={`sticky top-32 lg:top-48 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="bg-brand-dark-soft border-2 border-white/10 p-12 rounded-[3.5rem] relative overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-magenta/10 to-transparent pointer-events-none"></div>
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-magenta/10 rounded-full blur-[100px] group-hover:bg-brand-magenta/20 transition-all"></div>
                            
                            <div className="relative z-10">
                                <h3 className="font-sans font-black text-4xl text-white mb-6 tracking-tight">RÉSERVER <br/>LE SHOW</h3>
                                <div className="flex items-center gap-3 mb-10 text-brand-orange uppercase tracking-widest font-black text-xs">
                                    <Zap size={16} fill="currentColor" />
                                    <span>TOURNÉE FRANCE 2025</span>
                                </div>
                                <div className="space-y-6 mb-12">
                                    <div className="flex justify-between items-center text-lg border-b border-white/10 pb-4">
                                        <span className="text-brand-light/40 uppercase tracking-widest text-[10px] font-black">Durée</span>
                                        <span className="text-white font-black">2H15</span>
                                    </div>
                                    <div className="flex justify-between items-center text-lg border-b border-white/10 pb-4">
                                        <span className="text-brand-light/40 uppercase tracking-widest text-[10px] font-black">Effectif</span>
                                        <span className="text-white font-black">12 ARTISTES</span>
                                    </div>
                                    <div className="flex justify-between items-center text-lg border-b border-white/10 pb-4">
                                        <span className="text-brand-light/40 uppercase tracking-widest text-[10px] font-black">Status</span>
                                        <span className="text-brand-cyan font-black">DISPONIBLE</span>
                                    </div>
                                </div>
                                <Button className="w-full justify-center py-6 text-lg" onClick={() => onNavigate(View.BOOKING)}>Commander le Spectacle</Button>
                                <p className="text-center text-[9px] uppercase tracking-[0.4em] text-white/20 mt-10 font-black">DOSSIER TECHNIQUE SUR DEMANDE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Men;
