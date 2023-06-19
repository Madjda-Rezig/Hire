import React from "react";

import { NavLink, Outlet, useLocation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Navbaruser from "../Navbar/Navbaruser";
import Footer from "../../components/Footer/Footer";
const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/Offresp" && <Navbar />}
      {location.pathname === "/Entreprisesp" && <Navbar />}
      {location.pathname === "/Blog" && <Navbar />}
      {location.pathname === "/Article" && <Navbar />}
      {location.pathname === "/" && <Navbar />}
      <main>
        <Outlet />
      </main>
      {location.pathname !== "/Login" &&
        location.pathname !== "/Recruteur" &&
        location.pathname !== "/Register" &&
        location.pathname !== "/Accountrec" &&
        location.pathname !== "/Recruteur/Loginrecruteur" && <Footer />}
    </div>
  );
};

export default Layout;
