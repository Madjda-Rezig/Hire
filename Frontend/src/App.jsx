// Pages :
import Navbar from "./Components/Layout/Layout.jsx";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";

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
