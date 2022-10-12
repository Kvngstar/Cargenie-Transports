import React, { useState, useEffect } from 'react';
import auth from '../../../services/authService'
import jwt from '../../../services/userService'
import jwt_decode from 'jwt-decode'




const Loginform = () => {
    const [user,setUser] = useState({
        email:"",
        password: "",
        as:""
    })
    const [info,setInfo]= useState("")

    function handleState(event){
   const {name,value}= event.target

   setUser((values)=>{
    return {...values , [name]: value}
   })
    }
 async   function submitButton(event){
       event.preventDefault();
       try{
    
        const response = await  auth.post(
            "http://localhost:3001/gen/login",user,
            {
                "Content-type": "application/json; charset=UTF-8",
              }
            
          )
          
            
    
            if(response.status==200){

                if(!jwt.getjwt()){
                    jwt.savejwt(response.headers['x-auth'])

                }
             
             const {as} =  jwt_decode(response.headers['x-auth'])
    
             
             setInfo("Successful")
             
    
           switch (as) {
            case "customer":
    
            window.location.replace("/customer")
                
                break;
            case "carowner":
                window.location.replace("/carowner")
                break;
            case "admin":
                window.location.replace("/admin")
                break;
           
            default:
                window.location.replace("/")
                break;
           }
              
    }
    
    }
    catch(error){
    
        if(error.response && error.response.status >=400 && error.response.status < 500){
    console.log(error)
          return  setInfo(error.response.data)
    
        }
        console.log(error,"outside")
     return   setInfo(error.message)
    }
    }
    return ( 
        
        <div class="form">
        <form className="form__  mx-2" action="
        ">
            <h1 className="mt-3" >Sign In</h1>
            <div>
                <input type="text" id="fn" name='email' value={user.email} onChange={handleState} placeholder="Enter your email"/>
            </div>
            <div>
                <input type="password" id="ln"name='password' value={user.password}  onChange={handleState} placeholder="Enter Your password"/>
            </div>
           
                <div class="input-group mt-4">
                    <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent">As</div>
                    </div>
                  
                  <select class="form-control" name="as" value={user.as} onChange={handleState} autoComplete>
                    <option value=""></option>
                    <option value="customer">customer</option>
                    <option value="carowner">Car Owner</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                {/* <div class="form-check mt-2">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked/>
                    keep me signed-in</label>
                </div> */}
             <div className="mx-auto w-100 bg-success mt-4">
                <input type="submit" className="btn btn-primary mx-auto w-100"  value="login" onClick={submitButton} autoComplete/>
            </div>
            
            
            <h6 id="output3" className='my-3 text-center'>{info}</h6>
        </form>
    </div>
     );
}
 
export default Loginform;