export type Category = 'maison' | 'appartement' | 'studio' | 'villa' | 'bureau';
export type PageId = 'home' | 'favorites' | 'messages' | 'profile' | 'publish';

export const VILLES = ['Ouagadougou', 'Bobo-Dioulasso', 'Koudougou'] as const;
export  type ville = (typeof VILLES)[number]
export interface House {
  id: number;
  name: string;
  emplacement: {
    ville: ville;
    quartier: string;
  };
  description: string;
  contact: string;
  prix: number;
  image: string;
  chambres: number;
  sdb: number;
  surface: number;
  categorie: Category;
  equipements: string[];
  nouveau: boolean;
}

