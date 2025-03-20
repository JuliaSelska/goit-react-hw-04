import { useEffect, useState, CSSProperties } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ClipLoader from "react-spinners/ClipLoader";
import './App.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'

const ACCESS_KEY = "hRxXyIs8LjiWw29USD0xMbDQ0ofvHUO75pu1Bv3PQ4o";

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchPictures() {
      try {
        setIsSearching(true);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=${ACCESS_KEY}`
        );
        setPictures(response.data.results);
      } catch (error) {
        console.error("Error fetching images", error);
      } finally {
        setIsSearching(false);
      }
    }
    fetchPictures();
  }, [query]);

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery.trim()) {
      setQuery(searchQuery);
    } else {
      toast.error("Please enter a search query!");
    }
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      {isSearching && <Loader />}
      <ImageGallery pictures={pictures} onImageClick={setSelectedImage} />
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage.urls.regular} alt={selectedImage.alt_description} />
            <p><strong>Author: </strong> {selectedImage.user.name}</p>
            <p><strong>Likes: </strong> {selectedImage.likes}</p>
            <p>{selectedImage.description || "No description available"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;