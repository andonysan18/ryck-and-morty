import { useEffect, useState } from 'react';
import { Home } from './pages/Home';
import { Character } from './types/character';

function App() {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character: Character) => {
    if (favorites.some((fav) => fav.id === character.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== character.id));
    } else {
      setFavorites([...favorites, character]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Home favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;
