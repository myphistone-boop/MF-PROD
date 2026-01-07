
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import Home from './components/views/Home';
import HomeMobile from './components/views/HomeMobile';
import Men from './components/views/Men';
import Discover from './components/views/Discover';
import Gallery from './components/views/Gallery';
import BookingView from './components/views/BookingView';
import ProductionSpectacles from './components/views/prestations/ProductionSpectacles';
import StagesPerfectionnement from './components/views/prestations/StagesPerfectionnement';
import CoachingVocal from './components/views/prestations/CoachingVocal';
import Chorale from './components/views/prestations/Chorale';
import AnimationTV from './components/views/prestations/AnimationTV';
import VoixOff from './components/views/prestations/VoixOff';
import AtelierSpectacle from './components/views/prestations/AtelierSpectacle';
import Evenements from './components/views/Evenements';
import { View, BookingContext } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [bookingContext, setBookingContext] = useState<BookingContext | null>(null);
  const [isMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024);

  useEffect(() => {
    // Force dark mode
    window.document.documentElement.classList.add('dark');
  }, []);

  const navigate = (view: View, context?: BookingContext & { sectionId?: string }) => {
    if (context) {
      setBookingContext(context);
    }
    setCurrentView(view);
    
    // Si une section est spécifiée, on attend le rendu du composant pour scroller
    if (context?.sectionId) {
      setTimeout(() => {
        const element = document.getElementById(context.sectionId!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-magenta selection:text-white">
      <BackgroundCanvas />
      
      <Navbar currentView={currentView} onNavigate={navigate} />
      
      <main className={isMobile ? "" : "transition-opacity duration-500 ease-in-out"}>
        {currentView === View.HOME && (isMobile ? <HomeMobile onNavigate={navigate} /> : <Home onNavigate={navigate} />)}
        {currentView === View.SPECTACLES && <Men onNavigate={navigate} />}
        {currentView === View.SERVICES && <Discover onNavigate={navigate} />}
        {currentView === View.EVENEMENTS && <Evenements onNavigate={navigate} />}
        {currentView === View.GALLERY && <Gallery onNavigate={navigate} />}
        
        {currentView === View.PRODUCTION_SPECTACLES && <ProductionSpectacles onNavigate={navigate} />}
        {currentView === View.COACHING_VOCAL && <CoachingVocal onNavigate={navigate} />}
        {currentView === View.ANIMATION_TV && <AnimationTV onNavigate={navigate} />}
        {currentView === View.VOIX_OFF && <VoixOff onNavigate={navigate} />}
        {currentView === View.CHORALE && <Chorale onNavigate={navigate} />}
        {currentView === View.STAGES_PERFECTIONNEMENT && <StagesPerfectionnement onNavigate={navigate} />}
        {currentView === View.ATELIER_SPECTACLE && <AtelierSpectacle onNavigate={navigate} />}
        
        {currentView === View.BOOKING && (
          <BookingView 
            onNavigate={navigate} 
            context={bookingContext} 
          />
        )}
      </main>
    </div>
  );
};

export default App;
