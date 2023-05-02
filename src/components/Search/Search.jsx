import React from "react";

export default function Search({ handleSearch, search }) {
  return (
    <form onSubmit={handleSearch} className="mx-auto">
      <input
        type="text"
        onChange={(e) => search(e.target.value)}
        className="border-2 rounded-md px-2 border-solid border-black"
      />
      <button
        type="submit"
        className="border-2 border-solid bg-gradient-to-br from-indigo-500 to-orange-900 p-1 rounded-md text-white"
      >
        Search
      </button>
    </form>
  );
}
