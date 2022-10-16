import React, { useState, useEffect } from "react";

import auth from "../../../services/authService";
import jwt from "../../../services/userService";
import "./homepage.css";
const BookingProccessing = () => {
  const [error, setError] = useState("");
  const [array, setArray] = useState([]);
  useEffect(() => {
    async function getNotification() {
      try {
        const response = await auth.get(
          "http://localhost:3001/admin/processingunit",
          {
            "Content-type": "application/json; charset=UTF-8",
          }
        );

        if (response.status >= 200 && response.status < 400) {
          setArray(response.data);
          console.log(response.data);

          return;
        } else {
          console.log(response);
        }
      } catch (err) {
        console.log(err);
        setError(err.response.data);
      }
    }

    getNotification();

   
  }, []);
  function processState(event){
    console.log(event.target.parentElement.parentElement.children)
    

   }

  return (
    <div className="px-2 mt-4">
      <h4>Admin DashBoard</h4>
      <h6 className="pl-4 mt-3">Welcome, Kingsley</h6>

      <div className="my-5">
        <h6 className="pl-3">Process Orders</h6>

        <div className="table-control mt-3 ">
          <table className="table table-sm ">
            <thead>
              <tr className="table-success">
                {/* bookDate
: 
"10/6/2022, 12:03:04 AM"
bookingId
: 
"fw5oe"
carType
: 
"bus"
pickupDate
: 
"20/22/22"
pickupLocation
: 
"onitsha"
price    
:      

"4000"
status
: 
"completed" */}
                <th>Time</th>
                <th>Booking Id</th>
                <th>car Type</th>
                <th>pickup Date</th>
                <th>Pickup Location</th>
                <th>status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {array.map((v) => {
                return v.Travel.map((w) => {
                  return (
                    <tr>
                      <td>{w.bookDate}</td> <td>{w.bookingId}</td>{" "}
                      <td>{w.carType}</td> <td>{w.pickupDate}</td>
                      <td>{w.pickupLocation}</td>
                      <td>
                        <span className="btn btn-sm rounded">{w.status}</span>
                      </td>{" "}
                      <td>
                        <span onClick={processState} className="btn-success btn-sm">process</span>
                      </td>
                      <td>
                        <span onClick={processState} className="btn-danger btn-sm">cancel</span>
                      </td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingProccessing;
