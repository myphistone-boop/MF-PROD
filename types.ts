
import React from 'react';

export enum View {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  SPECTACLES = 'SPECTACLES',
  BOOKING = 'BOOKING'
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
