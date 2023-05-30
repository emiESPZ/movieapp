import React, { useState } from 'react';
import { forwardRef, useContext, useEffect } from 'react';
import { MovieContext } from '../MovieContext';
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiImage = import.meta.env.VITE_API_IMAGE;
import './LatestMovieCard.css';
import {
  faArrowRight,
  faCircle,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const LatestMovieCard = forwardRef((props, latRef) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const {
    selectedMovie,
    fetchPopularMovies,
    fetchLatestMovies,
    fetchMovieDetails,
    popularMovies,
    latestMovies,
  } = useContext(MovieContext);

  useEffect(() => {
    fetchLatestMovies();
  }, []);

  const handleOnClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className={`latestMovieCard ${props.customClass}`} ref={latRef}>
      {latestMovies.map((movie, index) => (
        <div
          className={`latestMovieCardItem `}
          onMouseEnter={() => setIsHovered(index)}
          onMouseOut={() => setIsHovered(null)}
          key={movie.id}
          onClick={() => {
            handleOnClick(movie.id);
          }}
        >
          <h2 className='latestMovieTitle'>{movie.title}</h2>
          <img src={`${apiImage}/w500${movie.poster_path}`} alt={movie.title} />
          <div className='latestButtons'>
            <img
              src='\src\assets\play-button-svgrepo-com.svg'
              className='latestPlayButton'
            />

            <img
              src='\src\assets\plus-svgrepo-com.svg'
              className='latestPlusButton'
            />
          </div>

          <div className='latestMovieInfo'>
            <div className='releaseDate'>
              Release date: {movie.release_date}
            </div>
            <FontAwesomeIcon icon={faCircle} className='circle' />
            <div className='votes'>Votes: {movie.vote_average}</div>

            <p className='latestMoreInfo'>
              <FontAwesomeIcon icon={faCircleInfo} className='infoCircle' />
              More Info
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ marginLeft: '3px' }}
              />
            </p>
          </div>

          <hr
            style={{
              height: '1px',
              border: 'none',
              color: '#333',
              backgroundColor: '#333',
              marginTop: '-12px',
            }}
          />
        </div>
      ))}
    </div>
  );
});

export default LatestMovieCard;
