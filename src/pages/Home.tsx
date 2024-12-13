import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { CharacterCard } from '../components/CharacterCard';
import { Character } from '../types/character';

interface HomeProps {
    favorites: Character[];
    toggleFavorite: (character: Character) => void

}

export const Home: React.FC<HomeProps> = ({ favorites, toggleFavorite }) => {
    const { data, loading, error } = useFetch<{ results: Character[] }>('https://rickandmortyapi.com/api/character');
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [search, setSearch] = useState('');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleOrderChange = () => {
        setOrder(order === 'asc' ? 'desc' : 'asc');
    };

    const filteredAndSortedCharacters = data?.results
        .filter((character) =>
            character.name.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) =>
            order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-4 py-2 rounded-lg"
                />
                <button
                    onClick={handleOrderChange}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Order: {order.toUpperCase()}
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredAndSortedCharacters?.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                        onClick={() => console.log(`Clicked on ${character.name}`)}
                        isFavorite={favorites.some((fav) => fav.id === character.id)}
                        toggleFavorite={toggleFavorite}
                    />
                ))}
            </div>
        </div>
    );
};
