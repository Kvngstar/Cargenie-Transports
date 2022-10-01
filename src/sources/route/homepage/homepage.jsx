import React from "react";
import $ from "jquery";
import { useState, useEffect } from 'react';

import "./homepage.css";
import Footer from "../../../component/footer";
import Subscribe from "../../../component/subscribe";
import Whychoose from "../../../component/whychoose";
import Travelinput from "../../../component/travelinput";
import Nav__ from "../../../component/nav";


import Logo from "../../../component/logo";
import { Link, Outlet } from "react-router-dom";


export default function Hompage() {
    useEffect(()=>{

      $("button.hidd").on("click", function (){
        console.log("emenado");
     $("div.hideclick").slideToggle(500);
    })    
    },[     ])  
   
  
  return ( 
    <> 
      <div className="wrapper">
      
      <div className="hideclick">
        <div className="aaa">

     <div className="mx-2">
      <Link to="login"> <button className="btn btn-sm btn-primary">Login</button></Link>

     </div>
     <div className="mx-2">
              <button className="btn btn-sm btn-light mx-auto">Sign Up</button>

     </div>
        </div>
     
     
       
</div>
<Nav__ />
<Outlet/>

    
        <Footer/>
      </div>
    </>
  );
}
