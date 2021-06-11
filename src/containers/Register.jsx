import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/containers/Register.scss";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Register</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input className='input' type='text' placeholder='Name' name='name' onChange={handleInput} />
          <input className='input' type='text' placeholder='Mail' name='email' onChange={handleInput} />
          <input className='input' type='password' placeholder='Password' name='password' onChange={handleInput} />
          <button className='button'>Sign in</button>
        </form>
        <Link to='/login'>Login</Link>
      </section>
    </section>
  );
};

export default Register;
