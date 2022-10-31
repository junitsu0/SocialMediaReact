import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Welcome
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/all-posts">
              Posts
            </Link>
            {props.loggedIn ? (
              <>
                <Link className="nav-link" to="/create-post">
                  Create Post
                </Link>
                <Link className="nav-link" to="/update-post">
                  Update Post
                </Link>
                <Link className="nav-link" to="/delete-post">
                  Delete Post
                </Link>
              </>
            ) : (
              ""
            )}

            <Link className="nav-link" to="/" onClick={props.logout}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
