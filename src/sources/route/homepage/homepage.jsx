import React from "react";
import $ from "jquery";
import { useState, useEffect } from 'react';

import "./homepage.css";
import Footer from "../../../component/footer";
import Nav__ from "../../../component/nav";
import { Link, Outlet } from "react-router-dom";


export default function Hompage() {
    useEffect(()=>{
 $(
  function(){
    
    $("div.hidd").on("click", function (){
     $("div.div1").toggleClass("hamburgerdiv1")
     $("div.div2").toggleClass("hamburgerdiv2")
     $("div.div3").toggleClass("hamburgerdiv3")
   $("div.hideclick").slideToggle(500);
  })    
  }
 )
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
     <Link to="signup"><button className="btn btn-sm btn-light mx-auto">Sign Up</button></Link>

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
