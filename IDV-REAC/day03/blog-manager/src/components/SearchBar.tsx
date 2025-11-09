import { useState } from 'react';

type SortOption = 'newest' | 'oldest';

export default function SearchBar({ onSearch }: { onSearch: (query: string, sort: SortOption) => void }) {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortOption>('newest');

  const handleSearch = () => onSearch(query, sort);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Rechercher par titre ou catégorie"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <select value={sort} onChange={e => setSort(e.target.value as SortOption)}>
        <option value="newest">Plus récents d’abord</option>
        <option value="oldest">Plus anciens d’abord</option>
      </select>
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
}
