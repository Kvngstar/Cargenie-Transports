import React, { useState, useEffect } from 'react';
import Travelinput from '../../../component/travelinput';
import jwt from "../../../services/userService"
import auth from "../../../services/authService"

const CustomerBook = () => {

    const [user,setUser] = useState(jwt.getDetails())
    const [error,setError] = useState("")
    const [userArray,setUserArray] = useState([])
    const [name,setName] = useState("")

    useEffect(()=>{
   async function GetUserDetail(){


    try{

      const   response = await auth.get("http://localhost:3001/customer/alltravels", {
            "Content-type": "application/json; charset=UTF-8"
          })  
         
         if(response.status == 200){
            setUserArray(response.data.Travel)
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
      <div className='px-2 mt-4'>
      <h5 className="poppinsmeduim" >Admin</h5>
      <p className='pl-4 mt-3 ralewaysemibold'>Welcome,  {jwt.getDetails().firstName}</p>
      <div className='h mx-auto mt-5'> 
            <h6 className='text-center mb-3'>Book your Ticket Here</h6>
            <Travelinput/>

        </div>

    <div className='my-5 ralewaymeduim'>
        <h6 className="pl-3 poppinsmeduim">Recent Car Bookings</h6>
        <div className='table-control-1 '>

        <table className='table table-hover table-bordered'>
           
           <thead>
            <tr >
            <th>Booking Date</th>
            <th>BookingId</th>
            <th>cartype</th> 
            <th>Pickup Date</th>
            <th>to</th>
            <th>status</th>
            </tr>
            </thead>
            
            
            <tbody>
           { (error) ? <div className='mt-4 alert mx-auto alert-warning text-center'>{error}</div> :  userArray.map((v)=> { return  <tr>
               <td> { v.bookDate}</td>
               <td>{ v.bookingId}</td>
               <td> {v.carType}</td>
               <td>{ v.pickupDate}</td>
               <td>{ v.to}</td>  
               <td>{ v.status}</td></tr>  }  ) }


            </tbody>
           
        </table>


        </div>

        
        </div>
         </div>
        
        
       
     );
}
 
export default CustomerBook;