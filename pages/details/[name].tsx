import Image from "next/image";
import { GetServerSideProps } from "next";
import { fetchPokemonDetails } from "../../utils/api";

interface PokemonDetailsProps {
  pokemon: {
    name: string;
    id: number;
    abilities: Array<{ ability: { name: string } }>;
    weight: number;
    height: number;
    sprites: {
      front_default: string;
      front_shiny: string;
    };
    stats: Array<{ stat: { name: string }; base_stat: number }>;
  } | null;
  error: string | null;
}

export const getServerSideProps: GetServerSideProps<
  PokemonDetailsProps
> = async (context) => {
  const { name } = context.query;

  try {
    const pokemon = await fetchPokemonDetails(name as string);

    if (!pokemon) {
      return {
        redirect: {
          destination: "/error/404",
          permanent: false,
        },
      };
    }

    return {
      props: {
        pokemon,
        error: null,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/error/404",
        permanent: false,
      },
    };
  }
};

export default function PokemonDetailsPage({
  pokemon,
  error,
}: PokemonDetailsProps) {
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-blue-950 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-slate-200 p-5 bg-indigo-900 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-4">{pokemon.name}</h1>
        <div className="flex flex-wrap justify-center bg-indigo-800 rounded-lg">
          <Image
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name} default`}
            width={200}
            height={200}
          />
          <Image
            src={pokemon.sprites.front_shiny}
            alt={`${pokemon.name} shiny`}
            width={200}
            height={200}
          />
        </div>
        <div className="w-full text-lg text-center">
          <p>ID# {pokemon.id}</p>
          <p>Weight: {pokemon.weight} hectograms</p>
          <p>Height: {pokemon.height} decimetres</p>
          <h2>Abilities:</h2>
          <ul>
            {pokemon.abilities.map(({ ability }) => (
              <li key={ability.name}>{ability.name}</li>
            ))}
          </ul>
          <h2>Stats:</h2>
          <ul>
            {pokemon.stats.map(({ stat, base_stat }) => (
              <li key={stat.name}>
                {stat.name}: {base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
