import React, { useState } from "react";
import { toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";
import config from "../config.json";
import auth from "../services/authService";
import jwt from "../services/userService";
import "react-toastify/dist/ReactToastify.css";
const Travelinput = (props) => {
  const [data, setData] = useState({
    pickupLocation: "",
    to: "",
    pickupDate: "",
    time: "",
    price: "4000",
    carType: "",
  });
  const [click, setClick] = useState(false);
  const [note, setNote] = useState("");
  const [errornote, setErrorNote] = useState("");

  async function handleButton(event) {
    event.preventDefault();
    setClick(true);

    if (!jwt.getjwt()) {
      setClick(false);
      return toast.error("User must be logged in");
    }

    try {
      const response = await auth.post(
        config.apiUrl + "/customer/travels",
        data,
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );
      setNote("Success!");
      setTimeout(() => {
        setNote("");
      }, 3000);

      const url = window.location.href;
      props.reload();
      setClick(false);
      // window.location.href("")
      // window.location.replace("https://sandbox-flw-web-v3.herokuapp.com/pay/5ihhkgzv5dxo")
    } catch (err) {
      if (err.response.status >= 400 && err.response.status < 500) {
        setClick(false);
        setErrorNote(err.response.data);
        setTimeout(() => {
          setErrorNote("");
        }, 3000);

        return;
      }

      setClick(false);
      setErrorNote(err.message);
      setTimeout(() => {
        setErrorNote("");
      }, 3000);
      return;
    }
  }

  function HandleInput(event) {
    const { name, value } = event.target;

    setData((values) => {
      return { ...values, [name]: value };
    });
  }
  let startDate;
  let endDate;
  function GETDATE() {
    startDate = new Date().toISOString().slice(0, 10);
    let generateDay = new Date().getDate() + 7;

    let generateMonth = new Date().getMonth() + 1;
    if (new Date().getDate() >= 23) {
      if (new Date().getDate() >= 23 || new Date().getDate() <= 31) {
        generateMonth += 1;
        generateDay = 10;
      }
    }
    if (generateMonth < 10) {
      generateMonth = `0${generateMonth}`;
    }
    let generateYear = new Date().getFullYear();
    endDate = `${generateYear}-${generateMonth}-${generateDay}`;
  }
  GETDATE();

  return (
    <form className="mt-5 form-guide">
      <div
        className={`py-1 mx-1 ${props.textcolor} text-center px-2 ${props.checkShadow} d-flex flex-wrap  rounded mb-5 g ralewaysemibold`}
      >
        <div>
          <select
            className="custom-select mt-2 p-2 form-control"
            name="pickupLocation"
            value={data.pickupLocation}
            onChange={HandleInput}
            type="text"
          >
            <option value="">From</option>
            <option value="Sangotedo, Ajah">Sangotedo, Ajah</option>
            <option value="Lekki 1">Lekki 1</option>
            <option value="Lekki 2">Lekki 2</option>
            <option value="Victoria Island">Victoria Island</option>
            <option value="main-Land">main-Land</option>
          </select>
        </div>

        <div>
          <div>
            <select
              className="custom-select mt-2 p-2 form-control"
              name="to"
              value={data.to}
              onChange={HandleInput}
              type="text"
              placeholder="Car type"
            >
              <option value="">To</option>
              <option value="Sangotedo, Ajah">Sangotedo, Ajah</option>
              <option value="Lekki 1">Lekki 1</option>
              <option value="Lekki 2">Lekki 2</option>
              <option value="Victoria Island">Victoria Island</option>
              <option value="main-Land">main-Land</option>
            </select>
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
                min={startDate}
                max={endDate}
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

        <div className="input-group-prepend  bg-transparent">
          <input
            className="mt-2 p-2 form-control"
            name=""
            type="text"
            placeholder=" Price: N4000"
            disabled
          />
        </div>
        <div>
          <select
            className="custom-select mt-2 p-2 form-control"
            name="carType"
            value={data.carType}
            onChange={HandleInput}
            type="text"
            placeholder="Car type"
          >
            <option value="">Choose a car</option>
            <option value="exquisite">Exquisite</option>
            <option value="sienna">Sienna</option>
            <option value="bus">18 Seaters Bus</option>
          </select>
        </div>

        <div className="">
          {click == false ? (
            <input
              type="submit"
              onClick={handleButton}
              className="btn mt-2 bg-info text-light"
              style={{ fontWeight: "600" }}
              value="Book"
            />
          ) : (
            <span>
              <Player
                autoplay
                loop
                src="https://lottie.host/42dc5709-db75-43e2-89b9-7e7d87d256fa/O5R1VPRMsb.json"
                style={{ height: "70px", width: "100px" }}
              ></Player>
            </span>
          )}
        </div>
        <div className="text-left fontsize12 text-danger poppinsmeduim p-1 my-3" >Note:
        <b className="fontsize12 text-dark poppinsmeduim p-1 my-3">Making more than 5 unpaid booking will get your account restricted</b> 
        </div>

        {errornote != "" && (
          <div className="fontsize12 text-center text-danger poppinsmeduim p-1 mt-3">
            {errornote}
          </div>
        )}
        {note != "" && (
          <div className="fontsize12 text-center text-success poppinsmeduim p-1 mt-3">
            {note}
          </div>
        )}
      </div>
    </form>
  );
};

export default Travelinput;
