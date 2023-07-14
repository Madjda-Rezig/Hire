import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Navbarrecruteur from "../Navbar/Navbarrecruteur";
import Footerrec from "../../components/Footer/Footerhire";
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
      {location.pathname.startsWith("/Jobdescription") && <Navbar />}
      {location.pathname.startsWith("/Candidaturedescription") && <Navbar />}
      {location.pathname === "/Myapplications" && <Navbar />}
      {location.pathname === "/Recruteur" && <Navbarrecruteur />}
      <main>
        <Outlet />
      </main>
      {location.pathname !== "/Login" &&
        location.pathname !== "/Recruteur" &&
        location.pathname !== "/Register" &&
        location.pathname !== "/Dashbordrec" &&
        location.pathname !== "/Loginrecruteur" && <Footer />}

      {location.pathname === "/Recruteur" && <Footerrec />}
    </div>
  );
};

export default Layout;
