
import React from 'react';

export type Theme = 'light' | 'dark';

export enum View {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  PRODUCTION_SPECTACLES = 'PRODUCTION_SPECTACLES',
  STAGES_PERFECTIONNEMENT = 'STAGES_PERFECTIONNEMENT',
  COURS_INDIVIDUELS = 'COURS_INDIVIDUELS',
  CHORALE = 'CHORALE',
  SPECTACLES = 'SPECTACLES',
  BOOKING = 'BOOKING',
  COURS_CHANT = 'COURS_CHANT',
  ATELIER_SPECTACLE = 'ATELIER_SPECTACLE',
  FORMATION_VOIX = 'FORMATION_VOIX',
  DANSE_INSTRUMENTS = 'DANSE_INSTRUMENTS'
}

export type BookingType = 'APPOINTMENT' | 'RESERVATION' | 'CONTACT';

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
