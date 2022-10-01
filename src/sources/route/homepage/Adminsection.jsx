import React, { useState, useEffect } from "react";
import $ from "jquery";

import "./homepage.css";
import Travelinput from "../../../component/travelinput";
import Footer from "../../../component/footer";
import Nav_ from "../../../component/nav1";


import AdminMenuhalf from "../../../component/adminsidenav";
import { Route, Routes, Outlet } from "react-router-dom";
const Admin = () => {
  useEffect(() => {
    $("button.kk").on("click", function () {
      $("div.j").fadeToggle(500);
    });

    return () => {};
  }, []);

  return (
    <>
      <div>
        <Nav_ />
        <div className="d-flex w-100 secondp">
          <AdminMenuhalf />
          <div>

            <Outlet/>
            
                

                
              

               

                
        
           
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Admin;
