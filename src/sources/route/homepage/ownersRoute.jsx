import React, { useState, useEffect } from "react";
import $ from "jquery";

import "./homepage.css";

const CarOwnerRoute = () => {


  return (

   
            <div className="px-2 mt-4">
              <h4>Admin DashBoard</h4>
              <h6 className="pl-4 mt-3">Welcome, Kingsley</h6>

              <div className="my-5">
                <h6 className="pl-3">Date:</h6>

                <div className="table-control mt-3 ">
                  <table className="table table-sm ">
                    <thead>
                      <tr className="table-success">
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>Registered Date</th>
                        <th>Cars Info</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Amanda Zara</td>
                        <td>Kingsley019@yahoo.com</td>
                        <td>33/4/22</td>

                        <td>09030299983</td>
                       
                      </tr>
                      <tr>
                        <td>Olomo Jacob</td>
                        <td>Kingsley019@yahoo.com</td>
                        <td>Kingsley019@yahoo.com</td>
                        <td>09030299983</td>
                        
                      </tr>
                      <tr>
                        <td>Favour Ikedi</td>
                        <td>Kingsley019@yahoo.com</td>
                        <td>Kingsley019@yahoo.com</td>
                        <td>0813635433</td>
                       
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
  );
};

export default CarOwnerRoute;
