import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
