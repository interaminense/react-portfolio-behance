import React, { Component } from 'react';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      //AitorPrieto, emas, pixego
      <Portfolio user="emas" showFeatured />
    );
  }
}

export default App;
