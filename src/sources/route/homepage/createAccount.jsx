import React from 'react'
import {useEffect,useState} from 'react'
import $ from 'jquery'
import axios from 'axios'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'



const CreateAccount = (props) => {


    let navigate = useNavigate()
var [formData, setFormData] = useState({
    firstName:"",
    lastName: "" ,
    phoneNum:"",
    email: "",
    password:"",
    confirmPassword:"",
    as:"",
    terms: "",


})

function handleState(event){
    const {name,value,checked,type} = event.target
 setFormData((values)=>{


     return ( type !=="checkbox")? { ...values,   [name]:value}: { ...values,   [name]:checked}
 })
}

// const [Data,setData] = useState({
//   firstName:"kingsley",
//      lastName:"nwachukwu",
//     phoneNum:"08030299983",
//     email:"kingsley0193999@yahoo.com",
//    password:"12345678",
//     as:"carowner"


// })

const [info,setInfo] = useState("");
// const [userLoggedIn, setUserLoggedIn] = useState("")

//   useEffect(()=>{
//   return  setUserLoggedIn(localStorage.getItem("x-auth"))
//   },[userLoggedIn])    
   function submitButton(event){
       
        event.preventDefault();
      

        if(!formData.password || !formData.confirmPassword ){
            return setInfo("password does not match with confirm password")
        } 

        else if(formData.password !== formData.confirmPassword ){
            return setInfo("password does not match with confirm password")
        }  else{
            setInfo("")


            axios.post(
                "http://localhost:3001/gen/createaccount",
               _.pick(formData,["firstName","lastName","phoneNum","email","password","as"]),
                {
                    "Content-type": "application/json; charset=UTF-8",
                  }
                
              ).then((response)=> {
                

                if(response.status==200){
                  console.log(response.headers)
                  localStorage.setItem("x-auth", response.headers["x-auth"])
                  
                  if(localStorage.getItem("x-auth")){
                    console.log(localStorage.getItem("x-auth"))
                 return navigate("/customer")
                  
}
else{
    setInfo("not getting localStorage")
}
                 
                
                
                
                }
                }
                
               
                
                
                
                
                
                ).catch(error => setInfo(error.response.data))
            


        }
       
    }
    



// alert(firstName)
    return ( 
        
                
                <div className="form">
                <form  className="form__  mx-2" action="
                ">
                    <h1 className="mt-3" >Sign Up</h1>  
                    <div>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleState} id="fn" placeholder="Enter your firstname"/>
                    </div>
                    <div>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleState} id="ln" placeholder="Enter your lastname"/>
                    </div>
                    <div>
                        <input type="text" name="phoneNum" value={formData.phoneNum} onChange={handleState} id="phonenum" placeholder="Enter your phone number e.g 08152984105"/>
                    </div>
                    <div>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleState} placeholder="Enter your email"/>
                    </div>
                    <div>
                        <input type="password" id="" name="password" value={formData.password} onChange={handleState} placeholder="Enter Your password"/>
                    </div>
                    <div>
                        <input type="password" id="" name="confirmPassword" value={formData.confirmPassword} onChange={handleState} placeholder="Confirm Your password"/>
                    </div>
                   
                        <div class="input-group mt-4">
                            <div className="input-group-prepend">
                            <div className="input-group-text bg-transparent">As</div>
                            </div>
                          
                          <select class="form-control" value={formData.as} onChange={handleState} name="as" id="">

                            <option value=""></option>
                            <option value="customer">customer</option>
                            <option value="carowner">Car Owner</option>
                            <option value="admin">Admin</option>
                          </select>
                        </div>
                        <div class="form-check mt-2">
                          <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" value={formData.terms} onChange={handleState} name="terms" id=""/>
                            Agree to terms and condition</label>
                        </div>
                     <div className="mx-auto w-100 bg-success mt-4">
                        <input type="submit" id="" onClick={submitButton} className="btn btn-primary mx-auto w-100" value="Create Account" onclick="calculate(event)"/>
                    </div>
                    
                    
                    <h6 id="output3" className='text-center my-3'>{info}</h6>
                </form>
             </div>
         
       
     );
}
 
export default CreateAccount;