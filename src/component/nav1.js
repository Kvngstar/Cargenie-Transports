import React, { useState, useEffect,useContext } from "react";
import { toast } from "react-toastify";
import config from "../config.json";
import Logo from "./logo";
import jwt from "../services/userService";
import "react-toastify/dist/ReactToastify.css";
import bell from "../sources/assets/notificationbell.png";
import { Link } from "react-router-dom";
 import UseContext from "./useContext";
const Nav_ = () => {
  
  var size = useContext(UseContext) 
   
  useEffect(() => {
  }, []);
  return (
    <div className="l  greenerbackground d-flex justify-content-between align-items-center flex-direction-row py-2 mb-3 px-2">
      <Logo />
      <div className="notification mr-4">
        <Link to="notification">
        { (jwt.getDetails().as != "admin") && <span className="noticon-wrap">
            <img src={bell} alt="bell" />
          {   ((size.count == 0)? "": <span className="noticon">
              <p className="notp">{size.count}</p> 
            </span>)}
          </span>}
        </Link>

        <button className="ml-4 btn btn-outline-light kk robotoregular ">
          Menu
        </button>
      </div>
    </div>
  );
};

export default Nav_;
