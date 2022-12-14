import React, { useState } from "react";
import { useRef } from "react";
import UdemyLogo from "../../assets/icons/logo-udemy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useSearchParams } from "react-router-dom";

export default function Navbar() {
  const [open, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const inputRef = useRef(null);

  // search for word
  const handlesearch = (event) => {
    event.preventDefault();
    setSearchParams({ search: inputRef.current.value });
  };

  const handleEmptySearch = () => {
    if (!inputRef.current.value) setSearchParams({ search: "" });
  };

  return (
    <div className="navbar flex-space-column">
      {/* Navbar in mobile */}
      <div className="navbar__mobile flex-center-vert">
        <div className="navbar__bar-icon navbar__bar-icon--icon-size-sm">
          <i className="fa fa-bars" onClick={() => setIsOpen(!open)}></i>
        </div>
        <Link to={"/"} className="navbar__logo">
          <img src={UdemyLogo} alt="logo udemy in mobile" />
        </Link>
        <ul className={`navbar__mobile-list ${open && "open"}`}>
          <li className="navbar__mobile-home">
            <Link to={"/"}>
              <span> Home </span>
            </Link>
          </li>
          <hr />
        </ul>
      </div>
      {/* Navbar in web browser */}
      <nav className="navbar__web-content d-flex align-items-center">
        <Link to={"/"} className="navbar__logo">
          <img src={UdemyLogo} alt="logo udemy in web" />
        </Link>
        <ul className="navbar__list">
          <li className="navbar__categories">
            <a>
              <span> Categories </span>
            </a>
          </li>
          <li className="navbar__search-form">
            <form className="d-flex align-items-center">
              <input
                type="text"
                ref={inputRef}
                placeholder="Search for anything"
                onChange={handleEmptySearch}
              />
              <button
                className="btn btn-dark btn-height"
                onClick={handlesearch}
              >
                Search
              </button>
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </form>
          </li>
          <li className="navbar__udemy-business">
            <a>
              <span> Udemy Business </span>
            </a>
          </li>
          <li className="navbar__teach-udemy">
            <a>
              <span> Teach on Udemy </span>
            </a>
          </li>
          <li className="navbar__auth-buttons d-flex align-items-center">
            <a className="navbar__btn--shopping">
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
