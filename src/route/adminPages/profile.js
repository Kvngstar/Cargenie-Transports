import React, { useState } from "react";
import { toast } from "react-toastify";
import config from "../../config.json";
import auth from "../../services/authService";
import jwt from "../../services/userService";
import _ from "lodash";
import jwt_decode from "jwt-decode";

export default function Profile() {
  var [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNum: "",
  });
  const [click, setClick] = useState(false);

  function handleState(event) {
    const { name, value } = event.target;
    setFormData((values) => {
      return { ...values, [name]: value.trim() };
    });
    console.log(formData);
  }

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneNumError, setPhoneNumError] = useState("");

  async function submitButton(event) {
    event.preventDefault();
    setClick(true);

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
    } else
      try {
        setPhoneNumError("");
        const response = await auth.post(
          config.apiUrl + "/gen/updateaccount",
          _.pick(formData, ["firstName", "lastName", "phoneNum"]),
          {
            "Content-type": "application/json; charset=UTF-8",
          }
        );

        if (response.status == 200) {
          jwt.savejwt(response.headers["x-auth"]);

          toast.success("Successful");
        }
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          setClick(false);
          return toast.error(error.response.data);
        }
        setClick(false);
        return toast.error(error.message);
      }
  }
  return (
    <>
      <div className="container row mx-auto bg-light my-5  p-3">
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
              <div className="fontsize12 text-danger p-1 my-1">
                {firstNameError}
              </div>
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
              <div className="fontsize12 text-danger p-1 my-1">
                {lastNameError}
              </div>
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
              <div className="fontsize12 text-danger p-1 my-1">
                {phoneNumError}
              </div>
            </div>
            <div className="input-group-sm mt-4">
              <div></div>
              <input
                type="submit"
                value="Update"
                className="form-control"
                onClick={submitButton}
              />
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
              <input type="text" className="form-control" />
            </div>
            <div className="input-group-sm">
              <div>
                <small>new password</small>
              </div>
              <input type="text" className="form-control" />
            </div>
            <div className="input-group-sm">
              <div>
                <small>confirm neew password</small>
              </div>
              <input type="text" className="form-control" />
            </div>
            <div className="input-group-sm mt-4">
              <input type="submit" value="Change" className="form-control" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>Make a user an Admin</div>
          <div className="input-group p-3">
            <div className="input-group-prepend input-group-text">Search</div>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
    </>
  );
}
