import React, { Component } from 'react';


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
