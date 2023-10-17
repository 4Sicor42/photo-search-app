import React, { useState, useEffect } from 'react';
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

  const clearPhotos = () => {
    document.querySelectorAll('.photo').forEach(photo => photo.style.display = 'none');
  };


  useEffect(() => {
    // Здесь можно добавить код, который нужно выполнить после загрузки компонента
    handleSearch('');
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchForm onSearch={handleSearch} />
      <main>
        {photos.length >= 0 ? (
          photos.map((photo, index) => <Photo key={index} photo={photo} />)
        ) : (
          <NoResults />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
