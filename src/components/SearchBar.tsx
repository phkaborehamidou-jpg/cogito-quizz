import { Search, X, HousePlus } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onPublish: () => void;
  resultCount: number;
}

function SearchBar({ value, onChange, onPublish, resultCount }: SearchBarProps) {
  return (
    <section className="middle-head">
      <div className="recherche">
        
        <Search size={20} color="#111" />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Rechercher une maison, un quartier..."
        />
        
        {value && (
          <button className="clear-btn" onClick={() => onChange('')} aria-label="Effacer">
            <X size={18} color="#111" />
          </button>
        )}

      </div>
      

      <div className="results-count">{resultCount} annonce(s)</div>

      <button className="add" onClick={onPublish}>
        <HousePlus size={20} color="#fff" />
        <span>Publier</span>
      </button>
    </section>
  );
}

export default SearchBar;
