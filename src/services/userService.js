
import { get } from 'jquery';
import React, { useState, useEffect } from 'react';

export const Savejwt = ()=>{

    const [user,setuser] = useState(()=>{
        
    return   null
      
        
    });

    const getvalue =()=>{

   return localStorage.getItem(user)

    } 

    const setvalue = (jwt)=>{
        if(jwt){
            localStorage.setItem(jwt)
      setuser(jwt )
    
    }
      return user
    }

    return [user,getvalue,setvalue]

}