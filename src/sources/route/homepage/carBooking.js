import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import auth from "../../../services/authService";
import jwt from "../../../services/userService";
import config from "../../../config.json";
import "react-toastify/dist/ReactToastify.css";
import "./homepage.css";

const CarBooking = () => {
  const [newArray, setArray] = useState([]);
  const [count, setCount] = useState("");
  const [length, setLength] = useState([]);
  const [searchCount, setSearchCount] = useState("");
  const [slicedArray, setSlicedArray] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [ticket, setTicket] = useState([]);
  const [recieved, setRecieved] = useState([]);
  const [OrderState, setOrderState] = useState({
    processing: 0,
    completed: 0,
    failed: 0,
  });
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  async function searchId(event) {
    const { name, value } = event.target;
    setSearchInput(value);
    if (!value.trim() || value.trim() == "") {
      return;
    } else {
      try {
        const response = await auth.post(
          config.apiUrl + "/admin/getUserByBookID",
          { id: value },
          {
            "Content-type": "application/json; charset=UTF-8",
          }
        );

        if (response.status >= 200 && response.status < 400) {
          if (response.data[0].length == 1) {
            setTicket(response.data[0]);
          } else {
            setTicket([]);
          }
          setSearchCount(response.data[1]);
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
  }
  function displayInfo() {
    if (ticket.length < 1 || ticket == []) {
    } else {
      if (Array.isArray(ticket)) {
        setRecieved(ticket);
      }
    }
  }

  function Paginate(event) {
    const pageNum = event.target.innerHTML;

    length.forEach((v) => {
      if (v == pageNum) {
        setActivePage(v);
      }
    });
    let startNum = (pageNum - 1) * 10;

    setSlicedArray(newArray.slice(startNum, newArray.length).splice(0, 10));
  }
  useEffect(() => {
    async function GetUserDetail() {
      try {
        const response = await auth.get(config.apiUrl + "/admin/travelview", {
          "Content-type": "application/json; charset=UTF-8",
        });

        if (response.status >= 200 && response.status < 400) {
          setArray(response.data[0]);
          setCount(response.data[1]);
          setSlicedArray(() => {
            return response.data[0]
              .slice(0, response.data[0].length)
              .splice(0, 10);
          });

          setLength(() => {
            return [
              ...Array(Math.ceil(response.data[0].length / 10) + 1).keys(),
            ].slice(1);
          });
          let completed = 0;
          let failed = 0;
          let processing = 0;
          for (let i = 0; i < response.data[0].length; i++) {
            const readData = response.data[0][i][2];

            switch (readData) {
              case "processing":
                processing++;

                break;

              case "completed":
                completed++;

                break;

              case "failed":
                failed++;

                break;

              default:
                break;
            }
          }

          setOrderState(() => {
            return {
              processing: processing,
              failed: failed,
              completed: completed,
            };
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
    GetUserDetail();
  }, []);

  function handleOnclick(event) {
    Paginate(event);
  }
  return (
    <>
      <div className="px-2 mt-4">
        <h5 className="poppinsmeduim ">
          <span class="material-symbols-outlined">admin_panel_settings</span>
          {jwt.getDetails().as}
        </h5>
        <p className="pl-4 mt-3 ralewaysemibold greentext">
          Welcome, {jwt.getDetails().firstName}
        </p>

        <div className="my-5 ralewaymeduim">
          <h6 className="pl-3 poppinsmeduim">Booking Directory ( {count} )</h6>
          <div className="pl-3">
            <br />
            <div>Completed - {OrderState.completed}</div>
            <br />
            <div>failed - {OrderState.failed}</div>
            <br />
            <div>Processing - {OrderState.processing}</div>
          </div>
          <br />
          <br />
          <div className="d-flex justify-content-center">
            <div className="input-group d-flex" style={{ width: "300px" }}>
              {searchCount > 0 && !search ? (
                <span className="btn btn-sm btn-primary rounded input-group-prepend">
                  {searchCount}
                </span>
              ) : (
                <span></span>
              )}

              <input
                type=""
                name="id"
                placeholder="Search Booking Id"
                onChange={searchId}
                id="button"
                value={search.id}
                className="form-control d-block"
              />
              <button
                className="input-group-append btn btn-info"
                onClick={displayInfo}
              >
                <span class="material-symbols-outlined">
                  quick_reference_all
                </span>
              </button>
            </div>
          </div>

          <br />

          <div className="p">
            {loading ? (
              <div className="preloadcont">
                <div></div>
                <div className="middleelement"></div>
                <div></div>{" "}
              </div>
            ) : (
              recieved[0] && (
                <div>
                  <div className="">
                    {recieved[0][0].Travel.map((travel) => {
                      if (travel.bookingId == searchInput) {
                        return (
                          <div className="d-flex-box">
                            {" "}
                            <div>{travel.bookingId}</div>{" "}
                            <div>{travel.status}</div>{" "}
                            <div>
                              {recieved[0][0].firstName}{" "}
                              {recieved[0][0].lastName}
                            </div>{" "}
                            <div>{travel.bookDate}</div>
                          </div>
                        );
                      }
                      return;
                    })}
                  </div>
                </div>
              )
            )}
         

          <div className="table-control-1 mt-5 ">
            <table className="table  table-hover table-bordered">
              <div>{search.id}</div>
              <thead>
                <tr className="">
                  <th>BookDate</th>
                  <th>Booking Id</th>
                  <th>status</th>
                </tr>
              </thead>

              <tbody>
                {slicedArray.map((w) => {
                  return (
                    <tr>
                      <td> {w[0]}</td> <td>{w[1]}</td>{" "}
                      <td>
                        {w[2] == "failed" && (
                          <span className="btn-sm btn-danger">{w[2]}</span>
                        )}
                        {w[2] == "processing" && (
                          <span className="btn-sm btn-warning">{w[2]}</span>
                        )}
                        {w[2] == "completed" && (
                          <span className="btn-sm btn-success">{w[2]}</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <nav aria-label="...">
            <ul class="pagination pagination-sm mt-3 ">
              {length.map((v) => {
                return (
                  <li class="page-item lightback" onClick={handleOnclick}>
                    <a class="page-link">{v}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="text-center bg-light mb-3">page - {activePage}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarBooking;
