import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import axios from 'axios';
import './style/Projects.css';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      URL_PROJECTS: () => `https://api.behance.net/v2/users/${this.props.user}/projects?client_id=${this.props.apiKey}`,
      projects: []
    }
  }

  componentDidMount() {
    axios.get(this.state.URL_PROJECTS())
      .then(response => {

        console.log('response', response.data.projects);

        let projects = [];

        response.data.projects.forEach(project => {
          let data = {
            name: project.name,
            image: project.covers[404] || project.covers[202],
            stats: project.stats,
            created_on: project.created_on,
            url: project.url
          }

          projects.push(data);
        });

        this.setState({ projects });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    const projects = this.state.projects.map((project, i) => {
      return (
        <Grid item xs={12} sm={6} md={3} lg={2} key={i}>
          <Card>
            <CardMedia><img src={project.image} alt="" /></CardMedia>
            <CardContent>
              <Typography type="headline" component="h3">{project.name}</Typography>
            </CardContent>
            <CardActions>
              <Button dense href={project.url} target="_blank" color="primary">details</Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });

    return (
      <Grid container className="Project">
        {projects}
      </Grid>
    );
  }
}

export default User;