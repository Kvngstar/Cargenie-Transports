import React, { useEffect } from "react";
import $ from "jquery";
import Footer from "../../component/footer";
import Nav_ from "../../component/nav1";

import AdminMenuhalf from "../../component/adminsidenav";
import { Outlet } from "react-router-dom";
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
            <Outlet />
          </div>
        </div>

      </div>
      <div className="py-3 text-center greenerbackground text-light ralewaymeduim">Designed by Okoronkwo kingsley
      </div>
    </>
  );
};

export default Admin;
