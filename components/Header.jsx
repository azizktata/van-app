import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import imageUrl from "/assets/images/avatar-icon.png";
import { IoIosLogOut } from "react-icons/io";

export default function Header({ isloggedin }) {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const navigate = useNavigate();
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
    navigate("/login", { replace: true });
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Shop
        </NavLink>

        <Link to="login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
