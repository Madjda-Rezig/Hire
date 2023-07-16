import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebarrec";
import Header from "../../components/Header/Header";

const Layoutrec = () => {
  return (
    <div className="flex flex-col">
      <header>
        <Header />
      </header>
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layoutrec;
