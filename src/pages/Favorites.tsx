import { Heart } from 'lucide-react';
import type { House } from '../types';
import ListingGrid from '../components/ListingGrid';

interface FavoritesProps {
  listings: House[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
  onOpenDetail: (house: House) => void;
}

function Favorites({ listings, favorites, onToggleFavorite, onOpenDetail }: FavoritesProps) {
  return (
    <>
      <div className="page-heading">
        <h1>
          <Heart size={22} color="#ff4757" fill="#ff4757" /> Mes favoris
        </h1>
        <p>{listings.length} bien(s) enregistré(s)</p>
      </div>

      <ListingGrid
        listings={listings}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        onOpenDetail={onOpenDetail}
      />
    </>
  );
}

export default Favorites;
