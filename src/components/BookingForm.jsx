import React, { useState } from 'react';

function BookingForm({ onSearch }) {
    const [pickupPin, setPickupPin] = useState('');
    const [deliveryPin, setDeliveryPin] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    onSearch({ pickupPin, deliveryPin });
};

return (
    <>
    <form onSubmit={handleSubmit} className='bookingForm-main'>
        <div className='bookingFormHeading'> <span id='span1'>Ship </span> <span id='span2'> personal courier</span></div>
        <div className='PinInputBox'>
            <div className='pickupBox'>
            <label htmlFor="pickupPin"></label>
            <input type="text" placeholder='Enter Pickup-Pin Code'
                id='pickupPin'
                value={pickupPin}
                onChange={(e)=>setPickupPin(e.target.value)}
                
                />
        </div>
        <div className='deliveryBox'>
            <label htmlFor="deliveryPin"></label>
            <input type="text" placeholder='Enter Delivery-Pin Code'
                id="deliveryPin"
                value={deliveryPin}
                onChange={(e)=>setDeliveryPin(e.target.value)}
                />
        </div>
        </div>
        <button id='searchBtn' type='submit'>Search Couriers</button>
    </form>
    </>
);
}

export default BookingForm;