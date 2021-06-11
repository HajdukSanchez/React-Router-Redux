import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../assets/styles/containers/Login.scss";

import { loginRequest } from "../actions";

import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

const Login = (props) => {
  const [form, setForm] = useState({ email: "" });

  const handleInput = (event) => {
    setForm({
      ...form,
      // Save the value depending the name of our tag and the value that contains
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form); //We send our form state to the storage state
    props.history.push("/"); // If the user is accepted, we redirect him to the home page
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Log In</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input className='input' type='text' placeholder='Mail' name='email' onChange={handleInput} />
          <input className='input' type='password' placeholder='Password' name='password' onChange={handleInput} />
          <button className='button'>Login</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Remember me
            </label>
            <a href='/'>Forget my password</a>
          </div>
          <br />
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
          You don't have an account
          <Link to='/register'>Register</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
