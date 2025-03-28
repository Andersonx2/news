import React, { useState } from "react";

function SearchNews({ news, onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filteredNews = news.filter((item) => {
      const titleMatch = item.title
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      const authorMatch = item.autor
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      return titleMatch || authorMatch;
    });

    onSearchResults(filteredNews);
  };

  return (
    <div className="search-container mt-28 ml-48 mr-96">
      <input
        type="text"
        placeholder="Busca"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded "
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Pesquisar
      </button>
    </div>
  );
}

export default SearchNews;
