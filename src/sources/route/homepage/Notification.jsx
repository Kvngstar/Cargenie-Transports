import React, { useState, useEffect } from "react";
import $ from "jquery";

import "./homepage.css";
import auth from '../../../services/authService'
import bell from '../../assets/notification.png';
import NotifyBox from "../../../component/notifybox";

const Notification = () => {

  const [error,setError] = useState('')
const [info,setInfo] = useState([])
var [calcateTotal,setCalculateTotal] = useState("")
useEffect(()=>{

async function getNotification(){
    try{

        const   response = await auth.get("http://localhost:3001/notification", {
              "Content-type": "application/json; charset=UTF-8"
            })  
           
           if(response.status == 200){
            setInfo(response.data)
           console.log(response.data)
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
console.log(info)

 

  return (

     
            <div className="px-2 mt-4">
                <h4>Notification Center (4)</h4>
                <h6 className="pl-4 mt-3">Welcome, Kingsley</h6>
                <div className="container mt-5 pb-2">
                    

                <div class="input-group ">
                <div class="input-group-prepend">
    <span class="input-group-text" id=""><img src={bell} alt="" /></span>
  </div>
 
  <input type="text" class="form-control" placeholder="Title"/>
  <textarea className="form-control w-50" placeholder="Message" name="" id="" cols="50" rows="1"/>
  <button type="submit d-inline" className="btn lightGreen  whitetext">Send</button>
</div>
{
  info.map((v)=>{ return  <NotifyBox title={v.title}  date={v.Date} desc={v.description}  /> })
}


{/* <NotifyBox      />
<NotifyBox     /> */}

                    </div>

                
   
            </div>
      
  );
};

export default Notification;
