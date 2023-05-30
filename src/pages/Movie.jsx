import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import './Movie.css';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../MovieContext';
import { useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';

const Movie = () => {
  const { id } = useParams();
  const apiImage = import.meta.env.VITE_API_IMAGE;
  const [playTrailer, setPlayTrailer] = useState(false);
  const [hasTrailer, setHasTrailer] = useState(false);
  const {
    selectedMovie,
    fetchPopularMovies,
    fetchLatestMovies,
    fetchMovieDetails,
    popularMovies,
    latestMovies,
  } = useContext(MovieContext);
  console.log(id);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      await fetchMovieDetails(id);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (
      selectedMovie &&
      selectedMovie.videos &&
      selectedMovie.videos.results.length > 0
    ) {
      setHasTrailer(true);
    } else {
      setHasTrailer(false);
    }
  }, [selectedMovie]);

  console.log(selectedMovie);

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  const showTrailer = () => {
    if (hasTrailer) {
      const trailer = selectedMovie.videos.results.find(
        (video) => video.name === 'Official Trailer'
      );

      if (trailer && trailer.key) {
        return (
          <div className='trailerBackground'>
            <YouTube className='trailer' videoId={trailer.key} />
          </div>
        );
      } else {
        return <div className='noTrailerText'>No trailer available</div>;
      }
    } else {
      return <div className='noTrailerText'>No trailer available</div>;
    }
  };

  return (
    <div>
      <div className='movieCardContainer'>
        <div className='movieCard'>
          <div className='movieTitle'>{selectedMovie.title}</div>
          <button
            className='backArrowButton'
            onClick={() => {
              navigate('/');
            }}
          >
            <FontAwesomeIcon
              icon={faLeftLong}
              style={{
                color: 'red',
                position: 'fixed',
                marginTop: '-163px',
                marginLeft: '1050px',
                cursor: 'pointer',
              }}
            />
          </button>
          <button
            className={playTrailer ? 'closeButton' : 'closeButtonOff'}
            onClick={() => {
              setPlayTrailer(false);
            }}
          >
            X
          </button>
          <div className='cardBody'>
            <div
              className={
                playTrailer && hasTrailer ? 'imgContainerNot' : 'imgContainer'
              }
            >
              <img
                className={
                  playTrailer && !hasTrailer
                    ? 'moviePictureNot'
                    : 'moviePicture'
                }
                src={`${apiImage}/original/${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
              ></img>
            </div>
            <div className='genres'>
              Genres:
              <ul className='genre'>
                {selectedMovie.genres.map((genres, index) => (
                  <li className='genreName' key={genres[0]}>
                    {genres.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className={'movieOverview'}>
              Overview:
              <p
                className={
                  playTrailer && hasTrailer ? 'overviewNot' : 'overview'
                }
              >
                {selectedMovie.overview}
              </p>
            </div>

            {playTrailer && showTrailer()}
          </div>
          <button
            className={playTrailer ? 'trailerButtonOn' : 'trailerButtonOff'}
            onClick={() => {
              setPlayTrailer(true);
            }}
          >
            Show Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
