import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import jwt_decode from "jwt-decode";
import auth from "../../../services/authService";
import jwt from "../../../services/userService";
import 'react-toastify/dist/ReactToastify.css';
const Loginform = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    as: "",
  });
  
  function handleState(event) {
    const { name, value } = event.target;

    setUser((values) => {
      return { ...values, [name]: value };
    });
  }
  async function submitButton(event) {
    event.preventDefault();
    try {
      const response = await auth.post(
        "http://localhost:3001/gen/login",
        user,
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status == 200) {
        if (!jwt.getjwt()) {
          jwt.savejwt(response.headers["x-auth"]);
        }

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
       
        return toast.error(error.response.data);
      }
      
      return toast.error(error.message);
    }
  }
  return (
    <div class="form ralewaymeduim">
      <ToastContainer/>
      <form
        className="form__  mx-2"
        action="
        "
      >
        <h1 className="mt-3">Login</h1>
        <div>
          <input
            type="text"
            id="fn"
            name="email"
            value={user.email}
            onChange={handleState}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <input
            type="password"
            id="ln"
            name="password"
            value={user.password}
            onChange={handleState}
            placeholder="Enter Your password"
          />
        </div>

        <div class="input-group mt-4">
          <div className="input-group-prepend">
            <div className="input-group-text bg-transparent">As</div>
          </div>

          <select
            class="form-control"
            name="as"
            value={user.as}
            onChange={handleState}
            autoComplete
          >
            <option value=""></option>
            <option value="customer">customer</option>
            <option value="carowner">car-owner</option>
            <option value="admin">admin</option>
          </select>
        </div>
        {/* <div class="form-check mt-2">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked/>
                    keep me signed-in</label>
                </div> */}
        <div className="mx-auto w-100 mt-4 mb-4 rounded">
          <input
            type="submit"
            className="btn btn-success mx-auto w-100"
            value="sign in"
            onClick={submitButton}
            autoComplete
          />
        </div>
      </form>
    </div>
  );
};

export default Loginform;
