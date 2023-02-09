import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import config from "../config.json";
import Logo from "./logo";
import auth from "../services/authService";
import "react-toastify/dist/ReactToastify.css";
import bell from "../sources/assets/notificationbell.png";
import { Link } from "react-router-dom";
// import useContext from "./useContext";
const Nav_ = () => {
  var [length, setLength] = useState("");
  async function personalisedNotification() {
    try {
      const response = await auth.get(
        config.apiUrl + "/notification/feedback",
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
       console.log("the response",response.data)
        
        if(response.data.newNotification.length < 1 || response.data.newNotification == []){
        setLength("")

          return toast.success("No notification")

        }
       let unread = 0

       response.data.newNotification.forEach((v)=>{
      
        if(v.read.toString() == "false"){
         unread++
          console.log("unread", unread)
  }
       })
       setLength(unread)

       

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
  useEffect(() => {
    
    personalisedNotification();
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
