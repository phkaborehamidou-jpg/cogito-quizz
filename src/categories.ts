import { House, Building2, BedDouble, Building, Store } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Category } from './types';

export interface CategoryItem {
  id: Category;
  label: string;
  icon: LucideIcon;
  color: string;
}

export const CATEGORIES: CategoryItem[] = [
  { id: 'maison', label: 'Maisons', icon: House, color: '#FF8C00' },
  { id: 'appartement', label: 'Appartements', icon: Building2, color: '#1683FF' },
  { id: 'studio', label: 'Studios', icon: BedDouble, color: '#22C55E' },
  { id: 'villa', label: 'Villas', icon: Building, color: '#8B5CF6' },
  { id: 'bureau', label: 'Bureaux', icon: Store, color: '#FFB000' },
];

export function categoryLabel(id: Category): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
