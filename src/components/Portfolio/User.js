import React, { Component } from 'react';
import jsonp from 'jsonp';

class User extends Component {
  constructor(props) {
    super(props);

    this.sizeShowHeader = 500;

    this.state = {
      user: {}
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {

    window.addEventListener('scroll', this.handleScroll);

    jsonp(this.props.url, null, (err, data) => {
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
              name: feature.site.name,
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
          socialLink,
          features
        };

        this.setState({ user });
      }
    });

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let _showHeader = () => window.scrollY > this.sizeShowHeader ? true : false;
    this.setState({ showHeader: _showHeader() });
  }

  render() {

    let _socialLink = this.state.user.socialLink || [];
    let _features = this.state.user.features || [];

    let socialLink = _socialLink.map((link, i) => {
      return (
        <li key={i}>
          <a className="btn btn--default" href={link.url} target="_blank">
            {link.name}
          </a>
        </li>
      );
    });

    let features = _features.map((feature, i) => {
      return (
        <li key={i}>
          <a data-tooltip={`featured by ${feature.name}`} data-tooltip-placement="bottom" href={feature.url} target="_blank">
            <img src={feature.image} alt="feature flag" />
          </a>
        </li>
      );
    });

    return (
      <div className="User">

        <header>
          <nav className={`Nav ${this.state.showHeader ? 'Nav--is-visible' : ''}`}>
            <div className="Nav__title">
              <img className="Nav__thumbnail" src={this.state.user.image} alt="user" />
              <span className="Nav__name">{this.state.user.username}</span>
            </div>
            <ul className="Nav__menu">
              {socialLink}
            </ul>
          </nav>
        </header>

        <div className="User__mask">
          <div className="User__bg" style={{ backgroundImage: `url(${this.state.user.image})` }}></div>
        </div>
        <div className="User__content">
          <div>
            <img src={this.state.user.image} alt="user" />
            <h1>{this.state.user.username}</h1>
            <h5>{this.state.user.display_name}</h5>
            <div>
              <span data-tooltip="total appreciations" data-tooltip-placement="top" className="btn btn--default"><i className="material-icons md-12">thumb_up</i> {this.state.user.appreciations}</span>
              <span data-tooltip="total views" data-tooltip-placement="top" className="btn btn--default"><i className="material-icons md-12">visibility</i> {this.state.user.views}</span>
              <span data-tooltip="total followers" data-tooltip-placement="top" className="btn btn--default"><i className="material-icons md-12">group</i> {this.state.user.followers}</span>
            </div>
            <p>{this.state.user.description}</p>
          </div>
                   <ul className="User__features">
            {features}
          </ul>
          <div className="User__info">
            <a className="btn btn--default">
              <i className="material-icons md-12">place</i> {this.state.user.location}
            </a>
            <a href={`http://${this.state.user.website}`} target="_blank" className={`btn btn--default ${this.state.user.website === '' ? 'hide' : ''}`}>
              <i className="material-icons md-12">home</i> my website
            </a>
          </div> 
          <ul className="User__links">
            {socialLink}
          </ul>

        </div>
      </div>
    );
  }
}

export default User;
