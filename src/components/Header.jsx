import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";

import gravatar from "../utils/gravatar";

import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = (props) => {
  const { user } = props;
  // We use OBJECT for validate a value inside and object
  const hasUser = Object.keys(user).length > 0; // This is validation for know if user has elements
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={hasUser ? gravatar(user.email) : userIcon} alt={hasUser ? user.email : "User icon"} />
          <p>Profile</p>
        </div>
        <ul>
          <li>
            <Link to='/login'>Log in</Link>
          </li>
          <li>
            <Link to='/register'>Sign in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
