import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div>
      <form className='registerForm'>
        <div>
          <label>Name</label>
          <br />
          <input></input>
        </div>
        <div>
          <label>Email</label>
          <br />
          <input></input>
        </div>
        <div>
          <label>Password</label>
          <br />
          <input></input>
        </div>
        <div>
          <label>Confirm Password</label>
          <br />
          <input></input>
        </div>
      </form>
    </div>
  );
};

export default Register;
