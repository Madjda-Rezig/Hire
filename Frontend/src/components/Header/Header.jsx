import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = localStorage.getItem("User");
        const { accessToken, _id } = JSON.parse(user);
        const response = await axios.get(`http://localhost:5000/users/${_id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setNom(response.data.nom);
        setPrenom(response.data.prenom);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 h-fit">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <span className=" sm:text-3xl text-2xl font-bold bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 bg-clip-text text-transparent ">
              Welcome Back, {prenom} !
            </span>

            <p className="mt-3 text-sm text-gray-500">
              At WorkUp we strive to make your experience as seamless as
              possible, allowing you to focus on finding the best talent for
              your company. 🎉
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <a
              className="inline-block rounded bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              href="/"
            >
              <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                <span className="bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300 bg-clip-text text-transparent hover:text-white">
                  WorkUp
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
