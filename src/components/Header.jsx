import React, { useContext, useState } from 'react';
import { MovieContext } from '../MovieContext';
import './Header.css';
import NavBar from './NavBar';
import Modal from './Modal';

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiImage = import.meta.env.VITE_API_IMAGE;

const Header = () => {
  const { popularMovies } = useContext(MovieContext);
  const [openModal, setOpenModal] = useState(false);

  if (popularMovies.length === 0) {
    return <p>Loading...</p>;
  }

  const firstMovie = popularMovies[0];

  return (
    <div className='header'>
      <NavBar setOpenModal={setOpenModal} openModal={openModal} />
      <img
        className='headerImg'
        src={`${apiImage}/original${firstMovie.backdrop_path}`}
        alt={firstMovie.title}
      />
      {openModal && <Modal className='modal' setOpenModal={setOpenModal} />}
    </div>
  );
};
export default Header;
