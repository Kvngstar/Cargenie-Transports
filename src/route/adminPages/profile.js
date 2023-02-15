import React, { useState } from "react";
import { toast } from "react-toastify";
import config from "../../config.json";
import auth from "../../services/authService";
import jwt from "../../services/userService";
import _ from "lodash";
import jwt_decode from "jwt-decode";
import AsyncLoading from "../../loading/asyncLoading";

export default function Profile() {
  var [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNum: "",
  });
const [password,setPassword]= useState({
    currentpswd:"",
    newpswd:"",
    confirmpswd: ""
})
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneNumError, setPhoneNumError] = useState("");
  const [passwordError,setPasswordError] = useState("")
  const [passwordNote,setPasswordNote]= useState("")
  const [successPasswordNote,setSuccessPasswordNote]= useState("")
  const [noteError,setNoteError]= useState("")
    const [note, setNote] = useState("");
  function handleState(event) {
    const { name, value } = event.target;
    setFormData((values) => {
      return { ...values, [name]: value.trim() }; 
    });
  }
  function passwordHandleState(event){
    const { name, value } = event.target;
    setPassword((values) => {
      return { ...values, [name]: value.trim() };
    });


  }

  async function submitButton(event) {
    event.preventDefault();
    setClick(true);
    setFirstNameError("");
    setLastNameError("");

    if (!formData.firstName || formData.firstName.length < 3) {
      setClick(false);

      setFirstNameError("First name should be greater than 3");
      return;
    } else if (!formData.lastName || formData.lastName.length < 3) {
      setClick(false);
      setFirstNameError("");
      setLastNameError("lastname should be creater than 3");
      return;
    } else if (!formData.phoneNum || formData.phoneNum.length != 11) {
      setLastNameError("");

      setPhoneNumError("Phone  number should be 8");
      setClick(false)
    } else {
      setPhoneNumError("");
      try {
        const response = await auth.post(
          config.apiUrl + "/gen/updateaccount",
          _.pick(formData, ["firstName", "lastName", "phoneNum"]),
          {
            "Content-type": "application/json; charset=UTF-8",
          }
        );

        if (response.status == 200) {
          setNote("Success! Changes are effected on next login");
          setTimeout(() => {
            setNote("");
          }, 3000);
          setFormData(()=>{return {firstName:"",lastName:"",phoneNum:""}})
          setClick(false)
        }
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          setNoteError(error.response.data)
          setClick(false);

          return ;
        }
        setNoteError(error.message)
        setClick(false);
        return ;
      }
    }
  }
 async function PswdSubmit(event){
   setClick2(true)
   event.preventDefault()
   setPasswordNote("")
   try{  if(!password.currentpswd || !password.newpswd || !password.confirmpswd){
    setClick2(false)
    
        setPasswordNote("all column is required")
        return

    }
    else if(
      password.currentpswd.length != 8 || password.newpswd.length != 8 || password.confirmpswd.length != 8){
      setClick2(false)
      setPasswordNote("value must be 8")
      return}
      else if (password.newpswd !== password.confirmpswd) {
      setClick2(false)
      
    setPasswordNote("password does not match with confirm password")

        return ;
      } else{
        setPasswordNote("")
        const response = await auth.post( config.apiUrl +
            "/gen/updatepassword",
            _.pick(password, [
              "currentpswd",
              "newpswd",
            
            ]),
            {
              "Content-type": "application/json; charset=UTF-8",
            }
          );
  
          if (response.status == 200) {
            setSuccessPasswordNote("Success! Changes are effected on next login");
            setTimeout(() => {
              setSuccessPasswordNote("");
            }, 3000);
            setPassword(()=>{return {currentpswd:"",newpswd:"",confirmpswd:""}})
            setClick2(false)
            return
          }  
}
      }
      catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          setPasswordNote(error.response.data)
          setClick2(false)
          return
        }
        setPasswordNote(error.message)
        setClick2(false)
        
        return
      }
  }
  return (
    <>
      <div className="container row mx-auto my-5  p-3">
        <div className="col-lg-6 col-sm-12  p-3">
          <span>Edit Profile</span>
          <div className="mx-auto border rounded mt-3 p-3">
            <div className="input-group-sm">
              <div>
                {" "}
                <small>Your FirstName</small>
              </div>
              <input
                type="text"
                name="firstName"
                onChange={handleState}
                value={formData.firstName}
                className="form-control"
              />
              {firstNameError != "" && (
                <div className="fontsize12 text-danger p-1 my-1">
                  {firstNameError}
                </div>
              )}
            </div>
            <div className="input-group-sm">
              <div>
                <small>Your lastName</small>
              </div>
              <input
                type="text"
                name="lastName"
                onChange={handleState}
                value={formData.lastName}
                className="form-control"
              />
              {lastNameError != "" && (
                <div className="fontsize12 text-danger p-1 my-1">
                  {lastNameError}
                </div>
              )}
            </div>
            <div className="input-group-sm">
              <div>
                <small>Phone Number</small>
              </div>
              <input
                type="text"
                name="phoneNum"
                onChange={handleState}
                value={formData.phoneNum}
                className="form-control"
              />
              {phoneNumError != "" && (
                <div className="fontsize12 text-danger p-1 my-1">
                  {phoneNumError}
                </div>
              )}
            </div>
            <div className="input-group-sm mt-4">
              {(click == false) ? <input
                type="submit"
                value="Update"
                className="form-control"
                onClick={submitButton}
              />: <AsyncLoading/>}
              {(note != "") && (
                <div className="fontsize12 text-center text-success poppinsmeduim p-1 mt-3">
                  {note}
                </div>
              )}
              {(noteError != "") && (
                <div className="fontsize12 text-center text-danger poppinsmeduim p-1 mt-3">
                  {noteError}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12  p-3">
          <span>Change Password</span>
          <div className="mx-auto border rounded mt-3 p-3">
            <div className="input-group-sm">
              <div>
                {" "}
                <small>current password</small>
              </div>
              <input type="text" name="currentpswd" value={password.currentpswd} onChange={passwordHandleState} className="form-control" />
            </div>
            <div className="input-group-sm">
              <div>
                <small>new password</small>
              </div>
              <input type="text" name="newpswd" value={password.newpswd}onChange={passwordHandleState}  className="form-control" />
            </div>
            <div className="input-group-sm">
              <div>
                <small>confirm new password</small>
              </div>
              <input type="text"name="confirmpswd" value={password.confirmpswd} onChange={passwordHandleState} className="form-control" />
            </div>
            <div className="input-group-sm mt-4">
             {(click2 == false)? <input type="submit" value="Change" onClick={PswdSubmit} className="form-control" />: <AsyncLoading/>
}            </div>
            {(passwordNote != "") && <div className="fontsize12 text-danger text-center poppinsmeduim p-1 my-1">{passwordNote}</div>}
            {(successPasswordNote != "") && <div className="fontsize12 text-success text-center poppinsmeduim p-1 my-1">{successPasswordNote}</div>}
          </div>
        </div>
       {/* <div className="mt-5">
          <div>Make a user an Admin</div>
          <div className="input-group p-3">
            <div className="input-group-prepend input-group-text">Search</div>
            <input type="text" className="form-control" />
          </div>
        </div> */}
      </div>
    </>
  );
}
