import React, { useState } from 'react';
import './Modal.css';
import Register from './Register';
import Login from './Login';
const Modal = ({ setOpenModal }) => {
  const [userStatus, setUserStatus] = useState(false);

  return (
    <>
      <div className='modalBackground'>
        <div className='modalContainer'>
          <div className='modalTitle'>
            <button
              className='modalRegister'
              onClick={() => setUserStatus(true)}
            >
              REGISTER
            </button>
            <button className='modalLogin' onClick={() => setUserStatus(false)}>
              LOGIN
            </button>
          </div>
          <div className='modalBody'>
            {userStatus ? <Register /> : <Login />}
          </div>
          <div className='modalButtons'>
            <button className='submitButton'>SUBMIT</button>
            <button
              className='cancelButton'
              onClick={() => setOpenModal(false)}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
