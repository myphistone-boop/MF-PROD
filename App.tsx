
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import Home from './components/views/Home';
import Men from './components/views/Men';
import Discover from './components/views/Discover';
import BookingView from './components/views/BookingView';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ProductionSpectacles from './components/views/prestations/ProductionSpectacles';
import StagesPerfectionnement from './components/views/prestations/StagesPerfectionnement';
import CoursIndividuels from './components/views/prestations/CoursIndividuels';
import Chorale from './components/views/prestations/Chorale';
import CoursChant from './components/views/prestations/CoursChant';
import AtelierSpectacle from './components/views/prestations/AtelierSpectacle';
import DanseInstruments from './components/views/prestations/DanseInstruments';
import FormationVoix from './components/views/prestations/FormationVoix';
import { View, BookingContext, Theme } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [bookingContext, setBookingContext] = useState<BookingContext | null>(null);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('mf-prod-theme');
    return (saved as Theme) || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('mf-prod-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navigate = (view: View, context?: BookingContext) => {
    if (context) {
      setBookingContext(context);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen transition-colors duration-500 text-brand-dark dark:text-white font-sans selection:bg-brand-magenta selection:text-white">
      <BackgroundCanvas theme={theme} />
      
      <Navbar currentView={currentView} onNavigate={navigate} theme={theme} onToggleTheme={toggleTheme} />
      
      <main className="transition-opacity duration-500 ease-in-out">
        {currentView === View.HOME && <Home onNavigate={navigate} />}
        {currentView === View.SPECTACLES && <Men onNavigate={navigate} />}
        {currentView === View.SERVICES && <Discover onNavigate={navigate} />}
        
        {currentView === View.PRODUCTION_SPECTACLES && <ProductionSpectacles onNavigate={navigate} />}
        {currentView === View.STAGES_PERFECTIONNEMENT && <StagesPerfectionnement onNavigate={navigate} />}
        {currentView === View.COURS_INDIVIDUELS && <CoursIndividuels onNavigate={navigate} />}
        {currentView === View.CHORALE && <Chorale onNavigate={navigate} />}
        
        {currentView === View.COURS_CHANT && <CoursChant onNavigate={navigate} />}
        {currentView === View.ATELIER_SPECTACLE && <AtelierSpectacle onNavigate={navigate} />}
        {currentView === View.DANSE_INSTRUMENTS && <DanseInstruments onNavigate={navigate} />}
        {currentView === View.FORMATION_VOIX && <FormationVoix onNavigate={navigate} />}
        
        {currentView === View.BOOKING && (
          <BookingView 
            onNavigate={navigate} 
            context={bookingContext} 
          />
        )}
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default App;
