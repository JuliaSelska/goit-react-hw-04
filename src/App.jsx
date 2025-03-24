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
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal';


const ACCESS_KEY = "hRxXyIs8LjiWw29USD0xMbDQ0ofvHUO75pu1Bv3PQ4o";


const App = () => {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function fetchPictures() {
      try {
        setIsSearching(true);
        setError(null);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=10&client_id=${ACCESS_KEY}`
        );
        setPictures((prevPictures) =>
          page === 1 ? response.data.results : [...prevPictures, ...response.data.results]
        );
      } catch (error) {
        console.error("Error fetching images", error);
        setError("Error fetching images. Please try again.");
      } finally {
        setIsSearching(false);
      }
    }
    fetchPictures();
  }, [query, page]);

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery.trim()) {
      setQuery(searchQuery);
      setPage(1);
      setPictures([]);
    } else {
      toast.error("Please enter a search query!");
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />

      {isSearching && <Loader />}

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery pictures={pictures} onImageClick={openModal} />
          {pictures.length > 0 && <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />}
        </>
      )}

      <ImageModal isOpen={!!selectedImage} image={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default App;
