import { useState, useEffect } from "react";
import { fetchPokemonList } from "../utils/api";

const usePokemons = (typeFilter: string, sortOption: "alphabetical" | "nameLength" | "") => {
    const [pokemons, setPokemons] = useState<Array<{ name: string; url: string }>>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFilteredPokemons = async () => {
            setLoading(true);
            try {
                const filteredPokemons = await fetchPokemonList(typeFilter);
                let sortedPokemons = sortPokemons(filteredPokemons.results, sortOption);
                setPokemons(sortedPokemons);
                setNextUrl(filteredPokemons.next);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchFilteredPokemons();
    }, [typeFilter, sortOption]);
    
      const sortPokemons = (pokemons: Array<{ name: string; url: string }>, option: string) => {
        switch (option) {
          case "alphabetical":
            return pokemons.sort((a, b) => a.name.localeCompare(b.name));
          case "nameLength":
            return pokemons.sort((a, b) => a.name.length - b.name.length);
          default:
            return pokemons;
        }
      }

      const loadMore = async () => {
        if (nextUrl) {
            setLoading(true);
          try {
            const response = await fetch(nextUrl);
            if (!response.ok) {
              throw new Error("Failed to load more pokemons");
            }
            const data = await response.json();
            let sortedPokemons = sortPokemons([...pokemons, ...data.results], sortOption);
            setPokemons(sortedPokemons);
            setNextUrl(data.next);
          } catch (error) {
            setError((error as Error).message);
          } finally {
            setLoading(false);
          }
        }
      };

      return { pokemons, nextUrl, loading, error, loadMore };
};

export default usePokemons;