import React, { useState, useEffect } from 'react';
import $ from "jquery"



import "./homepage.css";
import Travelinput from '../../../component/travelinput';
import Footer from '../../../component/footer';
import Nav_ from '../../../component/nav1';
import Menuhalf from '../../../component/menuhalf';
import AdminMenuhalf from '../../../component/adminsidenav';

const CarOwners  = () => {


 
 
    
    
    
    
    return ( 
    
        
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
                        
                        <th colspan="2" className="bg-secondary">Specification</th>
                     
                        </tr>
                        </thead>
                        
                        
                        <tbody>
                        <tr>
                            <td>3b2345e</td>
                            <td>Bus</td>
                            <td>king2@gmail.com</td>
                            <td colspan="2" className="bg-primary" >26/11/22fghjkllkjhgfdfghjpjhgfdfghjkl'vc</td>
                            
                           
                        </tr>
                        <tr>
                            <td>3b2345e</td>
                            <td>Sienna</td>
                            <td>vline33@outlook.com</td>
                            <td colspan="2" className="bg-success">26/11/22</td>
                           
                          
                        </tr>
                        <tr>
                            <td>3b2345e</td>
                            <td>Bus</td>
                            <td>Emma11@yahoo.com</td>
                            <td colspan="2" className="bg-info">26/11/22</td>
                            
                        </tr>


                        </tbody>
                       
                    </table>


                    </div>

                    
                    </div>
                </div>
        
          
         
        
     );
}
 
export default CarOwners;