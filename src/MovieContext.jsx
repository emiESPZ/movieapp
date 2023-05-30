import React, { createContext, useState, useEffect } from 'react';
import { getPopularMovies, getLatestMovies } from './services/API';
import { getMovieDetails } from './services/API';

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchPopularMovies = async (currentPage) => {
    try {
      const data = await getPopularMovies(currentPage);
      setPopularMovies(data.results);
      console.log(data.results);
    } catch (error) {}
  };

  const fetchLatestMovies = async () => {
    try {
      const data = await getLatestMovies();
      setLatestMovies(data.results);
    } catch (error) {}
  };

  const fetchMovieDetails = async (id) => {
    try {
      const data = await getMovieDetails(id);
      setSelectedMovie(data);
    } catch (error) {}
  };

  const addToFavorites = (movie) => {
    // Lógica para agregar una película a una lista de favoritos
  };

  const removeFavorite = (movie) => {
    // Lógica para eliminar una película de una lista de favoritos
  };

  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        latestMovies,
        currentPage,
        totalPages,
        selectedMovie,
        fetchPopularMovies,
        fetchLatestMovies,
        fetchMovieDetails,
        addToFavorites,
        removeFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
