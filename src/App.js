import React, { Component } from 'react';
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {

    const Param = ({ match }) => <Portfolio user={match.params.username} showFeatured />;
    const ParamDefault = ({ match }) => {
      let listUsers = ['AitorPrieto', 'emas', 'pixego', 'akirax', 'dennisschafer', 'superfiction'];
      let username = listUsers[Math.floor(Math.random() * listUsers.length)];

      return <Portfolio user={username} showFeatured />;
    };

    return (
      <Router>
        <Switch>
          <Route path="/react-portfolio-behance/:username" component={Param} />
          <Route path="/react-portfolio-behance" component={ParamDefault} />
        </Switch>
      </Router>
    );
  }
}

export default App;
