
import { NavItem, View } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', view: View.HOME },
  { label: 'Prestations', view: View.HOME, sectionId: 'prestations' },
  { label: 'Spectacles', view: View.SPECTACLES },
  { label: 'Événements', view: View.HOME, sectionId: 'pricing' },
  { label: 'Contact', view: View.HOME, sectionId: 'contact' },
];

// Utilisation de l'URL locale du logo fourni ou placeholder représentatif
export const LOGO_URL = "https://storage.googleapis.com/novelec_assets/MF%20PROD.webp"; 

export const COLORS = {
  CYAN: '#00D2FF',
  MAGENTA: '#FF007A',
  ORANGE: '#FF8A00',
  DARK: '#020617',
  LIGHT: '#F8FAFC',
};
