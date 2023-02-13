import React, { useState, useEffect,useContext } from "react";
import $ from "jquery";
import { toast } from "react-toastify";
import config from "../../config.json";
import auth from "../../services/authService";
import jwt from "../../services/userService";
import NotifyBox from "../../component/notifybox";
import UserContext from "../../component/useContext";
import { Player } from "@lottiefiles/react-lottie-player";
const Notification = () => {
  const size = useContext(UserContext)
const [formData, setFormData] = useState({
  title: "",
    description: "",
  });
  const [newArray, setNewArray] = useState([]);
  var [length, setLength] = useState([]);
  const [count, setCount] = useState(0);
  const [slicedArray, setSlicedArray] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [customerNotification, setCustomerNotification] = useState([]);

  function Paginate(event) {
    const pageNum = event.target.innerHTML;
    length.forEach((v) => {
      if (v == pageNum) {
        setActivePage(v);
      }
    });
    let startNum = (pageNum - 1) * 3;

    setSlicedArray(newArray.slice(startNum, count).splice(0, 3));
  }
  async function getNotification() {
    try {
      const response = await auth.get(config.apiUrl + "/notification", {
        "Content-type": "application/json; charset=UTF-8",
      });

      if (response.status >= 200 && response.status < 400) {
        
        setCustomerNotification(response.data);

        return;
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
  async function personalisedNotification() {
    try {
      const response = await auth.get(
        config.apiUrl + "/notification/feedback",
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
       
        
        if(response.data.newNotification.length < 1 || response.data.newNotificatio == []){
        
          setCount(0);
          setLoading(false);
          
 
          setSlicedArray([]);
          return
 
        }
        size.call();
        setCount(response.data.newNotification.length);
        setSlicedArray(() => {
          return response.data.newNotification.reverse()
            .slice(0, response.data.newNotification.length)
            .splice(0, 3);
        });
        
setNewArray(response.data.newNotification);

        setLength(() => {
          return [  
            ...Array(
              Math.ceil(response.data.newNotification.length / 3) + 1
            ).keys(),
          ].slice(1);
        });
        setLoading(false);

        return; 
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
  useEffect(() => {
    getNotification();
    personalisedNotification();

  }, []);
  function handleState(event) {
    const { name, value } = event.target;

    setFormData((v) => {
      return { ...v, [name]: value };
    });
  }
  async function MarkAsRead(id) {
    try {
      const response = await auth.post(
        config.apiUrl + "/notification/markasread",
        { sent_id: id },
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
        personalisedNotification()
        return;
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
      
  async function Delete(id) {
    try {
      const response = await auth.post(
        config.apiUrl + "/notification/delete",
        { sent_id: id },
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
        personalisedNotification();
      
        return;
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

    if (formData.title.trim() == "" || formData.description.trim() == "") {
      return toast.error("No input should be empty");
    }
    try {
      const response = await auth.post(
        config.apiUrl +
          (document.getElementById("extendUser").checked
            ? "/notification"
            : "/notification/feedback"),
        formData,
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
       
        getNotification();
        personalisedNotification();
        formData.title = "";
        formData.description = "";
        return
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

  return (
    <div className="px-2 mt-4">
      <h4 className="poppinsmeduim fontsize14">
        {" "}
        Notification Center ({count}){" "}
      </h4>
      <h6 className="pl-4 mt-3 ralewaysemibold">
        Welcome, {jwt.getDetails().firstName}
      </h6>
      <div className="container mt-5 pb-2 ralewaymeduim">
        {jwt.getDetails().as == "admin" && (
          <div class="input-group lightback">
            <div class="input-group-prepend">
              <span class="input-group-text bg-transparent" id="">
                <span class="material-symbols-outlined">
                  notifications_active
                </span>
              </span>
            </div>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleState}
              class="form-control"
              placeholder="Title"
            />
            <div className="form-check my-auto mx-3">
              <input
                type="checkbox"
                id="extendUser"
                className="form-check-input"
              />
              <label className="form-check-label"><small className=" text-danger font-weight-bold">all users</small></label>
            </div>

            <textarea
              className="form-control w-50"
              value={formData.description}
              onChange={handleState}
              placeholder="Message"
              name="description"
              id=""
              cols="50"
              rows="1"
            />
            <button
              type="submit d-inline"
              onClick={SendData}
              className="btn btn-success input-group-append"
            >
              <span class="material-symbols-outlined">send</span>
            </button>
          </div>
        )}
  { (slicedArray.length >= 1) ?   <div className="p" style={{ minHeight: "300px" }}>
          {loading ? (
            <div className="preloadcont">
              <div></div>
              <div className="middleelement"></div>
              <div></div>
            </div>
          ) : (
            slicedArray.map((v) => {
              return (
                <NotifyBox
                  title={v.title}
                  seen={v.seen}
                  read={v.read.toString()}
                  date={v.date}
                  id={v._id}
                  MarkAsRead={MarkAsRead}
                  DeleteNote={Delete}
                  desc={v.description}
                />
              );
            })
          )}
        </div> : <h2 className="text-center text-warning mt-5 bold-100 py-3"><Player
                autoplay
                loop
                src="https://lottie.host/03da0ab5-1737-417c-b15d-f500adcec6dc/SNqWlpVajM.json"
                style={{ height: '300px', width: '300px' }}
             
              >
              </Player> </h2>}
      </div>

      <nav aria-label="..." className="mt-3 mb-3">
        <ul class="pagination pagination-sm">
          {length.map((v) => {
            return (
              <li class="page-item lightback" onClick={Paginate}>
                <a class="page-link">{v}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="text-center bg-light mb-1">page - {activePage}</div>
      <div className="pb-4 mt-4">
        <div className="text-left text-warning py-2 px-3 shadow-box2 ralewaysemibold border">Welcome Message</div>
        {customerNotification.map((v) => {
          return (
            <NotifyBox
              title={v.title}
              seen={v.seen}
              date={v.Date}
              desc={v.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Notification;
