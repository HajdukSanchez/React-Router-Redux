import React from "react";
import "../assets/styles/App.scss";

import { connect } from "react-redux";

import Search from "../components/Search";
import Categories from "../components/categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Header from "../components/Header";

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 && (
        <Categories title='My list'>
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Trends'>
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
