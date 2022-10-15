import React, { useState, useEffect } from "react";
import location from "../sources/assets/location.png";
import auth from "../services/authService";
import jwt from "../services/userService";
const Travelinput = () => {
  const [data, setData] = useState({
    pickupLocation: "",
    to: "",
    pickupDate: "",
    time: "",
    price: "4000",
    cartype: "",
  });
  const [message, setMessage] = useState("");

  async function handleButton(event) {
    event.preventDefault();

    if (!jwt.getjwt()) {
      return setMessage("User must be logged in");
    }

    try {
      const response = await auth.post(
        "http://localhost:3001/customer/travels",
        data,
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );
      setMessage(response.data);

      const url = window.location.href;
      window.location.reload(url);
    } catch (err) {
      setMessage(err.response.data);
    }
  }

  function HandleInput(event) {
    const { name, value } = event.target;

    setData((values) => {
      return { ...values, [name]: value };
    });
  }

  return (
    <form>
      <div className="py-3 text-center px-2 second-section-child d-flex flex-wrap rounded mb-5 g">
        <div>
          <div>Pickup Location</div>
          <div>
            <div className="input-group input1 flex-nowrap">
              <div className="input-group-prepend">
                <span
                  className="input-group-text bg-transparent"
                  id="addon-wrapping"
                >
                  <img src={location} />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Ajah, Lagos"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                name="pickupLocation"
                value={data.pickupLocation}
                onChange={HandleInput}
              />
            </div>
          </div>
        </div>
        <div>
          <div>to</div>
          <div>
            <div className="input-group input1 flex-nowrap">
              <div className="input-group-prepend ">
                <span
                  className="input-group-text bg-transparent"
                  id="addon-wrapping"
                >
                  <img src={location} />{" "}
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Airport, Ikeja"
                name="to"
                value={data.to}
                onChange={HandleInput}
              />
            </div>
          </div>
        </div>
        <div>
          <div>Pickup Date</div>
          <div>
            <div className="input-group input1 flex-nowrap">
              <input
                type="date"
                className="form-control"
                placeholder="22/9/2022"
                name="pickupDate"
                onChange={HandleInput}
                value={data.pickupDate}
              />
            </div>
          </div>
        </div>
        <div>
          <div>Time</div>
          <div>
            <div className="input-group input1 flex-nowrap">
              <input
                type="time"
                className="form-control"
                placeholder="30/9/2022"
                name="time"
                onChange={HandleInput}
                value={data.time}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="input-group d-flex flex-wrap justify-content-center align-items-center">
        <div className="input-group-prepend w-50">
          <input
            className="mt-2 p-2 form-control bg-transparent "
            name=""
            value={data.price}
            onChange={HandleInput}
            type="text"
            placeholder=" Price: N4000"
            disabled
          />
        </div>
        <select
          className="custom-select mt-2 p-2"
          name="cartype"
          value={data.cartype}
          onChange={HandleInput}
          type="text"
          placeholder="Car type"
        >
          <option value="">Choose a car</option>
          <option value="exquisite">Exquisite</option>
          <option value="sienna">Sienna</option>
          <option value="bus">18 Seaters Bus</option>
        </select>
        <div className="input-group-append">
          <input
            type="submit"
            onClick={handleButton}
            className="btn btn-success mt-2"
            value="Book"
          />
        </div>
      </div>
      {jwt.getjwt()
        ? message && <div className="mt-3 text-center">{message}</div>
        : message && (
            <div className="mt-3  alert alert-danger text-center">
              {message}
            </div>
          )}
    </form>
  );
};

export default Travelinput;
