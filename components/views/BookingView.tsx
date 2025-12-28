
import React, { useState } from 'react';
import { View } from '../../types';
import { Button } from '../ui/Button';
import { ChevronLeft, ChevronRight, Clock, Globe, Calendar as CalendarIcon, Star } from 'lucide-react';

interface BookingViewProps {
    onNavigate?: (view: View) => void;
    isEmbedded?: boolean;
    mode?: 'full' | 'widget';
    theme?: 'light' | 'dark';
}

const BookingView: React.FC<BookingViewProps> = ({ 
    onNavigate, 
    isEmbedded = false, 
    mode = 'full', 
    theme = 'light' 
}) => {
    const days = [
        { day: 'Lun', date: '08' },
        { day: 'Mar', date: '09' },
        { day: 'Mer', date: '10' },
        { day: 'Jeu', date: '11' },
        { day: 'Ven', date: '12' },
    ];
    
    const timeSlots = ['10:00', '11:30', '14:30', '17:00'];
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const isWidget = mode === 'widget';
    const isDark = theme === 'dark';

    const styles = {
        container: isWidget 
            ? 'w-full h-full flex flex-col' 
            : `bg-white text-sacred-green-dark overflow-hidden shadow-2xl w-full flex flex-col lg:flex-row relative ${isEmbedded ? 'rounded-[3rem] max-w-[90rem]' : 'rounded-[2rem] max-w-6xl h-auto lg:h-[800px]'}`,
        textPrimary: isDark ? 'text-sacred-cream' : 'text-sacred-green-dark',
        textSecondary: isDark ? 'text-sacred-cream/60' : 'text-gray-500',
        textMuted: isDark ? 'text-sacred-cream/40' : 'text-gray-400',
        bgButton: isDark ? 'bg-white/5 border border-white/10 hover:border-sacred-gold hover:text-sacred-gold' : 'bg-gray-50 hover:bg-gray-100',
        bgButtonActive: isDark ? 'bg-sacred-gold text-sacred-green-dark border-sacred-gold shadow-[0_0_20px_rgba(217,185,94,0.4)]' : 'bg-sacred-green-dark text-white shadow-lg scale-110',
        slotDefault: isDark ? 'border-sacred-cream/20 text-sacred-cream hover:border-sacred-gold hover:text-sacred-gold' : 'border-sacred-green-dark/10 text-sacred-green-dark hover:border-sacred-gold hover:text-sacred-gold',
        slotActive: isDark ? 'border-sacred-gold bg-sacred-gold text-sacred-green-dark' : 'border-sacred-green-dark bg-sacred-green-dark text-white',
    };

    return (
      <div className={!isWidget ? `flex items-center justify-center relative z-20 ${isEmbedded ? 'w-full py-20' : 'min-h-screen pt-32 pb-20 px-6 animate-fade-in-up'}` : 'w-full h-full'}>
          <div className={styles.container}>
              {!isEmbedded && !isWidget && onNavigate && (
                  <button onClick={() => onNavigate(View.HOME)} className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">✕</button>
              )}

              {!isWidget && (
                  <div className="lg:w-1/3 bg-gray-50 p-12 border-r border-gray-200 flex flex-col">
                      <div className="w-16 h-16 rounded-full bg-sacred-green-dark text-sacred-gold flex items-center justify-center font-serif text-2xl font-bold mb-8 shadow-md">MF</div>
                      <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Mikael Ferreira</span>
                      <h2 className="font-serif text-4xl font-bold mb-6 text-sacred-green-dark">Casting & Session</h2>
                      <div className="space-y-4 text-gray-600 font-sans font-medium">
                          <div className="flex items-center gap-3"><Clock size={20} className="text-gray-400" /><span>1 heure</span></div>
                          <div className="flex items-center gap-3"><Globe size={20} className="text-gray-400" /><span>Studio / Visio</span></div>
                          <div className="flex items-center gap-3"><CalendarIcon size={20} className="text-gray-400" /><span>Septembre 2025</span></div>
                      </div>
                      <p className="mt-10 text-gray-500 leading-relaxed text-sm">Réservez votre créneau pour une audition, un coaching vocal ou un rendez-vous conseil pour votre projet artistique.</p>
                      <div className="mt-auto pt-8"><div className="text-xs font-bold text-sacred-gold uppercase tracking-widest">Type</div><div className="text-2xl font-bold">Séance Pro</div></div>
                  </div>
              )}

              <div className={`${!isWidget ? 'lg:w-2/3 p-12' : 'w-full flex flex-col h-full'} flex flex-col`}>
                  {!isWidget && <h3 className="text-2xl font-bold mb-8">Disponibilités Septembre 2025</h3>}
                  <div className={`flex justify-between items-center ${isWidget ? 'mb-6' : 'mb-8'}`}>
                      <span className={`${styles.textPrimary} ${isWidget ? 'text-base font-serif font-bold tracking-wide' : 'text-lg font-medium'}`}>Septembre 2025</span>
                      <div className="flex gap-2">
                          <button className={`p-2 rounded-full transition-colors ${styles.bgButton} ${styles.textPrimary}`}><ChevronLeft size={isWidget ? 16 : 20} /></button>
                          <button className={`p-2 rounded-full transition-colors ${styles.bgButton} ${styles.textPrimary}`}><ChevronRight size={isWidget ? 16 : 20} /></button>
                      </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                       <div className="grid grid-cols-5 gap-3 mb-4">
                           {days.map((d, i) => (
                               <div key={i} className="text-center group">
                                   <div className={`text-[10px] uppercase font-bold mb-2 ${styles.textMuted}`}>{d.day}</div>
                                   <button 
                                      onClick={() => { setSelectedDate(d.date); setSelectedTime(null); }}
                                      className={`w-full aspect-square rounded-full flex items-center justify-center font-bold text-base transition-all duration-300 ${selectedDate === d.date ? styles.bgButtonActive : `${styles.bgButton} ${styles.textPrimary}`}`}
                                   >{d.date}</button>
                               </div>
                           ))}
                       </div>
                       <div className={`mt-4 flex-1 pt-4 overflow-y-auto ${isWidget ? 'border-t border-white/10' : 'border-t border-gray-100 pt-8'}`}>
                           {selectedDate ? (
                               <div className="animate-fade-in-up h-full flex flex-col">
                                   <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${styles.textMuted}`}>Horaires - {selectedDate} Sept</div>
                                   <div className={`grid ${isWidget ? 'grid-cols-2 gap-3' : 'grid-cols-2 md:grid-cols-4 gap-4'}`}>
                                       {timeSlots.map((time, i) => (
                                           <button key={i} onClick={() => setSelectedTime(time)} className={`py-3 rounded-lg font-bold border-2 transition-all duration-300 text-sm ${selectedTime === time ? styles.slotActive : styles.slotDefault}`}>{time}</button>
                                       ))}
                                   </div>
                                   {selectedTime && (
                                       <div className={`mt-auto pt-6 flex justify-end animate-fade-in-up ${isWidget ? 'sticky bottom-0 bg-transparent' : ''}`}>
                                           <Button onClick={() => alert("MF Prod - Demande enregistrée")} className={`${isWidget ? 'w-full py-3 text-sm' : 'shadow-xl'} shadow-lg`}>Confirmer le RDV</Button>
                                       </div>
                                   )}
                               </div>
                           ) : (
                               <div className={`h-full flex items-center justify-center italic text-sm ${styles.textMuted}`}>Sélectionnez un jour pour voir les créneaux</div>
                           )}
                       </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default BookingView;
