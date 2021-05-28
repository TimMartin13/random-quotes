import React, { useState, useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import { Switch, Route, useLocation } from "react-router-dom";
// import Footer from './components/Footer/Footer';
import Home from "./pages";
import Favorites from "./pages/Favorites";
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/favorites" component={ Favorites } />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
