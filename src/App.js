import { Navigate, Route, Routes } from "react-router-dom";
import CarBooking from "./sources/route/homepage/carBooking";
import CarListing from "./sources/route/homepage/carlist";
import CarOwners from "./sources/route/homepage/carowners";
import Customers from "./sources/route/homepage/customer";
import Hompage from "./sources/route/homepage/homepage";
import BookingProccessing from "./sources/route/homepage/BookingProcessing";
import Notification from "./sources/route/homepage/Notification";
import GetUsers from "./sources/route/homepage/getUsers";
import Admin from "./sources/route/homepage/Adminsection";
import CustomerBook from "./sources/route/homepage/customerBook";
import Loginform from "./sources/route/homepage/login";
import HomeComponent from "./sources/route/homepage/HomeComp";
import CarOwnerRoute from "./sources/route/homepage/ownersRoute";
import CreateAccount from "./sources/route/homepage/createAccount";
import jwt from "./services/userService"; 
import "./App.css";

function App() {
  const { id, as } = jwt.getDetails();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/customer"
          element={
            as === "customer" ? (
              <Customers />
            ) : (
              <Navigate replace to="/signup" />
            )
          }
        >
          <Route path="customerbook" element={<CustomerBook />} />
          <Route path="notification" element={<Notification />} />
          <Route path="carlisting" element={<CarListing />} />
          <Route index element={<CustomerBook />} />
          <Route path="*" element={<Navigate replace to="customerbook" />} />
        </Route>
        <Route
          path="/carowners"
          element={
            as === "carowner" ? (
              <Customers />
            ) : (
              <Navigate replace to="/signup" />
            )
          }
        >
          <Route index element={<CarOwnerRoute />} />
          <Route path="notification" element={<Notification />} />
          <Route path="carlisting" element={<CarListing />} />
          <Route path="owner" element={<CarOwnerRoute />} />
          <Route path="*" element={<Navigate replace to="owner" />} />
        </Route>

        <Route
          path="/admin"
          element={
            as === "admin" ? <Admin /> : <Navigate replace to="/signup" />
          }
        >
          <Route index element={<CarBooking />} />
          <Route path="carlisting" element={<CarListing />} />
          <Route path="processing" element={<BookingProccessing />} />
          <Route path="carowner" element={<CarOwners />} />
          <Route path="notification" element={<Notification />} />
          <Route path="users" element={<GetUsers />} />
          <Route path="carbooking" element={<CarBooking />} />
        </Route>
        <Route path="/" element={<Hompage />}>
          <Route index element={<HomeComponent />} />
          <Route path="Notification" element={<Notification />} />
          <Route
            path="login"
            element={
              jwt.getDetails().as == "customer" ? (
                <Navigate replace to="/customer" />
              ) : jwt.getDetails().as == "carowner" ? (
                <Navigate replace to="/carowners" />
              ) : jwt.getDetails().as == "admin" ? (
                <Navigate replace to="/carowners" />
              ) : (
                <Loginform />
              )
            }
          />
          <Route
            path="signup"
            element={
              jwt.getDetails().as == "customer" ? (
                <Navigate replace to="/customer" />
              ) : jwt.getDetails().as == "carowner" ? (
                <Navigate replace to="/carowners" />
              ) : jwt.getDetails().as == "admin" ? (
                <Navigate replace to="/carowners" />
              ) : (
                <CreateAccount />
              )
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
