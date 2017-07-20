import React, { Component } from 'react';
import 'typeface-roboto';
import { MuiThemeProvider } from 'material-ui/styles';

import './App.css';

import Portfolio from './components/Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Portfolio user="imcreator" />
      </MuiThemeProvider>
    );
  }
}

export default App;
