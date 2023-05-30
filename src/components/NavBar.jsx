import React from 'react';
import { useState } from 'react';
import './NavBar.css';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = ({ setOpenModal, openModal }) => {
  return (
    <div className='navBar'>
      <h1>NONETFLIX</h1>
      <ul>
        <li className='navLi'>Home</li>
        <li className='navLi'>Series</li>
        <li className='navLi'>Movies</li>
        <li className='navLi'>News</li>
      </ul>
      <FontAwesomeIcon
        icon={faCircleUser}
        className='userIcon'
        onClick={() => setOpenModal(!openModal)}
      />
    </div>
  );
};

export default NavBar;
