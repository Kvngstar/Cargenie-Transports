import React, { useState, useEffect } from "react";
import {toast } from "react-toastify";
import auth from "../../services/authService";
import jwt from "../../services/userService";
import "react-toastify/dist/ReactToastify.css";
import config from '../../config.json'

const BookingProccessing = () => {
  const [newArray, setArray] = useState([]);
  const [length, setLength] = useState([]);
  const [count, setCount] = useState(0);
  const [slicedArray,setSlicedArray]= useState([])
  const [activePage,setActivePage]= useState(1)
  const [loading, setLoading] = useState(true);
function Paginate(event){
    const pageNum = event.target.innerHTML
     length.forEach((v)=>{ if(v == pageNum){
      
       setActivePage(v)
  
  } 
  } )
  let startNum = (pageNum - 1) * 10

    setSlicedArray((newArray.slice(startNum, count)).splice(0,10));
      }

      async function getNotification() {
        try {
          const response = await auth.get( 
           config.apiUrl + "/admin/processingunit",
            {
              "Content-type": "application/json; charset=UTF-8",
            }
          );
  
          if (response.status >= 200 && response.status < 400) {
          
            setArray(response.data[0]);
            
            setCount(response.data[1]);
           
            setSlicedArray( () => {return ( response.data[0].slice(0, response.data[0].length)).splice(0,10) }) 
                
             
  
            setLength(()=>{ return [...Array( Math.ceil(response.data[0].length / 10) + 1).keys()].slice(1)})
           
              setLoading(false)
          
          } 
        }
        catch (err) {
          if (err.response.status >= 400 && err.response.status < 500) {
            return toast.error(err.response.data);
          }
  
          return toast.error(err.message);
        }
      }
       
  
  useEffect(() => {

   
    getNotification();
  }, []);

  async function processState(event) {
    const _id = event.target.parentElement.parentElement.children[0].innerHTML;
    const bookingId =
      event.target.parentElement.parentElement.children[2].innerHTML;
  const data = { _id: _id, bookingId: bookingId };

    try {
      const response = await auth.post(
       config.apiUrl + "/admin/process",
        data,
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
        getNotification();
        toast.success(response.data);

        return;
      } 
    }catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        return toast.error(error.response.data);
      }

      return toast.error(error.message);
    }
  }

  async function failState(event) {
    const _id = event.target.parentElement.parentElement.children[0].innerHTML;
    const bookingId =
      event.target.parentElement.parentElement.children[2].innerHTML;
    const data ={ _id: _id, bookingId: bookingId };

    try {
      const response = await auth.post(
       config.apiUrl + "/admin/fail",
        data,
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
        getNotification();
        toast.success(response.data);


        return;
      } 
    }catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        return toast.error(error.response.data);
      }

      return toast.error(error.message);
    }
  }


  return ( 
    <div className="px-2 mt-4">
      <h5 className="poppinsmeduim"> <span class="material-symbols-outlined">admin_panel_settings</span>
          {jwt.getDetails().as}</h5>
      <p className="pl-4 mt-3 ralewaysemibold">Welcome, {jwt.getDetails().firstName}</p>

      <div className="my-5 ralewaymeduim">
        <h6 className="pl-3 poppinsmeduim">Process Orders ({count})</h6>
 
        <div className="p" style={{ minHeight: "300px" }}>
        {loading ? (
          <div className="preloadcont">
            <div></div>
            <div className="middleelement"></div>
            <div></div>
          </div>
        ) : (
        <div className="table-control-1 mt-3 ">
        
          <table className="table table-hover table-bordered">
            <thead>
              <tr className="">
               
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
              {
                 slicedArray.map((w) => {
                  return ( 
                    <tr>
                      <td className="d-none">{w[0]}</td>
                      <td>{w[1]}</td> <td>{w[2]}</td>{" "}
                      <td>{w[3]}</td> <td>{w[4]}</td>
                      <td>{w[5]}</td>
                      <td> 
                        <span className="btn btn-sm rounded">{w[6]}</span>
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
                })}
            </tbody>
          </table>
        </div>
         )}
         </div>
        <nav aria-label="..." className="mt-3">
  <ul class="pagination pagination-sm">{
    length.map((v)=>{
    return  <li class="page-item" onClick={Paginate}><a class="page-link">{v}</a></li>
    })
  }
   
    
  </ul>
</nav>
<div className="text-center bg-light my-2">{activePage}</div>
      </div>
    </div>
  );
};

export default BookingProccessing;
