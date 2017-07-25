import React, { Component } from 'react';
import moment from 'moment';
import jsonp from 'jsonp';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: this.props.url,
      projects: []
    }
  }

  componentDidMount() {

    jsonp(this.state.url, null, (err, data) => {
      if (err) {
        console.log(err);
      } else {

        console.log(data.projects);

        let projects = [], id, higherNumber = 0;

        data.projects.forEach(project => {

          //verify if this project has the higher view number
          if (project.stats.views > higherNumber) {
            higherNumber = project.stats.views;
            id = project.id;
          }

          let imageBlocked = new RegExp(/(blocked)/g);

          if (!imageBlocked.test(project.covers[202])) {
            let data = {
              name: project.name,
              published_on: () => moment(project.published_on * 1000).calendar(),
              thumbnail: project.covers[115],
              image: project.covers[404] || project.covers[202],
              stats: {
                appreciations: project.stats.appreciations,
                views: project.stats.views,
              },
              created_on: project.created_on,
              url: project.url,
              featured: () => project.id === id ? true : false,
              fields: project.fields
            }

            projects.push(data);
          }
        });

        this.setState({ projects });
      }
    });

  }

  render() {

    const projects = this.state.projects.map((project, i) => {

      const showFeatured = () => this.props.showFeatured ? (project.featured() ? 'Card__featured' : '') : '';

      const fields = project.fields.map((field, i) => {
        return (
          <span className="Portfolio__badge" key={i}>{field}</span>
        );
      });

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
            <small>published on {project.published_on()}</small>
            <h2>{project.name}</h2>
            <p>
              {fields}
            </p>
            <div className="Card__footer-footer">
              <a className="Portfolio__btn Portfolio__btn--primary" href={project.url} target="_blank">more details</a>
            </div>
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