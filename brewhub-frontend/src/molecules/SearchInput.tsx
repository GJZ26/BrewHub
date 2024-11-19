import SearchIcon from "../atoms/SearchIcon";

export default function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <div className="absolute translate-y-full translate-x-1">
        <SearchIcon />
      </div>
      <input
        className="bg-opacity-10 p-2 border border-gray-300 rounded placeholder:font-normal outline-none focus:outline-none focus:ring-1 focus:ring-orange-200 text-xs mt-2 pl-7 max-w-60 w-60"
        type="search"
        placeholder={placeholder}
      />
    </div>
  );
}
