import type { Category, House } from '../types';
import Categories from '../components/Categories';
import ListingGrid from '../components/ListingGrid';

interface HomeProps {
  listings: House[];
  favorites: number[];
  total: number;
  activeCategory: Category | 'tous';
  onCategoryChange: (category: Category | 'tous') => void;
  onToggleFavorite: (id: number) => void;
  onOpenDetail: (house: House) => void;
}

function Home({
  listings,
  favorites,
  total,
  activeCategory,
  onCategoryChange,
  onToggleFavorite,
  onOpenDetail,
}: HomeProps) {
  return (
    <>
      <div className="page-heading">
        <h1 className='home-h1' >Découvrez votre prochain logement</h1>
        <p>{total} biens disponibles à la location</p>
      </div>

      <Categories active={activeCategory} onChange={onCategoryChange} />

      <ListingGrid
        listings={listings}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        onOpenDetail={onOpenDetail}
      />
    </>
  );
}

export default Home;
