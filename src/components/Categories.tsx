import { LayoutGrid } from 'lucide-react';
import type { Category } from '../types';
import { CATEGORIES } from '../categories';

interface CategoriesProps {
  active: Category | 'tous';
  onChange: (category: Category | 'tous') => void;
}

function Categories({ active, onChange }: CategoriesProps) {
  return (
    <section className="suggestion">
      <ul>
        <li
          className={active === 'tous' ? 'active' : ''}
          onClick={() => onChange('tous')}
        >
          <LayoutGrid size={20} color="#ffffff" />
          <h3>Tous</h3>
        </li>

        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = active === cat.id;
          return (
            <li
              key={cat.id}
              className={isActive ? 'active' : ''}
              onClick={() => onChange(isActive ? 'tous' : cat.id)}
            >
              <Icon size={20} color={cat.color} />
              <h3>{cat.label}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Categories;
