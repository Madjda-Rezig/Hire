// Pages //
import Navbar from "./components/Layout/Layout.jsx";
import Layoutrec from "./components/Layout/Layoutrec.jsx";
import Layoutadmin from "./components/Layout/Layoutadmin.jsx";
import Login from "./Pages/Login.jsx";
import Loginrecruteur from "./Pages/Loginrecruteur.jsx";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import Offresp from "./Pages/Offresp.jsx";
import Entreprisesp from "./Pages/Entreprisesp.jsx";
import Blog from "./Pages/Blog.jsx";
import Recruteur from "./Pages/Recruteur.jsx";
import Article from "./Pages/Article";
import Jobdescription from "./Pages/Jobdescription.jsx";
import Profile from "./Pages/Profile.jsx";
import Dashbordrec from "./Pages/Dashbordrec.jsx";
import Myapplications from "./Pages/Myapplications.jsx";
import Candidaturedescription from "./Pages/Candidaturedescription.jsx";
import Admin from "./Pages/Admin.jsx";
import Dashbordadmin from "./Pages/Dashbordadmin.jsx";
import Statistiquerec from "./Pages/Statistiquerec.jsx";
import Stastiqueadmin from "./Pages/Statistiqueadmin.jsx";
import Profilerec from "./Pages/Profilerec.jsx";
import Profileadmin from "./Pages/Profileadmin.jsx";
import Addfaqcandidat from "./Pages/Addfaqcandidat.jsx";
import Addfaqrec from "./Pages/Addfaqrec.jsx";
import Showfaqcandidat from "./Pages/Showfaqcandidat.jsx";
import Showfaqrec from "./Pages/Showfaqrec.jsx";
import Showsubscribers from "./Pages/Showsubscribers.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Routes //

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="Register" element={<Register />} />
      <Route path="Recruteur" element={<Recruteur />} />
      <Route path="Entreprisesp" element={<Entreprisesp />} />
      <Route path="Offresp" element={<Offresp />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="Article/:id" element={<Article />} />
      <Route path="Login" element={<Login />} />
      <Route path="Jobdescription/:id" element={<Jobdescription />} />
      <Route
        path="Candidaturedescription/:id"
        element={<Candidaturedescription />}
      />
      <Route path="Profile" element={<Profile />} />
      <Route path="Myapplications" element={<Myapplications />} />
      <Route path="Loginrecruteur" element={<Loginrecruteur />} />
      <Route path="Admin" element={<Admin />} />
      {/* DASHBOARD RECRUTEUR */}
      <Route path="Dashbordrec" element={<Layoutrec />}>
        <Route index element={<Statistiquerec />} />
        <Route path="Profilerec" element={<Profilerec />} />
      </Route>
      {/* DASHBOARD ADMIN */}
      <Route path="Dashbordadmin" element={<Layoutadmin />}>
        <Route index element={<Stastiqueadmin />} />
        <Route path="Profileadmin" element={<Profileadmin />} />
        <Route path="Addfaqrec" element={<Addfaqrec />} />
        <Route path="Addfaqcandidat" element={<Addfaqcandidat />} />
        <Route path="Showfaqcandidat" element={<Showfaqcandidat />} />
        <Route path="Showfaqrec" element={<Showfaqrec />} />
        <Route path="Showsubscribers" element={<Showsubscribers />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <RouterProvider router={router}/> */}
      <ToastContainer />
    </div>
  );
}

export default App;
