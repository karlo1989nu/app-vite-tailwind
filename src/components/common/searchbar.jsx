import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Llama a la función de búsqueda con el texto ingresado
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Buscar productos..."
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default SearchBar;
