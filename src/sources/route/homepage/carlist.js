import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import config from '../../../config.json'
import auth from "../../../services/authService";
import jwt from "../../../services/userService";
import calendar from "../../assets/Calendar_Days.png";
import CanvasJSReact from "../../../component/canvasjs.react";
import "react-toastify/dist/ReactToastify.css";
import "./homepage.css";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CarListing = () => {
  const [formData, setFormData] = useState({
    name: "",
    newitem: "",
  });
  const [loading, setLoading] = useState(true);
  const [car, setCar] = useState({});
  var [calcateTotal, setCalculateTotal] = useState("");
  async function getCarData() {
    try {
      const response = await auth.get(
        config.apiUrl + "/gen/availablecars",
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
        setCar(response.data);

        setCalculateTotal(
          parseInt(response.data.bus) +
            parseInt(response.data.sienna) +
            parseInt(response.data.truck) +
            parseInt(response.data.exquisite)
        );
        setLoading(false);
        return;
      }
    } catch (err) {
      if (err.response.status >= 400 && err.response.status < 500) {
        return toast.error(err.response.data);
      }

      return toast.error(err.message);
    }
  }
  useEffect(() => {
    
    getCarData();
  }, []);

  function handleState(event) {
    const { name, value } = event.target;

    setFormData((v) => {
      return { ...v, [name]: value };
    });
  }
  async function CreateDB(event) {
    event.preventDefault();
    try {
      const response = await auth.post(
        config.apiUrl + "/admin/availablecar", 
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
        toast.success("Successful");
        getCarData();
        
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
  async function SendData(event) {
    event.preventDefault();
    try {
      const response = await auth.post(
       config.apiUrl +   "/admin/updatecar",
        formData,
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
        toast.success(response.data);
        getCarData();
        formData.name = "";
        formData.newitem = "";
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

  const options = {
    animationEnabled: true,
    title: {
      text: "",
    },
    data: [
      {
        type: "doughnut",
        dataPoints: [
          { label: "Bus", y: car.bus },
          { label: "Sienna", y: car.sienna },
          { label: "Exquisite", y: car.exquisite },
          { label: "Waybill", y: car.truck },
        ],
      },
    ],
  };

  return (
    <div className="px-2 mt-4">
      <h5 className="poppinsmeduim">{(jwt.getDetails().as==="admin")?<span class="material-symbols-outlined">admin_panel_settings {jwt.getDetails().as}</span>: jwt.getDetails().as}</h5>
      <h6 className="pl-4 mt-3 ralewaysemibold ">
        Welcome, {jwt.getDetails().firstName}
      </h6>
     
        <h6 className="pl-3 poppinsmeduim">Cars Available ({calcateTotal})</h6>
       
<div className="p" style={{minHeight: "300px"}}  >

        {loading ? (
              <div className="preloadcont" >
                <div></div>
                <div className="middleelement"></div>
                <div></div>
              </div>
            ) :
      <div className="mt-5 ralewaymeduim">

        <div style={{ width: "100%" }} className="d-flexx fit-size">
     
          <div style={{ width: "100%" }} className="d-flexxx py-2 ">
          
            <div
              style={{ width: "300px" }}
              className=" m d-flex mx-2 flex-column mt-5 rounded  lightback"
            >
              

              {jwt.getDetails().as === "admin" && (
                <div className="my-3 py-2 ">
                  <form>
                    <div class="input-group ">
                      <div className="input-group-prepend w-25 px-1">
                        <input
                          type="Number"
                          className="form-control"
                          name="newitem"
                          value={formData.newitem}
                          onChange={handleState}
                          id=""
                          min="0"
                          placeholder="0"
                        />
                      </div>
                      <select
                        className="custom-select"
                        onChange={handleState}
                        name="name"
                        value={formData.name}
                        id=""
                      >
                        <option>choose</option>
                        <option value="bus">Bus</option>
                        <option value="sienna">Sienna</option>
                        <option value="exquisite">Exquisite</option>
                        <option value="truck">Truck</option>
                      </select>
                      <div className="input-group-append">
                        <button onClick={SendData} className="btn btn-success">
                          update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              <div>
                <img src={calendar} className="py-2 mr-2" alt="" />
                <span>Bus ( {car.bus} )</span>
              </div>
              <div>
                <img src={calendar} className="py-2 mr-2" alt="" />
                <span>Sienna ( {car.sienna} )</span>
              </div>
              <div>
                <img src={calendar} className="py-2 mr-2" alt="" />
                <span>Exquisite ( {car.exquisite} )</span>
              </div>
              <div>
                <img src={calendar} className="py-2 mr-2" alt="" />
                <span>Truck ( {car.truck} )</span>
              </div>
            </div>
            <div
              style={{ width: "300px", borderRadius: "20%" }}
              className="d-flexx mx-2 mt-5 lightback"
              >
              <CanvasJSChart options={options} />
          </div>
                </div>
            
        </div>







              </div>
              }
      </div>
    
      {jwt.getDetails().as === "admin" && (
        <div className="pl-3 mt-5 mb-2">
          No Car Management Database?{" "}
          <button
            onClick={CreateDB}
            className=" ml-1 btn btn-sm btn-outline-primary"
          >
            Create{" "}
          </button>
        </div>
        
      )}
    </div>
  );
};
// {
//   position: "top-left",
//   autoClose: 3000,
//   hideProgressBar: true,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: false,
//   progress: 0.3,
//   theme: "colored",
//   }

export default CarListing;
