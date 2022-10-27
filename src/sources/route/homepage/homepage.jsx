import React from "react";
import $ from "jquery";
import { useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";

import Footer from "../../../component/footer";
import Nav__ from "../../../component/nav";
import "./homepage.css";
import login from "../../assets/login.png"
import signup from "../../assets/signup.png"


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
        <div className="aaa bg-warning">

     <div className="mx-2">
      <Link to="login"><button className="btn btn-sm bg-warning"> <img src={login} className="mr-1" alt="login" />Login</button></Link>

     </div> 
     <div className="mx-2">
     <Link to="signup"><button className="btn btn-sm btn-warning mx-auto"><img src={signup} className="mr-1" alt="login" />Sign Up</button></Link>

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
