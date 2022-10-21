import React from "react";
import { useEffect, useState } from "react";
import _ from "lodash";
import jwt_decode from "jwt-decode";
import jwt from "../../../services/userService";
import auth from "../../../services/authService";
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

  function handleState(event) {
    const { name, value, checked, type } = event.target;
    setFormData((values) => {
      return type !== "checkbox"
        ? { ...values, [name]: value }
        : { ...values, [name]: checked };
    });
  }

  const [info, setInfo] = useState("");
  const [user, setUser] = useState({});
  async function submitButton(event) {
    event.preventDefault();

    if (!formData.password || !formData.confirmPassword) {
      return setInfo("password does not match with confirm password");
    } else if (formData.password !== formData.confirmPassword) {
      return setInfo("password does not match with confirm password");
    } else if (!formData.terms) {
      setInfo("");
      return setInfo("Accept the terms and condition");
    } else {
      setInfo("");
      try {
        const response = await auth.post(
          "http://localhost:3001/gen/createaccount",
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

          setInfo("Successful");

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
          console.log(error);
          return setInfo(error.response.data);
        }
        console.log(error, "outside");
        return setInfo(error.message);
      }
    }
  }
  return (
    <div className="form">
      <form
        className="form__  mx-2"
        action="
                "
      >
        <h1 className="mt-3">Sign Up</h1>
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleState}
            id="fn"
            placeholder="Enter your firstname"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleState}
            id="ln"
            placeholder="Enter your lastname"
          />
        </div>
        <div>
          <input
            type="text"
            name="phoneNum"
            value={formData.phoneNum}
            onChange={handleState}
            id="phonenum"
            placeholder="Enter your phone number e.g 08152984105"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleState}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <input
            type="password"
            id=""
            name="password"
            value={formData.password}
            onChange={handleState}
            placeholder="Enter Your password"
          />
        </div>
        <div>
          <input
            type="password"
            id=""
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleState}
            placeholder="Confirm Your password"
          />
        </div>

        <div class="input-group mt-4">
          <div className="input-group-prepend">
            <div className="input-group-text bg-transparent">As</div>
          </div>

          <select
            class="form-control"
            value={formData.as}
            onChange={handleState}
            name="as"
            id=""
          >
            <option value=""></option>
            <option value="customer">customer</option>
            <option value="carowner">Car Owner</option>
            <option value="admin">Admin</option>
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
        <div className="mx-auto w-100 bg-success mt-4">
          <input
            type="submit"
            id=""
            onClick={submitButton}
            className="btn btn-primary mx-auto w-100"
            value="Create Account"
            onclick="calculate(event)"
          />
        </div>

        <h6 id="output3" className="text-center my-3">
          {info}
        </h6>
      </form>
    </div>
  );
};

export default CreateAccount;
