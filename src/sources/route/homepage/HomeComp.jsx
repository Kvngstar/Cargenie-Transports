import React, { useState} from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Whychoose from "../../../component/whychoose";
import Super from "../../assets/carbi2.jpg";
import cities from "../../assets/cities.jpg";

const HomeComponent = () => {
  const [textReload, setTextReload] = useState(true);

  function OnloadContent() {
    if (textReload !== true) {
      setTextReload(true);
    }
  }
  function OffloadContent() {
    if (textReload !== false) {
      setTextReload(false);
    }
  }
 
  return (
    <div>
    
      <div className="first-section">
      
        <div className="overlay1"></div>
        <div className="body1 container pt-5">
          <div
            className="p-4 text-light rounded shadow-lg"
            style={{ maxWidth: "500px", backgroundColor: "#213f26dc" }}
          >
            <div className="d-flex ralewaysemibold h-25 justify-content-between align-items-center flex-direction-column">
              <div onClick={OnloadContent} className="hoverEffect">
                <div className="d-flex align-items-center flex-column">
                  <span class="material-symbols-outlined mr-2">paid</span>Invest
                </div>
              </div>

              <div onClick={OffloadContent} className="hoverEffect">
                <div className="d-flex align-items-center flex-column">
                  <span class="material-symbols-outlined">directions_car</span>
                  Ride
                </div>
              </div>
            </div>
            <hr />
            <div className="poppinsmeduim  mt-5">
              {textReload ? (
                <h1 >
                  Invest in the Company <br /> and get paid
                </h1>
              ) : (
                <h1>
                  {" "}
                  Take a ride to any
                  <br />
                  part of Lagos
                </h1>
              )}
              <p className="ralewaymeduim lightGreen-text">
                Utilise the platform with the largest networks of active users
              </p>
              <Link to="signup">
                <span className="btn btn-outline-light  rounded mt-4 btn-outline-success rounded  ">
                  {" "}
                  <span class="material-symbols-outlined mr-1">
                    open_in_new
                  </span>{" "}
                  <span>
                    {textReload
                      ? "Sign up to invest"
                      : "Sign up to book a ride"}
                  </span>
                </span>
              </Link>
              <p className="mt-3">Learn more about driving and delivering </p>
            </div>
          </div>
        </div>
        <div className="mt-5 poppinsemibold body1 py-5 px-5 background-image">
          <div className="h-50  container ">
            <h2>Cargenie For Business</h2>
            <p className="my-4">
              Transform the way your company moves and feeds its people
            </p>
            <button className="btn rounded btn-outline-light py-2 px-4">
              See how
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around align-items-center flex-wrap-reverse mx-auto py-5 greenerbackground text-light image-hover poppinsmeduim ">
        <div>
          <img
            src={Super}
            alt=""
           
          />
          <h6 className="mt-3 lightGreen-text fontsize14">
            Our commitment to your safety
          </h6>
          <p className="my-2">

            With every safety feature and every standard in our Community
            Guidelines, we're committed to helping to create a safe environment
            for our users.
          </p>
        </div> 
        <div>
          <img
            src={cities}
            alt=""
          />
          <h6 className="mt-3 lightGreen-text">Setting 10+ cities in motion</h6>
          <p className="my-2">
            Our transportation company is available in 10 cities in Nigeria, so
            you can request a ride even when you're far from home.
          </p>
        </div>
      </div>
      <div className="d-flex poppinsmeduim flex-row flex-wrap-reverse justify-content-center pb-5 align-items-center greenerbackground">
        <Link to="signup">
          {" "}
          <div className="px-3 py-2  btn m-3 btn-outline-success rounded d-flex align-items-center ">
            {" "}
            <span class="material-symbols-outlined mr-2">open_in_new</span> Sign
            up to provide cars
          </div>
        </Link>
        <Link to="signup">
          <div className="px-3 py-2 m-3 btn  btn-outline-warning rounded d-flex align-items-center ">
            <span class="material-symbols-outlined mr-2">open_in_new</span>{" "}
            <span>Sign up to ride</span>{" "}
          </div>
        </Link>
        <div></div>
      </div>

      <Whychoose />
    </div>
  );
};

export default HomeComponent;
