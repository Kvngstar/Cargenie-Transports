import './App.css';
import CarBooking from './sources/route/homepage/carBooking';
import CarListing from './sources/route/homepage/carlist';
import CarOwners from './sources/route/homepage/carowners';
import Customers from './sources/route/homepage/customer';
import Hompage from './sources/route/homepage/homepage';
import BookingProccessing from './sources/route/homepage/BookingProcessing';

function App() {
  return (
    <div className="App">
    <BookingProccessing/>
    <CarBooking/>
    <CarListing/>
    <CarOwners/>
    <Customers/>
    <Hompage/>
    </div>
  );
}

export default App;
