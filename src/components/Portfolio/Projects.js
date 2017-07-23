import React, { Component } from 'react';
import moment from 'moment';
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
        let id, higherNumber = 0;

        response.data.projects.forEach(project => {

          //verify if this project has the higher view number
          if (project.stats.views > higherNumber) {
            higherNumber = project.stats.views;
            id = project.id;
          }

          let imageBlocked = new RegExp(/(blocked)/g);

          if (!imageBlocked.test(project.covers[202])) {
            let data = {
              name: project.name,
              published_on: () => moment(project.published_on * 1000).subtract(10, 'days').calendar(),
              thumbnail: project.covers[115],
              image: project.covers[404] || project.covers[202],
              stats: {
                appreciations: project.stats.appreciations,
                views: project.stats.views,
              },
              created_on: project.created_on,
              url: project.url,
              featured: () => project.id === id ? true : false
            }

            projects.push(data);
          }
        });

        this.setState({ projects });
      })
      .catch(error => {
        console.log(error);
      });

  }

  render() {

    const projects = this.state.projects.map((project, i) => {

      const showFeatured = () => this.props.showFeatured ? (project.featured() ? 'Card__featured' : '') : '';

      console.log(this.props.showFeatured);

      return (
        <article className={`Card Grid__cell xs-12 sm-6 md-3 lg-2 ${showFeatured()}`} key={i}>
          <img className="Card__thumbnail" src={project.thumbnail} alt="preview project" />
          <img className="Card__media" src={project.image} alt="project" />
          <div className="Card__details">
            <div>
              <i className="material-icons md-12">thumb_up</i> {project.stats.appreciations}
            </div>
            <div>
              <i className="material-icons md-12">visibility</i> {project.stats.views}
            </div>
          </div>
          <div className="Card__footer">
            <small>{project.published_on()}</small>
            <h2>{project.name}</h2>
          </div>
        </article>
      );
    });

    return (
      <div className="Projects Grid">
        {projects}
      </div>
    );
  }
}

export default User;