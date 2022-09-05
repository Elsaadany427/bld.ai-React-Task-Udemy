import React, { useState } from "react";
import UdemyLogo from "../../assets/icons/logo-udemy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="navbar flex-space-column">
      {/* Navbar in mobile */}
      <div className="navbar__mobile flex-center-vert">
        <div className="navbar__bar-icon navbar__bar-icon--icon-size-sm">
          <i className="fa fa-bars" onClick={() => setIsOpen(!open)}></i>
        </div>
        <a href="/" className="navbar__logo">
          <img src={UdemyLogo} alt="logo udemy in mobile" />
        </a>
        <ul className={`navbar__mobile-list ${open && "open"}`}>
          <li className="navbar__mobile-home">
            <a href="/">
              <span> Home </span>
            </a>
          </li>
          <hr />
        </ul>
      </div>
      {/* Navbar in web browser */}
      <nav className="navbar__web-content d-flex align-items-center">
        <a href="/" className="navbar__logo">
          <img src={UdemyLogo} alt="logo udemy in web" />
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
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
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
