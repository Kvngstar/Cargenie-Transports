import React, { useState, useEffect } from "react";
import auth from "../../../services/authService"
import jwt from "../../../services/userService"
import "./homepage.css";


const CarBooking = () => {

  const [user,setUser] = useState(jwt.getDetails())
    const [error,setError] = useState("")
    const [array,setArray] = useState([])
    const [count,setCount] = useState("")

    useEffect(()=>{
   async function GetUserDetail(){


    try{

      const   response = await auth.get("http://localhost:3001/admin/travelview", {
            "Content-type": "application/json; charset=UTF-8"
          })  
         
         if(response.status >= 200 && response.status < 400){
           setArray(response.data)
           console.log(document.getElementById("count").children.length)
           setCount(document.getElementById("count").children.length)
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
   
    setCount(document.getElementById("count").children.length)
           
    
     
    }
    GetUserDetail()

    },[])
  return (
    <>
      <div className="px-2 mt-4">
        <h4>Admin DashBoard</h4>
        <h6 className="pl-4 mt-3">Welcome, Kingsley</h6>

        <div className="my-5">
          <h6 className="pl-3">Booking Directory {count}</h6>
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
               <div class="input-group mt-4">
          <div className="input-group-prepend">
            <div className="input-group-text bg-transparent">Sort By Date</div>
          </div>

              
              <select className="custom-select input mt-2 mx-2 p-2" type="text">
                <option value="">Date</option>
                <option value="">Name</option>
                <option value="">Subject</option>
              </select>
              </div>
            </form>
          </div>

          <div className="table-control mt-3 ">
            <table className="table table-sm ">
              <thead>
                <tr className="table-success">
                  <th>BookDate</th>
                  <th>Booking Id</th>
                  <th>status</th>
                 
                </tr>
              </thead>

              <tbody id="count">
           { array.map((v)=>{
            return  v.Travel.map((w)=>{ 
              return <tr> <td>{w.bookDate}</td> <td>{w.bookingId}</td> <td>
   <span className="btn btn-sm btn-success rounded">
   {w.status}
   </span>
 </td>

</tr>})
           })   } 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarBooking;
