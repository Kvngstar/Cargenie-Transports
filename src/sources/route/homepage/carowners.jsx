import React, { useState, useEffect } from 'react';
import $ from "jquery"



import "./homepage.css";
import Travelinput from '../../../component/travelinput';
import Footer from '../../../component/footer';
import Nav_ from '../../../component/nav1';
import Menuhalf from '../../../component/menuhalf';
import AdminMenuhalf from '../../../component/adminsidenav';

const CarOwners  = () => {


 useEffect(() => {
    $( "button.kk" ).on( "click" , function(){    
         $("div.j").fadeToggle(500);
       })

       
 
   return () => {
     
   }
 }, [])
 
    
    
    
    
    return ( 
        <>
        <div>  
      <Nav_ />
          <div className="d-flex w-100 secondp">

          <AdminMenuhalf />
            <div>
                <div className='px-2 mt-4'>
                    <h4 >Admin DashBoard</h4>
                    <h6 className='pl-4 mt-3'>Welcome, Kingsley</h6>

                  
                    <div className='my-5'>


                    <h6 className='pl-3'>Car owner`s List</h6>

                    <div className='d-flexxx'>
                    <form action="
                    " className='d-flexx'>
                        <label htmlFor="">Filter</label>
                        <select className="select-group input mt-2 mx-2 p-2"  type="text">
        <option value="">Car Status</option>
        <option value="">Active</option>
        <option value="">Inactive</option>
        <option value="">workshop</option>
      </select>

                        
                    </form>

                    </div>


                    <div className='table-control-1 mt-3 '>

                    <table className='table table-sm '>
                       
                       <thead>
                        <tr className='table-success'>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email ID</th>
                        <th>Created Date</th>
                        <th>Login Date</th>
                        <th>Car Status</th>
                        </tr>
                        </thead>
                        
                        
                        <tbody>
                        <tr>
                            <td>3b2345e</td>
                            <td>Bus</td>
                            <td>king2@gmail.com</td>
                            <td>26/11/22</td>
                            <td>4000</td>
                            <td>active</td>
                        </tr>
                        <tr>
                            <td>3b2345e</td>
                            <td>Sienna</td>
                            <td>vline33@outlook.com</td>
                            <td>26/11/22</td>
                            <td>4000</td>
                            <td>inactive</td>
                        </tr>
                        <tr>
                            <td>3b2345e</td>
                            <td>Bus</td>
                            <td>Emma11@yahoo.com</td>
                            <td>26/11/22</td>
                            <td>4000</td>
                            <td>Workshop</td>
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
 
export default CarOwners;