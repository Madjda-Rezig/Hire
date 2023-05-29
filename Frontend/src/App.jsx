// Pages :
import Navbar from "./Components/Layout/Layout.jsx";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import Offres from "./Pages/Offres.jsx";
import Entreprises from "./Pages/Entreprises.jsx";
import Blog from "./Pages/Blog.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="Register" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route path="Entreprises" element={<Entreprises />} />
      <Route path="Offres" element={<Offres />} />
      <Route path="Blog" element={<Blog />} />
    </Route>
  )
);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
      {/* <RouterProvider router={router}/> */}
      <ToastContainer />
    </div>
  );
}

export default App;
