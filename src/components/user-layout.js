import React from 'react';
import { Link } from 'react-router-dom';

export default class GuestLayout extends React.PureComponent {
  render() {
    // eslint-disable-next-line
    const { children } = this.props;
    return (
      <div>
        <header className="hero is-light">
          <div className="hero-head container">
            <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <span className="navbar-item">Hey, John</span>
                <Link className="navbar-item is--brand" to="/dashboard">
                  Dashboard
                </Link>
                <Link to="/logout" className="navbar-item is-pulled-right">
                  Logout
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <br />
      </div>
    );
  }
}
