import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link to={"/"}>
          <a className="btn btn-ghost normal-case text-2xl text-cyan-400">
            My First JOB
          </a>
        </Link>

        <Link to={"Offres"}>
          <a className="btn btn-ghost normal-case text-lg text-cyan-400 ml-28">
            Offres
          </a>
        </Link>
        <Link to={"Entreprises"}>
          <a className="btn btn-ghost normal-case text-lg text-cyan-400">
            Entreprises
          </a>
        </Link>
        <Link to={"Blog"}>
          <a className="btn btn-ghost normal-case text-lg text-cyan-400">
            Blog
          </a>
        </Link>
      </div>

      <div className="navbar-end">
        <Link to={"Register"}>
          <a className="btn mr-4 bg-cyan-400 border-hidden">S'inscrire</a>
        </Link>
        <Link to={"Login"}>
          <a className="btn mr-4 bg-cyan-400 border-hidden">Connexion</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
