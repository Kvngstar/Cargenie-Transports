import { event } from "jquery";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import auth from "../../../services/authService"
import jwt from "../../../services/userService"
import "./homepage.css";

const GetUsers = () => {

  const [user,setUser] = useState(jwt.getDetails())
  const [error,setError] = useState("")
  const [newArray,setArray] = useState([])
  const [count,setCount] = useState([])
  const [length, setLength] = useState([]);
  const [slicedArray,setSlicedArray]= useState([])




  function Paginate(event){
    const pageNum = event.target.innerHTML
     let startNum = (pageNum - 1) * 10

    setSlicedArray((newArray.slice(startNum, newArray.length)).splice(0,10));
      }
      

  useEffect(()=>{
    async function GetUserDetail(){
 
 
     try{
 
       const   response = await auth.get("http://localhost:3001/admin/allusers", {
             "Content-type": "application/json; charset=UTF-8"
           })  
          
           if(response.status >= 200 && response.status < 400){
             setArray(response.data)
             setSlicedArray( () => {return (response.data.slice(0, response.data.length)).splice(0,10) }) 
           

             setLength(()=>{ return [...Array( Math.ceil(response.data.length / 10) + 1).keys()].slice(1)})
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

    
            <div className="px-2 mt-4">
              <h4  className="poppinsmeduim">Admin</h4>
              <p className="pl-4 mt-3  ralewaysemibold">Welcome,  {jwt.getDetails().firstName}</p> 
 
              <div className="my-5 ralewaymeduim">
                <h6 className="pl-3 poppinsmeduim">Users in DataBase ({newArray.length})</h6>

                <div className="table-control-1 mt-5 ">
                  <table className="table table-hover table-bordered ">
                    <thead>
                      <tr className="">
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                     { slicedArray.map((v
                     )=>{
                        return <tr>
                        <td>{v.firstName}</td>
                        <td>{v.email}</td>
                        <td>{v.phoneNum}</td>
                        <td>{v.date}</td>
                       
                      </tr>
                     }) 
                   }
                    </tbody>
                  </table>
                </div>
                <nav aria-label="...">
  <ul class="pagination pagination-sm mt-3">{
    length.map((v)=>{
    return  <li class="page-item" onClick={Paginate}><a class="page-link">{v}</a></li>
    })
  }
   
    
  </ul>
</nav>
              </div>
            </div>
  );
};

export default GetUsers;
