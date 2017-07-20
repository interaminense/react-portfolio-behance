import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import { indigo } from 'material-ui/colors';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import './style/User.css';

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
          image: response.data.user.images[276],
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
        <Button color="contrast" href={link.url} target="_blank" key={i}>{link.name}</Button>
      );
    });

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography style={{ flex: 1 }} type="title" color="inherit">{this.state.user.username}</Typography>
            {socialLink}
          </Toolbar>
        </AppBar>

        <Paper style={{ backgroundColor: indigo[900], padding: '30px' }}>
          <Avatar src={this.state.user.image} style={{ width: '180px', height: '180px' }} />
          <Typography type="headline" style={{ color: indigo[50] }} component="h3">{this.state.user.display_name}</Typography>
        </Paper>
      </div>
    );
  }
}

export default User;