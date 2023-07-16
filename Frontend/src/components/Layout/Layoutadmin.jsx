import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebaradmin";

const Layoutadmin = () => {
  return (
    <div className="flex flex-col">
      <main className="flex w-full">
        <Sidebar />
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layoutadmin;
