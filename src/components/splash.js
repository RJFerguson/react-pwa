import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Welcome to ReactPWA
        </h1>
        <h2 className="subtitle">
          A Cool Place to search for HN links
        </h2>
        <Link to="/home" className="button">Check it out!</Link>
      </div>
    </div>
  </section>
);
