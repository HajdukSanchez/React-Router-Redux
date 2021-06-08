import React from "react";
import "../assets/styles/containers/Login.scss";

import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Log In</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Mail' />
        <input className='input' type='password' placeholder='Password' />
        <button className='button'>Login</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
            Remember me
          </label>
          <a href='/'>Forget my password</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} /> Login with Google
        </div>
        <div>
          <img src={twitterIcon} /> Login with Twitter
        </div>
      </section>
      <p className='login__container--register'>
        You don't have an account<a href=''>Register</a>
      </p>
    </section>
  </section>
);

export default Login;
