// Pages :
import Navbar from "./components/Layout/Layout.jsx";
import Login from "./Pages/Login.jsx";
import Loginrecruteur from "./Pages/Loginrecruteur.jsx";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import Offresp from "./Pages/Offresp.jsx";
import Entreprisesp from "./Pages/Entreprisesp.jsx";
import Blog from "./Pages/Blog.jsx";
import Recruteur from "./Pages/Recruteur.jsx";
import Article from "./Pages/Article.jsx";
import Account from "./Pages/Account.jsx";
import Accountrec from "./Pages/Accountrec.jsx";
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
      <Route path="Entreprisesp" element={<Entreprisesp />} />
      <Route path="Offresp" element={<Offresp />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="Article/:id" element={<Article />} />
      <Route path="Login" element={<Login />} />
      <Route path="Account" element={<Account />} />
      <Route path="Accountrec" element={<Accountrec />} />
      <Route path="Recruteur/Loginrecruteur" element={<Loginrecruteur />} />
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
