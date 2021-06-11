import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";

import gravatar from "../utils/gravatar";
import classNames from "classnames";

import { logoutRequest } from "../actions";

import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  // We use OBJECT for validate a value inside and object
  const hasUser = Object.keys(user).length > 0; // This is validation for know if user has elements

  const handleLogout = () => {
    props.logoutRequest({});
  };

  /* This is a library for show different types of Styles, knowing different types of conditions
  In this case the condition is if we are in the Login or Register section */
  const headerClass = classNames("header", {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={hasUser ? gravatar(user.email) : userIcon} alt={hasUser ? user.email : "User icon"} />
          <p>Profile</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <Link to='/'>{user.name}</Link>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <Link to='#logout' onClick={handleLogout}>
                Log out
              </Link>
            </li>
          ) : (
            <li>
              <Link to='/login'>Log in</Link>
            </li>
          )}
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

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
