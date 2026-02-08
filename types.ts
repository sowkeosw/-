import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export interface StatProps {
  value: string;
  label: string;
}

export enum CampusZone {
  ACADEMIC = 'Academic',
  RESIDENTIAL = 'Residential',
  RECREATIONAL = 'Recreational',
}