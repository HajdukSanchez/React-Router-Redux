import React from "react";

const Header = () => (
  <header className='header'>
    <img className='header__img' src='../assets/logo-platzi-video-BW2.png' alt='Platzi Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='../assets/user-icon.png' alt='' />
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <a href='/'>Account</a>
        </li>
        <li>
          <a href='/'>Close session</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
