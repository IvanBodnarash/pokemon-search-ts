import React from "react";
import Link from "next/link";

interface PokemonListProps {
  pokemons: Array<{ name: string; url: string }>;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <ul className="mt-6 w-3/4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {pokemons.map((pokemon) => (
        <Link href={`/details/${pokemon.name}`} key={pokemon.name}>
          <li
            key={pokemon.name}
            className="text-center text-slate-200 p-4 bg-indigo-900 rounded-md hover:bg-indigo-600 cursor-pointer fade-in"
          >
            <div>{pokemon.name}</div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default PokemonList;
