import React, { Component } from 'react';
import User from './User';
import Projects from './Projects';
import './style/Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <User user={this.props.user} apiKey={'ECR4MdjZQa7IqPLiA0jGrT7sL5FP72Es'} />
        <Projects user={this.props.user} showFeatured={this.props.showFeatured} apiKey={'ECR4MdjZQa7IqPLiA0jGrT7sL5FP72Es'} />
      </div>
    );
  }
}

export default Portfolio;