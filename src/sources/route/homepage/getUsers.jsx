import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import auth from "../../../services/authService"
import jwt from "../../../services/userService"
import "./homepage.css";

const GetUsers = () => {

  const [user,setUser] = useState(jwt.getDetails())
  const [error,setError] = useState("")
  const [array,setArray] = useState([])
  const [count,setCount] = useState("")
  const [length, setLength] = useState("");
  const [i,setI]= useState([1,2,3,4,5,6,7,8])
  const [slicedArray,setSlicedArray]= useState([])
  useEffect(()=>{
    async function GetUserDetail(){
 
 
     try{
 
       const   response = await auth.get("http://localhost:3001/admin/allusers", {
             "Content-type": "application/json; charset=UTF-8"
           })  
          
          if(response.status >= 200 && response.status < 400){
            setArray(response.data)
            console.log(response.data)
            
           
 
          }
          else{
              console.log(response)
          }
        
         
     }
     
     catch(err){
         console.log(err)
         setError(err.response.data)
       
     }
    

            
     Paginate()
      
     }
     GetUserDetail()
 
     },[])
     function Paginate(event){
      let pageNum 
       (!event || event == undefined) ? pageNum = 1 : pageNum =  event.target.innerHTML;
          
   
      var startNum = (pageNum - 1) * 10
  
     var sliced = array.slice(startNum,array.length);
     var spliced = sliced.splice(0, 10)
     setSlicedArray(spliced)
     console.log(slicedArray)
        }
       


  return (

   
            <div className="px-2 mt-4">
              <h4>Admin DashBoard</h4>
              <h6 className="pl-4 mt-3">Welcome, Kingsley</h6>

              <div className="my-5">
                <h6 className="pl-3">Users in DataBase ({array.length})</h6>

                <div className="table-control mt-3 ">
                  <table className="table table-sm ">
                    <thead>
                      <tr className="table-success">
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>contact</th>
                        <th>date</th>
                      </tr>
                    </thead>
                    <tbody>
                     { slicedArray.map((v
                     )=>{
                        return <tr>
                        <td>{v.firstName} {v.lastName}</td>
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
  <ul class="pagination pagination-sm">{
    i.map((v)=>{
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
