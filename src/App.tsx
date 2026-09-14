import { useMemo, useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import './App.css';
import type { Category, House, PageId } from './types';
import { datas } from './data';
import { normalize } from './utils';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HouseDetail from './components/HouseDetail';
import Toast from './components/Toast';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Publish from './pages/Publish';
import Messages from './pages/Messages';
import Profile from './pages/Profile';

function App() {
  const [listings, setListings] = useState<House[]>(datas);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'tous'>('tous');
  const [ville, setVille] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const navigate = (page: PageId) => {
    setCurrentPage(page);
    setMenuOpen(false);
    setSearchQuery('');
    setActiveCategory('tous');
  };

  const visibleListings = useMemo(() => {
    const q = normalize(searchQuery.trim());
    return listings.filter((house) => {
      if (ville !== 'all' && house.emplacement.ville !== ville) return false;
      if (activeCategory !== 'tous' && house.categorie !== activeCategory) return false;
      if (q) {
        const haystack = normalize(
          `${house.name} ${house.emplacement.ville} ${house.emplacement.quartier} ${house.description} ${house.equipements.join(' ')}`,
        );
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [listings, searchQuery, activeCategory, ville]);

  const favoriteListings = useMemo(
    () => listings.filter((house) => favorites.includes(house.id)),
    [listings, favorites],
  );

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  const handlePublish = (house: House) => {
    setListings((prev) => [house, ...prev]);
    setToast('Annonce publiée avec succès !');
    setCurrentPage('home');
    setActiveCategory('tous');
    setSearchQuery('');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'favorites':
        return (
          <Favorites
            listings={favoriteListings}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onOpenDetail={setSelectedHouse}
          />
        );
      case 'publish':
        return <Publish onPublish={handlePublish} onCancel={() => setCurrentPage('home')} />;
      case 'messages':
        return <Messages />;
      case 'profile':
        return <Profile />;
      case 'home':
      default:
        return (
          <Home
            listings={visibleListings}
            favorites={favorites}
            total={listings.length}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            onToggleFavorite={toggleFavorite}
            onOpenDetail={setSelectedHouse}
          />
        );
    }
  };

  const showSearch = currentPage === 'home';

  return (
    <>
      <section id="center">
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={26} />
        </button>

        <aside className={menuOpen ? 'open' : ''}>
          <Header
            currentPage={currentPage}
            onNavigate={navigate}
            ville={ville}
            onVilleChange={setVille}
            favoritesCount={favorites.length}
          />
        </aside>

        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

        <div className="middle">
          {showSearch && (
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onPublish={() => setCurrentPage('publish')}
              resultCount={visibleListings.length}
            />
          )}

          <main className="page-content">{renderPage()}</main>
        </div>
      </section>

      {selectedHouse && (
        <HouseDetail house={selectedHouse} onClose={() => setSelectedHouse(null)} />
      )}

      {toast && <Toast message={toast} />}
    </>
  );
}

export default App;
