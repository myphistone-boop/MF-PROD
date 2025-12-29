
import React, { useState, useEffect } from 'react';
import { View, NavItem, Theme } from '../types';
import { NAV_ITEMS, LOGO_URL } from '../constants';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobilePrestationsOpen, setMobilePrestationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prestationsLinks = [
    { label: 'Production de Spectacles', view: View.PRODUCTION_SPECTACLES },
    { label: 'Stages de Perfectionnement', view: View.STAGES_PERFECTIONNEMENT },
    { label: 'Cours Individuels', view: View.COURS_INDIVIDUELS },
    { label: 'Chorale (Année)', view: View.CHORALE },
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.view !== currentView) {
        onNavigate(item.view);
        if (item.sectionId) {
            setTimeout(() => {
                const element = document.getElementById(item.sectionId!);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    } else {
        if (item.sectionId) {
            const element = document.getElementById(item.sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const handlePrestationClick = (view: View) => {
    onNavigate(view);
    window.scrollTo(0, 0);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out
          ${scrolled ? 'w-[95%] max-w-[1250px] py-2' : 'w-[95%] max-w-[1600px] py-4'}
        `}
      >
        <div className={`
          relative w-full h-full rounded-full flex items-center justify-between px-6 lg:px-12 transition-all duration-700
          backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-2xl
          ${scrolled ? 'bg-white/95 dark:bg-brand-dark-soft/95' : 'bg-white/60 dark:bg-brand-dark/60'}
        `}>
          
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => onNavigate(View.HOME)}
          >
            <div className={`
                relative z-50 flex items-center justify-center bg-white dark:bg-brand-dark rounded-full 
                border-2 border-black/5 dark:border-white/10 shadow-lg transition-all duration-500 group-hover:border-brand-magenta
                ${scrolled ? 'w-10 h-10 lg:w-14 lg:h-14' : 'w-14 h-14 lg:w-20 lg:h-20'}
            `}>
              <img 
                src={LOGO_URL} 
                alt="MF" 
                className="w-full h-full object-contain p-2" 
              />
            </div>
            <span className="font-sans font-black tracking-tighter text-brand-dark dark:text-white text-lg lg:text-xl hidden md:block">
              MF <span className="text-brand-cyan">PROD</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-10 xl:gap-14">
            {NAV_ITEMS.map((item) => {
              const isPrestations = item.label === 'Prestations';
              
              return (
                <div 
                  key={item.label} 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => isPrestations && setDropdownOpen(true)}
                  onMouseLeave={() => isPrestations && setDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`
                      uppercase tracking-[0.2em] text-xl xl:text-2xl font-black transition-all duration-300 relative py-4 flex items-center gap-3
                      hover:text-brand-magenta
                      ${currentView === item.view && !item.sectionId 
                        ? 'text-brand-cyan' 
                        : 'text-brand-dark dark:text-white'}
                    `}
                  >
                    {item.label}
                    {isPrestations && (
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-brand-magenta' : ''}`} 
                      />
                    )}
                  </button>

                  {isPrestations && (
                    <div className={`
                      absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 transform
                      ${dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
                    `}>
                      <div className="bg-white/98 dark:bg-brand-dark-soft/98 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 w-[350px] shadow-2xl">
                        <div className="flex flex-col gap-3">
                          {prestationsLinks.map((link) => (
                            <button
                              key={link.label}
                              onClick={() => handlePrestationClick(link.view)}
                              className="text-left px-5 py-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 text-xs xl:text-sm uppercase tracking-[0.2em] font-black text-brand-dark/70 dark:text-white/70 hover:text-brand-magenta transition-all"
                            >
                              {link.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            
            <button 
                onClick={onToggleTheme}
                className="w-14 h-14 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-brand-dark dark:text-white hover:bg-brand-magenta hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>

          <button 
            className="lg:hidden text-brand-dark dark:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 dark:bg-brand-dark/98 backdrop-blur-3xl flex flex-col items-center justify-center p-12 lg:hidden animate-fade-in-up overflow-y-auto">
           <button 
                onClick={onToggleTheme}
                className="absolute top-10 right-10 w-16 h-16 rounded-full bg-brand-dark/5 dark:bg-white/5 flex items-center justify-center text-brand-dark dark:text-white shadow-lg"
            >
                {theme === 'dark' ? <Sun size={32} /> : <Moon size={32} />}
            </button>

           <div className="flex flex-col items-center gap-10 w-full py-20">
            {NAV_ITEMS.map((item) => {
                const isPrestations = item.label === 'Prestations';
                
                return (
                  <div key={item.label} className="w-full flex flex-col items-center">
                    <button
                      onClick={() => !isPrestations ? handleNavClick(item) : setMobilePrestationsOpen(!mobilePrestationsOpen)}
                      className={`text-5xl font-sans font-black uppercase tracking-tighter transition-colors ${currentView === item.view ? 'text-brand-cyan' : 'text-brand-dark dark:text-white'}`}
                    >
                      {item.label}
                    </button>
                    
                    {isPrestations && mobilePrestationsOpen && (
                      <div className="flex flex-col items-center gap-6 mt-8 animate-fade-in-up bg-black/5 dark:bg-white/5 rounded-[3rem] p-10 w-full max-w-sm">
                        {prestationsLinks.map((link) => (
                          <button
                            key={link.label}
                            onClick={() => handlePrestationClick(link.view)}
                            className="text-lg font-black text-brand-dark/60 dark:text-white/60 hover:text-brand-magenta uppercase tracking-widest text-center"
                          >
                            {link.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
           </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
