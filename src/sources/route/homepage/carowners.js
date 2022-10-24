import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../services/authService";
import jwt from "../../../services/userService";
import link from "../../../sources/assets/linkage.png";
import "./homepage.css";

const CarOwners = () => {
  var [length, setLength] = useState([]);
  const [count, setCount] = useState(0);
  const [newArray, setNewArray] = useState([]);
  const [slicedArray, setSlicedArray] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    model: "",
    _id: "",
  });

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

  function handleState(event) {
    const { name, value } = event.target;
    setFormData((v) => {
      return { ...v, [name]: value };
    });
  }
  
  async function SendData(event) {
    event.preventDefault();
    try {
      const response = await auth.post(
        "http://localhost:3001/admin/carlisting",
        formData,
        {
          "Content-type": "application/json; charset=UTF-8",
        }
      );

      if (response.status >= 200 && response.status < 400) {
        toast.success(response.data);
        window.location.reload();
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
    async function GetUserDetail() {
      try {
        const response = await auth.get(
          "http://localhost:3001/admin/carowners",
          {
            "Content-type": "application/json; charset=UTF-8",
          }
        );

        if (response.status >= 200 && response.status < 400) {
          setNewArray(response.data);
          setSlicedArray(() => {
            return response.data.slice(0, response.data.length).splice(0, 3);
          });
          setLength(() => {
            return [
              ...Array(Math.ceil(response.data.length / 3) + 1).keys(),
            ].slice(1);
          });
          setCount(response.data.length);

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
      <ToastContainer />
      <h5 className="poppinsmeduim">Admin</h5>
      <h6 className="pl-4 mt-3 ralewaysemibold">
        Welcome, {jwt.getDetails().firstName}
      </h6>

      <div className="my-5 ralewaymeduim">
        <h6 className="pl-3 mb-5 poppinsmeduim">Car owner`s List</h6>

        <div className="table-control-1 mt-3 ">
          <table className="table table-sm ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Fullname</th>
                <th>email</th>
                <th>phone no.</th>

                <th>Specification</th>
              </tr>
            </thead>

            <tbody>
              {slicedArray.map((v) => {
                return (
                  <tr>
                    <td>{v._id} </td>
                    <td>{v.date} </td>
                    <td>
                      {v.firstName} {v.lastName}
                    </td>
                    <td>{v.email}</td>
                    <td className="">{v.phoneNum}</td>
                    <td>
                      {v.car.map((w) => {
                        return (
                          <ul>
                            {" "}
                            <li>{w.name}</li> <li>{w.type}</li>{" "}
                            <li>{w.model}</li>
                            <li>{w.date}</li>
                          </ul>
                        );
                      })}{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <nav aria-label="..." className="mt-3">
          <ul class="pagination pagination-sm">
            {length.map((v) => {
              return (
                <li class="page-item" onClick={Paginate}>
                  <a class="page-link">{v}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="text-center bg-light">{activePage}</div>
      </div>

      <form
        style={{ maxWidth: "600px" }}
        className="mx-auto mb-5 lightback py-4 px-4 rounded"
      >
        <h6>
          <img src={link} style={{ height: "18px", width: "auto" }} alt="" />{" "}
          Attach Car to Owner
        </h6>
        <input
          placeholder="_id"
          type=""
          className="form-control mt-4 mb-3"
          name="_id"
          value={formData._id}
          onChange={handleState}
        />
        <input
          placeholder="name"
          type="text"
          className="form-control mb-3"
          name="name"
          value={formData.name}
          onChange={handleState}
          id=""
        />

        <input
          type="text"
          className="form-control mb-3"
          name="type"
          value={formData.type}
          onChange={handleState}
          id=""
          placeholder="type"
        />

        <select
          className="custom-select"
          onChange={handleState}
          name="model"
          value={formData.model}
          id=""
        >
          <option>choose model</option>
          <option value="bus">Bus</option>
          <option value="sienna">Sienna</option>
          <option value="exquisite">Exquisite</option>
          <option value="truck">Truck</option>
        </select>
        <div className="input-group-append d-flex justify-content-center align-items-center mt-2">
          <button onClick={SendData} className="btn btn-success">
            update
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarOwners;
