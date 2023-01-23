import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import config from "../../config.json";
import Travelinput from "../../component/travelinput";
import jwt from "../../services/userService";
import auth from "../../services/authService";

const CustomerBook = () => { 
  const [newArray, setArray] = useState([]);
  const [count, setCount] = useState([]);
  const [length, setLength] = useState([]);
  const [slicedArray, setSlicedArray] = useState([]);
  const [activePage, setActivePage] = useState(1);

  function Paginate(event) {
    event.preventDefault();

    const pageNum = event.target.innerHTML;

    length.forEach((v) => {
      if (v == pageNum) {
        setActivePage(v);
      }
    });
    let startNum = (pageNum - 1) * 6;

    setSlicedArray(newArray.slice(startNum, newArray.length).splice(0, 6));
  }

  async function GetUserDetail() {
    try {
      const response = await auth.get(config.apiUrl + "/customer/alltravels", {
        "Content-type": "application/json; charset=UTF-8",
      });

      if (response.status == 200) {
        setArray(response.data.Travel);

        setCount(response.data.Travel.length);
        setSlicedArray(() => {
          return response.data.Travel.slice(
            0,
            response.data.Travel.length
          ).splice(0, 6);
        });
        setLength(() => {
          return [
            ...Array(Math.ceil(response.data.Travel.length / 6) + 1).keys(),
          ].slice(1);
        });
        return;
      }
    } catch (err) {
      if (err.response.status >= 400 && err.response.status < 500) {
        return toast.error(err.response.data);
      }

      return toast.error(err.message);
    }
  }

  useEffect(() => {
    GetUserDetail();
  }, []);

  return (
    <div className="px-2 mt-4">
      <h5 className="poppinsmeduim">Customer</h5>
      <p className="pl-4 mt-3 ralewaysemibold btn btn-success">
        Welcome, {jwt.getDetails().firstName}
      </p>
      <div className="h mx-auto mt-5">
        <h6 className="text-center mb-3 poppinsmeduim">
          Book your Ticket Here
        </h6>
        <Travelinput
          checkShadow="lightback"
          textcolor="text-dark"
          reload={GetUserDetail}
        />
      </div>

      <div className="my-5 ralewaymeduim">
        <div className="d-flex justify-content-between align-items-center">
          <header className="m-2 poppinsmeduim">
            Car Bookings ( {count} )
          </header>{" "}
          <div className="btn-sm btn-info m-2 d-flex align-items-center" onClick={GetUserDetail}>
            <span class="material-symbols-outlined mr-1">refresh</span>
            <span>Refresh</span>
          </div>
        </div>

        <div className="table-control-1 ">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th>Booking Date</th>
                <th>BookingId</th>
                <th>cartype</th>
                <th>Pickup Date</th>
                <th>to</th>
                <th>status</th>
              </tr>
            </thead>

            <tbody>
              {slicedArray.map((v) => {
                return (
                  <tr>
                    <td> {v.bookDate}</td>
                    <td>{v.bookingId}</td>
                    <td> {v.carType}</td>
                    <td>{v.pickupDate}</td>
                    <td>{v.to}</td>
                    <td className="text-light">
                      {v.status == "processing" ? (
                        <span className="bg-warning btn-sm text-light">{v.status}</span>
                      ) : v.status == "completed" ? (
                        <span className="bg-success btn-sm text-light">{v.status}</span>
                      ) : (
                        <span className="bg-danger btn-sm text-light">{v.status}</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <nav aria-label="d-flex ">
          <ul class="pagination pagination-sm mt-3 d-flex flex-wrap  justify-content-center ">
            {length.map((v) => {
              return (
                <li className="page-item shadow-sm" onClick={Paginate}>
                  <a href="" class="page-link ">
                    {v}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="text-center bg-light my-2">{activePage}</div>
      </div>
    </div>
  );
};

export default CustomerBook;
