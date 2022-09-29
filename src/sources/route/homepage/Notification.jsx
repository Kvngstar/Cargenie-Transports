import React, { useState, useEffect } from "react";
import $ from "jquery";

import "./homepage.css";
import Travelinput from "../../../component/travelinput";
import Footer from "../../../component/footer";
import Nav_ from "../../../component/nav1";
import Menuhalf from "../../../component/menuhalf";
import AdminMenuhalf from "../../../component/adminsidenav";
import bell from '../../assets/notification.png';
import NotifyBox from "../../../component/notifybox";

const Notification = () => {
  useEffect(() => {
    $("button.kk").on("click", function () {
      $("div.j").fadeToggle(500);
    });

    return () => {};
  }, []);

  return (
    <>
      <div>
        <Nav_ />
        <div className="d-flex w-100 secondp">
          <AdminMenuhalf />
          <div>
            <div className="px-2 mt-4">
                <h4>Notification Center</h4>
                <h6 className="pl-4 mt-3">Welcome, Kingsley</h6>
                <div className="container bg-primary mt-5 pb-2">
                    

                <div class="input-group ">
                <div class="input-group-prepend">
    <span class="input-group-text" id=""><img src={bell} alt="" /></span>
  </div>
 
  <input type="text" class="form-control" placeholder="Title"/>
  <textarea className="form-control w-50" placeholder="Message" name="" id="" cols="50" rows="1"/>
  <button type="submit d-inline" className="btn greenerbackground whitetext">Send</button>
</div>

<NotifyBox/>
<NotifyBox/>
<NotifyBox/>

                    </div>

                
   
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Notification;
