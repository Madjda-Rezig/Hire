import React from "react";

import { NavLink, Outlet, useLocation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

import Footer from "../../components/Footer/Footer";
const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/Offresp" && <Navbar />}
      {location.pathname === "/Entreprisesp" && <Navbar />}
      {location.pathname === "/Blog" && <Navbar />}
      {location.pathname.startsWith("/Article") && <Navbar />}
      {location.pathname === "/" && <Navbar />}
      {location.pathname === "/Profile" && <Navbar />}
      {location.pathname === "/Jobdescription" && <Navbar />}
      {location.pathname === "/Myapplications" && <Navbar />}
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
