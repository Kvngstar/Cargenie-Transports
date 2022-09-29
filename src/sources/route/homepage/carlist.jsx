import React, { useState, useEffect } from 'react';
import $ from "jquery"

import calendar from '../../assets/Calendar_Days.png'
import round from '../../assets/round.png'



import "./homepage.css";
import Footer from '../../../component/footer';
import Nav_ from '../../../component/nav1';
import Menuhalf from '../../../component/menuhalf';
import AdminMenuhalf from '../../../component/adminsidenav';

const CarListing  = () => {


 useEffect(() => {
    $( "button.kk" ).on( "click" , function(){    
         $("div.j").fadeToggle(500);
       })

       
 
   return () => {
     
   }
 }, [])
 
    
    
    
    
    return ( 
        <>
        <div >  
      <Nav_ />
          <div className="d-flex w-100 secondp">

        <AdminMenuhalf/>
            <div>
                <div className='px-2 mt-4'>
                    <h4 >Admin DashBoard</h4>
                    <h6 className='pl-4 mt-3'>Welcome, Kingsley</h6>

                   <div className='mt-5'>
                   <h4 className='pl-3'>Cars Available (20)</h4>
                    <div  style={{height:"420px" , width: "100%"}} className='d-flexx'>
                        <div style={{width:"100%"}} className="d-flexxx py-2">
                            <div style={{width: "300px"}} className=' m d-flex flex-column'>
                                <div>
                                    <img src={calendar} className="py-2 mr-2" alt="" /><span>Bus (4)</span>

                                </div>
                                <div>
                                    <img src={calendar}  className="py-2 mr-2" alt="" /><span>Sienna (4)</span>

                                </div>
                                <div>
                                    <img src={calendar}  className="py-2 mr-2" alt="" /><span>Exquisite (2)</span>

                                </div>
                                <div>
                                        <img src={calendar}  className="py-2 mr-2" alt="" /><span>Waybill (10)</span>
                                </div>

                            </div>
                            <div style={{width: "300px"}} className="d-flexx">
                                <img src={round} alt="" style={{width: "150px"}} />

                            </div>

                        </div>

                    

                    
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
 
export default CarListing;