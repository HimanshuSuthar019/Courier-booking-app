import React, { useState } from "react";

function CourierCard({courier, onBookNow}){

    
    return (
        <>
        <div className="courierCard" >
            <img src={courier.logo} alt={`${courier.name} Logo`} height='100' />
            <h3>{courier.name}</h3>
            <p>Estimated Delivery: {courier.estimatedDeliveryDay} days </p>
            <p>Shipping Rate: ₹{courier.shippingRate} </p>
            <span><button
            value={courier}
            onClick={()=>onBookNow(courier)}>Book Now</button></span>
        </div>
        </>
    );
}

export default CourierCard ;