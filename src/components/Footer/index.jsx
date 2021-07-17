import React from 'react';
import footerJSON from '../../json/footer.json';

const json = footerJSON ? footerJSON[0] : {};

const Footer = () => {

  return (
    <footer className="page-footer fixed-bottom bg-transparent s d-flex justify-content-between flex-column flex-md-row mr-2 ml-2">
      <small className="text-secondary text-center">
      © Prateek | kumarp3@mail.uc.edu | (212)-945-8750
      </small>

      <div className="d-flex">

        <a className="nav-item nav-link p-0 ml-2" href={`mailto:${json.email}`}>
          <i className="fas fa-envelope-square fa-2x"></i>
        </a>
        <a className="nav-item nav-link p-0 ml-2" href={json.github}
          rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a className="nav-item nav-link p-0 ml-2" href={json.linkedIn}
          rel="noopener noreferrer" target="_blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>

    </footer>
  )
}

export default Footer;
