import React, {Component} from 'react';

class Header extends Component {

  render() {
    
    return (
      <header>
        <nav className={`Nav ${this.props.showHeader ? 'Nav--is-visible' : ''}`}>
          <div className="Nav__title">
            <img className="Nav__thumbnail" src={this.props.userImage} alt="user" />
            <span className="Nav__name">{this.props.userName}</span>
          </div>
          <ul className="Nav__menu">
            {this.props.socialLinks}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
