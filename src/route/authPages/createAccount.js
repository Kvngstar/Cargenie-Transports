import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { Player } from "@lottiefiles/react-lottie-player";
import _, { set } from "lodash";
import jwt_decode from "jwt-decode";
import jwt from "../../services/userService";
import auth from "../../services/authService";
import config from '../../config.json'
const CreateAccount = () => {
  var [formData, setFormData] = useState({ 
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
    password: "",
    confirmPassword: "",
    as: "",
    terms: "",
  });
  const [click,setClick] =useState(false)

  function handleState(event) {
    const { name, value, checked, type } = event.target;
    setFormData((values) => {
      return type !== "checkbox"
        ? { ...values, [name]: value }
        : { ...values, [name]: checked };
    });
  }

  async function submitButton(event) {
    event.preventDefault();
    setClick(true)

    if (!formData.password || !formData.confirmPassword) {
      setClick(false)
      return toast.error("password does not match with confirm password");
    } else if (formData.password !== formData.confirmPassword) {
      setClick(false)
      return toast.error("password does not match with confirm password");
    } else if (!formData.terms) {
      setClick(false)
      return toast.error("Accept the terms and condition");
    } else 
      try {
        const response = await auth.post( config.apiUrl +
          "/gen/createaccount",
          _.pick(formData, [
            "firstName",
            "lastName",
            "phoneNum",
            "email",
            "password",
            "as",
          ]),
          {
            "Content-type": "application/json; charset=UTF-8",
          }
        );

        if (response.status == 200) {
          jwt.savejwt(response.headers["x-auth"]);
          const { as } = jwt_decode(response.headers["x-auth"]);

          toast.success("Successful");

          switch (as) {
            case "customer":
              window.location.replace("/customer");

              break;
            case "carowner":
              window.location.replace("/carowners");
              break;
            case "admin":
              window.location.replace("/admin");
              break;

            default:
              window.location.replace("/");
              break;
          }
        }
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          setClick(false)
          return toast.error(error.response.data);
        }
        setClick(false)
        return toast.error(error.message);
      }
    }
  
  return (
    <div className="form ralewaymeduim">
      <form
        className="form__  mx-2 pb-3 mb-4 second-section-child whitetext"
        action="
                "
      >
        <h3 className="mt-3">Create Account</h3>
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleState}
            id="fn"
            placeholder="firstname"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleState}
            id="ln"
            placeholder="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            name="phoneNum"
            value={formData.phoneNum}
            onChange={handleState}
            id="phonenum"
            placeholder="phone number"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleState}
            placeholder=" email"
          />
        </div>
        <div>
          <input
            type="password"
            id=""
            name="password"
            value={formData.password}
            onChange={handleState}
            placeholder=" password"
          />
        </div>
        <div>
          <input
            type="password"
            id=""
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleState}
            placeholder="Confirm password"
          />
        </div>

        <div class="input-group mt-4">
          <div className="input-group-prepend">
            <div className="input-group-text bg-transparent whitetext">As</div>
          </div>

          <select
            className="form-control whitetext bg-transparent"
            value={formData.as}
            onChange={handleState}
            name="as"
            id=""
          >
            <option value=""></option>
            <option value="customer" className="text-dark">customer</option>
            <option value="carowner"  className="text-dark" >car-owner</option>
            <option value="admin"  className="text-dark">admin</option>
          </select>
        </div>
        <div class="form-check mt-2">
          <label class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              value={formData.terms}
              onChange={handleState}
              name="terms"
              id=""
            />
            Agree to terms and condition
          </label>
        </div>
        <div className="mx-auto w-100 mt-4">
        {(click === false)?  <button
            type="submit"
            id=""
            onClick={submitButton}
            className="btn btn-outline-light mx-auto w-100"
            value="Create Account"
            onclick="calculate(event)"
          >create</button>: <button
          className="btn btn-outline-light mx-auto w-100"
           
        >
        <Player
                autoplay
                loop
                src="https://lottie.host/42dc5709-db75-43e2-89b9-7e7d87d256fa/O5R1VPRMsb.json"
                style={{ height: '100px', width: '100px' }}
             
              >
              </Player></button>
        }
         
         
         
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
