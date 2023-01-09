import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import config from "../config.json";
import Logo from "./logo";
import auth from "../services/authService";
import "react-toastify/dist/ReactToastify.css";
import bell from "../sources/assets/notificationbell.png";
import { Link } from "react-router-dom";
const Nav_ = () => {
  var [length, setLength] = useState("");
  useEffect(() => {
    async function getNotification() {
      try {
        const response = await auth.get(config.apiUrl + "/notification", {
          "Content-type": "application/json; charset=UTF-8",
        });

        if (response.status == 200) {
          setLength(response.data.length);

          return;
        }
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          return toast.error(error.response.data);
        }
        return toast.error(error.message);
      }
    }
    getNotification();
  }, []);
  return (
    <div className="l  greenerbackground d-flex justify-content-between align-items-center flex-direction-row py-2 mb-3 px-2">
      <Logo />
      <div className="notification mr-4">
        <Link to="notification">
          <span className="noticon-wrap">
            <img src={bell} alt="bell" />
            <span className="noticon">
              <p className="notp">{length}</p>
            </span>
          </span>
        </Link>

        <button className="ml-4 btn btn-outline-light kk robotoregular ">
          Menu
        </button>
      </div>
    </div>
  );
};

export default Nav_;
