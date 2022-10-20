import React, { useState, useEffect } from "react";
import jwt from '../../../services/userService'

import "./homepage.css";
import auth from '../../../services/authService'
import bell from '../../assets/notification.png';
import NotifyBox from "../../../component/notifybox";




const Notification = () => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [info, setInfo] = useState("");
  const [error,setError] = useState('')
const [newArray,setNewArray] = useState([])
var [length,setLength] = useState([])
const [count, setCount] = useState(0);
  const  [read,setRead] = useState([])
  const [slicedArray,setSlicedArray]= useState([])
  const [activePage,setActivePage]= useState(1)


function Paginate(event){
  const pageNum = event.target.innerHTML
   length.forEach((v)=>{ if(v == pageNum){
    
     setActivePage(v)

} 
} )
let startNum = (pageNum - 1) * 2;

  setSlicedArray((newArray.slice(startNum, count)).splice(0,2));
    }
useEffect(()=>{

async function getNotification(){
    try{

        const   response = await auth.get("http://localhost:3001/notification", {
              "Content-type": "application/json; charset=UTF-8"
            })  
           
           if(response.status == 200){
            setNewArray(response.data)
            setCount(response.data.length)
            setSlicedArray( () => {return ( response.data.slice(0, response.data.length)).splice(0,2) }) 
              
           

            setLength(()=>{ return [...Array( Math.ceil(response.data.length / 2) + 1).keys()].slice(1)})
         
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
function handleState(event) {
  const { name, value } = event.target;

  setFormData((v) => {
    return { ...v, [name]: value };
  });
}
async function SendData(event) {
  event.preventDefault();
  try {
    const response = await auth.post(
      "http://localhost:3001/notification",
      formData,
      {
        "Content-type": "application/json; charset=UTF-8",
      }
    );

    if (response.status >= 200 && response.status < 400) {
      setInfo(response.data);
      window.location.reload()
    }
  } catch (error) {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
    ) {
      console.log(error);
      return setInfo(error.response.data);
    }
    console.log(error, "outside");
    return setInfo(error.message);
  }
}



 

  return (

     
            <div className="px-2 mt-4">
                <h4>Notification Center (4)</h4>
                <h6 className="pl-4 mt-3">Welcome,  {jwt.getDetails().firstName}</h6>
                <div className="container mt-5 pb-2">
                    <div>{info}</div>

              { ((jwt.getDetails()).as == "admin") && <div class="input-group ">
                <div class="input-group-prepend">
    <span class="input-group-text bg-transparent"  id=""><img src={bell} alt="" /></span>
  </div>
 
  <input type="text" name="title"  value={formData.title} onChange={handleState} class="form-control" placeholder="Title"/>
  <textarea className="form-control w-50"  value={formData.description}
                          onChange={handleState} placeholder="Message" name="description" id="" cols="50" rows="1"/>
  <button type="submit d-inline" onClick={SendData} className="btn lightGreen ">Send</button>
</div>}
{
  slicedArray.map((v)=>{ return  <NotifyBox title={v.title}  date={v.Date} desc={v.description}  /> })
}

                    </div>

                
                    <nav aria-label="..." className="mt-3">
  <ul class="pagination pagination-sm">{
    length.map((v)=>{
    return  <li class="page-item" onClick={Paginate}><a class="page-link">{v}</a></li>
    })
  }
   
    
  </ul>
</nav>
<div className="text-center bg-light">{activePage}</div>
            </div>
      
  );
};

export default Notification;
