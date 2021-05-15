import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { logout } = props;
  return (
    <div className="navbar">
      <button className="navBtn">
        <Link to="/profile">Profile</Link>
      </button>
      <button className="navBtn">
        <Link to="/public">Public</Link>
      </button>
      <button onClick={logout} className="navBtn">
        Logout
      </button>
    </div>
  );
}
