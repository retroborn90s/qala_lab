import React from 'react';
import './App.css';
import Slider from "./components/LayoutMain/Slider/Slider";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Router} from "react-router-dom";
import LayoutMain from "./components/LayoutMain/LayoutMain";


function App() {
  return (

      <BrowserRouter>
          <div>
              <div id="__nuxt">

                  <div id="__layout">
                      <Header color={"light"}/>
                      <Route path='/' component={LayoutMain}></Route>
                      <Route path={"/news"}></Route>
                  </div>
              </div>
          </div>


      </BrowserRouter>
  );
}

export default App;
