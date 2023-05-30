import { forwardRef, useContext, useEffect, useState } from 'react';
import { MovieContext } from '../MovieContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCircle,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiImage = import.meta.env.VITE_API_IMAGE;

import './PopularMovieCard.css';

const PopularMovieCard = forwardRef((props, popRef) => {
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
    fetchPopularMovies();
  }, []);
  useEffect(() => {
    fetchLatestMovies();
  }, []);

  const handleOnClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className={`popularMovieCard ${props.customClass}`} ref={popRef}>
      {popularMovies.map((movie, index) => (
        <div
          className={`popularMovieCardItem `}
          onMouseEnter={() => setIsHovered(index)}
          onMouseOut={() => setIsHovered(null)}
          onClick={() => {
            handleOnClick(movie.id);
          }}
          key={movie.id}
        >
          <h2 className='popularMovieTitle'>{movie.title}</h2>

          <img src={`${apiImage}/w500${movie.poster_path}`} alt={movie.title} />
          <div className='popularButtons'>
            <img
              src='\src\assets\play-button-svgrepo-com.svg'
              className='popularPlayButton'
            />

            <img
              src='\src\assets\plus-svgrepo-com.svg'
              className='popularPlusButton'
            />
          </div>

          <div className='popularMovieInfo'>
            <div className='releaseDate'>
              Release date: {movie.release_date}
            </div>
            <FontAwesomeIcon icon={faCircle} className='circle' />
            <div className='votes'>Votes: {movie.vote_average}</div>
            <p className='popularMoreInfo'>
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

export default PopularMovieCard;
