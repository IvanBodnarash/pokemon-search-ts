import React from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  loading,
  onSearch,
}) => {
  return (
    <form
      className="bg-slate-900 p-5 rounded-md lg:w-2/5 flex justify-between my-5 fade-in"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <input
        type="text"
        placeholder="Search Pokemon"
        className="bg-indigo-800 text-white placeholder-indigo-400 p-2 rounded focus:outline-none w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white p-2 rounded ml-5 w-1/4 hover:bg-indigo-500 active:bg-indigo-700"
        disabled={loading}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
