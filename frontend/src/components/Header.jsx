import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <Link to={"/home"} className="navbar-brand">
          Programming Fields
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav m-auto">
            <li className="nav-item dropdown">
              <Link
                to={"/home"}
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link to={"/home/child"} className="dropdown-item">
                    Child 1
                  </Link>
                </li>
                <li>
                  <Link to={"/home/child2"} className="dropdown-item">
                    Child 2
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                to={"/about"}
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link to={"/about"} className="dropdown-item">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={"/about/company"} className="dropdown-item">
                    Company
                  </Link>
                </li>
                <li>
                  <Link to={"/about/vision"} className="dropdown-item">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link to={"/about/mission"} className="dropdown-item">
                    Mission
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
