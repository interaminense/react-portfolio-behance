import React, { Component } from 'react';
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {

    const URL_DEFAULT = '/react-portfolio-behance';

    const Param = ({ match }) => <Portfolio user={match.params.username} showFeatured />;
    const ParamDefault = ({ match }) => {
      let listUsers = ['AitorPrieto', 'atipo', 'Ramotion', 'akirax', 'dennisschafer', 'superfiction'];
      let username = listUsers[Math.floor(Math.random() * listUsers.length)];

      return <Portfolio user={username} showFeatured />;
    };

    return (
      <div>
        <Router>
          <Switch>
            <Route path={`${URL_DEFAULT}/:username`} component={Param} />
            <Route path={`${URL_DEFAULT}`} component={ParamDefault} />
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
