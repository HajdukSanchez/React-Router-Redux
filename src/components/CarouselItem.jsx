import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/components/CarouselItem.scss";

import { setFavorite, deleteFavorite } from "../actions";

import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove-icon.png";

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  // Here we use the prop action that we stablish in the connect section
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          </Link>
          {/* If we need to pass a parameter, we need to call it in other way, not like the function below. */}
          {isList ? (
            <img className='carousel-item__details--img' src={removeIcon} alt='Plus Icon' onClick={() => handleDeleteFavorite(id)} />
          ) : (
            <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' onClick={handleSetFavorite} />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

// Props types validation
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

// With this object we can "add" the actions inside them like a prop
// This prop are going to we available to use in our component
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

// If we don't want to use the reducers reducer state information, we don't pass this parameter
export default connect(null, mapDispatchToProps)(CarouselItem);
