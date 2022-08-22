import React from "react";
import UdemyLogo from '../../assets/icons/logo-udemy.svg';

export default function Navbar() {
  return (
    <div className="navbar flex-space-column">
      {/* Navbar in mobile */}
      <div className="navbar__mobile flex-center-vert">
        <div className="navbar__bar-icon navbar__bar-icon--icon-size-sm">
          <i className="fa fa-bars"></i>
        </div>
        <a href="#x" className="navbar__logo">
          <img
            src={UdemyLogo}
            alt="logo udemy in mobile"
          />
        </a>
      </div>
      {/* Navbar in web browser */}
      <nav className="navbar__web-content d-flex align-items-center">
        <a href="#s" className="navbar__logo">
          <img
             src={UdemyLogo}
            alt="logo udemy in web"
          />
        </a>
        <ul className="navbar__list">
          <li className="navbar__categories">
            <a href="#s">
              <span> Categories </span>
            </a>
          </li>
          <li className="navbar__search-form">
            <form className="d-flex align-items-center">
              <input type="text" placeholder="Search for anything" />
              <button className="btn btn-dark btn-height">Search</button>
              <i class="fa fa-search" aria-hidden="true"></i>
            </form>
          </li>
          <li className="navbar__udemy-business">
            <a href="#d">
              <span> Udemy Business </span>
            </a>
          </li>
          <li className="navbar__teach-udemy">
            <a href="#d">
              <span> Teach on Udemy </span>
            </a>
          </li>
          <li className="navbar__auth-buttons d-flex align-items-center">
            <a href="#d" className="navbar__btn--shopping">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
            <button className="btn btn-secondry btn-height">Login</button>
            <button className="btn btn-dark btn-height">Signup</button>
            <button className="btn btn-secondry btn-height navbar__btn--language">
              <i className="fa fa-globe"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
