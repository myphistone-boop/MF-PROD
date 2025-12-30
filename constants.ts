
import { NavItem, View } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', view: View.HOME },
  { label: 'Prestations', view: View.SERVICES },
  { label: 'Spectacles', view: View.PRODUCTION_SPECTACLES },
  { label: 'Événements', view: View.EVENEMENTS },
  { label: 'À Propos', view: View.HOME, sectionId: 'about' },
  { label: 'Contact', view: View.HOME, sectionId: 'contact' },
];

export const LOGO_URL = "https://storage.googleapis.com/novelec_assets/MF%20PROD.webp"; 

export const COLORS = {
  CYAN: '#00D2FF',
  MAGENTA: '#FF007A',
  ORANGE: '#FF8A00',
  DARK: '#020617',
  LIGHT: '#F8FAFC',
};
