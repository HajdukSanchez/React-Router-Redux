import React from "react";
import "../assets/styles/containers/Register.scss";

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Register</h2>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Name' />
        <input className='input' type='text' placeholder='Mail' />
        <input className='input' type='password' placeholder='Password' />
        <button className='button'>Sign in</button>
      </form>
      <a href=''>Login</a>
    </section>
  </section>
);

export default Register;
