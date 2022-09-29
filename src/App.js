import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import CarBooking from './sources/route/homepage/carBooking';
import CarListing from './sources/route/homepage/carlist';
import CarOwners from './sources/route/homepage/carowners';
import Customers from './sources/route/homepage/customer';
import Hompage from './sources/route/homepage/homepage';
import BookingProccessing from './sources/route/homepage/BookingProcessing';
import Notification from './sources/route/homepage/Notification';

function App() {
  return (
    <div className="App">

      <Routes>
      <Route path='/processing' element={<BookingProccessing/>}  />
      <Route path='/carbooking' element={<CarBooking/>}  />
      <Route path='/carlisting' element={<CarListing/>}  />
      <Route path='/carowner' element={<CarOwners/>}  />
      <Route path='/customer' element={<Customers/>}  />
      <Route path='/Notification' element={ <Notification/>}  />
      <Route path="/" element={<Hompage/>}  />
      
      </Routes>
      
     
      



   
    
    

    
    
    </div>
  );
}

export default App;
