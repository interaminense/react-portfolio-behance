import React, { Component } from 'react';
import User from './User';
import Projects from './Projects';
import './style/Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <User user={this.props.user} apiKey={'LDGQKFP7dsmkhIKUAGG67ChSDASj1cWD'} />
        <Projects user={this.props.user} showFeatured={this.props.showFeatured} apiKey={'LDGQKFP7dsmkhIKUAGG67ChSDASj1cWD'} />
      </div>
    );
  }
}

export default Portfolio;