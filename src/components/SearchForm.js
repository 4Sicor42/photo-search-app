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

  const handleRemovePhotos = () => {
  const photoElements = document.querySelectorAll('.photo');
  photoElements.forEach((element) => {
    element.remove();
  });
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
      <button onClick={handleRemovePhotos}>Remove Photos</button>
    </div>
  );
}

export default SearchForm;
