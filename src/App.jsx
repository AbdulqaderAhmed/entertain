import React, { useEffect, useState } from "react";
import "./assets/css/app.css";
import { APIKEY, HTTP } from "./api/Http";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";

export default function App() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("Avatar");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    search === "" || search === " " ? setQuery("Avatar") : setQuery(search);
  };

  const fetchMovie = async () => {
    const res = await HTTP(`/search/movie?api_key=${APIKEY}&query=%${query}%`);
    setData(res.data);
  };

  useEffect(() => {
    fetchMovie();
  }, [query]);

  return (
    <div className="flex flex-col gap-5 px-10 bg-gradient-to-tr from-slate-900 to-slate-800">
      <h1 className="text-2xl text-center text-white font-bold underline">
        Entertain Me
      </h1>

      {/* search bar */}
      <Search search={setSearch} handleSearch={handleSearch} />

      {/* result */}
      <Card data={data} />
    </div>
  );
}
