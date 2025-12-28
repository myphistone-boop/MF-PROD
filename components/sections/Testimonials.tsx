import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
      { name: "Sophie L.", role: "Entrepreneur", text: "Je ne pensais pas qu'une seule séance pouvait autant changer ma perception de moi-même. Une révélation." },
      { name: "Marc D.", role: "Architecte", text: "Le groupe d'hommes m'a permis de m'ouvrir comme jamais auparavant. Une fraternité douce et indispensable." },
      { name: "Elodie P.", role: "Artiste", text: "La bio-résonance a débloqué ma créativité de manière spectaculaire. Je recommande les yeux fermés." },
      { name: "Thomas V.", role: "Sportif", text: "L'ancrage somatique m'a permis de gérer mon stress avant les compétitions. Merci Alexandre." },
      { name: "Camille R.", role: "Thérapeute", text: "Une approche d'une justesse incroyable. Alexandre incarne ce qu'il enseigne." },
      { name: "Julien M.", role: "Ingénieur", text: "Sceptique au début, je suis reparti transformé. L'hypnose a été une clé majeure." }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
      <section className="py-20 lg:py-32 relative overflow-hidden bg-sacred-green-dark/30">
        <div className="text-center mb-10 lg:mb-16 relative z-10 px-6">
            <h2 className="font-serif text-4xl md:text-6xl text-sacred-cream mb-4">Échos des <span className="text-sacred-gold italic">Âmes Soignées</span></h2>
        </div>

        {/* --- MOBILE VIEW: SLIDER --- */}
        <div className="lg:hidden px-4 relative max-w-md mx-auto">
            <div className="relative bg-white/5 border border-white/5 backdrop-blur-md rounded-[2rem] p-8 shadow-xl min-h-[300px] flex flex-col justify-between">
                
                {/* Navigation Buttons Absolute */}
                <button 
                    onClick={prevTestimonial}
                    className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-sacred-green-dark border border-sacred-gold/30 text-sacred-gold p-2 rounded-full shadow-lg z-20 active:scale-95"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={nextTestimonial}
                    className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-sacred-green-dark border border-sacred-gold/30 text-sacred-gold p-2 rounded-full shadow-lg z-20 active:scale-95"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Content */}
                <div key={currentIndex} className="animate-fade-in-up">
                    <div className="flex justify-between items-start mb-6">
                        <Quote className="w-8 h-8 text-sacred-gold opacity-50" />
                        <div className="flex gap-1">
                            {[1,2,3,4,5].map(star => <Star key={star} size={12} className="fill-sacred-gold text-sacred-gold" />)}
                        </div>
                    </div>
                    <p className="font-serif text-xl text-sacred-cream/90 italic leading-relaxed mb-8">
                        "{testimonials[currentIndex].text}"
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                        <div className="w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center text-sacred-gold font-bold text-sm">
                            {testimonials[currentIndex].name.charAt(0)}
                        </div>
                        <div>
                            <div className="font-bold text-sacred-cream text-sm tracking-wide">{testimonials[currentIndex].name}</div>
                            <div className="text-xs text-sacred-gold uppercase tracking-widest">{testimonials[currentIndex].role}</div>
                        </div>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-sacred-gold w-4' : 'bg-white/20'}`} 
                        />
                    ))}
                </div>
            </div>
        </div>

        {/* --- DESKTOP VIEW: MARQUEE --- */}
        <div className="hidden lg:block relative w-full overflow-hidden group">
            <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#20332a] to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#20332a] to-transparent z-10" />
            
            <div className="flex gap-8 w-max animate-marquee group-hover:[animation-play-state:paused] px-8">
                {[...testimonials, ...testimonials].map((t, i) => (
                    <div key={i} className="w-[400px] p-8 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-md flex-shrink-0 hover:bg-white/10 transition-colors duration-300">
                        <div className="flex justify-between items-start mb-6">
                            <Quote className="w-8 h-8 text-sacred-gold opacity-50" />
                            <div className="flex gap-1">
                                {[1,2,3,4,5].map(star => <Star key={star} size={12} className="fill-sacred-gold text-sacred-gold" />)}
                            </div>
                        </div>
                        <p className="font-serif text-xl text-sacred-cream/90 italic leading-relaxed mb-8 h-24 overflow-hidden">
                            "{t.text}"
                        </p>
                        <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                            <div className="w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center text-sacred-gold font-bold text-sm">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-sacred-cream text-sm tracking-wide">{t.name}</div>
                                <div className="text-xs text-sacred-gold uppercase tracking-widest">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
  );
};

export default Testimonials;