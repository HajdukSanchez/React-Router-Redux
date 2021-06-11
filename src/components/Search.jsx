import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/Search.scss";

import classNames from "classnames";

const Search = ({ isHome }) => {
  const inputClass = classNames("main", {
    isHome,
  });

  return (
    <section className={inputClass}>
      <h2 className='main__title'>¿What do you want to see today?</h2>
      <input type='text' className='input' placeholder='Search...' />
    </section>
  );
};

Search.propTypes = {
  isHome: PropTypes.bool,
};

export default Search;
