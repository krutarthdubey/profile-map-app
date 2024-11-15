// src/components/SearchFilter.js
import React from 'react';

function SearchFilter({ onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search profiles..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchFilter;