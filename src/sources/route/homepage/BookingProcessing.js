import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import auth from "../../../services/authService";
import jwt from "../../../services/userService";
import "./homepage.css";
const BookingProccessing = () => {
  const [info, setInfo] = useState("");
  const [array, setArray] = useState([]);
  const [length, setLength] = useState("");
  const [i,setI]= useState([1,2,3,4,5])
  const [slicedArray,setSlicedArray]= useState([])
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
         

        
        } else {
          console.log(response);
        }
      } catch (err) {
        console.log(err);
        setInfo(err.response.data);
      }
      setLength(document.getElementById("tb").children.length)
    }
     

    getNotification();
  }, []);
  async function processState(event) {
    const _id = event.target.parentElement.parentElement.children[0].innerHTML;
    const bookingId =
      event.target.parentElement.parentElement.children[2].innerHTML;
  const data = { _id: _id, bookingId: bookingId };

    try {
      const response = await auth.post(
        "http://localhost:3001/admin/process",
        data,
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
        setInfo(response.data);

        return;
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
      setInfo(err.response.data);
    }

  
  }
  function Paginate(event){
    const pageNum = event.target.innerHTML || 0;
        

    var startNum = (pageNum - 1) * 1

   var sliced = array.slice(startNum,length);
   var spliced = sliced.splice(0, 1)
   setSlicedArray(spliced)
   console.log(slicedArray)
      }

  async function failState(event) {
    const _id = event.target.parentElement.parentElement.children[0].innerHTML;
    const bookingId =
      event.target.parentElement.parentElement.children[2].innerHTML;
    const data ={ _id: _id, bookingId: bookingId };

    try {
      const response = await auth.post(
        "http://localhost:3001/admin/fail",
        data,
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
        setInfo(response.data);

        return;
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
      setInfo(err.response.data);
    }
  }


  return (
    <div className="px-2 mt-4">
      <h4>Admin DashBoard</h4>
      <h6 className="pl-4 mt-3">Welcome, Kingsley</h6>

      <div className="my-5">
        <h6 className="pl-3">Process Orders ({length})</h6>

        <div className="table-control mt-3 ">
          {info && <div>{info}</div>}
          <table className="table table-sm ">
            <thead>
              <tr className="table-success">
                <th>ID</th>
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
            <tbody id="tb">
              {array.map((v) => {
                return v.Travel.map((w) => {
                  return ( 
                    <tr>
                      <td>{v._id}</td>
                      <td>{w.bookDate}</td> <td>{w.bookingId}</td>{" "}
                      <td>{w.carType}</td> <td>{w.pickupDate}</td>
                      <td>{w.pickupLocation}</td>
                      <td>
                        <span className="btn btn-sm rounded">{w.status}</span>
                      </td>{" "}
                      <td>
                        <span
                          onClick={processState}
                          className="btn-success btn-sm"
                        >
                          process
                        </span>
                      </td>
                      <td>
                        <span onClick={failState} className="btn-danger btn-sm">
                          cancel
                        </span>
                      </td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>
        <nav aria-label="...">
  <ul class="pagination pagination-sm">{
    i.map((v)=>{
    return  <li class="page-item" onClick={Paginate}><NavLink >{v}</NavLink></li>
    })
  }
   
    
  </ul>
</nav>
      </div>
    </div>
  );
};

export default BookingProccessing;
