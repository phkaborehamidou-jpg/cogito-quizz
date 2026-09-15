import { useState, useRef } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Upload, ArrowLeft } from 'lucide-react';
import type { Category, House, ville } from '../types';
import { VILLES } from '../types';
import { CATEGORIES } from '../categories';
import { IMAGE_FALLBACK } from '../utils';


const EQUIPEMENTS = [
  'Piscine',
  'Jardin',
  'Garage',
  'Climatisation',
  'Wi-Fi',
  'Meublé',
  'Balcon',
  'Terrasse',
  'Sécurité 24h',
  'Groupe électrogène',
  'Parking',
  'Ascenseur',
];

interface PublishProps {
  onPublish: (house: House) => void;
  onCancel: () => void;
}

interface FieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  min?: string;
}

function Field({ label, type = 'text', value, onChange, placeholder, required, min }: FieldProps) {
  return (
    <div className="formEL">
      <label>{label}{required && <span className="req">*</span>}</label>
      <input
        type={type}
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? label}
      />
    </div>
  );
}

function Publish({ onPublish, onCancel }: PublishProps) {
  const [name, setName] = useState('');
  const [ville, setVille] = useState<ville>(VILLES[0]);
  const [quartier, setQuartier] = useState('');
  const [prix, setPrix] = useState('');
  const [chambres, setChambres] = useState('1');
  const [sdb, setSdb] = useState('1');
  const [surface, setSurface] = useState('');
  const [categorie, setCategorie] = useState<Category>('maison');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [image, setImage] = useState('');
  const [equipements, setEquipements] = useState<string[]>([]);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const toggleEquipement = (equip: string) => {
    setEquipements((prev) =>
      prev.includes(equip) ? prev.filter((e) => e !== equip) : [...prev, equip],
    );
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(String(reader.result));
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !quartier.trim() || !prix.trim() || !description.trim() || !contact.trim()) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const prixNumber = Number(prix);
    if (Number.isNaN(prixNumber) || prixNumber <= 0) {
      setError('Veuillez saisir un prix valide.');
      return;
    }

    const newHouse: House = {
      id: Date.now(),
      name: name.trim(),
      emplacement: { ville, quartier: quartier.trim() },
      description: description.trim(),
      contact: contact.trim(),
      prix: prixNumber,
      image: image.trim() || IMAGE_FALLBACK,
      chambres: Number(chambres) || 1,
      sdb: Number(sdb) || 1,
      surface: Number(surface) || 0,
      categorie,
      equipements,
      nouveau: true,
    };

    onPublish(newHouse);
  };

  return (
    <section className="publish-section">
      <button className="back-btn" onClick={onCancel}>
        <ArrowLeft size={18} /> Retour
      </button>

      <h1>Faire une annonce</h1>
      <p className="publish-subtitle">
        Renseignez les informations de votre bien pour le mettre en location.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <Field label="Titre de l'annonce" value={name} onChange={setName} required placeholder="Ex : Villa avec piscine" />

          <div className="formEL">
            <label>Ville<span className="req">*</span></label>
            <select value={ville} onChange={(e) => setVille(e.target.value as ville)}>
              {VILLES.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <Field label="Quartier / secteur" value={quartier} onChange={setQuartier} required placeholder="Ex : Ouaga 2000" />
          <Field label="Prix par mois (F CFA)" type="number" min="1" value={prix} onChange={setPrix} required placeholder="Ex : 90000" />
          <Field label="Nombre de chambres" type="number" min="0" value={chambres} onChange={setChambres} />
          <Field label="Salles de bain" type="number" min="0" value={sdb} onChange={setSdb} />
          <Field label="Surface (m²)" type="number" min="0" value={surface} onChange={setSurface} placeholder="Ex : 120" />

          <div className="formEL">
            <label>Type de bien</label>
            <select value={categorie} onChange={(e) => setCategorie(e.target.value as Category)}>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </div>

          <Field label="Téléphone" type="tel" value={contact} onChange={setContact} required placeholder="Ex : +226 70 00 00 00" />
        </div>

        <div className="formEL">
          <label>Description<span className="req">*</span></label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Décrivez votre bien, ses atouts, son environnement..."
            rows={4}
          />
        </div>

        <div className="formEL">
          <label>Équipements</label>
          <div className="equipements-picker">
            {EQUIPEMENTS.map((equip) => (
              <button
                type="button"
                key={equip}
                className={`chip ${equipements.includes(equip) ? 'selected' : ''}`}
                onClick={() => toggleEquipement(equip)}
              >
                {equip}
              </button>
            ))}
          </div>
        </div>

        <div className="formEL">
          <label>Photo du bien</label>
          <div className="image-upload">
            <button type="button" className="upload-btn" onClick={() => fileRef.current?.click()}>
              <Upload size={18} /> Importer une photo
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handleFile}
              hidden
            />
            <input
              type="text"
              value={image.startsWith('data:') ? '' : image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="ou collez l'URL d'une image"
            />
            {image && (
              <div className="image-preview">
                <img src={image} alt="Aperçu" />
              </div>
            )}
          </div>
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="submit-btn">Publier l'annonce</button>
      </form>
    </section>
  );
}

export default Publish;
