import React from "react";
import $ from "jquery";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../../component/footer";
import Nav__ from "../../../component/nav";
import TextBox from "../../../chatBox/textBox";
import textdata from "../../../chatBox/jsontext";
export default function Hompage() {
  const [showIcon, setShowIcon] = useState(true);
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
  // function ChatPlatform() {
  //   $("div .toggleChatBox").fadeToggle("fast");
  //   $("div .messageUs").fadeToggle("fast");
  // }
  function toggleChatBox() {
    $("div .chatBox").fadeToggle("3");
    setShowIcon(false);
  }
  function toggleIcon() {
    $("div  .chatBox").fadeToggle("3");
    setShowIcon(true);
  }
  function bold() {
    let text = document.getElementById("textbox").value;
    let bold = document.createElement("b");
    alert(text.pa);
  }
  function italic() {}
  function underline() {}
  return (
    <>
      <div className="wrapper" id="wrapper">
        <div className="messageUs rounded">
          <div className="chatBox bg-light">
            <div className="chatBox_header">
              <div>
                <span class="material-symbols-outlined chatIcon">
                  contact_support
                </span>
              </div>{" "}
              <div className="ml-2"><div><b>Talk to Us</b></div><div><small>Questions? we are here to help</small> </div> </div>
            </div>
            <div className="scrollable">
              {textdata.map((v) => {
                return (
                  <div className="textContainer">
                   {(v.status === "customer")? <div className="customer_textbox"><span className="chat_date"> <span className="admin_label mr-1">me</span></span> {v.message}</div>: <div className="admin_textbox ">{v.message} <span className="chat_date"> <span className="admin_label mr-1">admin</span>{v.Time}</span></div>}
                  </div>
                );
              })}{" "}
            </div>
            <div className="input-group flex-right">
              <input className="form-control" placeholder="Enter your message" id="textbox" />

              <div className="input-group-append">
                <button className="btn btn-info rounded">send</button>
              </div>
            </div>
          </div>
          <div className="flex-left">
            {showIcon ? (
              <span
                class="material-symbols-outlined chatIcon"
                onClick={toggleChatBox}
              >
                contact_support
              </span>
            ) : (
              <span
                className="closebox btn-sm btn-danger"
                onClick={toggleIcon}
              >
                X
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
      {/* }     */}
    </>
  );
}
