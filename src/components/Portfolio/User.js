import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      URL_USER: () => `https://api.behance.net/v2/users/${this.props.user}?client_id=${this.props.apiKey}`,
      user: {},
      socialLink: []
    }
  }

  componentDidMount() {
    axios.get(this.state.URL_USER())
      .then(response => {

        let socialLink = [];

        response.data.user.social_links.forEach(function (link) {
          let _link = {
            name: link.service_name,
            url: link.url
          }
          socialLink.push(_link);
        });

        let user = {
          display_name: response.data.user.display_name,
          first_name: response.data.user.first_name,
          last_name: response.data.user.last_name,
          username: response.data.user.username,
          fields: response.data.user.fields,
          social_links: socialLink,
          location: response.data.user.location,
          url: response.data.user.url,
          image: response.data.user.images[138],
          website: response.data.user.website
        };

        this.setState({ user, socialLink });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    const socialLink = this.state.socialLink.map((link, i) => {
      return (
        <li key={i}>
          <a href={link.url} target="_blank">{link.name}</a>
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
            {/*<ul>
              {socialLink}
            </ul>*/}
            <img src={this.state.user.image} alt="user" />
            <h1>{this.state.user.username}</h1>
            <h5>{this.state.user.display_name}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default User;