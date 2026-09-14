import type { House } from '../types';
import HouseCard from './HouseCard';
import { Search } from 'lucide-react';

interface ListingGridProps {
  listings: House[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
  onOpenDetail: (house: House) => void;
}

function ListingGrid({ listings, favorites, onToggleFavorite, onOpenDetail }: ListingGridProps) {
  if (listings.length === 0) {
    return (
      <div className="empty-state">
        <Search size={48} />
        <h2>Aucune annonce trouvée</h2>
        <p>Modifiez vos filtres ou votre recherche pour voir plus de résultats.</p>
      </div>
    );
  }

  return (
    <section className="annonce">
      {listings.map((house) => (
        <HouseCard
          key={house.id}
          house={house}
          isFavorite={favorites.includes(house.id)}
          onToggleFavorite={() => onToggleFavorite(house.id)}
          onOpen={() => onOpenDetail(house)}
        />
      ))}
    </section>
  );
}

export default ListingGrid;
