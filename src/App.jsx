import { useState } from 'react';
import Confirmation from './components/Confirmation';
import BookingForm from './components/BookingForm';
import CourierCard from './components/CourierCard';
import courierData from './data/courierPartner.json';
import Navigation from './components/Navigation';
import './App.css';



function App(){

  const [searchResults ,setSearchResults] = useState(null);
  const [selectedCourier, setSelectedCourier] = useState(null);
  const [bookingConfirmed, setBookingConfirmed]= useState(false);

  function handleOnSearch({pickupPin, deliveryPin}){
    console.log("Courier Pickup-PIN is:"+pickupPin + " and "+ " Delivery-PIN is:"+deliveryPin);
    if(pickupPin==''|| deliveryPin==''){
      setSearchResults(null);
    }
    else{
    setSearchResults(courierData);
    setSelectedCourier(null);
    setBookingConfirmed(null);
  }
  }

  function handleBookNow(courier){
    console.log("Viewing details of Courier partner:", courier.name);
    setSelectedCourier(courier);
    setBookingConfirmed(false);

  }

  function handleOnConfirmBooking(selectedCourier){
    setBookingConfirmed(true);
    console.log("Booking Confirmed with:", selectedCourier.name , "Courier Partner");
  }

  function handleOnGoBack(){
    setBookingConfirmed(false);
    setSelectedCourier(null);
    searchResults(null);

  }

  function onHandleHome ()
  {
    
    setSearchResults(null);
    setSelectedCourier(null);
    setBookingConfirmed(null);
  }

  

  return(
    <div className='app'>
    <header className='main-header'>
      <img className='logo' src="./public/images/parcel-logo.png" alt="logo" />
    <div className='heading'>
    <h1>Parcel</h1>
    <p>The Courier Service</p>
    </div>
        {/* <nav>
            <ul className='nev-list'>
                <span id='home' >Home</span>
                <span id='about' >About</span>
                <span id='services' >Services</span>
                <button onClick={handleOnClickOfContacts} id='contacts' >Contact</button>
                <span id='help' >Help</span>
            </ul>
        </nav> */}
        < Navigation handleHome={onHandleHome} />
    </header>

    
    {!searchResults &&(
      <div className='bookingForm'>
      <div className='sideTitle'>
        <div id='img-p'>
        <div> <p id='p1'>Ship</p>
        <p id='p2'>Your Courier</p>
        <p id='p3'>With</p>
        <p id='p4'>Parcel</p>
        </div>
        <span><img src="./public/images/shippingImg.png" alt="shipping image" /></span>
        </div>
      </div>
    <BookingForm className="bookingForm-main" onSearch={handleOnSearch} />
    </div>)}
      
    

    { searchResults && ! selectedCourier &&
    (
      <div className='courierList'>
        <h2>Available courier Partners are:</h2>
        {searchResults.map((courier)=>(
          <CourierCard
            key={courier.id}
            courier={courier}
            onBookNow={handleBookNow}
          />
        ))}
      </div>
    )
    }

    {searchResults && selectedCourier && ! bookingConfirmed&&(
      <div className='confirmation'>
        <Confirmation
        courier={selectedCourier}
        onConfirm={handleOnConfirmBooking}
        onGoBack={handleOnGoBack}
        />
      </div>
    )}


    {selectedCourier && bookingConfirmed&& (
      <div className='bookingConfirm'>
        <h2>Booking Confirmed!</h2>
        <p>Your Booking is confirmed with courier partner {selectedCourier.name} by</p>
        <h1>Parcel</h1>
        <p>Estimated Delivery: {selectedCourier.estimatedDeliveryDay} days.</p>
        <p>Total Cost: ₹{selectedCourier.shippingRate}.</p>
        <button onClick={handleOnGoBack}>Go Back to Search</button>
        

      </div>
    )}
    
    </div>

  )
}
export default App;
