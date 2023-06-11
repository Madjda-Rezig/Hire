// Pages :
import Navbar from "./components/Layout/Layout.jsx";
import Login from "./Pages/Login.jsx";
import Loginrecruteur from "./Pages/Loginrecruteur.jsx";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import Offres from "./Pages/Offres.jsx";
import Entreprises from "./Pages/Entreprises.jsx";
import Blog from "./Pages/Blog.jsx";
import Recruteur from "./Pages/Recruteur.jsx";
import Article from "./Pages/Article.jsx";

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
      <Route path="Recruteur" element={<Recruteur />} />
      <Route path="Entreprises" element={<Entreprises />} />
      <Route path="Offres" element={<Offres />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="Article" element={<Article />} />
      <Route path="Login" element={<Login />} />
      <Route path="Loginrecruteur" element={<Loginrecruteur />} />
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
