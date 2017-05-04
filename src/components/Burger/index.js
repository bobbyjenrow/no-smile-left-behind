import React from 'react'

import { slide as Menu } from 'react-burger-menu'
import {Link} from 'phenomic'

class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <Link id="home" className="menu-item" to="/">Home</Link>
        <Link id="about" className="menu-item" to="/about">About</Link>
        <Link id="contact" className="menu-item" to="/patients">Patients</Link>
        <Link id="contact" className="menu-item" to="/research">Research</Link>
        <Link id="contact" className="menu-item" to="/contact">Contact</Link>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default Burger;
