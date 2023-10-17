import React, { useState } from 'react';

function SearchForm({ onSearch, onClearPhotos }) {
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
     /* <button onClick={handleClearPhotos}>Clear Photos</button>
     /* const handleClearPhotos = () => {
    /*document.querySelectorAll('.photo').forEach(photo => photo.style.display = 'none');
  };
    </div>
  );
}

export default SearchForm;
