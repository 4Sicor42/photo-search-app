// src/components/SearchForm.js
import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const clearInput = () => {
    setSearchQuery('');
  };

  return (
    <div className="search-form">
      <div className="input-container">
        <input
          autoFocus
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        {searchQuery && (
          <span className="clear-button" onClick={clearInput}>
            &times;
          </span>
        )}
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchForm;
