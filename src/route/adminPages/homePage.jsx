import React from "react";
import $ from "jquery";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import {Player} from "@lottiefiles/react-lottie-player"
import Footer from "../../component/footer";
import Nav__ from "../../component/nav";
import TextBox from "../../chatBox/textBox";
import Image from "../../sources/assets/facebook.png";
import textdata from "../../chatBox/jsontext";
import auth from "../../services/authService";
import config from "../../config.json";
import axios from "axios";
export default function Hompage() {
  const [showIcon, setShowIcon] = useState(true);
  const [text, setText] = useState("");
  useEffect(() => {
    $(function () {
      $("div.hidd").on("click", function () {
        $("div.div1").toggleClass("hamburgerdiv1");
        $("div.div2").toggleClass("hamburgerdiv2");
        $("div.div3").toggleClass("hamburgerdiv3");
        $("div.hideclick").slideToggle(500);
      });
    });
  }, []);
  function toggleChatBox() {
    $("div .chatBox").fadeToggle("3");
    setShowIcon(false);
  }
  function toggleIcon() {
    $("div  .chatBox").fadeToggle("3");
    setShowIcon(true);
  }
  function getInput(event) {
    const { name, value } = event.target;
    setText(value);
  }
  async function submitText(event) {
    event.preventDefault();

    if (!text.trim() || text.trim() == "") {
      return;
    } else {
      try {
        const response = await auth.post(
          config.apiUrl + "/customer/chats",
          { text },
          {
            "Content-type": "application/json; charset=UTF-8",
          }
        );
        if (response.status === 200) {
          setText("");
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
  }

  return (
    <>
      <div className="wrapper" id="wrapper">
        <div className="messageUs rounded">
          <div className="chatBox  bg-light">
            <div className="chatBox_header">
              <div>
                
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_au4zdsr8.json"
                style={{ height: '60px', width: '60px' }}
             
              >
              </Player>

              </div>{" "}
              <div className="ml-2">
                <div>
                  <b>Talk to Us</b>
                </div>
                <div>
                  <small>Questions? we are here to help</small>{" "}
                </div>{" "}
              </div>
            </div>
            <div className="scrollable ">
              {textdata.map((v,index) => {
                return (
                  <div className="textContainer" key={index}>
                    {v.status === "customer" ? (
                      <div className="customer_textbox">
                        <div className="d-flex mb-4">
                          <img
                            src={Image}
                            className="mr-2"
                            style={{ height: "20px" }}
                          />
                          <div> {v.message}</div>
                        </div>

                        <span className="chat_date">
                          {" "}
                          <span className="admin_label mr-1">me</span>
                        </span>
                      </div>
                    ) : (
                      <div className="admin_textbox ">
                        <div className="d-flex mb-4">
                          <span className="material-symbols-outlined mr-2">person</span>
                          <div> {v.message}</div>
                        </div>
                        <span className="chat_date">
                          {" "}
                          <span className="admin_label mr-1">admin</span>
                          {v.Time}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}{" "}
            </div>
            <div className="input-group flex-right">
              <input
                className="form-control"
                placeholder="Enter your message"
                id="textbox"
                onChange={getInput}
                value={text}
                name="text"
              />

              <div className="input-group-append">
                <button className="btn btn-info rounded" >
                  send
                </button>
              </div>
            </div>
          </div>
          <div className="flex-left">
            {showIcon ? (
              <span className="" onClick={toggleChatBox}>

                <Player
                autoplay
                loop
                src="https://lottie.host/3c4bb819-7826-426e-be2f-a66f4f117c21/YmP0fLbMmk.json"
                style={{ height: '50px', width: '50px' }}
             
              >
              </Player>
              </span>
             
            ) : (
              <span className="closebox mr-2 mt-2" onClick={toggleIcon}>
             <i class="uil uil-times-circle"></i>
              </span>
            )}
          </div>
        </div>

        <div className="hideclick">
          <div className="aaa lightGreen">
            <div className="mx-2">
              <Link to="login">
                <button className="btn btn-sm d-flex align-items-center">
                  {" "}
                  <span class="material-symbols-outlined mr-1">login</span>{" "}
                  <span>Login</span>{" "}
                </button>
              </Link>
            </div>
            <div className="mx-2">
              <Link to="signup">
                <button className="btn btn-sm  mx-auto d-flex align-items-center">
                  {" "}
                  <span class="material-symbols-outlined mr-1">
                    app_registration
                  </span>
                  <span>Sign Up</span>{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
     
        <Nav__ />
        <Outlet />

      

      

     <Footer />
      </div>
     
    </>
  );
}
