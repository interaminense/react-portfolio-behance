import React, { Component } from 'react';
import Portfolio from './components/Portfolio/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);

    const listUsers = [
      'AitorPrieto',
      'emas',
      'pixego',
      'akirax',
      'dennisschafer',
      'superfiction'
    ];

    this.state = {
      user: listUsers[Math.floor(Math.random() * listUsers.length)]
    }
  }

  render() {
    return <Portfolio user={this.state.user} apiKey='LDGQKFP7dsmkhIKUAGG67ChSDASj1cWD' showFeatured />;
  }
}

export default App;
