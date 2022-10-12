import React, { useState, useEffect } from 'react';
import Travelinput from '../../../component/travelinput';
import jwt from "../../../services/userService"
import auth from "../../../services/authService"


const CustomerBook = () => {


    
    const [user,setUser] = useState(jwt.getDetails())
    const [errr,seterrr] = useState("")
    const [userdata,setUserData] = useState({})
    const [userArray,setUserArray] = useState([])
    

    useEffect(()=>{
   async function GetUserDetail(){

    try{

      const   response = await auth.get("http://localhost:3001/customer/alltravels", {
            "Content-type": "application/json; charset=UTF-8"
          })  
         
         if(response.status == 200){
            setUserArray(response.data.Travel)
           setUserData(response.data)
           return

         }
         else{
             console.log(response)
         }
       
        
    }
    
    catch(err){
        console.log(err)
        seterrr(err.response.data)
      
    }
    
    
     
    }
    GetUserDetail()

    },[])
    return ( 

        <div className='px-2 mt-4'>
        <h4 >DashBoard </h4>
        <h6 className='pl-4 mt-3'>Welcome, {user.firstName} </h6>

        <div className='h mx-auto mt-5'> 
            <h4 className='text-center mb-3'>Book your Ticket Here</h4>
            <Travelinput/>

        </div>

    <div className='my-5'>
        <h4>Recent Car Bookings</h4>
        <div className='table-control '>

        <table className='table table-sm '>
           
           <thead>
            <tr className='table-success'>
            <th>Booking Date</th>
            <th>BookingId</th>
            <th>cartype</th>
            <th>Pickup Date</th>
            <th>to</th>
            <th>status</th>
            </tr>
            </thead>
            
            
            <tbody>
           {userArray.map((v)=> { return  <tr>
               <td> { v.bookDate}</td>
               <td>{ v.bookingId}</td>
               <td> {v.carType}</td>
               <td>{ v.pickupDate}</td>
               <td>{ v.to}</td>  
               <td>{ v.status}</td></tr>  })}


            </tbody>
           
        </table>


        </div>

        
        </div>
        </div>
        
        
       
     );
}
 
export default CustomerBook;