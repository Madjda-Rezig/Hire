import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"}>
          <a className="btn btn-ghost normal-case text-xl">JobLess</a>
        </Link>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <Link to={"Register"}>
          <a className="btn mr-4">S'inscrire</a>
        </Link>
        <Link to={"Login"}>
          <a className="btn mr-4">Connexion</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
