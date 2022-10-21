import React, { useState, useEffect } from "react";
import auth from "../../../services/authService";
import jwt from "../../../services/userService";
import "./homepage.css";

const CarBooking = () => {
  const [user, setUser] = useState(jwt.getDetails());
  const [error, setError] = useState("");
  const [newArray, setArray] = useState([]);
  const [count, setCount] = useState("");

  const [length, setLength] = useState([]);
  const [slicedArray, setSlicedArray] = useState([]);
  const [activePage,setActivePage]= useState(1)
  const [OrderState,setOrderState] = useState({
    processing: 0,
    completed: 0,
    failed: 0,
  })
  function Paginate(event) {
    const pageNum = event.target.innerHTML;

    length.forEach((v)=>{ if(v == pageNum){
      
      setActivePage(v)
 
 } 
 } )
    let startNum = (pageNum - 1) * 10;

    setSlicedArray(newArray.slice(startNum, newArray.length).splice(0, 10));
  }
  useEffect(() => {

    async function GetUserDetail() {
      try {
        const response = await auth.get(
          "http://localhost:3001/admin/travelview",
          {
            "Content-type": "application/json; charset=UTF-8",
          }
        );

        if (response.status >= 200 && response.status < 400) {
          setArray(response.data[0]);
          setCount(response.data[1]);
          setSlicedArray(() => {
            return response.data[0].slice(0, response.data[0].length).splice(0, 10);
          });
         

          setLength(() => {
            return [
              ...Array(Math.ceil(response.data[0].length / 10) + 1).keys(),
            ].slice(1);
          });
          let completed = 0
          let failed = 0
          let processing = 0
          for( let i = 0; i < response.data[0].length; i++){
          const readData = ((response.data[0])[i])[2]
         
          switch (readData) {
            case "processing":
              processing++
                
              break;
          
            case "completed":
              completed++

              break;
          
            case "failed":
              failed++

              break;
          
            default:
              break;
          }
          }  
          console.log(processing,completed,failed)
          setOrderState(()=>{ return { processing: processing,failed:failed,completed:completed}})

          return;
        } else {
          console.log(response);
        }
      } catch (err) {
        console.log(err); 
        setError(err.response.data);
      }
    }
    GetUserDetail();
      }
  , []); 
  function handleOnclick(event){
Paginate(event)

  }
  return (
    <>
      <div className="px-2 mt-4">
        <h5 className="poppinsmeduim ">Admin</h5>
        <p className="pl-4 mt-3 ralewaysemibold greentext">Welcome, {jwt.getDetails().firstName}</p>

        <div className="my-5 ralewaymeduim">
          <h6 className="pl-3 poppinsmeduim">Booking Directory ( {count} )</h6>
          <div className="pl-3">
            <div>Completed - {OrderState.completed}</div>
            <div>failed - {OrderState.failed}</div>
            <div>Processing - {OrderState.processing}</div>
          </div>

          

          <div className="table-control mt-5 ">
            <table className="table  table-hover table-bordered">
              <thead>
                <tr className="">
                  <th>BookDate</th>
                  <th>Booking Id</th>
                  <th>status</th>
                </tr>
              </thead>

              <tbody>
                {slicedArray.map((w) => {
                  return (
                    <tr>
                      {" "}
                      <td>{w[0]}</td> <td>{w[1]}</td>{" "}
                      <td >
                      { w[2] == "failed" &&  <span className="btn-sm btn-danger">
                          {w[2]}
                        </span>}
                      { w[2] == "processing" &&  <span className="btn-sm btn-warning">
                          {w[2]}
                        </span>}
                      { w[2] == "completed" &&  <span className="btn-sm btn-success">
                          {w[2]}
                        </span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <nav aria-label="...">
            <ul class="pagination pagination-sm mt-3">
              {length.map((v) => {
                return (
                  <li class="page-item"  onClick={handleOnclick}>
                    <a class="page-link">{v}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="text-center bg-light">{activePage}</div>
        </div>
      </div>
    </>
  );
};

export default CarBooking;
