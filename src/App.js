import React, { Component } from 'react';
import './resources/style.css'
import {Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured'
import Faridfo from './components/faridfo'
import Highlight from './components/highlight'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'

class App extends Component{
  render(){
    return (
      <div className="App" style={{ height: '1500px', background: 'white' }}>
        <Header />
        <Element name='featured' >
          <Featured />
        </Element>
        <Element name="faridfo">
          <Faridfo />
        </Element>
        <Element name='highlight'>
          <Highlight />
        </Element>
        <Element name='pricing'>
          <Pricing />
        </Element>
        <Element name='location'>
          <Location />
        </Element>

        <Footer />
      </div>
    )
  }
}

export default App;
