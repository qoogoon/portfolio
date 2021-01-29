import React, { useState } from "react";
import style from './App.module.scss';
import './App.css';
import Body from "./Component/Body/Body"


function App() {
  return (
    <div className={`${style['App']}`}>
      <Body />
    </div>
  );
}

export default App;
