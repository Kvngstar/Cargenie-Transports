import React, { useState, useEffect } from 'react';
import $ from "jquery"

import calendar from '../../assets/Calendar_Days.png'
import round from '../../assets/round.png'
import CanvasJSReact from '../../../component/canvasjs.react';


import "./homepage.css";
import Footer from '../../../component/footer';
import Nav_ from '../../../component/nav1';
import Menuhalf from '../../../component/menuhalf';
import AdminMenuhalf from '../../../component/adminsidenav';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const CarListing  = () => {

    const options = {
        animationEnabled: true,
        title: {
          text: ""
        },
        data: [{				
                  type: "doughnut",
                  dataPoints: [
                      { label: "Bus",  y: 4  },
                      { label: "Sienna", y: 4  },
                      { label: "Exquisite", y: 2  },
                      { label: "Waybill",  y: 10  }
                      
                  ]
         }]
     };
      

    // const [CanvasJS,setCanvasJs]= useState(CanvasJSReact.CanvasJS)
    // const [CanvasJSChart,setCanvasJsChart]= useState(CanvasJSReact.CanvasJSChart)
        



    
    
    
    
    return ( 
                <div className='px-2 mt-4'>
                    <h4 >Admin DashBoard</h4>
                    <h6 className='pl-4 mt-3'>Welcome, Kingsley</h6>

                   <div className='mt-5'>
                   <h4 className='pl-3'>Cars Available (20)</h4>
                    <div  style={{height:"auto" , width: "100%"}} className='d-flexx'>
                        
                        <div style={{width:"100%"}} className="d-flexxx py-2">
                            <div style={{width: "300px"}} className=' m d-flex flex-column mt-5'>

                                <div className='my-3 py-2'>
                                    
                                <form >
                                    <div class="input-group ">
                                    <div className="input-group-prepend w-25 px-1" >
                                        <input type="number" className='form-control' name="" id="" min="0" placeholder="0"/>
                                    </div>
                                        <select className="custom-select" name="" id="">
                                            <option selected>choose</option>
                                            <option value="Bus">Bus</option>
                                            <option value="Sienna">Sienna</option>
                                            <option value="Exquisite">Exquisite</option>
                                            <option value="truck">Truck</option>
                                        </select>
                                    <div className="input-group-append">
                                        <button className='btn btn-success'>Update</button>
                                    </div>
                                    </div>
                                </form>
                                </div>
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
                                        <img src={calendar}  className="py-2 mr-2" alt="" /><span>Truck (10)</span>
                                </div>

                            </div>
                            <div style={{width: "300px"}} className="d-flexx mt-5">
                                   
                                     <CanvasJSChart options = {options}/>
                            </div>

                        </div>

                    

                    
                    </div>

                   </div>
                   
                </div>
           
     );
}
 
export default CarListing;