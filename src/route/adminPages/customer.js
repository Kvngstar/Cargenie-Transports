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
      <div >
        <Nav_ />
        <div className="d-flex w-100 secondp">
          <Menuhalf />
          <div>
            <Outlet />
          </div>
        </div>

        <div className="py-2 text-center greenerbackground text-light ralewaymeduim mt-4">Designed by<span  className="py-1 px-3 ml-2 bg-warning rounded"><span  className=" px-2 bg-danger rounded"> Okoronkwo kingsley</span></span> 
      </div>
      </div>
    </>
  );
}; 

export default Customers;
