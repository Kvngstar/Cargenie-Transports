import React, { useState, useEffect } from 'react';
import $ from "jquery"
import Logo from '../../../component/logo';
import bell from '../../assets/notificationbell.png';
import message from '../../assets/messageicon.png';
import list from '../../assets/Vector-1.png';
import cloudicon from '../../assets/Cloud_Download.png';
import calendar from '../../assets/Calendar_Days.png';
import users from '../../assets/Users.png';

import "./homepage.css";
import Travelinput from '../../../component/travelinput';
import Footer from '../../../component/footer';

const Customers  = () => {


 useEffect(() => {
    $( "button.kk" ).on( "click" , function(){    
         $("div.j").fadeToggle(500);
       })

       
 
   return () => {
     
   }
 }, [])
 
    
  
    console.log("hello word")
    
    
    
    return ( 
        <>
        <div>  
        <div className="l greenerbackground d-flex justify-content-between align-items-center flex-direction-row py-3 mb-3 px-2">
         
         <Logo/>
            <div className="notification mr-4">
             <span className='noticon-wrap'>
              <img src={bell} />
                 <span className='noticon'>
                     <p className='notp'>1</p>
                 </span>
                 
             </span>
             <span className='noticon-wrap'>
              <img src={list} className="ml-3"/>
              <span className='noticon'>
                     <p className='notp'>3</p>
                 </span>
             </span>
             <span className='noticon-wrap'>
              <img src={message} className=" ml-3"/>
              <span className='noticon'>
                     <p className='notp'>0</p>
                 </span>
             </span>
          
             
             <button className='ml-3 btn btn-sm btn-info kk' id="kk">Menu</button>

            
            </div>
          </div>
          <div className="d-flex w-100 secondp">

            <div className="bg-light j">
                <div className='d-flex whitetext w-100 py-2 greenerbackground justify-content-around align-items-center'>
                  <img src={cloudicon} style={{height: "25px"}}  alt="" />  <h3>DashBoard</h3> <span className='btn btn-sm' style={{backgroundColor: "#7BB66D", color: "#f2f2f2"}}>New</span>
                </div>
                <div className='g mt-3'>
                    <div className="d-flex align-items-center ">
                      
                        
                         <img   src={calendar} alt="" />
                    
                          <span>Rental transaction</span>
                    </div>
                    <div className='d-flex  align-items-center'>
                        <img src={calendar} alt="" /> <span>Car Listing</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={users} alt="" /> <span>Notification</span> <span className='ml-3 btn btn-sm greenerbackground whitetext'>3</span>
                    </div>
                
               
                <div className='mt-5 d-flex align-items-center align-items-center'>
                        <img src={users} alt="" /> <span>Settings</span>
                    </div>
                <div className=' d-flex align-items-center align-items-center'>
                        <img src={users} alt="" /> <span>Help</span>
                    </div>
                <div className='d-flex align-items-center align-items-center'>
                        <img src={users} alt="" /> <span>Logout</span>
                    </div>

                </div>
            </div>
            <div className="">
                <div className='px-2 mt-4'>
                    <h4 >DashBoard</h4>
                    <h6 className='pl-4 mt-3'>Welcome, Kingsley</h6>

                    <div className='h mx-auto mt-5'>
                        <h4 className='text-center mb-3'>Book your Ticket Here</h4>
                        <Travelinput/>

                    </div>
                    <div className='mt-5'>
                    <h4>Recent Car Bookings</h4>
                    <div className='table-control'>

                    <table className='table '>
                       
                       <thead>
                        <tr className='table-success'>
                        <th>Bookings</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Amount</th>
                        </tr>
                        </thead>
                        
                        
                        <tbody>
                        <tr>
                            <td>3b2345e</td>
                            <td>Bus</td>
                            <td>Done</td>
                            <td>26/11/22</td>
                            <td>4000</td>
                        </tr>
                        <tr>
                            <td>3b2345e</td>
                            <td>Sienna</td>
                            <td>failed</td>
                            <td>26/11/22</td>
                            <td>4000</td>
                        </tr>
                        <tr>
                            <td>3b2345e</td>
                            <td>Bus</td>
                            <td>progress</td>
                            <td>26/11/22</td>
                            <td>4000</td>
                        </tr>


                        </tbody>
                       
                    </table>


                    </div>

                    
                    </div>
                </div>
            </div>
          </div>

        <Footer/>
        </div> 

         
        </>
     );
}
 
export default Customers;