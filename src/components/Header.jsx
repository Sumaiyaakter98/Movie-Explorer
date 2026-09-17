import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            🎬 MovieExplorer
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-4">
            <Link to="/" className="btn btn-ghost btn-sm">
              Home
            </Link>
            <Link to="/movies" className="btn btn-primary btn-sm">
              Movies
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
