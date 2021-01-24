import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./Component/Header/Header"
import Body from "./Component/Body/Body"


function App() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const params = {
    container: ".container",
    pagination: ".swiper-pagination",
    paginationClickable: true,
    direction: "vertical",
    mousewheel: true, // https://idangero.us/swiper/api/#mousewheel
  };
  return (

    <div className="App">
      <Body />
    </div>
  );
}

export default App;
