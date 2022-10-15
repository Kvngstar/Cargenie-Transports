import React, { useState, useEffect } from "react";
import auth from "../../../services/authService"
import jwt from "../../../services/userService"
import "./homepage.css";


const CarBooking = () => {



  const [user,setUser] = useState(jwt.getDetails())
    const [error,setError] = useState("")
    const [userArray,setUserObject] = useState([])
    const [name,setName] = useState("")

    useEffect(()=>{
   async function GetUserDetail(){


    try{

      const   response = await auth.get("http://localhost:3001/admin/booking", {
            "Content-type": "application/json; charset=UTF-8"
          })  
         
         if(response.status == 200){
            setUserObject(response.data.Travel)
            setName(response.data.firstName)
           return

         }
         else{
             console.log(response)
         }
       
        
    }
    
    catch(err){
        console.log(err)
        setError(err.response.data)
      
    }
    
    
     
    }
    GetUserDetail()

    },[])
  return (
    <>
      <div className="px-2 mt-4">
        <h4>Admin DashBoard</h4>
        <h6 className="pl-4 mt-3">Welcome, Kingsley</h6>

        <div className="my-5">
          <h6 className="pl-3">Booking Directory (55)</h6>
          <div className="pl-3">
            <div>Completed - 3</div>
            <div>failed - 5</div>
            <div>Processing - 1</div>
          </div>

          <div className="d-flexxx">
            <form
              action="
                    "
              className="d-flexx"
            >
              <label htmlFor="">Sort By Date</label>
              <select className="select-group input mt-2 mx-2 p-2" type="text">
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
                  <td>
                    <span className="btn btn-sm btn-success rounded">
                      Completed
                    </span>
                  </td>
                  <td>26/11/22</td>
                  <td>4:16pm</td>
                </tr>
                <tr>
                  <td>Olomo Jacob</td>
                  <td>Sienna</td>
                  <td>
                    <span className="btn btn-sm btn-danger rounded">
                      failed
                    </span>
                  </td>
                  <td>26/11/22</td>
                  <td>3:00am</td>
                </tr>
                <tr>
                  <td>Favour Ikedi</td>
                  <td>Bus</td>
                  <td>
                    <span className="btn btn-sm btn-warning rounded">
                      Processing
                    </span>
                  </td>
                  <td>26/11/22</td>
                  <td>10:00am</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarBooking;
