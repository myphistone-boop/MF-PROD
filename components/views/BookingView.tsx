
import React, { useState, useEffect } from 'react';
import { View, BookingContext } from '../../types';
import { Button } from '../ui/Button';
import { Clock, Calendar as CalendarIcon, AlertCircle, CheckCircle2, Phone, Mail } from 'lucide-react';

interface BookingViewProps {
    onNavigate?: (view: View) => void;
    context: BookingContext | null;
    isEmbedded?: boolean;
    mode?: 'full' | 'widget';
    theme?: 'light' | 'dark';
}

const BookingView: React.FC<BookingViewProps> = ({ 
    onNavigate, 
    context,
    isEmbedded = false, 
    mode = 'full', 
    theme: propTheme
}) => {
    // Détection dynamique du thème si non passé en prop
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(propTheme || 'dark');
    
    useEffect(() => {
        if (!propTheme) {
            const isLight = document.documentElement.classList.contains('light');
            setCurrentTheme(isLight ? 'light' : 'dark');
        }
    }, [propTheme]);

    const activeContext: BookingContext = context || {
        serviceId: View.COURS_INDIVIDUELS,
        serviceName: "Coaching Vocal",
        type: 'APPOINTMENT'
    };

    const isAppointment = activeContext.type === 'APPOINTMENT';
    const isContact = activeContext.type === 'CONTACT';
    const isReservation = activeContext.type === 'RESERVATION';

    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [step, setStep] = useState(1); // 1: Selection, 2: Form, 3: Success

    const days = [
        { day: 'Lun', date: '15' },
        { day: 'Mar', date: '16' },
        { day: 'Mer', date: '17' },
        { day: 'Jeu', date: '18' },
        { day: 'Ven', date: '19' },
    ];
    const timeSlots = ['09:00', '10:30', '14:00', '15:30', '17:00', '18:30'];

    const spotsTotal = activeContext.spotsTotal || 1;
    const spotsTaken = activeContext.spotsTaken || 0;
    const spotsRemaining = spotsTotal - spotsTaken;
    const fillPercentage = (spotsTaken / spotsTotal) * 100;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(3);
    };

    if (step === 3) {
        return (
            <div className="min-h-[600px] flex items-center justify-center p-12 text-center animate-fade-in-up">
                <div className="max-w-md">
                    <div className="w-24 h-24 bg-brand-cyan/20 text-brand-cyan rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-brand-dark dark:text-white">C'est Partis !</h2>
                    <p className="text-brand-dark/60 dark:text-brand-light/60 mb-10 leading-relaxed font-light">
                        Votre demande pour <strong>{activeContext.serviceName}</strong> a été reçue. Mikael vous contactera très rapidement.
                    </p>
                    <Button onClick={() => onNavigate && onNavigate(View.HOME)}>Retour</Button>
                </div>
            </div>
        );
    }

    return (
      <div className={`flex items-center justify-center relative z-20 ${isEmbedded ? 'w-full h-full' : 'min-h-screen pt-32 pb-20 px-6 animate-fade-in-up'}`}>
          <div className={`bg-white dark:bg-brand-dark-soft text-brand-dark dark:text-white overflow-hidden shadow-2xl w-full flex flex-col lg:flex-row relative border border-black/5 dark:border-white/10 transition-colors duration-500 ${isEmbedded ? 'rounded-[3rem] h-full' : 'rounded-[2rem] max-w-6xl min-h-[600px]'}`}>
              {!isEmbedded && onNavigate && (
                  <button onClick={() => onNavigate(View.HOME)} className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-brand-magenta hover:text-white flex items-center justify-center transition-all text-brand-dark/40 dark:text-white/40">✕</button>
              )}

              <div className="lg:w-2/5 bg-black/5 dark:bg-brand-dark/40 p-12 border-r border-black/5 dark:border-white/5 flex flex-col relative overflow-hidden transition-colors duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-orange"></div>
                  
                  <div className="mb-12">
                      <div className="w-16 h-16 rounded-2xl bg-white dark:bg-brand-dark border border-black/5 dark:border-white/10 flex items-center justify-center mb-8 shadow-xl">
                          <img src="https://storage.googleapis.com/novelec_assets/MF%20PROD.webp" alt="MF" className="w-10 h-10 object-contain" />
                      </div>
                      <h2 className="text-4xl font-black mb-6 leading-none tracking-tighter uppercase">{activeContext.serviceName}</h2>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-brand-dark/60 dark:text-brand-light/60">
                            <Clock size={18} className="text-brand-cyan" />
                            <span className="text-sm">{activeContext.duration || "Session flexible"}</span>
                        </div>
                        {activeContext.price && (
                            <div className="flex items-center gap-4 text-brand-dark/60 dark:text-brand-light/60">
                                <span className="text-xs uppercase font-black text-brand-magenta">Tarif</span>
                                <span className="text-xl font-black text-brand-dark dark:text-white">{activeContext.price}</span>
                            </div>
                        )}
                      </div>
                  </div>

                  {isReservation && (
                    <div className="mt-auto bg-black/5 dark:bg-white/5 rounded-3xl p-8 border border-black/5 dark:border-white/10 transition-colors duration-500">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 dark:text-brand-light/40">Occupation</span>
                            <span className={`text-sm font-black ${spotsRemaining < 5 ? 'text-brand-orange' : 'text-brand-cyan'}`}>{spotsRemaining} places dispos</span>
                        </div>
                        <div className="h-2 bg-brand-light dark:bg-brand-dark rounded-full overflow-hidden mb-4">
                            <div className={`h-full transition-all duration-1000 ${spotsRemaining < 5 ? 'bg-brand-orange' : 'bg-brand-cyan'}`} style={{ width: `${fillPercentage}%` }} />
                        </div>
                    </div>
                  )}

                  {isContact && (
                    <div className="mt-auto space-y-4">
                        <p className="text-brand-dark/40 dark:text-brand-light/40 text-sm font-light italic mb-6">"Prenez contact directement pour vos projets de production."</p>
                        <div className="flex items-center gap-4 text-brand-dark/60 dark:text-white/60"><Phone size={16} /> 06 06 57 89 51</div>
                        <div className="flex items-center gap-4 text-brand-dark/60 dark:text-white/60"><Mail size={16} /> mikmarc@hotmail.fr</div>
                    </div>
                  )}
              </div>

              <div className="lg:w-3/5 p-12 flex flex-col bg-white dark:bg-brand-dark-soft transition-colors duration-500">
                  {step === 1 && (
                    <div className="h-full flex flex-col animate-fade-in-up">
                        <h3 className="text-2xl font-black mb-10 uppercase tracking-tight">
                            {isContact ? "Décrivez votre projet" : "Informations de contact"}
                        </h3>

                        {isAppointment && (
                            <div className="mb-8">
                                <span className="text-brand-dark/40 dark:text-brand-light/40 uppercase tracking-widest text-xs font-black block mb-6">Septembre 2025</span>
                                <div className="grid grid-cols-5 gap-4 mb-8">
                                    {days.map((d, i) => (
                                        <button key={i} onClick={() => setSelectedDate(d.date)} className={`flex flex-col items-center p-4 rounded-2xl border transition-all ${selectedDate === d.date ? 'bg-brand-cyan border-brand-cyan text-white dark:text-brand-dark' : 'bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10'}`}>
                                            <span className="text-[10px] font-black opacity-60 uppercase">{d.day}</span>
                                            <span className="text-lg font-black">{d.date}</span>
                                        </button>
                                    ))}
                                </div>
                                {selectedDate && (
                                    <div className="grid grid-cols-3 gap-3 animate-fade-in-up">
                                        {timeSlots.map((time, i) => (
                                            <button key={i} onClick={() => setSelectedTime(time)} className={`py-3 rounded-xl border-2 font-black text-xs transition-all ${selectedTime === time ? 'border-brand-magenta bg-brand-magenta text-white' : 'border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5'}`}>{time}</button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {isReservation && (
                            <div className="p-8 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-3xl mb-8 flex items-center gap-6">
                                <AlertCircle className="text-brand-cyan" size={32} />
                                <p className="text-sm text-brand-dark/60 dark:text-brand-light/60">Veuillez laisser vos coordonnées pour réserver votre place. Mikael vous confirmera l'inscription sous 24h.</p>
                            </div>
                        )}

                        {isContact && (
                            <textarea className="w-full h-40 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 outline-none focus:border-brand-magenta transition-colors mb-8 text-brand-dark dark:text-white" placeholder="Parlez-nous de votre spectacle, casting ou événement..."></textarea>
                        )}

                        <div className="mt-auto pt-10 flex justify-end">
                            <Button disabled={isAppointment && (!selectedDate || !selectedTime)} onClick={() => setStep(2)} className="w-full lg:w-max py-6 px-12 shadow-xl">Continuer</Button>
                        </div>
                    </div>
                  )}

                  {step === 2 && (
                    <form onSubmit={handleSubmit} className="h-full flex flex-col animate-fade-in-up">
                        <h3 className="text-2xl font-black mb-10 uppercase tracking-tight">Vos Coordonnées</h3>
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <input required type="text" className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-cyan text-brand-dark dark:text-white" placeholder="Nom" />
                                <input required type="text" className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-cyan text-brand-dark dark:text-white" placeholder="Prénom" />
                            </div>
                            <input required type="email" className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-cyan text-brand-dark dark:text-white" placeholder="Email" />
                            <input required type="tel" className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-cyan text-brand-dark dark:text-white" placeholder="Téléphone" />
                        </div>
                        <div className="mt-auto pt-10 flex justify-between items-center">
                            <button type="button" onClick={() => setStep(1)} className="text-xs uppercase font-black text-brand-dark/30 dark:text-white/30 hover:text-brand-magenta transition-colors">Retour</button>
                            <Button type="submit" className="py-6 px-12 shadow-xl">Confirmer</Button>
                        </div>
                    </form>
                  )}
              </div>
          </div>
      </div>
    );
};

export default BookingView;
