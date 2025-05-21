import React from "react";
function Confirmation ({courier,onConfirm,onGoBack})
{
    return(
        <>
        <div className="confirmationDetails">
            <h2>Confirm Your Booking....</h2>
            <p id="p1">Courier Partner: ' {courier.name} ' </p>
            <p>Estimated Delivery: {courier.estimatedDeliveryDay} days </p>
            <p>Shipping Rate: ₹{courier.shippingRate} </p>
            <button id="btn1" onClick={onConfirm}>Confirm Booking</button>
            <button id="btn2" onClick={onGoBack}>Go Back</button>
        </div>
        </>
    );
}

export default Confirmation ;