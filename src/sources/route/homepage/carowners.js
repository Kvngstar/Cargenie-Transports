import React, { useState, useEffect } from "react";
import auth from "../../../services/authService";
import jwt from "../../../services/userService";





const CarOwners = () => {
  const [user, setUser] = useState(jwt.getDetails());
  const [error, setError] = useState("");
  
  var [length, setLength] = useState([]);
  const [count, setCount] = useState(0);
  const [read, setRead] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [slicedArray, setSlicedArray] = useState([]);
  const [activePage, setActivePage] = useState(1);

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
          setCount(response.data.length)

          return;
        } else {
          console.log(response);
        }
      } catch (err) {
        console.log(err);
        setError(err.response.data);
      }
    }
    GetUserDetail();
  }, []);

  return (
    <div className="px-2 mt-4">
      <h5  className="poppinsmeduim">Admin</h5>
      <h6 className="pl-4 mt-3 ralewaysemibold">Welcome,  {jwt.getDetails().firstName}</h6>

      <div className="my-5 ralewaymeduim">
        <h6 className="pl-3 mb-5 poppinsmeduim">Car owner`s List</h6>
{/* 
        <div className="d-flexxx">
          <form
            action="
                    "
            className="d-flexx"
          >
            <div className="input-group-prepend">
                  <div className="input-group-text bg-transparent">
                    Sort By Date
                  </div>
            </div>
            <select className="custom-select input mt-2 mx-2 p-2" type="text">
              <option value="">Car Status</option>
              <option value="">Active</option>
              <option value="">Inactive</option>
              <option value="">workshop</option>
            </select>
          </form>
        </div> */}

        <div className="table-control-1 mt-3 ">
          <table className="table table-sm ">
            <thead>
              <tr>
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
                    <td>{v.date} </td>
                    <td>
                      {v.firstName} {v.lastName}
                    </td>
                    <td>{v.email}</td>
                    <td className="">
                      {v.phoneNum}
                    </td>
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
    </div>
  );
};

export default CarOwners;
