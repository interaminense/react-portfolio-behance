import React, { Component } from 'react';
import User from './User';
import Projects from './Projects';
import './style/Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    let url = 'https://api.behance.net/v2';

    this.state = {
      urlUser: `${url}/users/${this.props.user}?client_id=${this.props.apiKey}`,
      urlProjects: `${url}/users/${this.props.user}/projects?client_id=${this.props.apiKey}`,
    }
  }

  render() {
    return (
      <div className="Portfolio">
        <User url={this.state.urlUser} apiKey={this.props.apiKey} />
        <Projects url={this.state.urlProjects} showFeatured={this.props.showFeatured} apiKey={this.props.apiKey} />
      </div>
    );
  }
}

export default Portfolio;