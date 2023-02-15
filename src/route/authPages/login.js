import React, { useState } from "react";
import { toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";
import jwt_decode from "jwt-decode";
import auth from "../../services/authService";
import jwt from "../../services/userService";
import config from "../../config.json";

const Loginform = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    as: "customer",
  });
  const [click,setClick] = useState(false)

  function handleState(event) {
    const { name, value } = event.target;

    setUser((values) => {
      return { ...values, [name]: value };
    });
  }
  async function submitButton(event) {
     
    setClick(true)
    event.preventDefault();
    try {
      const response = await auth.post(config.apiUrl + "/gen/login", user, {
        "Content-type": "application/json; charset=UTF-8",
      });

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
        setClick(false)
        return toast.error(error.response.data);
      }
      
      setClick(false)
      return toast.error(error.message);
    }
  }
  return (
    <div class="form ralewaymeduim login-h">
      <form
        className="form__  mx-2  second-section-child whitetext"
        action="
        "
      >
        <h1 className="mt-3 text-center">Login</h1>
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

        {/* <div class="input-group mt-4">
          <div className="input-group-prepend">
            <div className="input-group-text bg-transparent whitetext">As</div>
          </div>

          <select
            class="form-control whitetext bg-transparent"
            name="as"
            value={user.as}
            onChange={handleState}
            autoComplete
          >
            <option value=""></option>
            <option value="customer" className="text-dark">
              customer
            </option>
            <option value="carowner" className="text-dark">
              car-owner
            </option>
            <option value="admin" className="text-dark">
              admin
            </option>
          </select>
        </div>
        */}
        <div className="mx-auto w-100 mt-4 mb-4 rounded">
        {(click === false)?  <button
            type="submit"
            className="btn btn-outline-light mx-auto w-100"
            value="sign in"
            onClick={submitButton}
            autoComplete
            id='submit'
          >sign-in</button>:  <button
          className="btn  mx-auto w-100"
          disabled
        >
        
        <Player
                autoplay
                loop
                src="https://lottie.host/42dc5709-db75-43e2-89b9-7e7d87d256fa/O5R1VPRMsb.json"
                style={{ height: '100px', width: '100px' }}
             
              >
              </Player></button>}
         
         
        </div>
      </form>
    </div>
  );
};

export default Loginform;
