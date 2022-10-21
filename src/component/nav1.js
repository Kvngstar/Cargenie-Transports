import Logo from './logo';
import bell from '../sources/assets/notificationbell.png';
import message from '../sources/assets/messageicon.png';
import list from '../sources/assets/Vector-1.png';
import auth from '../services/authService'
import React, { useState, useEffect } from 'react';

const Nav_ = () => {




    const [error,setError] = useState('')
    const [info,setInfo] = useState([])
    var [length,setLength] = useState("")
    useEffect(()=>{
    
    async function getNotification(){
        try{
    
            const   response = await auth.get("http://localhost:3001/notification", {
                  "Content-type": "application/json; charset=UTF-8"
                })  
               
               if(response.status == 200){
                setLength(response.data.length)
               
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
    getNotification()
    },[])
    return ( 
        <div className="l  greenerbackground d-flex justify-content-between align-items-center flex-direction-row py-2 mb-3 px-2">
         
        <Logo/>   
           <div className="notification mr-4">
            <span className='noticon-wrap'>
             <img src={bell} />
                <span className='noticon'>
                    <p className='notp'>{length}</p>
                </span>
                
            </span>
            <span className='noticon-wrap'>
             <img src={list} className="ml-3"/>
             <span className='noticon'>
                    <p className='notp'>0</p>
                </span>
            </span>
            <span className='noticon-wrap'>
             <img src={message} className=" ml-3"/>
             <span className='noticon'>
                    <p className='notp'>0</p>
                </span>
            </span>
         
            
            <button className='ml-4 btn btn-outline-light kk robotoregular whitetext'>Menu</button>

           
           </div>
         </div>
     );
}
 
export default Nav_;