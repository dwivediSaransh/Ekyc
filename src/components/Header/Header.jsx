import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./Header.css";
const Header = () => {
  const routerHistory = useHistory();
  const userEnd = () => {
    localStorage.clear();
    sessionStorage.clear();
    // window.location.href = "/";
    routerHistory.push("/");
    console.log("hello logout");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg color-gradiant navbar-light">
        <br />
        <br />
        <Link to="/" className="navbar-brand ml-5 text-white" href="#">
          Nuniyo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active">
              <Link
                to="/VerifyContact"
                className="nav-link text-white"
                href="#"
              >
                Signup <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link text-white dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
            <li className="nav-item">
              <a className="nav-link text-white " href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="#">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " onClick={userEnd} href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br />
      </nav>
    </div>
  );
};

export default Header;
