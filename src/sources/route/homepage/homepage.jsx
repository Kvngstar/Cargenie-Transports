import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./homepage.css";
import logo from "../../assets/CarGenie-Logo.png";
import topdesign from "../../assets/topcar1.png";
import location from "../../assets/location.png"
import speed from "../../assets/icon_speed.png"
import manylocation from "../../assets/a.png"
import protection from "../../assets/Vector.png"
import message from "../../assets/message.png"


export default function Hompage() {
  return (
    <>
      <div className="container-fluid wrapper">

   

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> <div className="logo">
              <img src={logo} alt="" />
            </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#features"> <button className="btn btn-dark">Login</button></Nav.Link>
            <Nav.Link href="#pricing"><button className="btn btn-light mx-2">Sign Up</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <div className="first-section">

          <div className=" d-flex justify-content-between flex-direction-row py-3 px-2">
           
            <div>
             
              
            </div>
          </div>
          <div className="body1 d-flex justify-content-between mt-3 align-items-center">
            <div className="mx-auto">

            <div className="text-white mx-auto  b p-4">
              <h2>
                FAST AND EASY WAY TO RENT <br /> YOUR CAR
              </h2>

              <div className="d-block d-flex justify-content-center mt-4 align-items-center d">
                <span className="lightGreen rounded  w-75">
                <button className="btn btn-light w-100">
                  Rent Your Car
                </button>
                </span>
              </div>
            </div>
{/*  */}

<div className="second-section x mt-5">
            <h2 className="mb-3 text-center whitetext">OR <br /> <br /> Book a Ride </h2>
          <div className="py-3 text-center px-2 second-section-child d-flex flex-wrap rounded mb-5 g">
            <div>
              <div>Pickup Location</div>
              <div>
                <div class="input-group input1 flex-nowrap">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping">
                    <img src={location} /> 
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ajah, Lagos"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>Return Location</div>
              <div>
                <div className="input-group input1 flex-nowrap">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping">
                      <img src={location} />                   </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Airport, Ikeja"
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
                  />
                </div>
              </div>
            </div>
            <div>
              <div>Return Date</div>
              <div>
                <div className="input-group input1 flex-nowrap">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="30/9/2022"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

            </div>
         
            <div className="tohideclass">

            <img className="a" src={topdesign} alt="" />
            </div>
          </div>
        </div>
      
        <div className="third-section container-fluid d-flex justify-content-center align-items-center my-auto pb-5">
         <div>
         <h2 className="text-center whitetext mb-5">Why Choose Cargenie?</h2>
            <div className="d-flex flex-wrap  justify-content-around e whitetext">
                <div>
                    <img src={speed} alt="" />
                    <div>Fast and Easy a Book</div>
                </div>
                <div>
                    <img src={manylocation} alt="" />
                    <div>Many Pickup location</div>
                </div>
                <div>
                    <img src={protection} alt="" />
                    <div> Satisfied Customer</div>
                </div>
            </div>

         </div>
           
        </div>
        <div className="fourth-section container">
            <div className="mt-5 whitetext d-flex justify-content-center align-items-center flex-column text-center">

            <h3>Subscribe to Our NewsLetter</h3>
            <p>Subcribe to our Newsletter to get the latest update and Promtional offer</p>
            </div>
            <div className="p-3 w-100 mx-auto f greenerbackground">
            <div class="input-group">
            <div class="input-group-prepend">
    <span class="input-group-text"><img src={message} alt="" /></span>
  </div>
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
  </div>
</div>

            </div>

            <div  className="whitetext mt-5 text-center">
            <p>Cargenie is popular in Nigeria for their quality service. <br /> We make a great rental experience by providing superior and satisfying services</p>

            </div>
         
            

           





        </div>
        <footer  className="container-fluid text-center whitetext py-3 greenerbackground">
            @ 2022 Cargenie All Right Reserved
                </footer>
      </div>
    </>
  );
}
