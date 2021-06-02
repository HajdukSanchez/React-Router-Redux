import React, { useEffect, useState } from "react";
import "../assets/styles/App.scss";

import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

const App = () => {
  const [videos, setVideos] = useState([]);

  // The second parameter is for not create and infinity loop listened changes
  useEffect(() => {
    fetch("http://localhost:3000/initialState")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  console.log(videos);

  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories title='Uno'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
