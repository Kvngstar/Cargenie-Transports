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
      <h4 >DashBoard </h4>
      <h6 className='pl-4 mt-3'>Welcome, {name} </h6>
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
           { (error) ? <div className='mt-4 alert mx-auto alert-warning text-center'>{error}</div> :  userArray.map((v)=> { return  <tr>
               <td> { v.bookDate}</td>
               <td>{ v.bookingId}</td>
               <td> {v.carType}</td>
               <td>{ v.pickupDate}</td>
               <td>{ v.to}</td>  
               <td>{ v.status}</td></tr>  } ) }


            </tbody>
           
        </table>


        </div>

        
        </div>
        </div>
        
        
       
     );
}
 
export default CustomerBook;