import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import config from "../../../config.json";
import auth from "../../../services/authService";
import jwt from "../../../services/userService";
import "react-toastify/dist/ReactToastify.css";

const GetUsers = () => {
  const [newArray, setArray] = useState([]);
  const [length, setLength] = useState([]);
  const [slicedArray, setSlicedArray] = useState([]);
  const [loading, setLoading] = useState(true);

  function Paginate(event) {
    const pageNum = event.target.innerHTML;
    let startNum = (pageNum - 1) * 10;
    setSlicedArray(newArray.slice(startNum, newArray.length).splice(0, 10));
  }

  useEffect(() => {
    async function GetUserDetail() {
      try {
        const response = await auth.get(config.apiUrl + "/admin/allusers", {
          "Content-type": "application/json; charset=UTF-8",
        });

        if (response.status >= 200 && response.status < 400) {
          setArray(response.data);
          setSlicedArray(() => {
            return response.data.slice(0, response.data.length).splice(0, 10);
          });

          setLength(() => {
            return [
              ...Array(Math.ceil(response.data.length / 10) + 1).keys(),
            ].slice(1);
          });
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

    GetUserDetail();
  }, []);

  return (
    <div className="px-2 mt-4">
      <h4 className="poppinsmeduim">
        {" "}
        <span class="material-symbols-outlined">admin_panel_settings</span>
        {jwt.getDetails().as}
      </h4>
      <p className="pl-4 mt-3  ralewaysemibold">
        Welcome, {jwt.getDetails().firstName}
      </p>
      <div className="my-5 ralewaymeduim">
        <h6 className="pl-3 poppinsmeduim">
          Users in DataBase ({newArray.length})
        </h6>
            <div className="p" style={{minHeight: "300px"}}  >

        {loading ? (
              <div className="preloadcont" >
                <div></div>
                <div className="middleelement"></div>
                <div></div>
              </div>
            ) :
        <div className="table-control-1 mt-5 ">
          <table className="table table-hover table-bordered ">
            <thead>
              <tr className="">
                <th>Fullname</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {slicedArray.map((v) => {
                return (
                  <tr>
                    <td>{v.firstName}</td>
                    <td>{v.email}</td>
                    <td>{v.phoneNum}</td>
                    <td>{v.date}</td>
                  </tr>
                );
              })}
            </tbody> 


          </table>
        </div>
              
                 }
      </div> 
        <nav aria-label="...">
          <ul class="pagination pagination-sm mt-3 mt-2">
            {length.map((v) => {
              return (
                <li class="page-item" onClick={Paginate}>
                  <a class="page-link">{v}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default GetUsers;
