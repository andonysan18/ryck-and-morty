import React from 'react';
import { Character } from '../types/character';

interface Props {
    character: Character;
    onClick: () => void;
    isFavorite: boolean;
    toggleFavorite: (character: Character) => void
}

export const CharacterCard: React.FC<Props> = ({ character, onClick, isFavorite, toggleFavorite }) => {
    return (
        <div
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={onClick}
        >
            <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{character.name}</h2>
            <p className="text-sm text-gray-600">{character.species}</p>
            <button
                onClick={() => toggleFavorite(character)}
                className={`mt-2 p-2 rounded-lg flex items-center justify-center ${isFavorite ? 'bg-red-500 text-white' : 'border border-gray-300 text-gray-500'
                    }`}
            >
                {isFavorite ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                )}
            </button>


        </div>
    );
};
