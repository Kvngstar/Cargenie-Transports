import React, { useState, useEffect } from "react";
import $ from "jquery";

import "./homepage.css";
import Travelinput from "../../../component/travelinput";
import Footer from "../../../component/footer";
import Nav_ from "../../../component/nav1";
import Menuhalf from "../../../component/menuhalf";

const CarBooking = () => {
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
          <Menuhalf />
          <div>
            <div className="px-2 mt-4">
              <h4>Admin DashBoard</h4>
              <h6 className="pl-4 mt-3">Welcome, Kingsley</h6>

              <div className="my-5">
                <h6 className="pl-3">Booking Directory</h6>

                <div className="d-flexxx">
                  <form
                    action="
                    "
                    className="d-flexx"
                  >
                    <label htmlFor="">Sort By Date</label>
                    <select
                      className="select-group input mt-2 mx-2 p-2"
                      type="text"
                    >
                      <option value="">Date</option>
                      <option value="">Name</option>
                      <option value="">Subject</option>
                    </select>
                  </form>
                </div>

                <div className="table-control mt-3 ">
                  <table className="table table-sm ">
                    <thead>
                      <tr className="table-success">
                        <th>Name</th>
                        <th>Subject</th>
                        <th>State</th>
                        <th>Date</th>
                        <th>Time</th>
                        
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Amanda Zara</td>
                        <td>Bus</td>
                        <td><span className="btn btn-sm btn-success rounded">Completed</span></td>
                        <td>26/11/22</td>
                        <td>4:16pm</td>
                      </tr>
                      <tr>
                        <td>Olomo Jacob</td>
                        <td>Sienna</td>
                        <td><span className="btn btn-sm btn-danger rounded">failed</span></td>
                        <td>26/11/22</td>
                        <td>3:00am</td>
                       
                      </tr>
                      <tr>
                        <td>Favour Ikedi</td>
                        <td>Bus</td>
                        <td ><span className="btn btn-sm btn-warning rounded">Processing</span></td>
                        <td>26/11/22</td>
                        <td>10:00am</td>
                       
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CarBooking;
