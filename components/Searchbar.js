export function SearchBar() {
  return (
    <div className="relative w-fit">
      <input
        placeholder="Search Name, Transit Direction"
        // onChange={(e) => setSearchValue(e.target.value)}
        className="block md:w-96 pl-12 pr-4 py-3 text-gray-900 border-0 bg-gray-200 bg-opacity-50 rounded-md  focus:ring-primary-500 focus:border-primary-500 "
        type="text"
      />
      <svg
        className="absolute w-6 h-6 text-gray-400 left-3 top-3 "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
