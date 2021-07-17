import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
// const subDir = process.env.PUBLIC_URL;

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light" role="navigation">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav ml-auto" role="navigation">
          <Link className="nav-item nav-link" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/portfolio/">Projects</Link>
          <Link className="nav-item nav-link" to="/resume/">Resume</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
