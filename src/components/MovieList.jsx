import { useContext, useEffect, useRef, useState } from 'react';
import { MovieContext } from '../MovieContext';
import LatestMovieCard from './LatestMovieCard';
import PopularMovieCard from './PopularMovieCard';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './MovieList.css';

function MovieList() {
  const popularMovieListRef = useRef(null);
  /*  const popularMovieItemRef = useRef(null); */
  const latestMovieListRef = useRef(null);
  const { popularMovies, latestMovies, fetchPopularMovies, fetchLatestMovies } =
    useContext(MovieContext);

  useEffect(() => {
    fetchPopularMovies();
  }, []);
  console.log(popularMovies);

  useEffect(() => {
    fetchLatestMovies();
  }, []);
  console.log(latestMovies);

  let currentPosition = 0;

  const handleArrowClick = (direction, list) => {
    const element =
      list === 'popular'
        ? popularMovieListRef.current
        : latestMovieListRef.current;
    const cardWidth = 230;
    const maxPosition =
      list === 'popular'
        ? (popularMovies.length - 8) * cardWidth
        : (latestMovies.length - 8) * cardWidth;

    currentPosition += direction === 'left' ? -cardWidth : cardWidth;

    if (currentPosition < 0) {
      currentPosition = 0;
    } else if (currentPosition > maxPosition) {
      currentPosition = maxPosition;
    }

    element.style.transform = `translateX(-${currentPosition}px)`;
    element.style.zIndex = '99';
  };
  useEffect(() => {
    const popularMovieCardItem = popularMovieListRef.current.querySelector(
      '.popularMovieCardItem'
    );
    console.log(popularMovieCardItem);
  }, []);

  return (
    <>
      <div className='popularMovieList'>
        <span
          className='popularMovieListTitle'
          style={{
            fontSize: '22px',
            fontWeight: '700',
            color: 'white',
            marginLeft: '12px',
            background: 'none',
            zIndex: '77',
          }}
        >
          Popular Movies
        </span>
        <div className='popularMovieListWrapper' style={{ marginTop: '8px' }}>
          <ArrowBackIosNewOutlinedIcon
            onClick={() => handleArrowClick('left', 'popular')}
            className='sliderArrow left'
            style={{
              backgroundColor: 'rgb(22, 22, 22, 0.5)',
              width: '50px',
              height: '100%',
              position: 'absolute',
              left: '0',
              bottom: '0',
              top: '0',
              margin: 'auto',
              zIndex: '85',
              cursor: 'pointer',
            }}
          />
          <PopularMovieCard
            customClass='popularMovieCards'
            ref={popularMovieListRef}
          />
          {/* Es el container */}
          <ArrowForwardIosOutlinedIcon
            onClick={() => handleArrowClick('right', 'popular')}
            className='sliderArrow right'
            style={{
              backgroundColor: 'rgb(22, 22, 22, 0.5)',
              width: '50px',
              height: '100%',
              position: 'absolute',
              right: '0',
              top: '0',
              bottom: '0',
              margin: 'auto',
              cursor: 'pointer',
              zIndex: '85',
            }}
          />
        </div>
      </div>
      <div className='latestMovieList'>
        <span
          className='latestMovieListTitle'
          style={{
            fontSize: '22px',
            fontWeight: '700',
            color: 'white',
            marginLeft: '12px',
            background: 'none',
            zIndex: '77',
          }}
        >
          Latest Movies
        </span>

        <div className='latestMovieListWrapper' style={{ marginTop: '8px' }}>
          <ArrowBackIosNewOutlinedIcon
            onClick={() => handleArrowClick('left', 'latest')}
            className='sliderArrow left'
            style={{
              backgroundColor: 'rgb(22, 22, 22, 0.5)',
              width: '50px',
              height: '100%',
              position: 'absolute',
              left: '0',
              bottom: '0',
              top: '0',
              margin: 'auto',
              zIndex: '85',
              cursor: 'pointer',
            }}
          />
          <LatestMovieCard
            customClass='latestMovieCards'
            ref={latestMovieListRef}
          />
          {/* Es el container */}
          <ArrowForwardIosOutlinedIcon
            onClick={() => handleArrowClick('right', 'latest')}
            className='sliderArrow right'
            style={{
              backgroundColor: 'rgb(22, 22, 22, 0.5)',
              width: '50px',
              height: '100%',
              position: 'absolute',
              right: '0',
              top: '0',
              bottom: '0',
              margin: 'auto',
              cursor: 'pointer',
              zIndex: '85',
            }}
          />
        </div>
      </div>
    </>
  );
}

export default MovieList;
