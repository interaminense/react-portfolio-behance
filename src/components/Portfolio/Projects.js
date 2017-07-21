import React, { Component } from 'react';
import axios from 'axios';

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
        <article className="Card" key={i}>
          <img className="Card__media" src={project.image} alt="projects" />
          {/*<h3 class="Card__title">{project.name}</h3>*/}
          {/*<a class="Card__btn" href={project.url} target="_blank" >details</a>*/}
        </article>
      );
    });

    return (
      <div className="Grid">
        {projects}
      </div>
    );
  }
}

export default User;