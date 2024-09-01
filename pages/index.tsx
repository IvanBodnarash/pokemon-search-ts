import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import PokemonList from "../components/PokemonList";
import LoadMoreButton from "../components/LoadMoreButton";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import usePokemons from "../hooks/usePokemons";

import Image from "next/image";

export default function HomePage() {
  const [typeFilter, setTypeFilter] = useState("");
  const [sortOption, setSortOption] = useState<
    "alphabetical" | "nameLength" | ""
  >("");
  const [searchQuery, setSearchQuery] = useState("");

  const { pokemons, nextUrl, loading, error, loadMore } = usePokemons(
    typeFilter,
    sortOption
  );

  const handleSearch = () => {
    if (searchQuery) {
      window.location.href = `/details/${searchQuery}`;
    }
  };

  return (
    <div className="flex flex-col items-center text-center bg-blue-950">
      <div className="relative flex items-center justify-center bg-[url('/images/pokemon-background.jpg')] bg-cover bg-center w-full">
      <div className="absolute inset-0 bg-indigo-900 opacity-80"></div>
        <Image
          src="/images/pokemon-logo.png"
          width={400}
          height={400}
          alt="Pokemon Logo"
          className="relative z-10 fade-in sm:w-1/2 md:w-1/4 lg:w-1/8"
        />
      </div>

      <h1 className="text-4xl text-slate-300 m-8 font-bold my-10 fade-in">Search your pokemon here</h1>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        loading={loading}
        onSearch={handleSearch}
      />

      <h1 className="text-2xl text-slate-300 m-8 font-bold fade-in">Pokemon List</h1>

      <FilterBar
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
        loading={loading}
      />

      <PokemonList pokemons={pokemons} />

      <ErrorMessage error={error} />

      <LoadMoreButton loading={loading} nextUrl={nextUrl} onClick={loadMore} />

      <Footer />
    </div>
  );
}
