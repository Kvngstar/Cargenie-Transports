import React, { useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import config from '../config.json'
import auth from "../services/authService";
import jwt from "../services/userService";
import "react-toastify/dist/ReactToastify.css";
import location from "../sources/assets/location.png";
const Travelinput = (props) => {
  const [data, setData] = useState({
    pickupLocation: "",
    to: "",
    pickupDate: "",
    time: "",
    price: "4000",
    cartype: "",
  });

  async function handleButton(event) {
    event.preventDefault();

    if (!jwt.getjwt()) {
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
      toast.success(response.data);

      const url = window.location.href;
      window.location.reload(url);
    } catch (err) {
      if (err.response.status >= 400 && err.response.status < 500) {
        return toast.error(err.response.data);
      }

      return toast.error(err.message);
    }
    
  }

  function HandleInput(event) {
    const { name, value } = event.target;

    setData((values) => {
      return { ...values, [name]: value };
    });
  }

  return ( 
    <form className="mt-5  form-guide ">
      <ToastContainer/>
      <div className={`py-1 mx-1 ${props.textcolor} text-center px-2 ${props.checkShadow} d-flex flex-wrap  rounded mb-5 g ralewaysemibold `}> 
        <div>
          <div>Pickup Location</div>
          <div>
            <div className="input-group input1 flex-nowrap">
              <div className="input-group-prepend"> 
                <span
                  className="input-group-text bg-light"
                  id="addon-wrapping"
                >
                  <img alt="location icon" src={location} />
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
              <div className="input-group-prepend bg-transparent ">
                <span
                  className="input-group-text bg-light "
                  id="addon-wrapping"
                >
                  <img src={location} alt="location icon" />{" "}
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

        </div>
       
        <div className="">
          <input
            type="submit"
            onClick={handleButton} 
            className="btn bg-warning mt-2 font-weight-700"
            value="Book"
           
          />
        </div>
      
       

        
      </div>
    </form>
  );
};

export default Travelinput;
