// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Photo from './components/Photo';
import Footer from './components/Footer';
import NoResults from './components/NoResults';
import { searchPhotos, getRandomPhotos } from './api';

function App() {
  const [photos, setPhotos] = useState([]);

  const handleSearch = async (query) => {
    if (query.trim() === '') {
      const randomPhotos = await getRandomPhotos();
      setPhotos(randomPhotos);
    } else {
      const searchResults = await searchPhotos(query);
      setPhotos(searchResults);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchForm onSearch={handleSearch} />
      <div className="no-photo">
        {photos.length >= 0 ? <main>{
          (
          photos.map((photo, index) => <Photo key={index} photo={photo} />)
        )}</main> : (
          <NoResults />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
