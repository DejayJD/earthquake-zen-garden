import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";

export const Navbar = ({
  firstName,
  logoUrl,
  title
}: {
  firstName: string;
  logoUrl: string;
  title: string;
}) => (
  <div className="navbar-container">
    <div>
      <Link to={ROUTES.home}>
        <img
          className="navbar-brand"
          src={logoUrl}
          alt="Earthquake Zen Garden Logo"
        />
      </Link>
    </div>
    <h1 className="navbar-center"> {title} </h1>
    <div>
      <Link to={ROUTES.profile}> Welcome {firstName} </Link>
    </div>
  </div>
);
