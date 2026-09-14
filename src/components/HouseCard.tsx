import { MapPin, Bed, Bath, Ruler, Phone, Heart } from 'lucide-react';
import type { House } from '../types';
import { formatPrix, IMAGE_FALLBACK, telHref } from '../utils';
import { categoryLabel } from '../categories';

interface HouseCardProps {
  house: House;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onOpen: () => void;
}

function HouseCard({ house, isFavorite, onToggleFavorite, onOpen }: HouseCardProps) {
  return (
    <article className="house-card">
      <div className="image-boite">
        <img
          src={house.image}
          alt={house.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = IMAGE_FALLBACK;
          }}
        />
        {house.nouveau && <span className="badge">Nouveau</span>}
        <button
          className={`fav-btn ${isFavorite ? 'active' : ''}`}
          onClick={onToggleFavorite}
          aria-label="Ajouter aux favoris"
        >
          <Heart size={19} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="house-info">
        <span className="category-tag">{categoryLabel(house.categorie)}</span>
        <h2>{house.name}</h2>

        <p className="location">
          <MapPin size={14} />
          {house.emplacement.quartier}, {house.emplacement.ville}
        </p>

        <div className="prix">
          {formatPrix(house.prix)}
          <span>/mois</span>
        </div>

        <div className="caracteristiques">
          <span>
            <Bed size={14} /> {house.chambres} ch.
          </span>
          <span>
            <Bath size={14} /> {house.sdb} sdb
          </span>
          <span>
            <Ruler size={14} /> {house.surface} m²
          </span>
        </div>

        <div className="actions">
          <button className="btn-details" onClick={onOpen}>
            Voir détails
          </button>
          <a className="call-btn" href={telHref(house.contact)} aria-label="Appeler">
            <Phone size={19} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default HouseCard;
