import React from "react";
import { IoSearch } from "react-icons/io5";
interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="fixed top-0 border-solid border-gray-200 w-full border-b py-3 z-10 bg-blue-200">
      <div className="container mx-auto ">
        <div className="w-full flex  flex-col lg:flex-row items-center justify-between">
          <img
            src="/logo-no-bg.png"
            alt=""
            className=" h-full w-40 bg-slate-400"
          />

          <div className=" w-80 relative mt-2 lg:mt-0 ">
            <IoSearch
              className=" text-blue-700 absolute top-1/2 -translate-y-1/2 left-3 "
              size={24}
            />
            <input
              type="search"
              id="default-search"
              className=" w-full pr-4 pl-12 py-2 font-normal shadow-xs text-gray-900 border border-blue-300 rounded-lg placeholder-blue-400 focus:outline-none bg-white"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search products by name"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
