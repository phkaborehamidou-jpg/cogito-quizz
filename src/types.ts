export type Category = 'maison' | 'appartement' | 'studio' | 'villa' | 'bureau';

export interface House {
  id: number;
  name: string;
  emplacement: {
    ville: typeof VILLES[number];
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

export type PageId = 'home' | 'favorites' | 'messages' | 'profile' | 'publish';

export const VILLES = ['Ouagadougou', 'Bobo-Dioulasso', 'Koudougou'] as const;
