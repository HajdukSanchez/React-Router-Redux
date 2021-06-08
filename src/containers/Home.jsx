import React from "react";
import "../assets/styles/App.scss";
import useInitialState from "../hooks/useInitialState";

import Search from "../components/Search";
import Categories from "../components/categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

const API = "http://localhost:3000/initialState";

const Home = () => {
  const initialState = useInitialState(API);

  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title='My list'>
          <Carousel>
            {initialState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Trends'>
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originals'>
        <Carousel>
          {initialState.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
