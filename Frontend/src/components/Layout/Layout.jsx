import React from "react";

import { NavLink, Outlet, useLocation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Navbaruser from "../Navbaruser/Navbaruser";

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/Login" && <Navbar />}
      {location.pathname === "/Register" && <Navbar />}
      {location.pathname === "/" && <Navbar />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
