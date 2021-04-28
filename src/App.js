import React from 'react';
import './App.css';

import {BrowserRouter, Route, Router} from "react-router-dom";
import LayoutMain from "./components/LayoutMain/LayoutMain";
import PageNews from "./components/PageNews/PageNews";
import Projects from "./components/Projects/Projects";
import Kvartira from "./components/Kvartira/Kvartira";
import Events from "./components/Events/Events";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import MobileNav from "./MobileNav/MobileNav";



function App() {

  return (

      <BrowserRouter>
          <div>
              <div id="__nuxt">
                  <div id="__layout">
                      <Route exact path='/' component={LayoutMain}/>
                      <Route exact path={"/news"} component={PageNews}/>
                      <Route exact path={"/projects"} component={Projects}/>
                      <Route exact path={"/kvartira"} component={Kvartira}/>
                      <Route exact path={"/events"} component={Events}/>
                      <Route exact path={"/about"} component={About}/>
                      <Footer/>
                      <MobileNav/>
                  </div>
              </div>
          </div>


      </BrowserRouter>
  );
}

export default App;
