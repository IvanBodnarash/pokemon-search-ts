import React from "react";

interface FilterBarProps {
  typeFilter: string;
  setTypeFilter: React.Dispatch<React.SetStateAction<string>>;
  sortOption: "alphabetical" | "nameLength" | "";
  setSortOption: React.Dispatch<
    React.SetStateAction<"alphabetical" | "nameLength" | "">
  >;
  loading: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({
  typeFilter,
  setTypeFilter,
  sortOption,
  setSortOption,
  loading,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center text-center text-slate-200 text-lg bg-indigo-900 p-4 rounded space-y-4 sm:space-y-0 sm:space-x-4 fade-in">
      <div className="flex flex-col sm:flex-row items-center">
        <p className="mr-4">Filters:</p>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          disabled={loading}
          className="bg-indigo-600 text-slate-300 p-2 mr-4 rounded hover:bg-indigo-700 focus:outline-none cursor-pointer"
        >
          <option value="">All Types</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="ice">Ice</option>
          <option value="fighting">Fighting</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="flying">Flying</option>
          <option value="psychic">Psychic</option>
          <option value="bug">Bug</option>
          <option value="rock">Rock</option>
          <option value="ghost">Ghost</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="steel">Steel</option>
          <option value="fairy">Fairy</option>
          <option value="normal">Normal</option>
        </select>

      </div>
      <div className="flex flex-col sm:flex-row items-center">
        <p className="mr-4">Sort By:</p>

        <select
          value={sortOption}
          onChange={(e) =>
            setSortOption(e.target.value as "alphabetical" | "nameLength" | "")
          }
          disabled={loading}
          className="bg-indigo-600 text-slate-300 p-2 rounded hover:bg-indigo-700 focus:outline-none cursor-pointer"
        >
          <option value="">Default</option>
          <option value="alphabetical">Sort by Name (A - Z)</option>
          <option value="nameLength">Sort by Name Length</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
