import React, { useState, useEffect } from "react";
import jwt from '../../../services/userService'
import auth from '../../../services/authService'
import $ from "jquery";

import "./homepage.css";

const CarOwnerRoute = () => {


  const [user,setUser] = useState(jwt.getDetails())
  const [error,setError] = useState("")
  const [userObject,setUserObject] = useState({})
  const [userArray,setUserArray] = useState([ ])
  const [name,setName] = useState("")

  useEffect( ()=>{
  async function GetCarOwnerDetail(){
    try{

      const   response = await auth.get("http://localhost:3001/carowner", {
            "Content-type": "application/json; charset=UTF-8"
          })  
         
         if(response.status >= 200 && response.status < 3000){
            setUserObject(response.data)
            console.log(response.data.car)
            setUserArray(response.data.car)
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
    GetCarOwnerDetail()

    },[])


  return (

   
            <div className="px-2 mt-4">
              <h5 className="poppinsmeduim">Carowners</h5>
              <h6 className="pl-4 mt-3 ralewaysemibold">Welcome,  {jwt.getDetails().firstName}</h6>

              <div className="my-5 ralewaymeduim">
                <h6 className="pl-3">Date:</h6>

                <div className="table-control mt-3 ">
                  <table className="table table-sm ">
                    <thead>
                      <tr className="table-success">
                        
                        <th>Email</th>
                        <th>Registered Date</th>
                        <th>phone Number</th>
                        <th>Cars Info</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        
                        <td>{userObject.email}</td>
                        <td>{userObject.date}</td>

                        <td>{userObject.phoneNum}</td>
                        <td>
                          <ol>

                           {userArray.map((v)=>{
                             return  <li>{v}</li>
                            }) }
                            
                            </ol>
                             </td>
                       
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
  );
};

export default CarOwnerRoute;
