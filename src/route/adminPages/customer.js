import React, { useEffect } from "react";
import $ from "jquery";
import { Outlet } from "react-router-dom";
import Footer from "../../component/footer";
import Nav_ from "../../component/nav1";
import Menuhalf from "../../component/menuhalf";

const Customers = () => {
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
        <div className="d-flex w-100 secondp h-auto">
          <Menuhalf />
          <div>
            <Outlet />
          </div>
        </div>

        <div className="py-3 text-center greenerbackground text-light ralewaymeduim">Designed by Okoronkwo kingsley
      </div>
      </div>
    </>
  );
}; 

export default Customers;
