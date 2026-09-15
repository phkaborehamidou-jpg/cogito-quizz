import {
  House,
  Home,
  Heart,
  MessageCircleMore,
  User,
  MapPin,
  Plus,Bell
} from 'lucide-react';
import type { PageId } from '../types';
import { VILLES } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  ville: string;
  onVilleChange: (ville: string) => void;
  favoritesCount: number;
}

interface NavItem {
  id: PageId;
  label: string;
  icon: typeof Home;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Accueil', icon: Home },
  { id: 'favorites', label: 'Favoris', icon: Heart },
  {id:'publish',label:'ajouter',icon:Plus},
  { id: 'messages', label: 'Messages', icon: MessageCircleMore },
  { id: 'profile', label: 'Profil', icon: User }

];

function Header({ currentPage, onNavigate, ville, onVilleChange, favoritesCount }: HeaderProps) {
  return (
    <section className="head">

      <div className="head-inner">

        <div className="title">
   
          <div className='header'>
          <div>
               <House size={40} className='home-destok' color="#1683ff" /> 
              <House size={20}  className='home-mobile' color="#1683ff"></House> 
             
              <h1>
                <span>g</span>et<span>h</span>ouse hamidou
              </h1>
          </div>
          <div className='menu-left-mobile'>
            
            <li className="locate-mobile">
            <MapPin size={18} color="#1683ff" />
            <select value={ville} onChange={(e) => onVilleChange(e.target.value)}>
              <option value="all">Toutes les villes</option>
              {VILLES.map((ville) => (
                <option key={ville} value={ville}>
                  {ville}
                </option>
              ))}
            </select>
          </li>
          <Bell  color='blue'></Bell>
          </div>
          </div>
         
      
        </div>

        <ul className="menu">
          <li className="locate">
            <MapPin size={18} color="#1683ff" />
            <select value={ville} onChange={(e) => onVilleChange(e.target.value)}>
              <option value="all">Toutes les villes</option>
              {VILLES.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </li>

          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = currentPage === item.id;
            const ispublish=item.id==='publish'
            return (
              <li
                key={item.id}
                className={`menu-li ${ active?'active':''} ${ispublish?'publish-Mobile':''}`}
                onClick={() => onNavigate(item.id)}
              >
                <Icon size={20} />
                <h2>{item.label}</h2>
                {item.id === 'favorites' && favoritesCount > 0 && (
                  <span className="nav-badge">{favoritesCount}</span>
                )}
              </li>
            );
          })}
        </ul>

        <button className="sidebar-publish" onClick={() => onNavigate('publish')}>
          <Plus size={18} />
          Publier une annonce
        </button>
      </div>
    </section>
  );
}

export default Header;
