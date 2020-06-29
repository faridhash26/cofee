import React, { Component } from 'react';
import './resources/style.css'
import {Element } from 'react-scroll';

import Header from './components/header_footer/Header';

class App extends Component{
  render(){
    return (
      <div className="App" style={{ height: '1500px', background: 'white' }}>
        <Header />
      </div>
    )
  }
}

export default App;
