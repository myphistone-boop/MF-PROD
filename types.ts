
import React from 'react';

export type Theme = 'light' | 'dark';

export enum View {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  PRODUCTION_SPECTACLES = 'PRODUCTION_SPECTACLES',
  COACHING_VOCAL = 'COACHING_VOCAL',
  ANIMATION_TV = 'ANIMATION_TV',
  VOIX_OFF = 'VOIX_OFF',
  CHORALE = 'CHORALE',
  STAGES_PERFECTIONNEMENT = 'STAGES_PERFECTIONNEMENT',
  SPECTACLES = 'SPECTACLES',
  EVENEMENTS = 'EVENEMENTS',
  BOOKING = 'BOOKING',
  COURS_INDIVIDUELS = 'COURS_INDIVIDUELS',
  COURS_CHANT = 'COURS_CHANT',
  ATELIER_SPECTACLE = 'ATELIER_SPECTACLE',
  FORMATION_VOIX = 'FORMATION_VOIX'
}

export type BookingType = 'APPOINTMENT' | 'RESERVATION' | 'CONTACT' | 'ARTIST_APPLICATION';

export interface BookingContext {
  serviceId: View;
  serviceName: string;
  type: BookingType;
  price?: string;
  spotsTotal?: number;
  spotsTaken?: number;
  duration?: string;
}

export interface NavItem {
  label: string;
  view: View;
  sectionId?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}
