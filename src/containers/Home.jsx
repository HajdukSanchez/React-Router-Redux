import React from "react";
import "../assets/styles/App.scss";
import useInitialState from "../hooks/useInitialState";

import { connect } from "react-redux";

import Search from "../components/Search";
import Categories from "../components/categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />
      {myList.length > 0 && (
        <Categories title='My list'>
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='trends'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originals'>
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  // This function return the elements that we need from the state
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

// export default Home;
// export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);
