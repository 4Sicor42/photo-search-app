// src/api.js
const apiKey = 'PEN13SceLN2Kkv6xXMzwaarzcuSZdS9oGkkluF1IvSA';

export async function searchPhotos(query) {
  const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
}

export async function getRandomPhotos() {
  const apiRnd = `https://api.unsplash.com/photos/random?count=10&client_id=${apiKey}`;

  try {
    const response = await fetch(apiRnd);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching random photos:', error);
    return [];
  }
}
