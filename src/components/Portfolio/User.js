import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      URL_USER: () => `https://api.behance.net/v2/users/${this.props.user}?client_id=${this.props.apiKey}`,
      user: {},
      socialLink: [],
      features: []
    }
  }

  componentDidMount() {
    axios.get(this.state.URL_USER())
      .then(response => {

        console.log(response.data.user);

        let socialLink = [], features = [];

        if(response.data.user.social_links !== undefined) {
          response.data.user.social_links.forEach(link => {
            let _link = {
              name: link.service_name,
              url: link.url
            }
            socialLink.push(_link);
          });
        }

        if(response.data.user.features !== undefined) {
          response.data.user.features.forEach(feature => {
            let _feature = {
              image: feature.site.ribbon.image,
              url: feature.site.url
            }

            features.push(_feature);
          });
        }

        let user = {
          display_name: response.data.user.display_name,
          username: response.data.user.username,
          fields: response.data.user.fields,
          location: response.data.user.location,
          url: response.data.user.url,
          image: response.data.user.images[138],
          website: response.data.user.website,
          description: response.data.user.sections[Object.keys(response.data.user.sections)[0]] || '',
          appreciations: response.data.user.stats.appreciations,
          views: response.data.user.stats.views,
          followers: response.data.user.stats.followers,
        };

        this.setState({ user, socialLink, features });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    console.log('STATE USER', this.state);

    const socialLink = this.state.socialLink.map((link, i) => {
      return (
        <li key={i}>
          <a className="Portfolio__btn" href={link.url} target="_blank">
            {link.name}
          </a>
        </li>
      );
    });

    const features = this.state.features.map((feature, i) => {
      return (
        <li key={i}>
          <a href={feature.url} target="_blank">
            <img src={feature.image} alt="feature flag" />
          </a>
        </li>
      );
    });

    return (
      <div className="User">
        <div className="User__mask">
          <div className="User__bg" style={{ backgroundImage: `url(${this.state.user.image})` }}></div>
        </div>
        <div className="User__content">
          <div>
            <img src={this.state.user.image} alt="user" />
            <h1>{this.state.user.username}</h1>
            <h5>{this.state.user.display_name}</h5>
            <div>
              <span className="Portfolio__btn"><i className="material-icons md-12">thumb_up</i> {this.state.user.appreciations}</span>
              <span className="Portfolio__btn"><i className="material-icons md-12">visibility</i> {this.state.user.views}</span>
              <span className="Portfolio__btn"><i className="material-icons md-12">group</i> {this.state.user.followers}</span>
            </div>
            <p>{this.state.user.description}</p>
          </div>
          <ul className="User__links">
            {socialLink}
          </ul>
          <ul className="User__features">
            {features}
          </ul>
          <div className="User__info">
            <a className="Portfolio__btn">
              <i className="material-icons md-12">place</i> {this.state.user.location}
            </a>
            <a href={`http://${this.state.user.website}`} target="_blank" className={`Portfolio__btn ${this.state.user.website === '' ? 'hide' : ''}`}>
              <i className="material-icons md-12">home</i> my website
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default User;