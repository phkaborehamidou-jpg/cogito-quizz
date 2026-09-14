import {
  X,
  MapPin,
  Bed,
  Bath,
  Ruler,
  Phone,
  MessageCircle,
  Check,
} from 'lucide-react';
import type { House } from '../types';
import { formatPrix, IMAGE_FALLBACK, telHref, waHref } from '../utils';
import { categoryLabel } from '../categories';

interface HouseDetailProps {
  house: House;
  onClose: () => void;
}

function HouseDetail({ house, onClose }: HouseDetailProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <X size={22} />
        </button>

        <div className="modal-image">
          <img
            src={house.image}
            alt={house.name}
            onError={(e) => {
              e.currentTarget.src = IMAGE_FALLBACK;
            }}
          />
          {house.nouveau && <span className="badge">Nouveau</span>}
        </div>

        <div className="modal-body">
          <div className="modal-head">
            <span className="category-tag">{categoryLabel(house.categorie)}</span>
            <h2>{house.name}</h2>
            <p className="location">
              <MapPin size={15} />
              {house.emplacement.quartier}, {house.emplacement.ville}
            </p>
          </div>

          <div className="modal-price">{formatPrix(house.prix)} /mois</div>

          <div className="modal-caracteristiques">
            <div>
              <Bed size={18} />
              <span>{house.chambres}</span>
              <label>Chambres</label>
            </div>
            <div>
              <Bath size={18} />
              <span>{house.sdb}</span>
              <label>Salles de bain</label>
            </div>
            <div>
              <Ruler size={18} />
              <span>{house.surface} m²</span>
              <label>Surface</label>
            </div>
          </div>

          <div className="modal-description">
            <h3>Description</h3>
            <p>{house.description}</p>
          </div>

          <div className="modal-equipements">
            <h3>Équipements</h3>
            <div className="equipements-list">
              {house.equipements.map((equip) => (
                <span key={equip} className="equipement-chip">
                  <Check size={14} /> {equip}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-contact">
            <h3>Contacter le propriétaire</h3>
            <p className="contact-phone">{house.contact}</p>
            <div className="modal-actions">
              <a className="btn-call" href={telHref(house.contact)}>
                <Phone size={18} /> Appeler
              </a>
              <a className="btn-whatsapp" href={waHref(house.contact)} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseDetail;
