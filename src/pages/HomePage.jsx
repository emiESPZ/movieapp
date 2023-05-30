import React, { useState } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import MovieList from '../components/MovieList';
import './HomePage.css';
import NavBar from '../components/NavBar';

function HomePage() {
  return (
    <div className='homePage'>
      <Header className='header' />
      <MovieList className='movieList' />
    </div>
  );
}

export default HomePage;
