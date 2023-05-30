import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div>
      <form className='loginForm'>
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
      </form>
    </div>
  );
};

export default Login;
