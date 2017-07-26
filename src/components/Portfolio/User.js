import React, { Component } from 'react';
import jsonp from 'jsonp';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: this.props.url,
      user: {},
      socialLink: [],
      features: []
    }
  }

  componentDidMount() {

    jsonp(this.state.url, null, (err, data) => {
      if (err) {
        console.log(err);
      } else {

        let socialLink = [], features = [];

        if (data.user.social_links !== undefined) {
          data.user.social_links.forEach(link => {
            let _link = {
              name: link.service_name,
              url: link.url
            }
            socialLink.push(_link);
          });
        }

        if (data.user.features !== undefined) {
          data.user.features.forEach(feature => {
            let _feature = {
              image: feature.site.ribbon.image,
              url: feature.site.url
            }

            features.push(_feature);
          });
        }

        let user = {
          display_name: data.user.display_name,
          username: data.user.username,
          fields: data.user.fields,
          location: data.user.location,
          url: data.user.url,
          image: data.user.images[138],
          website: data.user.website,
          description: data.user.sections[Object.keys(data.user.sections)[0]] || '',
          appreciations: data.user.stats.appreciations,
          views: data.user.stats.views,
          followers: data.user.stats.followers,
        };

        this.setState({ user, socialLink, features });
      }
    });

  }

  render() {

    const socialLink = this.state.socialLink.map((link, i) => {
      return (
        <li key={i}>
          <a className="btn" href={link.url} target="_blank">
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
              <span className="btn"><i className="material-icons md-12">thumb_up</i> {this.state.user.appreciations}</span>
              <span className="btn"><i className="material-icons md-12">visibility</i> {this.state.user.views}</span>
              <span className="btn"><i className="material-icons md-12">group</i> {this.state.user.followers}</span>
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
            <a className="btn">
              <i className="material-icons md-12">place</i> {this.state.user.location}
            </a>
            <a href={`http://${this.state.user.website}`} target="_blank" className={`btn ${this.state.user.website === '' ? 'hide' : ''}`}>
              <i className="material-icons md-12">home</i> my website
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default User;