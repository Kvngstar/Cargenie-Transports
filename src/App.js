import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense,lazy } from "react";
import 'aos/dist/aos.css'; 
import AOS from "aos";
import jwt from "./services/userService"; 
import Loading from "./loading/loading";
import "../src/style.css"
import { ToastContainer} from 'react-toastify';
import NotFound from "./sources/route/adminPages/notfound";
const CarBooking = lazy(()=>  import("./sources/route/adminPages/carbooking"))
const CarListing = lazy(()=>  import("./sources/route/adminPages/carlist"))
const CarOwners = lazy(()=>  import("./sources/route/adminPages/carowners"))
const Customers = lazy(()=>  import("./sources/route/adminPages/customer"))
const Hompage = lazy(()=>  import("./sources/route/adminPages/homePage"))
const BookingProccessing = lazy(()=>  import("./sources/route/adminPages/bookingProcessing"))
const Notification = lazy(()=>  import("./sources/route/adminPages/Notification"))
const GetUsers = lazy(()=>  import("./sources/route/adminPages/getUsers"))
const Admin = lazy(()=>  import("./sources/route/adminPages/adminSection"))
const CustomerBook = lazy(()=>  import("./sources/route/customerPages/customerBook"))
const Loginform = lazy(()=>  import("./sources/route/authPages/login"))
const HomeComponent = lazy(()=>  import("./sources/route/adminPages/homeComponent"))
const CarOwnerRoute = lazy(()=>  import("./sources/route/customerPages/ownersRoute"))
const CreateAccount = lazy(()=>  import("./sources/route/authPages/createAccount"))

function App() {
 
AOS.init({mirror: true})
  return (
    <Suspense className="App" fallback={<Loading/>} >
      <ToastContainer/>
      
      <Routes>
        <Route
          path="/customer"
          element={
            jwt.getDetails().as === "customer" ? (
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
            jwt.getDetails().as === "carowner" ? (
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
            jwt.getDetails().as === "admin" ? <Admin /> : <Navigate replace to="/signup" />
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
                <Navigate replace to="/admin" />
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
                <Navigate replace to="/admin" />
              ) : (
                <CreateAccount />
              )
            }
          />
          
        <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;
