import React, { useState } from "react";

import { star, clock, discount } from "../assets";

export default function Cart({ itemsName, itemsImg }) {
  const [counter, setCounter] = useState(0);

  const increaseItem = () => {
    setCounter(counter + 1);
  };

  const decreaseItem = () => {
    setCounter(counter > 0 ? counter - 1 : 0);
  };
  return (
    <>
      <div className="cart">
      <div className="cart-item-info">
        <img src={itemsImg} alt={itemsImg} />
        <div className="item-details">
          <h2>{itemsName}</h2>
          <p>Tasty and healthy foods</p>
          <div className="rating-time">
          <span><img src={star}/>4.2</span>
          <span><img src={clock} />30 mins</span>
          </div>
        </div>
      </div>
      <div className="cart-items-box">
        <div className="item">
          <span>{itemsName}</span>
          <div className="quantity">
            <button onClick={decreaseItem}>-</button>
            <span>{counter}</span>
            <button onClick={increaseItem}>+</button>
          </div>
        </div>
       
      </div>
      <div className="coupon-section">
        <input type="text" placeholder="Coupon Code" />
        <button>Apply</button>
        <a href="#"><img src={discount} /><b>View All Offers</b></a>
      </div>
      <div className="bill-details">
        <div className="bill-item">
          <span>Item Total</span>
          <span>₹ 180</span>
        </div>
        <div className="bill-item">
          <span>Offer Applied</span>
          <span>- ₹ 50</span>
        </div>
        <div className="bill-item">
          <span>Delivery Charges (4KM)</span>
          <span>₹ 50</span>
        </div>
        <div className="bill-item total">
          <span>To Pay</span>
          <span>₹ 180</span>
        </div>
      </div>
      <div className="delivery-address">
        <span>Deliver To</span>
        <p>Kuttipuram, Kerala 679571, India, Home Address</p>
        <button>Change</button>
      </div>
      <button className="continue-button">Continue</button>
    </div>
    </>
  );
}
