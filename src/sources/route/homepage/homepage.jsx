import React from "react";
import $ from "jquery";
import { useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../../component/footer";
import Nav__ from "../../../component/nav";
import "./homepage.css";
export default function Hompage() {
  
  useEffect(() => {
    $(function () {
      $("div.hidd").on("click", function () {
        $("div.div1").toggleClass("hamburgerdiv1");
        $("div.div2").toggleClass("hamburgerdiv2");
        $("div.div3").toggleClass("hamburgerdiv3");
        $("div.hideclick").slideToggle(500);
      });
    }
    ); 
  }, []);
  function ChatPlatform() {
    $("div .toggleChatBox").fadeToggle("fast");
    $("div .messageUs").fadeToggle("fast");
  }
  return (
    <>
      <div className="wrapper" id="wrapper">
      {/* <div className="" onClick={ChatPlatform}>
        <span class="material-symbols-outlined messageUs">contact_support</span>
        <div className="toggleChatBox">
          <h2>Hello</h2>
          <p>How can i help You?</p>
          <div className=""><input type="text" className="form-control"/></div>
        </div>
      </div> */}
      
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
