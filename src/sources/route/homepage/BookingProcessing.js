import React, { useState, useEffect } from "react";
import $ from "jquery";

import "./homepage.css";
import Travelinput from "../../../component/travelinput";
import Footer from "../../../component/footer";
import Nav_ from "../../../component/nav1";
import Menuhalf from "../../../component/menuhalf";
import AdminMenuhalf from "../../../component/adminsidenav";

const BookingProccessing = () => {
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
            <div className="px-2 mt-4">
              <h4>Admin DashBoard</h4>
              <h6 className="pl-4 mt-3">Welcome, Kingsley</h6>

              <div className="my-5">
                <h6 className="pl-3">Booking Directory</h6>

                <div className="table-control mt-3 ">
                  <table className="table table-sm ">
                    <thead>
                      <tr className="table-success">
                        <th>Name</th>
                        <th>Booking Id</th>
                        <th>Current State</th>
                        <th>Process</th>
                        <th>fail</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Amanda Zara</td>
                        <td>1a2334d</td>
                        <td>Completed</td>
                        <td>
                          <span className="btn-success btn-sm">process</span>
                        </td>
                        <td>
                          <span className="btn-danger btn-sm">cancel</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Olomo Jacob</td>
                        <td>f3443tw</td>
                        <td>failed</td>
                        <td>
                          <span className="btn-success btn-sm">process</span>
                        </td>
                        <td>
                          <span className="btn-danger btn-sm">cancel</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Favour Ikedi</td>
                        <td>s4453hk</td>
                        <td>Processing</td>
                        <td>
                          <span className="btn-success btn-sm">process</span>
                        </td>
                        <td>
                          <span className="btn-danger btn-sm">cancel</span>
                        </td>
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

export default BookingProccessing;
